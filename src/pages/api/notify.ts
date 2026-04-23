import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

interface LocationData {
	ip?: string;
	city?: string;
	region?: string;
	country_name?: string;
	country_code?: string;
	latitude?: number;
	longitude?: number;
	org?: string;
}

async function getLocation(ip: string): Promise<LocationData | null> {
	try {
		const cleanIp = ip.split(',')[0].trim();
		if (!cleanIp || cleanIp === '127.0.0.1' || cleanIp === '::1') {
			return { ip: cleanIp, city: 'Localhost', region: 'N/A', country_name: 'N/A' };
		}
		const res = await fetch(`https://ipapi.co/${cleanIp}/json/`, { cf: { cacheTtl: 3600 } } as any);
		if (!res.ok) return null;
		return await res.json();
	} catch {
		return null;
	}
}

function buildHtmlEmail(data: {
	time: string;
	page: string;
	ua: string;
	ip: string;
	location: LocationData | null;
}) {
	const loc = data.location;
	const locStr = loc
		? `${loc.city ?? 'Unknown'}, ${loc.region ?? 'Unknown'} — ${loc.country_name ?? 'Unknown'}`
		: 'Could not determine';
	const coords = loc?.latitude && loc?.longitude
		? `${loc.latitude}, ${loc.longitude}`
		: 'N/A';
	const isp = loc?.org ?? 'N/A';

	const mapLink = loc?.latitude && loc?.longitude
		? `https://www.google.com/maps?q=${loc.latitude},${loc.longitude}`
		: null;

	return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New Visitor Alert</title>
<style>
body { margin: 0; padding: 0; background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; -webkit-font-smoothing: antialiased; }
.wrapper { padding: 40px 16px; }
.container { max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.35); }
.header { background: #0f172a; padding: 40px 32px; text-align: center; position: relative; }
.header::after { content: ''; position: absolute; bottom: -1px; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #818cf8, #c084fc, #f472b6); }
.header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 0.3px; }
.header p { color: #94a3b8; margin: 10px 0 0; font-size: 14px; }
.animated-dot { display: inline-block; width: 8px; height: 8px; background: #34d399; border-radius: 50%; margin-right: 8px; vertical-align: middle; box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.7); animation: pulse 2s infinite; }
@keyframes pulse { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.7); } 70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(52, 211, 153, 0); } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); } }
.section-title { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #6366f1; margin: 28px 0 12px; padding: 0 28px; }
.body { padding: 8px 28px 28px; }
.card { background: #f8fafc; border-radius: 12px; padding: 20px 24px; margin-bottom: 12px; border: 1px solid #e2e8f0; }
.card:last-child { margin-bottom: 0; }
.row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px dashed #e2e8f0; }
.row:last-child { border-bottom: none; }
.label { color: #475569; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
.value { color: #0f172a; font-size: 13px; font-weight: 600; text-align: right; max-width: 260px; word-break: break-word; }
.location-card { background: linear-gradient(135deg, #eff6ff 0%, #fff1f2 100%); border: 1px solid #dbeafe; }
.location-row { display: flex; align-items: flex-start; gap: 12px; padding: 14px 0; border-bottom: 1px dashed #cbd5e1; }
.location-row:last-child { border-bottom: none; }
.icon { width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 16px; }
.icon-pin { background: #fef2f2; }
.icon-coords { background: #f0fdf4; }
.icon-isp { background: #fffbeb; }
.icon-page { background: #eff6ff; }
.icon-time { background: #f5f3ff; }
.icon-ip { background: #fff7ed; }
.icon-ua { background: #f0f9ff; }
.loc-label { color: #64748b; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
.loc-value { color: #0f172a; font-size: 13px; font-weight: 700; margin-top: 2px; }
.map-btn { display: inline-block; margin-top: 10px; padding: 6px 14px; background: #4f46e5; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 12px; font-weight: 600; }
.footer { background: #f8fafc; padding: 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
.footer strong { color: #475569; }
</style>
</head>
<body>
<div class="wrapper">
<div class="container">
<div class="header">
<h1><span class="animated-dot"></span>New Visitor Alert</h1>
<p>Someone just landed on <strong style="color:#e2e8f0;">MeanPug</strong></p>
</div>
<div class="section-title">Request Details</div>
<div class="body">
<div class="card">
<div class="location-row"><div class="icon icon-page">&#128279;</div><div><div class="loc-label">Page Visited</div><div class="loc-value">${data.page}</div></div></div>
<div class="location-row"><div class="icon icon-time">&#9200;</div><div><div class="loc-label">Timestamp</div><div class="loc-value">${data.time}</div></div></div>
<div class="location-row"><div class="icon icon-ip">&#127760;</div><div><div class="loc-label">IP Address</div><div class="loc-value">${data.ip}</div></div></div>
</div>
<div class="section-title">Geolocation</div>
<div class="card location-card">
<div class="location-row"><div class="icon icon-pin">&#128205;</div><div><div class="loc-label">Location</div><div class="loc-value">${locStr}</div>${mapLink ? `<a class="map-btn" href="${mapLink}" target="_blank">View on Map &rarr;</a>` : ''}</div></div>
<div class="location-row"><div class="icon icon-coords">&#127758;</div><div><div class="loc-label">Coordinates</div><div class="loc-value">${coords}</div></div></div>
<div class="location-row"><div class="icon icon-isp">&#127972;</div><div><div class="loc-label">ISP / Organization</div><div class="loc-value">${isp}</div></div></div>
</div>
<div class="section-title">Device Info</div>
<div class="card">
<div class="location-row"><div class="icon icon-ua">&#128187;</div><div><div class="loc-label">User Agent</div><div class="loc-value" style="font-size:11px;font-weight:500;word-break:break-word;">${data.ua}</div></div></div>
</div>
</div>
<div class="footer">
<p><strong>MeanPug</strong> Visitor Notification System</p>
<p style="margin-top:4px;">Sent automatically &middot; Once per week per user</p>
</div>
</div>
</div>
</body>
</html>`;
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
	const host = import.meta.env.SMTP_HOST;
	const port = Number(import.meta.env.SMTP_PORT || 587);
	const secure = import.meta.env.SMTP_SECURE === 'true';
	const user = import.meta.env.SMTP_USER;
	const pass = import.meta.env.SMTP_PASS;
	const from = import.meta.env.SMTP_FROM || user;

	if (!host || !user || !pass) {
		return new Response(
			JSON.stringify({ error: 'Missing SMTP configuration' }),
			{ status: 500, headers: { 'Content-Type': 'application/json' } }
		);
	}

	const ip = clientAddress ??
		(request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'Unknown');
	const ua = request.headers.get('user-agent') || 'Unknown';
	const referer = request.headers.get('referer') || 'Direct / Unknown';
	let page = '/';
	try {
		const body = await request.json();
		page = body.page || '/';
	} catch { /* empty body is fine */ }

	const location = await getLocation(ip);

	const timeStr = new Date().toLocaleString('en-US', {
		weekday: 'short',
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		timeZoneName: 'short',
	});

	const textBody =
		`New visitor on MeanPug\n\n` +
		`Page: ${page}\n` +
		`Time: ${timeStr}\n` +
		`IP: ${ip}\n` +
		`Location: ${location ? `${location.city}, ${location.region}, ${location.country_name}` : 'Unknown'}\n` +
		`ISP: ${location?.org || 'N/A'}\n` +
		`User-Agent: ${ua}\n` +
		`Referer: ${referer}`;

	try {
		const transporter = nodemailer.createTransport({
			host,
			port,
			secure,
			auth: { user, pass },
		});

		await transporter.sendMail({
			from,
			to: user,
			subject: 'New visitor on MeanPug website',
			text: textBody,
			html: buildHtmlEmail({ time: timeStr, page, ua, ip, location }),
		});

		return new Response(
			JSON.stringify({ success: true }),
			{ status: 200, headers: { 'Content-Type': 'application/json' } }
		);
	} catch (error: any) {
		console.error('Failed to send visitor notification:', error);
		return new Response(
			JSON.stringify({ error: 'Failed to send email', details: error.message }),
			{ status: 500, headers: { 'Content-Type': 'application/json' } }
		);
	}
};

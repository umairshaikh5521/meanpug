import { c as createComponent, $ as $$Image } from './_astro_assets_DXXWTnnN.mjs';
import 'piccolore';
import { c as createRenderInstruction, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as renderSlot, e as renderHead, f as addAttribute } from './entrypoint_LwZADX9S.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$NoticeModal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$NoticeModal;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<div id="mp-notice-modal" class="mp-modal-overlay" aria-hidden="true" data-astro-cid-ijsyrlcl> <div class="mp-modal" role="dialog" aria-modal="true" aria-labelledby="mp-modal-title" data-astro-cid-ijsyrlcl> <button class="mp-modal__close" aria-label="Close notice" data-astro-cid-ijsyrlcl>&times;</button> <!-- <div class="mp-modal__icon">
			<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#FFC800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</div> --> <h2 id="mp-modal-title" class="mp-modal__title" data-astro-cid-ijsyrlcl>Concept Rebuild</h2> <p class="mp-modal__body" data-astro-cid-ijsyrlcl>
This is an <strong data-astro-cid-ijsyrlcl>unofficial concept rebuild</strong> of the MeanPug website. I migrated the original WordPress design to <strong data-astro-cid-ijsyrlcl>Astro</strong> on my own initiative to demonstrate modern frontend skills — faster performance, clean architecture, and a component-driven workflow. Built as part of a job application to MeanPug.
</p> <div class="mp-modal__actions" data-astro-cid-ijsyrlcl> <button class="mp-modal__btn mp-modal__btn--primary" data-astro-cid-ijsyrlcl>Explore the concept</button> </div> </div> </div>  <script>
	(function () {
		var KEY = 'mp_wp_to_astros_notice_dismissed';
		if (localStorage.getItem(KEY)) return;

		var overlay = document.getElementById('mp-notice-modal');
		if (!overlay) return;

		function open() {
			overlay.setAttribute('aria-hidden', 'false');
			overlay.classList.add('is-open');
		}
		function close() {
			overlay.setAttribute('aria-hidden', 'true');
			overlay.classList.remove('is-open');
			localStorage.setItem(KEY, '1');
		}

		// Open after a short delay so the user sees the page first
		setTimeout(open, 900);

		overlay.querySelector('.mp-modal__close').addEventListener('click', close);
		overlay.querySelector('.mp-modal__btn--primary').addEventListener('click', close);
		overlay.addEventListener('click', function (e) {
			if (e.target === overlay) close();
		});
		document.addEventListener('keydown', function (e) {
			if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
		});
	})();
<\/script>`])), maybeRenderHead());
}, "D:/umair-work/side-projects/pitch-websites/mean-pug/src/components/NoticeModal.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "MeanPug | Award-Winning Digital Agency",
    description = "MeanPug is a full-service digital agencyfor Law Firms.",
    ogImage = "/og-image.png"
  } = Astro2.props;
  const siteBase = Astro2.site ?? Astro2.url;
  const pageUrl = new URL(Astro2.url.pathname, siteBase).toString();
  const ogImageUrl = new URL(ogImage, siteBase).toString();
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any"><link rel="apple-touch-icon" href="/assets/images/favicons/cropped-meanpug-300x300.png"><meta name="generator"', "><title>", '</title><meta name="description"', '><link rel="canonical"', '><meta property="og:type" content="website"><meta property="og:site_name" content="MeanPug"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="og:image:secure_url"', '><meta property="og:image:type" content="image/png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>', '</head> <body class="home wp-singular page-template-default page page-id-66 wp-custom-logo wp-theme-meanpug-theme-v2"> <div id="page" class="site"> ', ' </div> <script src="/assets/js/jquery.min.js"><\/script> <script src="/assets/js/jquery-migrate.min.js" defer><\/script> <script src="/assets/js/main.js" defer><\/script> ', " <script>\n			(function () {\n				const STORAGE_KEY = 'mp_last_visit_notify';\n				const ONE_WEEK = 7 * 24 * 60 * 60 * 1000;\n				const now = Date.now();\n				const last = localStorage.getItem(STORAGE_KEY);\n\n				if (!last || now - parseInt(last, 10) > ONE_WEEK) {\n					fetch('/api/notify', {\n						method: 'POST',\n						headers: { 'Content-Type': 'application/json' },\n						body: JSON.stringify({ page: window.location.pathname + window.location.search }),\n					})\n						.then(function (res) {\n							if (res.ok) localStorage.setItem(STORAGE_KEY, String(now));\n						})\n						.catch(function () {});\n				}\n			})();\n		<\/script> </body> </html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(pageUrl, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(pageUrl, "content"), addAttribute(ogImageUrl, "content"), addAttribute(ogImageUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImageUrl, "content"), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "NoticeModal", $$NoticeModal, {}));
}, "D:/umair-work/side-projects/pitch-websites/mean-pug/src/layouts/Layout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<nav class="sticky top-0 bg-yellow z-30 mp-top-nav"> <div class="container mx-auto flex justify-between items-center mp-mobile-bounds py-3 md:py-6 md:px-2 xl:px-0"> <div class="w-1/5 2xl:w-1/4"> <div class="w-32 md:w-64"> <a href="https://www.meanpug.com/" class="custom-logo-link" rel="home" aria-current="page"><img width="486" height="112" src="/assets/images/logos/MeanPug-Logo.png" class="custom-logo" alt="The MEANPUG logo features the word MEAN in bold dark blue letters, PUG in lighter blue, and a curved line and dot below, resembling a stylized dogs face." decoding="async" fetchpriority="high" srcset="assets/images/logos/MeanPug-Logo.png 486w, assets/images/logos/MeanPug-Logo-300x69.png 300w" sizes="(max-width: 486px) 100vw, 486px"></a> </div> </div> <div class="flex-grow flex items-center justify-end"> <div class="xl:flex-grow order-last xl:order-first pl-3 md:pl-8 xl:pl-0"> <img width="30" height="15" src="/assets/images/icons/ic-hamburger.svg" alt="Menu Icon" class="block xl:hidden mp-menu-toggle"> <div class="mp-header-menu-wrapper"> <div class="mpb-stack-nav"> <div class="mp-menu-container"> <ul id="menu-primary-nav" class="mp-header-menu"> <li id="menu-item-83" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-83"> <a href="https://www.meanpug.com/about-us/">About Us</a> <ul class="sub-menu"> <li id="menu-item-854" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-854"> <a href="https://www.meanpug.com/events-calendar/">Events Calendar</a> </li> <li id="menu-item-1399" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1399"> <a href="https://www.meanpug.com/what-our-clients-say/">Client Reviews</a> </li> </ul> </li> <li id="menu-item-79" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-79"> <a href="https://www.meanpug.com/what-we-offer/">What We Offer</a> <ul class="sub-menu"> <li id="menu-item-2059" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2059"> <a href="#">Law Firm Advertising</a> <ul class="sub-menu"> <li id="menu-item-811" class="menu-item menu-item-type-post_type menu-item-object-service menu-item-811"> <a href="https://www.meanpug.com/service/law-firm-digital-advertising/">Law Firm Digital
                                                        Advertising</a> </li> <li id="menu-item-1644" class="menu-item menu-item-type-post_type menu-item-object-service menu-item-1644"> <a href="https://www.meanpug.com/service/law-firm-tv-advertising/">Law Firm TV Advertising</a> </li> <li id="menu-item-1959" class="menu-item menu-item-type-post_type menu-item-object-service menu-item-1959"> <a href="https://www.meanpug.com/service/law-firm-radio-advertising/">Law Firm Radio
                                                        Advertising</a> </li> <li id="menu-item-1725" class="menu-item menu-item-type-post_type menu-item-object-service menu-item-1725"> <a href="https://www.meanpug.com/service/law-firm-billboard-advertising/">Law Firm Billboard
                                                        Advertising</a> </li> </ul> </li> <li id="menu-item-2060" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2060"> <a href="#">Law Firm Marketing</a> <ul class="sub-menu"> <li id="menu-item-812" class="menu-item menu-item-type-post_type menu-item-object-service menu-item-812"> <a href="https://www.meanpug.com/service/law-firm-seo/">Law Firm SEO</a> </li> <li id="menu-item-2819" class="menu-item menu-item-type-post_type menu-item-object-service menu-item-2819"> <a href="https://www.meanpug.com/service/law-firm-geo/">Law Firm GEO</a> </li> <li id="menu-item-810" class="menu-item menu-item-type-post_type menu-item-object-service menu-item-810"> <a href="https://www.meanpug.com/service/law-firm-content-marketing/">Law Firm Content
                                                        Marketing</a> </li> <li id="menu-item-1726" class="menu-item menu-item-type-post_type menu-item-object-service menu-item-1726"> <a href="https://www.meanpug.com/service/law-firm-video-marketing-production/">Law Firm Video
                                                        Marketing &amp;
                                                        Production</a> </li> <li id="menu-item-1965" class="menu-item menu-item-type-post_type menu-item-object-service menu-item-1965"> <a href="https://www.meanpug.com/service/law-firm-email-marketing/">Law Firm Email
                                                        Marketing</a> </li> <li id="menu-item-2020" class="menu-item menu-item-type-post_type menu-item-object-service menu-item-2020"> <a href="https://www.meanpug.com/service/social-media-management-for-law-firms/">Law Firm Social Media
                                                        Management</a> </li> </ul> </li> <li id="menu-item-2061" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2061"> <a href="#">Law Firm Websites</a> <ul class="sub-menu"> <li id="menu-item-813" class="menu-item menu-item-type-post_type menu-item-object-service menu-item-813"> <a href="https://www.meanpug.com/service/law-firm-website-design-and-development/">Law Firm Web Design and
                                                        Development</a> </li> <li id="menu-item-809" class="menu-item menu-item-type-post_type menu-item-object-service menu-item-809"> <a href="https://www.meanpug.com/service/law-firm-branding/">Law Firm Branding</a> </li> </ul> </li> </ul> </li> <li id="menu-item-1785" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1785"> <a href="https://www.meanpug.com/marketing-your-law-firm/">Marketing Guides</a> <ul class="sub-menu"> <li id="menu-item-3559" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3559"> <a href="https://www.meanpug.com/law-firm-marketing/law-firm-marketing-basics/">Law Firm Marketing Guide [2026
                                                Edition]</a> </li> <li id="menu-item-3881" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3881"> <a href="https://www.meanpug.com/law-firm-seo/the-foundations-of-law-firm-seo/">Law Firm SEO Guide [2026
                                                Edition]</a> </li> <li id="menu-item-86" class="menu-item menu-item-type-post_type_archive menu-item-object-resource menu-item-86"> <a href="https://www.meanpug.com/resource/">Downloadable Resources</a> </li> <li id="menu-item-87" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-87"> <a href="https://www.meanpug.com/drawing-board/">Law Firm Marketing Blog</a> </li> <li id="menu-item-2648" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2648"> <a href="https://www.meanpug.com/podcasts/">Podcasts</a> <ul class="sub-menu"> <li id="menu-item-2647" class="menu-item menu-item-type-taxonomy menu-item-object-podcast_show menu-item-2647"> <a href="https://www.meanpug.com/podcasts/hot-docket-podcast/">Hot Docket Podcast</a> </li> <li id="menu-item-2646" class="menu-item menu-item-type-taxonomy menu-item-object-podcast_show menu-item-2646"> <a href="https://www.meanpug.com/podcasts/devils-advocate/">Devil&#8217;s Advocate</a> </li> </ul> </li> </ul> </li> <li id="menu-item-1475" class="menu-grid-wrap-3 menu-item menu-item-type-post_type_archive menu-item-object-persona menu-item-has-children menu-item-1475"> <a href="https://www.meanpug.com/who-we-help/">Who We Help</a> <ul class="sub-menu"> <li id="menu-item-1476" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1476"> <a href="#">Law Firm Roles</a> <ul class="sub-menu"> <li id="menu-item-1852" class="menu-item menu-item-type-post_type menu-item-object-persona menu-item-1852"> <a href="https://www.meanpug.com/who-we-help/law-firm-owners/">Law Firm Owners</a> </li> <li id="menu-item-1479" class="menu-item menu-item-type-post_type menu-item-object-persona menu-item-1479"> <a href="https://www.meanpug.com/who-we-help/marketing-coordinators/">Marketing Coordinators</a> </li> </ul> </li> <li id="menu-item-1477" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1477"> <a href="#">Law Firm Sizes</a> <ul class="sub-menu"> <li id="menu-item-1478" class="menu-item menu-item-type-post_type menu-item-object-persona menu-item-1478"> <a href="https://www.meanpug.com/who-we-help/new-law-firms/">New Law Firms</a> </li> <li id="menu-item-1490" class="menu-item menu-item-type-post_type menu-item-object-persona menu-item-1490"> <a href="https://www.meanpug.com/who-we-help/small-to-midsize-law-firms/">Small to Midsize Law
                                                        Firms</a> </li> <li id="menu-item-1562" class="menu-item menu-item-type-post_type menu-item-object-persona menu-item-1562"> <a href="https://www.meanpug.com/who-we-help/large-law-firms/">Large Law Firms</a> </li> </ul> </li> <li id="menu-item-1484" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1484"> <a href="#">Law Firm Practices</a> <ul class="sub-menu"> <li id="menu-item-1485" class="menu-item menu-item-type-post_type menu-item-object-persona menu-item-1485"> <a href="https://www.meanpug.com/who-we-help/personal-injury-law-firms/">Personal Injury Law
                                                        Firms</a> </li> <li id="menu-item-3595" class="menu-item menu-item-type-post_type menu-item-object-persona menu-item-3595"> <a href="https://www.meanpug.com/who-we-help/estate-planning-law-firms/">Estate Planning Law
                                                        Firm Marketing</a> </li> <li id="menu-item-2040" class="menu-item menu-item-type-post_type menu-item-object-persona menu-item-2040"> <a href="https://www.meanpug.com/who-we-help/mass-tort-law-firms/">Mass Tort Law Firms</a> </li> <li id="menu-item-1848" class="menu-item menu-item-type-post_type menu-item-object-persona menu-item-1848"> <a href="https://www.meanpug.com/who-we-help/family-law-firms/">Family Law Firms</a> </li> <li id="menu-item-3680" class="menu-item menu-item-type-post_type menu-item-object-persona menu-item-3680"> <a href="https://www.meanpug.com/who-we-help/immigration-law-firms/">Immigration Law Firm
                                                        Marketing</a> </li> <li id="menu-item-1508" class="menu-item menu-item-type-post_type menu-item-object-persona menu-item-1508"> <a href="https://www.meanpug.com/who-we-help/business-and-transactional-law-firms/">Business and
                                                        Transactional Law Firms</a> </li> <li id="menu-item-3681" class="menu-item menu-item-type-post_type menu-item-object-persona menu-item-3681"> <a href="https://www.meanpug.com/who-we-help/criminal-defense-law-firm-marketing/">Criminal Defense Law
                                                        Firm Marketing</a> </li> <li id="menu-item-2041" class="menu-item menu-item-type-post_type menu-item-object-persona menu-item-2041"> <a href="https://www.meanpug.com/who-we-help/workers-compensation-law-firms/">Workers’ Compensation
                                                        Law Firms</a> </li> <li id="menu-item-3880" class="menu-item menu-item-type-post_type_archive menu-item-object-persona menu-item-3880"> <a href="https://www.meanpug.com/who-we-help/">See All Practices We
                                                        Help</a> </li> </ul> </li> </ul> </li> <li id="menu-item-84" class="menu-item menu-item-type-post_type_archive menu-item-object-portfolio menu-item-84"> <a href="https://www.meanpug.com/portfolio/">Portfolio</a> </li> </ul> </div> <img width="26" height="25" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2026%2025'%3E%3C/svg%3E" alt="Close Icon" class="flex-end block xl:hidden mp-menu-toggle mp-menu-toggle--close w-8 md:w-16" src="/assets/images/icons/ic-close-yellow.svg"><noscript><img width="26" height="25" src="/assets/images/icons/ic-close-yellow.svg" alt="Close Icon" class="flex-end block xl:hidden mp-menu-toggle mp-menu-toggle--close w-8 md:w-16"></noscript> </div> </div> </div> <div class="pl-6 md:pl-0 order-first xl:order-last"> <a href="https://www.meanpug.com/contact-us/" class="mp-cta-button mp-cta-button--primary mp-cta-button--xs md:mp-cta-button--lg flex items-center"> <img width="20" height="18" src="/assets/images/icons/ic-paw-yellow.svg" alt="paw icon" class="w-5"> <span class="inline-block pl-3 pt-1">Say Hello</span> </a> </div> </div> </div> </nav> <div class="mp-overlay mp-menu-toggle opacity-25 bg-purple-900 fixed top-0 left-0 w-full h-full z-20"></div> ${renderScript($$result, "D:/umair-work/side-projects/pitch-websites/mean-pug/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/umair-work/side-projects/pitch-websites/mean-pug/src/components/Header.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative overflow-hidden h-screen-3/4 md:h-screen-85 flex items-center bg-yellow mp-home-hero-block mp-mobile-bounds"> <video class="absolute left-0 top-0 w-full md:w-auto xl:w-full h-full xl:h-auto z-20 object-contain object-center mp-home-hero-block__video mp-responsive-video" src="/assets/images/misc/MeanPug-Digital-Agency-Grows-Law-Firms.mp4" playsinline muted> <source src="/assets/images/misc/MeanPug-Grows-Law-Firms-Mobile-Animation.mp4" data-mw="639" type="video/mp4">
Your browser does not support the video tag.
</video> <div class="svg-animation absolute left-0 top-0 -ml-8 z-10 w-32" data-svg="/assets/animations/shapes/expanding-square-red-home/expanding-square-red-home.json"></div> <div class="svg-animation absolute left-1/2 top-0 mt-8 -ml-16 z-10 w-48" data-svg="/assets/animations/shapes/spring-red/spring-red.json"></div> <div class="svg-animation absolute right-0 top-0 -mr-8 z-10 w-80" data-svg="/assets/animations/shapes/squiggle-yellow-light-home/squiggle-yellow-light-home.json"></div> <div class="svg-animation absolute left-0 top-0 -ml-20 mt-80 z-10 w-32" data-svg="/assets/animations/shapes/oval-360-yellow-light/oval-360-yellow-light.json"></div> <div class="container mx-auto z-10 pt-24 pb-12 px-3 xl:px-0"> <div class="md:relative"> <div class="text-purple font-bold leading-relaxed md:leading-tight mp-header--2xl md:mp-header--6xl mp-emphasis-text mp-emphasis-text--bg-red mp-emphasis-text--text-white mp-leading-inner--tight md:pr-32 lg:pr-64 mp-home-hero-block__header"> <h1> <span class="ez-toc-section" id="a-full-service-marketing-partner-for-law-firms"></span>a Full-Service Marketing Partner for <strong>Law Firms</strong><span class="ez-toc-section-end"></span> </h1> </div> ${renderComponent($$result, "Image", $$Image, { "fetchpriority": "high", "width": "243", "height": "243", "decoding": "async", "src": "/assets/images/illustrations/ill-play-paw.svg", "alt": "play button", "class": "absolute bottom-0 md:top-auto mb-8 md:-mb-16 xl:mb-0 mp-animation mp-animation--rotate mp-animation--rotate--360 cursor-pointer w-32 lg:w-48 mp-home-hero-block__button z-10" })} </div> <div class="flex flex-col md:flex-row justify-between md:items-center relative pt-8 md:pt-24"> <div class="mp-home-hero-block__resources"> <a class="flex items-center mp-widget mp-download-link mp-link mp-link--ic hover:mp-link--ic--purple underline text-purple-900 hover:text-purple font-bold transition-transform transform hover:scale-110" href="https://media.meanpug.com/wp-content/uploads/sites/35/2021/08/22172928/Checklist_for_lawfirms.pdf"> ${renderComponent($$result, "Image", $$Image, { "width": "40", "height": "48", "decoding": "async", "src": "/assets/images/icons/ic-download-black.svg", "alt": "download icon", "class": "mp-download-link__icon mp-link--ic__ic" })} <span class="ml-3 pt-2 inline-block">
Free Download: Legal Marketing Checklist
</span> </a> </div> <button type="button" class="items-center mp-scroll-down-button flex pt-32 md:pt-0 mp-link mp-link--caret mp-home-hero-block__scroll"> <span class="font-bold text-sm text-purple-900 pr-2">scroll down</span> ${renderComponent($$result, "Image", $$Image, { "width": "10", "height": "8", "decoding": "async", "src": "/assets/images/icons/ic-caret-down-black.svg", "alt": "down caret", "class": "mp-link--caret__ic mp-link--caret__ic--down" })} </button> </div> </div> </section> ${renderScript($$result, "D:/umair-work/side-projects/pitch-websites/mean-pug/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/umair-work/side-projects/pitch-websites/mean-pug/src/components/Hero.astro", void 0);

const $$Marquee = createComponent(($$result, $$props, $$slots) => {
  const logos = [
    {
      src: "/assets/images/logos/mtva_logo-01-1_white.png",
      width: 233,
      height: 50,
      alt: "Mass Tort Vendor Authority Badge"
    },
    {
      src: "/assets/images/logos/Forbes-Logo.png",
      width: 332,
      height: 88,
      alt: "Forbes Logo"
    },
    {
      src: "/assets/images/logos/Entrepeneur-Logo.png",
      width: 600,
      height: 118,
      alt: "Entrepeneur Logo"
    },
    {
      src: "/assets/images/logos/fastcompany.png",
      width: 306,
      height: 31,
      alt: "FastCompany Executive Board Badge"
    },
    {
      src: "/assets/images/logos/Marketing-For-Justice-Logo.png",
      width: 436,
      height: 140,
      alt: "Marketing For Justice Logo"
    },
    {
      src: "/assets/images/logos/Attorney-At-Law-Logo.png",
      width: 644,
      height: 104,
      alt: "Attorney At Law Logo"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-purple pt-6"> <div class="mp-mobile-bounds"> <div class="container mx-auto md:px-2 xl:px-0 pt-2 border-t border-white"> <div class="flex justify-between items-center"> <strong class="font-medium text-lg md:text-xl uppercase tracking-wider text-white">
Featured On
</strong> </div> </div> </div> <div> <div class="mp-marquee pt-8 pb-3 md:pb-8" data-per-page="2" data-per-page-xl="4"> <ul class="mp-marquee__content flex items-center"> ${logos.map((logo) => renderTemplate`<li class="mp-marquee__item mp-marquee__item--original px-12"> ${renderComponent($$result, "Image", $$Image, { "src": logo.src, "width": logo.width, "height": logo.height, "loading": "lazy", "decoding": "async", "alt": logo.alt, "class": "max-w-30 md:max-w-64" })} </li>`)} ${logos.map((logo) => renderTemplate`<li class="mp-marquee__item px-12"> ${renderComponent($$result, "Image", $$Image, { "src": logo.src, "width": logo.width, "height": logo.height, "loading": "lazy", "decoding": "async", "alt": logo.alt, "class": "max-w-30 md:max-w-64" })} </li>`)} </ul> </div> <div class="mp-mobile-bounds"> <div class="container mx-auto border-b border-white pb-4 md:px-2 xl:px-0"></div> </div> </div> </section>`;
}, "D:/umair-work/side-projects/pitch-websites/mean-pug/src/components/Marquee.astro", void 0);

const $$Stats = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="pt-12 pb-16 bg-purple text-center mp-mobile-bounds md:px-0"> ${renderComponent($$result, "Image", $$Image, { "width": "20", "height": "18", "decoding": "async", "src": "/assets/images/icons/ic-paw-yellow.svg", "class": "mx-auto w-8 md:w-12 delay-500", "data-inviewport": "compress-out", "alt": "Paw icon" })} <h2 class="mp-header mp-header--4xl md:mp-header--7xl lg:mp-header--8xl text-yellow font-bold pt-4 pb-2"> <span class="ez-toc-section" id="6-billion"></span>$6 billion+<span class="ez-toc-section-end"></span> </h2> <p class="text-white leading-relaxed text-2xl md:text-3xl w-full md:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto">
in case recoveries have been won by firms we advertise for.
</p> <div class="pt-8"> <a href="https://www.meanpug.com/contact-us/" class="mp-cta-button mp-cta-button--secondary">
Contact a Pug
</a> </div> </section>`;
}, "D:/umair-work/side-projects/pitch-websites/mean-pug/src/components/Stats.astro", void 0);

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-purple mp-pedigree pb-12 mp-mobile-bounds"> <div class="container mx-auto border-t border-yellow pt-3"> <div class="flex justify-between items-center"> <strong class="font-medium text-xl uppercase tracking-widest md:tracking-wider text-white">Our Pedigree</strong> <a class="flex items-center font-bold text-sm text-yellow hover:text-white transition-transform transform hover:scale-110 mp-link mp-link--ic hover:mp-link--ic--white" href="https://www.meanpug.com/growth-partner-for-law-firms/"> ${renderComponent($$result, "Image", $$Image, { "width": "18", "height": "20", "decoding": "async", "src": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2018%2020'%3E%3C/svg%3E", "alt": "plus icon", "class": "mp-link--ic__ic", "src": "/assets/images/icons/ic-plus-circle-yellow.svg" })} <span class="ml-2 md:ml-4 inline-block underline pt-1">
Our Process
</span> </a> </div> <h2 class="text-yellow mp-header mp-header--5xl md:mp-header--6xl font-bold pt-8 md:pt-12 md:pb-8"> <span class="ez-toc-section" id="about-us"></span>About Us<span class="ez-toc-section-end"></span> </h2> <div class="md:pl-16 lg:pl-32 xl:pl-48"> <div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16"> ${renderComponent($$result, "Image", $$Image, { "decoding": "async", "width": "558", "height": "371", "src": "/assets/images/misc/Grow-With-MeanPug_v2.png", "class": "attachment-large size-large", "alt": "holding smartphone with MeanPug website displayed", "srcset": "assets/images/misc/Grow-With-MeanPug_v2.png 558w, assets/images/misc/Grow-With-MeanPug_v2-300x199.png 300w", "sizes": "(max-width: 558px) 100vw, 558px" })} <div class="mp-pedigree__content"> <h3> <span class="ez-toc-section" id="we-are-meanpug"></span>We are MeanPug.<span class="ez-toc-section-end"></span> </h3> <p class="p1">
MeanPug is a full-service digital marketing agency
                            for law firms that views each of our clients as true
                            business partners. We love helping law firms grow,
                            and our personalized approach to our work reflects
                            that. Unlike other legal marketing agencies that may
                            only offer one service, we do it all. We love to get
                            in the trenches with our clients and help them find
                            the hidden opportunities that will launch them to
                            the next level of success.
</p> </div> </div> <div class="flex md:pr-16 py-6"> <div class="mp-emphasis-text mp-emphasis-text--bg-yellow mp-emphasis-text--text-white text-white font-bold mp-header mp-header--3xl md:mp-header--4xl lg:mp-header--5xl mp-pedigree__emphasis md:pr-12"> <h4> <span class="ez-toc-section" id="weve-helped-the-largest-personal-injury-firms-double-in-size"></span>We&#8217;ve Helped the<br> <strong>Largest Personal Injury Firms</strong><br>
Double in Size<span class="ez-toc-section-end"></span> </h4> </div> <div class="hidden md:block svg-animation h-16" data-svg="/assets/animations/shapes/curved-line-1/curved-line-1.json"></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16"> <div class="relative hidden md:block"> <div class="absolute top-0 right-0 svg-animation h-32" data-svg="assets/animations/shapes/curved-lines-2/curved-lines-2.json"></div> </div> <div> <div class="mp-pedigree__content"> <p> <strong>Bobby Steinbach</strong>, former
                                Director of Engineering for Morgan &amp; Morgan,
                                and <strong>Andrew Nasrinpay</strong>, former
                                Director of Paid Digital Advertising for Morgan
                                &amp; Morgan, founded MeanPug in 2020 as a
                                full-service client origination solution for law
                                firms.
</p> </div> <div class="text-center md:text-right pt-8"> <a href="https://www.meanpug.com/about-us/" class="mp-cta-button mp-cta-button--secondary">
About Us
</a> </div> </div> </div> </div> </div> </div> </section> <section class="pt-12 text-center bg-yellow relative mp-philosophy-block mp-mobile-bounds overflow-hidden"> <div class="container mx-auto md:relative"> <video class="hidden md:block absolute left-0 bottom-0 w-auto xl:w-full h-full xl:h-auto z-10 object-contain md:object-cover" playsinline autoplay loop muted> <source src="/assets/images/misc/Integration-Matters-Tetris-Video-2.mp4" type="video/mp4">
Your browser does not support the video tag.
</video> <h4 class="text-2xl uppercase tracking-widest text-purple font-bold relative z-10"> <span class="ez-toc-section" id="our-philosophy"></span>
Our Philosophy <span class="ez-toc-section-end"></span> </h4> <div class="pt-12 md:pt-24 pb-48 md:pb-64 relative z-10"> <div data-bg="assets/images/illustrations/ill-ampersand-gold.svg" class="w-full md:w-1/2 lg:w-1/3 h-96 mx-auto flex flex-col justify-between bg-no-repeat bg-contain bg-center relative rocket-lazyload" style=""> <div class="static md:absolute left-0 z-10 md:-ml-32 order-last md:order-first mt-12 md:mt-0"> <a href="https://www.meanpug.com/what-we-offer/" class="mp-play-button inline-block"> <span> Play </span> </a> </div> <h3 class="mp-header mp-header--4xl md:mp-header--5xl font-bold text-purple-900"> <span class="ez-toc-section" id="custom-services"></span>
Custom Services <span class="ez-toc-section-end"></span> </h3> <h3 class="mp-header mp-header--4xl md:mp-header--5xl font-bold text-purple-900 pt-24"> <span class="ez-toc-section" id="integration-matters"></span>
Integration Matters <span class="ez-toc-section-end"></span> </h3> </div> </div> <video class="block md:hidden w-full absolute bottom-0 left-0 z-0" playsinline autoplay loop muted> <source src="/assets/images/misc/Integration-Matters-Tetris-Video-2.mp4" type="video/mp4">
Your browser does not support the video tag.
</video> </div> </section> `;
}, "D:/umair-work/side-projects/pitch-websites/mean-pug/src/components/AboutUs.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`--- ---
${maybeRenderHead()}<section class="pt-8 bg-purple mp-services mp-mobile-bounds overflow-hidden"> <div class="container mx-auto border-t border-yellow pt-2"> <div class="flex justify-between items-center"> <strong class="font-medium text-xl uppercase tracking-wider text-white md:text-yellow">Our Services</strong> <a class="flex items-center font-bold text-sm text-yellow hover:text-white transition-transform transform hover:scale-110 mp-link mp-link--ic hover:mp-link--ic--white" href="https://www.meanpug.com/what-we-offer/"> ${renderComponent($$result, "Image", $$Image, { "width": "18", "height": "20", "decoding": "async", "src": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2018%2020'%3E%3C/svg%3E", "alt": "plus icon", "class": "mp-link--ic__ic", "src": "/assets/images/icons/ic-plus-circle-yellow.svg" })}<noscript>${renderComponent($$result, "Image", $$Image, { "width": "18", "height": "20", "decoding": "async", "src": "/assets/images/icons/ic-plus-circle-yellow.svg", "alt": "plus icon", "class": "mp-link--ic__ic" })}</noscript> <span class="ml-2 md:ml-4 inline-block underline pt-1">
All Services
</span> </a> </div> <div class="pt-8 md:pt-12 pb-4 mp-carousel mp-carousel--services mp-js-cursor-container glide" id="mp-services-carousel" data-cursor-image="assets/images/illustrations/ill-drag-paw-dark.png"> <div class="glide__track" data-glide-el="track"> <ul class="flex glide__slides"> <li class="md:px-6 mp-service glide__slide"> <a href="https://www.meanpug.com/service/law-firm-seo/" class="text-yellow md:text-white hover:text-white md:hover:text-yellow"> <h3 class="mp-header mp-header--3xl leading-tight md:leading-snug font-bold"> <span class="ez-toc-section" id="law-firm-seo"></span>Law Firm SEO<span class="ez-toc-section-end"></span> </h3> </a> <p class="text-sm leading-relaxed pt-6 pb-8 text-white">
SEO for law firms is essential if you want to
                            catapult your business to the next level! At
                            MeanPug, we thrive on real-world results for our
                            clients and always allow data to dictate our
                            strategy.
</p> <div class="flex items-center mp-service__hidden-link"> <span class="text-sm text-yellow-700 underline font-bold">View Service</span> ${renderComponent($$result, "Image", $$Image, { "width": "3", "height": "7", "decoding": "async", "src": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%203%207'%3E%3C/svg%3E", "alt": "caret icon", "class": "ml-3", "src": "/assets/images/icons/ic-caret-right-yellow.svg" })}<noscript>${renderComponent($$result, "Image", $$Image, { "width": "3", "height": "7", "decoding": "async", "src": "/assets/images/icons/ic-caret-right-yellow.svg", "alt": "caret icon", "class": "ml-3" })}</noscript> </div> </li> <li class="md:px-6 mp-service glide__slide"> <a href="https://www.meanpug.com/service/law-firm-branding/" class="text-yellow md:text-white hover:text-white md:hover:text-yellow"> <h3 class="mp-header mp-header--3xl leading-tight md:leading-snug font-bold"> <span class="ez-toc-section" id="law-firm-branding"></span>Law Firm
                                Branding<span class="ez-toc-section-end"></span> </h3> </a> <p class="text-sm leading-relaxed pt-6 pb-8 text-white">
Branding is about more than style. Your brand is
                            your values, mission, history, visual form, and
                            &#8211; most importantly &#8211; first impression
                            for new potential clients. Every law firm is a
                            singular brand. The team at MeanPug Digital is here
                            to help you express that uniqueness to the world.
</p> <div class="flex items-center mp-service__hidden-link"> <span class="text-sm text-yellow-700 underline font-bold">View Service</span> ${renderComponent($$result, "Image", $$Image, { "width": "3", "height": "7", "decoding": "async", "src": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%203%207'%3E%3C/svg%3E", "alt": "caret icon", "class": "ml-3", "src": "/assets/images/icons/ic-caret-right-yellow.svg" })}<noscript>${renderComponent($$result, "Image", $$Image, { "width": "3", "height": "7", "decoding": "async", "src": "/assets/images/icons/ic-caret-right-yellow.svg", "alt": "caret icon", "class": "ml-3" })}</noscript> </div> </li> <li class="md:px-6 mp-service glide__slide"> <a href="https://www.meanpug.com/service/law-firm-website-design-and-development/" class="text-yellow md:text-white hover:text-white md:hover:text-yellow"> <h3 class="mp-header mp-header--3xl leading-tight md:leading-snug font-bold"> <span class="ez-toc-section" id="law-firm-web-design-and-development"></span>Law Firm Web Design and Development<span class="ez-toc-section-end"></span> </h3> </a> <p class="text-sm leading-relaxed pt-6 pb-8 text-white">
You dream it, we build it. We&#8217;ve designed and
                            developed award-winning websites for our law firm
                            clients that look amazing, perform seamlessly, and
                            solidly scaffold all other digital initiatives.
</p> <div class="flex items-center mp-service__hidden-link"> <span class="text-sm text-yellow-700 underline font-bold">View Service</span> ${renderComponent($$result, "Image", $$Image, { "width": "3", "height": "7", "decoding": "async", "src": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%203%207'%3E%3C/svg%3E", "alt": "caret icon", "class": "ml-3", "src": "/assets/images/icons/ic-caret-right-yellow.svg" })}<noscript>${renderComponent($$result, "Image", $$Image, { "width": "3", "height": "7", "decoding": "async", "src": "/assets/images/icons/ic-caret-right-yellow.svg", "alt": "caret icon", "class": "ml-3" })}</noscript> </div> </li> <li class="md:px-6 mp-service glide__slide"> <a href="https://www.meanpug.com/service/law-firm-digital-advertising/" class="text-yellow md:text-white hover:text-white md:hover:text-yellow"> <h3 class="mp-header mp-header--3xl leading-tight md:leading-snug font-bold"> <span class="ez-toc-section" id="law-firm-digital-advertising"></span>Law
                                Firm Digital Advertising<span class="ez-toc-section-end"></span> </h3> </a> <p class="text-sm leading-relaxed pt-6 pb-8 text-white">
Sign more cases with digital advertising for
                            lawyers. Digital ads come in many different shapes
                            and sizes, the art is in finding the format(s) that
                            profitably generate cases for your practice.
</p> <div class="flex items-center mp-service__hidden-link"> <span class="text-sm text-yellow-700 underline font-bold">View Service</span> ${renderComponent($$result, "Image", $$Image, { "width": "3", "height": "7", "decoding": "async", "src": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%203%207'%3E%3C/svg%3E", "alt": "caret icon", "class": "ml-3", "src": "/assets/images/icons/ic-caret-right-yellow.svg" })}<noscript>${renderComponent($$result, "Image", $$Image, { "width": "3", "height": "7", "decoding": "async", "src": "/assets/images/icons/ic-caret-right-yellow.svg", "alt": "caret icon", "class": "ml-3" })}</noscript> </div> </li> <li class="md:px-6 mp-service glide__slide"> <a href="https://www.meanpug.com/service/law-firm-geo/" class="text-yellow md:text-white hover:text-white md:hover:text-yellow"> <h3 class="mp-header mp-header--3xl leading-tight md:leading-snug font-bold"> <span class="ez-toc-section" id="law-firm-geo"></span>Law Firm GEO<span class="ez-toc-section-end"></span> </h3> </a> <p class="text-sm leading-relaxed pt-6 pb-8 text-white">
Law firm GEO means showing up higher &#8211; and
                            more often &#8211; in answer engines like Google
                            Gemini, ChatGPT, Copilot, Perplexity, and more
</p> <div class="flex items-center mp-service__hidden-link"> <span class="text-sm text-yellow-700 underline font-bold">View Service</span> ${renderComponent($$result, "Image", $$Image, { "width": "3", "height": "7", "decoding": "async", "src": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%203%207'%3E%3C/svg%3E", "alt": "caret icon", "class": "ml-3", "src": "/assets/images/icons/ic-caret-right-yellow.svg" })}<noscript>${renderComponent($$result, "Image", $$Image, { "width": "3", "height": "7", "decoding": "async", "src": "/assets/images/icons/ic-caret-right-yellow.svg", "alt": "caret icon", "class": "ml-3" })}</noscript> </div> </li> </ul> </div> </div> </div> </section>`;
}, "D:/umair-work/side-projects/pitch-websites/mean-pug/src/components/Services.astro", void 0);

const $$SuccessHighlight = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="pb-8 md:pb-24 pt-4 overflow-hidden mp-block mp-mobile-bounds mp-text-image-highlight mp-text-image-highlight--"> <div class="container mx-auto"> <div class="border-t border-white pt-2"> <div class="flex justify-between items-center"> <strong class="font-medium text-lg md:text-xl uppercase tracking-wider text-white">833-MEANPUG</strong> <a class="flex items-center font-bold text-sm text-white hover:text-yellow transition-transform transform hover:scale-110 mp-link mp-link--ic hover:mp-link--ic--yellow" href="https://www.meanpug.com/contact-us/"> ${renderComponent($$result, "Image", $$Image, { "width": "18", "height": "20", "decoding": "async", "src": "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2018%2020'%3E%3C/svg%3E", "alt": "plus icon", "class": "mp-link--ic__ic", "src": "/assets/images/icons/ic-plus-circle-white.svg" })}<noscript>${renderComponent($$result, "Image", $$Image, { "width": "18", "height": "20", "decoding": "async", "src": "/assets/images/icons/ic-plus-circle-white.svg", "alt": "plus icon", "class": "mp-link--ic__ic" })}</noscript> <span class="ml-2 md:ml-4 inline-block underline pt-1">
Speak To Pug
</span> </a> </div> </div> <div class="relative mt-12"> ${renderComponent($$result, "Image", $$Image, { "width": "1116", "height": "742", "decoding": "async", "src": "/assets/images/misc/Handshake.jpg", "alt": "Two people shaking hands, one wearing a yellow shirt and the other a blue shirt, with a solid yellow background.", "class": "absolute left-0 top-0 mt-8 md:mt-16 ml-8 w-full md:w-1/2 xl:w-1/3 z-0" })} <div class="grid grid-cols-4 gap-y-32 md:gap-y-16 relative z-10"> <div class="col-start-1 md:col-start-2 col-span-4 md:col-span-3"> <div class="mp-emphasis-text mp-emphasis-text--bg-yellow mp-emphasis-text--text-purple-900 mp-header mp-header--2xl md:mp-header--4xl lg:mp-header--5xl xl:mp-header--6xl text-white font-bold mp-text-image-highlight__header"> <h3> <span class="ez-toc-section" id="your-success-is-our-success"></span>Your
                            Success<br>
Is Our<br> <strong>Success.</strong><span class="ez-toc-section-end"></span> </h3> </div> </div> <div class="col-start-1 md:col-start-3 col-span-4 md:col-span-2 text-xl leading-tight pt-4 md:pt-0 mp-core-style mp-text-image-highlight__caption"> <p> <strong>5-10x average return</strong> per dollar spent
</p> <p>on digital advertising with MeanPug.</p> </div> </div> </div> </div> </section>`;
}, "D:/umair-work/side-projects/pitch-websites/mean-pug/src/components/SuccessHighlight.astro", void 0);

const $$BigImageHighlight = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-no-repeat bg-cover bg-center mp-big-image-highlight-block mp-mobile-bounds" style="background-image: url(assets/images/misc/MeanPug-Front-Pack_v2.png"> <div class="container mx-auto text-center pt-8 pb-16 min-h-screen-1/2 md:min-h-screen-3/4 flex flex-col justify-between"> <div class="mp-emphasis-text mp-emphasis-text--bg-yellow mp-emphasis-text--text-purple-900 text-white uppercase mp-header--sm md:mp-header--xl tracking-wider" data-inviewport="highlight-text"> <h5> <span class="ez-toc-section" id="juggling-vendors-sucks"></span>Juggling Vendors
<strong>Sucks</strong><span class="ez-toc-section-end"></span> </h5> </div> <div class="pt-24 md:pt-0"> <h2 class="mp-header mp-header--2xl md:mp-header--6xl lg:mp-header--7xl mp-big-image-highlight-block__main-header mp-shadow-text font-bold text-white"> <span class="ez-toc-section" id="all-marketing-solutions-under-one-roof"></span>All
                Marketing Solutions Under One Roof<span class="ez-toc-section-end"></span> </h2> <div class="pt-8 md:pt-4"> <a href="https://www.meanpug.com/contact-us/" class="mp-cta-button mp-cta-button--sm md:mp-cta-button--lg mp-cta-button--secondary">
Get A Free Site Audit
</a> </div> </div> </div> </section>`;
}, "D:/umair-work/side-projects/pitch-websites/mean-pug/src/components/BigImageHighlight.astro", void 0);

const $$Clients = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-purple pt-8 md:px-3 xl:px-0 mp-clients overflow-hidden"> <div class="mp-mobile-bounds"> <div class="container mx-auto border-t border-yellow pt-2"> <div class="flex justify-between items-center"> <strong class="font-medium text-lg md:text-xl uppercase tracking-wider text-yellow">Success Story</strong> <a class="flex items-center font-bold text-sm text-yellow hover:text-white transition-transform transform hover:scale-110 mp-link mp-link--ic hover:mp-link--ic--white" href="https://www.meanpug.com/portfolio/"> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/images/icons/ic-plus-circle-yellow.svg", "width": 18, "height": 20, "loading": "lazy", "decoding": "async", "alt": "plus icon", "class": "mp-link--ic__ic" })} <span class="ml-2 md:ml-4 inline-block underline pt-1">
More Case Studies
</span> </a> </div> <div class="relative mt-8 md:mt-12 pb-12"> <div class="static md:absolute left-0 top-0 ml-0 md:ml-8 mt-0 md:mt-4 z-0 w-full md:w-1/2 lg:w-1/3"> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/images/misc/tara_new.png", "width": 792, "height": 612, "loading": "lazy", "decoding": "async", "sizes": "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw", "alt": "Tara Nealon Picture", "class": "w-full" })} </div> <div class="grid grid-cols-3 relative z-10"> <div class="col-start-1 md:col-start-2 col-span-3 md:col-span-2 flex flex-col md:flex-row items-end md:items-center justify-between md:h-auto"> <div class="bg-yellow shadow-2xl pl-3 py-2 pr-8 w-full md:w-1/2 transform translate-x-7 mp-clients__reviewer"> <strong class="font-bold text-sm text-purple">Tara Nealon</strong> <p class="text-purple tracking-widest text-sm uppercase">
attorney
</p> </div> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/images/logos/Shulman-Hill-transparent-logo.png", "width": 198, "height": 38, "loading": "lazy", "decoding": "async", "sizes": "128px", "class": "w-32 mx-auto md:mx-0 mt-4 md:mt-0", "alt": "Shulman & Hill" })} </div> <div class="col-start-1 lg:col-start-2 col-span-3 lg:col-span-2 mt-4 md:mt-16 lg:mt-0"> <div class="md:px-24 xl:px-32 text-center md:text-left"> <div class="pt-6 pb-12 mp-emphasis-text mp-emphasis-text--text-yellow mp-header mp-header--xl md:mp-header--3xl lg:mp-header--4xl font-bold text-white leading-tighter"> <p>
&#8220;We&#8217;re very happy with
                                    everything they&#8217;ve created for us and
                                    can&#8217;t recommend them enough!&#8221;
</p> </div> <a href="https://www.meanpug.com/portfolio/shulman-hill/" class="mp-cta-button mp-cta-button--secondary">
Read Full Case Study
</a> </div> </div> </div> </div> </div> </div> <div class="mp-mobile-bounds"> <div class="container mx-auto border-t border-white pt-2"> <div class="flex justify-between items-center"> <strong class="font-medium text-lg md:text-xl uppercase tracking-wider text-white">Our Clients</strong> <a class="flex items-center font-bold text-sm text-white hover:text-yellow transition-transform transform hover:scale-110 mp-link mp-link--ic hover:mp-link--ic--yellow" href="/portfolio/"> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/images/icons/ic-plus-circle-white.svg", "width": 18, "height": 20, "loading": "lazy", "decoding": "async", "alt": "plus icon", "class": "mp-link--ic__ic" })} <span class="ml-2 md:ml-4 inline-block underline pt-1">
More Projects
</span> </a> </div> </div> </div> <div class="py-8 md:py-16"> <div class="mp-marquee" data-per-page="2" data-per-page-xl="4"> <ul class="mp-marquee__content items-center"> <li class="mp-marquee__item mp-marquee__item--original px-8 md:px-0"> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/images/logos/logo_main_white_knockout.png", "width": 320, "height": 86, "loading": "lazy", "decoding": "async", "sizes": "160px", "alt": "Pinkham & Associates, APLC", "class": "max-w-40 mx-auto" })} </li> <li class="mp-marquee__item mp-marquee__item--original px-8 md:px-0"> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/images/logos/EP-transparent-logo.png", "width": 245, "height": 44, "loading": "lazy", "decoding": "async", "sizes": "160px", "alt": "Edwards Pottinger", "class": "max-w-40 mx-auto" })} </li> <li class="mp-marquee__item mp-marquee__item--original px-8 md:px-0"> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/images/logos/Milberg-transparent.png", "width": 131, "height": 35, "loading": "lazy", "decoding": "async", "sizes": "160px", "alt": "Milberg", "class": "max-w-40 mx-auto" })} </li> <li class="mp-marquee__item mp-marquee__item--original px-8 md:px-0"> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/images/logos/Shulman-Hill-transparent-logo.png", "width": 198, "height": 38, "loading": "lazy", "decoding": "async", "sizes": "160px", "alt": "Shulman & Hill", "class": "max-w-40 mx-auto" })} </li> <li class="mp-marquee__item px-8 md:px-0"> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/images/logos/logo_main_white_knockout.png", "width": 320, "height": 86, "loading": "lazy", "decoding": "async", "sizes": "160px", "alt": "Pinkham & Associates, APLC", "class": "max-w-40 mx-auto" })} </li> <li class="mp-marquee__item px-8 md:px-0"> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/images/logos/EP-transparent-logo.png", "width": 245, "height": 44, "loading": "lazy", "decoding": "async", "sizes": "160px", "alt": "Edwards Pottinger", "class": "max-w-40 mx-auto" })} </li> <li class="mp-marquee__item px-8 md:px-0"> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/images/logos/Milberg-transparent.png", "width": 131, "height": 35, "loading": "lazy", "decoding": "async", "sizes": "160px", "alt": "Milberg", "class": "max-w-40 mx-auto" })} </li> </ul> </div> </div> </section>`;
}, "D:/umair-work/side-projects/pitch-websites/mean-pug/src/components/Clients.astro", void 0);

const $$PortfolioCarousel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="pt-8 pb-8 md:pb-16 bg-yellow overflow-hidden mp-portfolio-carousel" data-astro-cid-xrmjolar> <div class="container mx-auto border-t border-purple" data-astro-cid-xrmjolar> <div class="pt-4 md:pt-12" data-astro-cid-xrmjolar> <h3 class="mp-mobile-bounds mp-header mp-header--5xl md:mp-header--6xl font-bold text-purple" data-astro-cid-xrmjolar> <span class="ez-toc-section" id="our-portfolio" data-astro-cid-xrmjolar></span>Our
                Portfolio<span class="ez-toc-section-end" data-astro-cid-xrmjolar></span> </h3> <div class="flex flex-col md:flex-row pt-6 md:pt-12 pb-8 md:pb-16" data-astro-cid-xrmjolar> <div class="w-full md:w-1/3 shrink-0 mp-mobile-bounds" data-astro-cid-xrmjolar> <p class="text-3xl md:text-4xl text-purple pl-8" data-astro-cid-xrmjolar>
We can be mean and still make you happy
</p> <div class="hidden md:block pt-12 md:pt-32" data-astro-cid-xrmjolar> <a href="/portfolio/" class="mp-cta-button mp-cta-button--primary" data-astro-cid-xrmjolar>
Full Portfolio
</a> </div> </div> <div class="w-full md:w-2/3 pt-8 md:pt-0" data-astro-cid-xrmjolar> <div class="mp-carousel glide relative mp-js-cursor-container" id="mp-portfolio-carousel" data-cursor-image="/assets/images/illustrations/ill-drag-paw-dark.png" data-astro-cid-xrmjolar> <div class="glide__track" data-glide-el="track" data-astro-cid-xrmjolar> <ul class="glide__slides" data-astro-cid-xrmjolar> <li class="glide__slide" data-astro-cid-xrmjolar> <a href="https://www.meanpug.com/portfolio/pond-lehocky-giordano-llp/" data-astro-cid-xrmjolar> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/images/portfolio/Pond-thumb-1024x731.png", "width": 1024, "height": 731, "loading": "lazy", "decoding": "async", "sizes": "(min-width: 768px) 66vw, 100vw", "alt": "Pond Lehocky Giordano LLP", "class": "w-full", "data-astro-cid-xrmjolar": true })} </a> </li> <li class="glide__slide" data-astro-cid-xrmjolar> <a href="https://www.meanpug.com/portfolio/hawklaw/" data-astro-cid-xrmjolar> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/images/portfolio/HawkLaw-thumb-1024x731.png", "width": 1024, "height": 731, "loading": "lazy", "decoding": "async", "sizes": "(min-width: 768px) 66vw, 100vw", "alt": "HawkLaw", "class": "w-full", "data-astro-cid-xrmjolar": true })} </a> </li> <li class="glide__slide" data-astro-cid-xrmjolar> <a href="https://www.meanpug.com/portfolio/pinkham-associates-aplc/" data-astro-cid-xrmjolar> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/images/portfolio/Pinkham-thumb-1024x731.png", "width": 1024, "height": 731, "loading": "lazy", "decoding": "async", "sizes": "(min-width: 768px) 66vw, 100vw", "alt": "Pinkham & Associates, APLC", "class": "w-full", "data-astro-cid-xrmjolar": true })} </a> </li> <li class="glide__slide" data-astro-cid-xrmjolar> <a href="https://www.meanpug.com/portfolio/wallace-law/" data-astro-cid-xrmjolar> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/images/portfolio/wallace-1024x731.png", "width": 1024, "height": 731, "loading": "lazy", "decoding": "async", "sizes": "(min-width: 768px) 66vw, 100vw", "alt": "Wallace Law", "class": "w-full", "data-astro-cid-xrmjolar": true })} </a> </li> <li class="glide__slide" data-astro-cid-xrmjolar> <a href="https://www.meanpug.com/portfolio/burner-prudenti-law/" data-astro-cid-xrmjolar> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/images/portfolio/Burner-Prudenti-thumb-1024x731.png", "width": 1024, "height": 731, "loading": "lazy", "decoding": "async", "sizes": "(min-width: 768px) 66vw, 100vw", "alt": "Burner Prudenti Law", "class": "w-full", "data-astro-cid-xrmjolar": true })} </a> </li> <li class="glide__slide" data-astro-cid-xrmjolar> <a href="https://www.meanpug.com/portfolio/pitta-baione-llp/" data-astro-cid-xrmjolar> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/images/portfolio/Pitta-thumb-1024x731.png", "width": 1024, "height": 731, "loading": "lazy", "decoding": "async", "sizes": "(min-width: 768px) 66vw, 100vw", "alt": "Pitta & Baione LLP", "class": "w-full", "data-astro-cid-xrmjolar": true })} </a> </li> <li class="glide__slide" data-astro-cid-xrmjolar> <a href="https://www.meanpug.com/portfolio/the-fried-firm/" data-astro-cid-xrmjolar> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/images/portfolio/Fried-thumb-1024x731.png", "width": 1024, "height": 731, "loading": "lazy", "decoding": "async", "sizes": "(min-width: 768px) 66vw, 100vw", "alt": "The Fried Firm", "class": "w-full", "data-astro-cid-xrmjolar": true })} </a> </li> </ul> </div> </div> </div> </div> <div class="block md:hidden text-center py-4" data-astro-cid-xrmjolar> <a href="/portfolio/" class="mp-cta-button mp-cta-button--primary" data-astro-cid-xrmjolar>
Full Portfolio
</a> </div> </div> </div> </section>`;
}, "D:/umair-work/side-projects/pitch-websites/mean-pug/src/components/PortfolioCarousel.astro", void 0);

const $$CaseTypes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-purple py-6 md:py-12 mp-case-types overflow-hidden mp-mobile-bounds" data-astro-cid-klgdoe5s> <div class="container mx-auto" data-astro-cid-klgdoe5s> <div class="flex flex-col lg:flex-row items-center lg:items-start relative" data-astro-cid-klgdoe5s> ${renderComponent($$result, "Image", $$Image, { "width": "20", "height": "18", "decoding": "async", "src": "/assets/images/icons/ic-paw-yellow.svg", "alt": "Paw Icon", "class": "w-12 mt-4 mx-auto md:mx-0", "data-astro-cid-klgdoe5s": true })} <div class="mp-header mp-header--2xl md:mp-header--5xl lg:mp-header--6xl font-bold text-yellow leading-tight pl-0 lg:pl-8 pt-4 lg:pt-0 text-center lg:text-left" data-astro-cid-klgdoe5s> <h2 data-astro-cid-klgdoe5s>
Case Types<br data-astro-cid-klgdoe5s>
We Play Well With
</h2> </div> <div class="w-32 lg:w-64 svg-animation" data-svg="https://media-v2.meanpug.com/wp-content/themes/meanpug-theme-v2/assets/animations/shapes/line-and-squiggle-doodle/line-and-squiggle-doodle.json" data-astro-cid-klgdoe5s></div> </div> <div class="relative" data-astro-cid-klgdoe5s> <div class="md:grid grid-cols-2 pt-8 md:pt-16 mp-case-types__grid" data-astro-cid-klgdoe5s> <div class="pl-3 md:pl-16 lg:pl-32 xl:pl-48" data-astro-cid-klgdoe5s> <ul data-astro-cid-klgdoe5s> <li class="flex flex-col md:flex-row md:items-center mp-case-type__parent border-b-3 border-yellow md:border-b-0 pb-4 md:pb-0" data-astro-cid-klgdoe5s> <span class="inline-block pt-3 md:pt-0 md:pr-24 xl:pr-32 text-white text-xl md:text-2xl font-bold mp-case-type__ix" data-astro-cid-klgdoe5s>01</span> <div class="pb-3 md:pb-6 md:border-b-3 md:border-yellow flex-grow w-full md:w-auto" data-astro-cid-klgdoe5s> <button data-target="mp-detail-personal-injury" class="text-white hover:text-yellow text-lg md:text-xl lg:text-2xl hover:font-bold mp-case-types__link" data-astro-cid-klgdoe5s>
Personal Injury
</button> </div> </li> <li class="flex flex-col md:flex-row md:items-center mp-case-type__parent border-b-3 border-yellow md:border-b-0 pb-4 md:pb-0" data-astro-cid-klgdoe5s> <span class="inline-block pt-3 md:pt-0 md:pr-24 xl:pr-32 text-white text-xl md:text-2xl font-bold mp-case-type__ix" data-astro-cid-klgdoe5s>02</span> <div class="py-2 md:py-6 md:border-b-3 md:border-yellow flex-grow w-full md:w-auto" data-astro-cid-klgdoe5s> <button data-target="mp-detail-mass-tort" class="text-white hover:text-yellow text-lg md:text-xl lg:text-2xl hover:font-bold mp-case-types__link" data-astro-cid-klgdoe5s>
Mass Tort
</button> </div> </li> <li class="flex flex-col md:flex-row md:items-center mp-case-type__parent border-b-3 border-yellow md:border-b-0 pb-4 md:pb-0" data-astro-cid-klgdoe5s> <span class="inline-block pt-3 md:pt-0 md:pr-24 xl:pr-32 text-white text-xl md:text-2xl font-bold mp-case-type__ix" data-astro-cid-klgdoe5s>03</span> <div class="py-2 md:py-6 md:border-b-3 md:border-yellow flex-grow w-full md:w-auto" data-astro-cid-klgdoe5s> <button data-target="mp-detail-insurance-dispute" class="text-white hover:text-yellow text-lg md:text-xl lg:text-2xl hover:font-bold mp-case-types__link" data-astro-cid-klgdoe5s>
Insurance Dispute
</button> </div> </li> </ul> </div> <div class="relative" data-astro-cid-klgdoe5s> <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 md:list-disc absolute top-0 left-0 w-full px-6 md:px-16 lg:px-24 mp-case-types__detail" data-id="mp-detail-personal-injury" data-astro-cid-klgdoe5s> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Auto Accidents</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Catastrophic Personal Injury</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Product Liability</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Premises Liability</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Slip and Fall</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Medical Malpractice</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Birth Injuries</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Fire Injury</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Sexual Abuse</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Asbestos and Mesothelioma</span> </li> </ul> <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 md:list-disc absolute top-0 left-0 w-full px-6 md:px-16 lg:px-24 mp-case-types__detail" data-id="mp-detail-mass-tort" data-astro-cid-klgdoe5s> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Zantac</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Paraquat</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Roundup</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Dilantin</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Elmiron</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Talcum Powder</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Nexium / PPI</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Hernia Mesh</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Allergan Breast Implants</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Bair Hugger</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>And More&#8230;</span> </li> </ul> <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 md:list-disc absolute top-0 left-0 w-full px-6 md:px-16 lg:px-24 mp-case-types__detail" data-id="mp-detail-insurance-dispute" data-astro-cid-klgdoe5s> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Bad Faith First Party</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Hurricane Damage</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Flood Damage</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Fire Damage</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Wind Damage</span> </li> <li class="text-white" data-astro-cid-klgdoe5s> <span data-astro-cid-klgdoe5s>Hail Damage</span> </li> </ul> </div> </div> </div> </div> </section>  ${renderScript($$result, "D:/umair-work/side-projects/pitch-websites/mean-pug/src/components/CaseTypes.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/umair-work/side-projects/pitch-websites/mean-pug/src/components/CaseTypes.astro", void 0);

const $$OurProcess = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-purple pb-8 md:pb-16 overflow-hidden mp-mobile-bounds mp-offset-text-image-highlight"> <div class="container mx-auto border-t border-yellow pt-2"> <div class="flex justify-between items-center"> <strong class="font-medium text-lg md:text-xl uppercase tracking-wider text-yellow">Our Process</strong> <a class="flex items-center font-bold text-sm text-yellow hover:text-white transition-transform transform hover:scale-110 mp-link mp-link--ic hover:mp-link--ic--white" href="/resource/"> ${renderComponent($$result, "Image", $$Image, { "width": "18", "height": "20", "decoding": "async", "src": "/assets/images/icons/ic-plus-circle-yellow.svg", "alt": "plus icon", "class": "mp-link--ic__ic" })} <span class="ml-2 md:ml-4 inline-block underline pt-1">
Free Resources
</span> </a> </div> <div class="pt-2 md:pt-12"> <div class="flex flex-col md:flex-row relative"> <div class="w-full md:w-7/12 z-10 md:ml-4 lg:ml-12 2xl:ml-32 pt-4 md:pt-0 order-last md:order-first"> <div class="mp-emphasis-text mp-emphasis-text--bg-yellow mp-emphasis-text--text-purple mp-header mp-header--2xl md:mp-header--4xl lg:mp-header--5xl 2xl:mp-header--6xl text-white font-bold md:tracking-wide mp-leading-inner--tight"> <h3>Are you ready</h3> <h3><strong>to shake up </strong></h3> <h3>your business?</h3> </div> <div class="md:pl-12 xl:pl-24 md:pr-24 xl:pr-32 pt-4 md:pt-8 pb-8 md:pb-12 text-white text-lg"> <p>
Want to know how we do it? Take a few minutes to
							learn about our process and let us walk you through
							it step by step.
</p> </div> <div class="text-center md:text-left"> <a href="https://www.meanpug.com/growth-partner-for-law-firms/" class="mp-cta-button mp-cta-button--secondary">
Our Approach
</a> </div> </div> <div class="w-full md:w-1/3 relative order-first md:order-last"> ${renderComponent($$result, "Image", $$Image, { "width": "567", "height": "443", "decoding": "async", "src": "/assets/images/misc/Shake-Up-Your-Business.png", "alt": "Shake Up Your Business", "class": "static md:absolute w-full left-0 top-0 z-0", "loading": "lazy" })} </div> </div> </div> </div> </section>`;
}, "D:/umair-work/side-projects/pitch-websites/mean-pug/src/components/OurProcess.astro", void 0);

const $$TeamCarousel = createComponent(($$result, $$props, $$slots) => {
  const teamMembers = [
    {
      name: "Bobby Steinbach",
      role: "Founding Partner",
      email: "bobby@meanpug.com",
      link: "https://www.meanpug.com/team/bobby-steinbach/",
      defaultImg: "/assets/images/team/Bobby-Steinbach-949x1024.jpg",
      hoverImg: "/assets/images/team/bobby_new-main-illustration.png"
    },
    {
      name: "Andrew Nasrinpay",
      role: "Partner",
      email: "andrew@meanpug.com",
      link: "https://www.meanpug.com/team/andrew-nasrinpay/",
      defaultImg: "/assets/images/team/andy_final-dimensions-home-949x1024.png",
      hoverImg: "/assets/images/team/andy-illustration-main_final.png"
    },
    {
      name: "Mike Jones",
      role: "Partner",
      email: "mike@meanpug.com",
      defaultImg: "/assets/images/team/mike_new-main-image-949x1024.png",
      hoverImg: "/assets/images/team/mike_new-main-illustration.png"
    },
    {
      name: "Tara Lee",
      role: "Account Executive",
      email: "tara@meanpug.com",
      link: "https://www.meanpug.com/team/tara-lee/",
      defaultImg: "/assets/images/team/Tara-Home.png",
      hoverImg: "/assets/images/team/Tara-Home-illustration.png"
    },
    {
      name: "Oxana Skripka",
      role: "Creative Director",
      email: "oxana@meanpug.com",
      link: "https://www.meanpug.com/team/oxana-skripka/",
      defaultImg: "/assets/images/team/Oxana-Skripka-949x1024.png",
      hoverImg: "/assets/images/team/oxana_hp.png"
    },
    {
      name: "Lyn Jiang",
      role: "Senior Designer",
      email: "lyn@meanpug.com",
      link: "https://www.meanpug.com/team/lyn-jiang/",
      defaultImg: "/assets/images/team/lyn-jiang-headshot.jpg",
      hoverImg: "/assets/images/team/lyn-jiang-headshot-flipped.jpg"
    },
    {
      name: "Alla Breslavtseva",
      role: "Designer",
      email: "alla@meanpug.com",
      defaultImg: "/assets/images/team/MeanPug-Girl-Main-949x1024.png",
      hoverImg: "/assets/images/team/MeanPug-Girl-Main-Hover.png"
    },
    {
      name: "Kim Hayslett",
      role: "Director of Account Strategy",
      email: "kim@meanpug.com",
      defaultImg: "/assets/images/team/Homepage_photo_949x1024_Kim.jpg",
      hoverImg: "/assets/images/team/Homepage_Illustr_949x1024_KIM.png"
    },
    {
      name: "Naveena Sekaran",
      role: "Key Account Strategist",
      email: "naveena@meanpug.com",
      link: "https://www.meanpug.com/team/naveena-sekaran/",
      defaultImg: "/assets/images/team/Naveena-home-1.png",
      hoverImg: "/assets/images/team/Naveena-home-illustration-1.png"
    },
    {
      name: "Sydney Terzic",
      role: "Key Account Strategist",
      email: "sydney@meanpug.com",
      link: "https://www.meanpug.com/team/sydney-terzic/",
      defaultImg: "/assets/images/team/sydney-terzic-home.png",
      hoverImg: "/assets/images/team/sydney-terzic-home-illustrated.png"
    },
    {
      name: "Liam Stirling",
      role: "Senior Account Strategist",
      email: "liam@meanpug.com",
      link: "https://www.meanpug.com/team/liam-stirling/",
      defaultImg: "/assets/images/team/Liam-Sterling-Home-photo.png",
      hoverImg: "/assets/images/team/Liam-Sterling-Home-Illustration.png"
    },
    {
      name: "Micah Coy",
      role: "Senior Account Strategist",
      email: "micah@meanpug.com",
      link: "https://www.meanpug.com/team/micah-coy/",
      defaultImg: "/assets/images/team/Homepage_photo_949x1024_Micah.png",
      hoverImg: "/assets/images/team/Homepage_Illustr_949x1024_Micah.png"
    },
    {
      name: "Ishani Dash",
      role: "Account Strategist",
      email: "ishani@meanpug.com",
      link: "https://www.meanpug.com/team/ishani-dash/",
      defaultImg: "/assets/images/team/Ishani-Dash-949x1024.png",
      hoverImg: "/assets/images/team/ishani_hp.png"
    },
    {
      name: "Rob Henrichs",
      role: "Account Strategist",
      email: "rob@meanpug.com",
      link: "https://www.meanpug.com/team/rob-henrichs/",
      defaultImg: "/assets/images/team/Homepage_photo_949x1024_Rob.jpg",
      hoverImg: "/assets/images/team/Homepage_Illustr_949x1024_Rob-1.png"
    },
    {
      name: "Brian Grill",
      role: "Account Strategist",
      email: "brian@meanpug.com",
      link: "https://www.meanpug.com/team/brian-grill/",
      defaultImg: "/assets/images/team/Homepage_photo_949x1024_Brian.jpg",
      hoverImg: "/assets/images/team/About-us_Illustr_960x960_Brian-1.png"
    },
    {
      name: "Liam Lipsky",
      role: "SEO Manager",
      email: "liamlipsky@meanpug.com",
      link: "https://www.meanpug.com/team/liam-lipsky/",
      defaultImg: "/assets/images/team/Liam-Home.png",
      hoverImg: "/assets/images/team/Liam-Home-illustrations.png"
    },
    {
      name: "Josh Blackburn",
      role: "SEO Manager",
      email: "josh@meanpug.com",
      link: "https://www.meanpug.com/team/josh-blackburn/",
      defaultImg: "/assets/images/team/Homepage_photo_949x1024_Josh_B.jpg",
      hoverImg: "/assets/images/team/Homepage_Illustr_949x1024_Josh_B.png"
    },
    {
      name: "Ryan Yamada",
      role: "Content Specialist",
      email: "ryan@meanpug.com",
      link: "https://www.meanpug.com/team/ryan-yamada/",
      defaultImg: "/assets/images/team/ryan-yamada-home.png",
      hoverImg: "/assets/images/team/ryan-yamada-home-illustrated.png"
    },
    {
      name: "Kailyn Champlin",
      role: "Content Specialist",
      email: "kailyn@meanpug.com",
      link: "https://www.meanpug.com/team/kailyn-champlin/",
      defaultImg: "/assets/images/team/kailyn-champlin-home.png",
      hoverImg: "/assets/images/team/kailyn-champlin-home-illustrated.png"
    },
    {
      name: "Dana Abatemarco",
      role: "Content Specialist",
      email: "dana@meanpug.com",
      link: "https://www.meanpug.com/team/dana-abatemarco/",
      defaultImg: "/assets/images/team/dana-abatemarco-home.png",
      hoverImg: "/assets/images/team/dana-abatemarco-home-illustrated.png"
    },
    {
      name: "Yitz Shapiro",
      role: "Senior Operations Manager",
      email: "yitz@meanpug.com",
      link: "https://www.meanpug.com/team/yitz-shapiro/",
      defaultImg: "/assets/images/team/yitz-shapiro-home.jpg",
      hoverImg: "/assets/images/team/yitz-shapiro-home-illustrated.jpg"
    },
    {
      name: "Jack McCarthy",
      role: "Operations Manager",
      email: "jack@meanpug.com",
      link: "https://www.meanpug.com/team/jack-mccarthy/",
      defaultImg: "/assets/images/team/Homepage_photo_949x1024_Jack.png",
      hoverImg: "/assets/images/team/Homepage_illustr_949x1024_Jack-1.png"
    },
    {
      name: "Patrick Mahoney",
      role: "Video Specialist",
      email: "patrick@meanpug.com",
      defaultImg: "/assets/images/team/men_main02-949x1024.png",
      hoverImg: "/assets/images/team/men_main02_hover.png"
    },
    {
      name: "Anthony Jewett",
      role: "Digital Advertising Specialist",
      email: "anthony@meanpug.com",
      link: "https://www.meanpug.com/team/anthony-jewett/",
      defaultImg: "/assets/images/team/Homepage_photo_949x1024_Anthony.png",
      hoverImg: "/assets/images/team/Homepage_illustr_949x1024_Anthony.png"
    },
    {
      name: "John Lipartito",
      role: "Digital Advertising Specialist",
      email: "john@meanpug.com",
      link: "https://www.meanpug.com/team/john-lipartito/",
      defaultImg: "/assets/images/team/Homepage_photo_949x1024_John.png",
      hoverImg: "/assets/images/team/Homepage_illustr_949x1024_John.png"
    },
    {
      name: "Andy Berman",
      role: "Traditional Media Director",
      email: "andy@meanpug.com",
      defaultImg: "/assets/images/team/men_main02-949x1024.png",
      hoverImg: "/assets/images/team/men_main02_hover.png"
    },
    {
      name: "Aleksandar Ciric",
      role: "Lead WordPress Developer",
      email: "aleksandar@meanpug.com",
      link: "https://www.meanpug.com/team/aleksandar-ciric/",
      defaultImg: "/assets/images/team/aleksandar-ciric-headshot.jpg",
      hoverImg: "/assets/images/team/aleksandar-ciric-headshot-flipped.png"
    },
    {
      name: "Rachael Pence",
      role: "Social Media Manager",
      email: "rachael@meanpug.com",
      link: "https://www.meanpug.com/team/rachael-pence/",
      defaultImg: "/assets/images/team/Rachael-Home.png",
      hoverImg: "/assets/images/team/Rachael-Home-illustration.png"
    },
    {
      name: "Tikki",
      role: "CPO",
      email: "bark@meanpug.com",
      defaultImg: "/assets/images/team/Tikki-949x1024.jpg",
      hoverImg: "/assets/images/team/tikki_new-main-illustration.png"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-yellow pt-8 pb-12 mp-team-carousel overflow-hidden"> <div class="mp-mobile-bounds"> <div class="container mx-auto border-t border-purple-900 pt-2"> <div class="flex justify-between items-center"> <strong class="font-medium text-lg md:text-xl uppercase tracking-wider text-purple-900">Our Team</strong> <a class="flex items-center font-bold text-sm text-purple-900 hover:text-purple transition-transform transform hover:scale-110 mp-link mp-link--ic hover:mp-link--ic--purple" href="https://www.meanpug.com/contact-us/"> ${renderComponent($$result, "Image", $$Image, { "width": "18", "height": "20", "decoding": "async", "src": "/assets/images/icons/ic-plus-circle-purple-900.svg", "alt": "plus icon", "class": "mp-link--ic__ic" })} <span class="ml-2 md:ml-4 inline-block underline pt-1">
Bark At Us
</span> </a> </div> <div class="mp-emphasis-text mp-emphasis-text--bg-purple mp-emphasis-text--text-yellow mp-header mp-header--2xl md:mp-header--5xl font-bold text-purple pt-4 md:pt-8 pb-6 md:pb-12 md:pl-8 text-center md:text-left mp-leading-inner--tight"> <h3>Meet the</h3> <h3><strong>MeanPug Pack</strong></h3> </div> </div> </div> <div class="mp-carousel glide mp-js-cursor-container" id="mp-team-carousel" data-cursor-image="/assets/images/illustrations/ill-drag-paw-purple.png"> <div class="glide__track" data-glide-el="track"> <ul class="glide__slides"> ${teamMembers.map((member) => renderTemplate`<li class="glide__slide"> ${member.link ? renderTemplate`<a${addAttribute(member.link, "href")}> <div class="relative mp-hover-swap"> ${renderComponent($$result, "Image", $$Image, { "width": "949", "height": "1024", "decoding": "async", "src": member.defaultImg, "alt": member.name, "class": "w-full mp-hover-swap__default", "loading": "lazy" })} ${renderComponent($$result, "Image", $$Image, { "width": "949", "height": "1024", "decoding": "async", "src": member.hoverImg, "alt": `${member.name} flipped`, "class": "absolute top-0 left-0 w-full mp-hover-swap__new", "loading": "lazy" })} </div> </a>` : renderTemplate`<div class="relative mp-hover-swap"> ${renderComponent($$result, "Image", $$Image, { "width": "949", "height": "1024", "decoding": "async", "src": member.defaultImg, "alt": member.name, "class": "w-full mp-hover-swap__default", "loading": "lazy" })} ${renderComponent($$result, "Image", $$Image, { "width": "949", "height": "1024", "decoding": "async", "src": member.hoverImg, "alt": `${member.name} flipped`, "class": "absolute top-0 left-0 w-full mp-hover-swap__new", "loading": "lazy" })} </div>`} <div class="pt-4 text-purple-900 px-4"> ${member.link ? renderTemplate`<a${addAttribute(member.link, "href")}> <strong>${member.name}</strong> </a>` : renderTemplate`<strong>${member.name}</strong>`} <p>${member.role}</p> <div class="pt-4"> <span class="text-sm">${member.email}</span> </div> </div> </li>`)} </ul> </div> </div> <div class="pt-8 md:pt-12 text-center"> <a href="https://www.meanpug.com/about-us/" class="mp-cta-button mp-cta-button--primary">
Full Team
</a> </div> </section>`;
}, "D:/umair-work/side-projects/pitch-websites/mean-pug/src/components/TeamCarousel.astro", void 0);

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="min-h-screen-1/2 md:min-h-screen bg-no-repeat bg-cover bg-bottom flex flex-col justify-end items-center overflow-hidden relative mp-mobile-bounds pt-16 md:pt-0" style="background-image: url('/assets/images/misc/Never-Turn-Our-Backs-Again_v2.png');"> <div class="container mx-auto px-2 md:px-4 lg:px-12 xl:px-24 relative z-10"> <div class="mp-emphasis-text mp-emphasis-text--bg-yellow mp-emphasis-text--text-purple leading-tight mp-header mp-header--2xl md:mp-header--6xl lg:mp-header--7xl text-white font-bold text-center pb-3"> <p>We&#8217;ll never <strong>turn our backs</strong> on you again</p> </div> <div class="border-t-2 border-white pt-4 text-center"> <p class="text-white font-bold text-2xl md:text-3xl">
Don't be shy. Fill out the form and we'll be in touch shortly
</p> </div> <div class="mp-form mp-form--bottom pt-8 md:pt-12"> <form method="post" action="/contact/" class="gform_fields top_label form_sublabel_below description_below validation_below grid gap-2 md:gap-3 md:grid-cols-2"> <div class="gfield gfield--type-text gfield_contains_required field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"> <label class="gfield_label gform-field-label" for="input_contact_name">Full Name<span class="gfield_required"><span class="gfield_required gfield_required_text">(Required)</span></span></label> <div class="ginput_container ginput_container_text"> <input name="full_name" id="input_contact_name" type="text" value="" class="large" placeholder="Full Name" aria-required="true" aria-invalid="false"> </div> </div> <div class="gfield gfield--type-email gfield--width-full gfield_contains_required field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"> <label class="gfield_label gform-field-label" for="input_contact_email">Email<span class="gfield_required"><span class="gfield_required gfield_required_text">(Required)</span></span></label> <div class="ginput_container ginput_container_email"> <input name="email" id="input_contact_email" type="email" value="" class="large" placeholder="Email" aria-required="true" aria-invalid="false"> </div> </div> <div class="gfield gfield--type-phone gfield--width-full field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"> <label class="gfield_label gform-field-label" for="input_contact_phone">Phone</label> <div class="ginput_container ginput_container_phone"> <input name="phone" id="input_contact_phone" type="tel" value="" class="large" placeholder="Phone" aria-invalid="false"> </div> </div> <div class="gfield gfield--type-select gfield--width-full field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"> <label class="gfield_label gform-field-label" for="input_contact_interest">Interested In</label> <div class="ginput_container ginput_container_select"> <select name="interested_in" id="input_contact_interest" class="large gfield_select" aria-invalid="false"> <option value="" selected class="gf_placeholder">
I'm Interested In
</option> <option value="Web design and development">
Web design and development
</option> <option value="Business operations">
Business operations
</option> <option value="Free consultation">
Free consultation
</option> <option value="Free site audit">
Free site audit
</option> <option value="Marketing and advertising">
Marketing and advertising
</option> </select> </div> </div> <div class="gfield gfield--type-textarea gfield--width-full md:col-span-2 field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"> <label class="gfield_label gform-field-label" for="input_contact_message">Additional Information</label> <div class="ginput_container ginput_container_textarea"> <textarea name="message" id="input_contact_message" class="textarea large" placeholder="Any Additional Information We Should Know?" aria-invalid="false" rows="10" cols="50"></textarea> </div> </div> <div class="gform-footer gform_footer top_label md:col-span-2"> <input type="submit" class="gform_button button" value="Submit"> </div> </form> </div> </div> </section>`;
}, "D:/umair-work/side-projects/pitch-websites/mean-pug/src/components/ContactForm.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-purple"> <div class="mp-marquee mp-marquee--bapn" data-per-page="1" data-per-page-xl="2"> <ul class="mp-marquee__content"> <li class="mp-marquee__item mp-marquee__item--original"> <strong class="text-purple-900">833-MEANPUG</strong> </li> <li class="mp-marquee__item mp-marquee__item--original"> <strong class="text-purple-900">833-MEANPUG</strong> </li> <li class="mp-marquee__item"> <strong class="text-purple-900">833-MEANPUG</strong> </li> <li class="mp-marquee__item"> <strong class="text-purple-900">833-MEANPUG</strong> </li> </ul> </div> <div class="container mx-auto border-t border-purple-900 py-4 md:py-8 md:px-3 mp-mobile-bounds"> <div class="grid grid-cols-1 md:grid-cols-2 md:grid-cols-5 gap-x-8 md:gap-x-4"> <div class="col-span-1 md:col-span-2 lg:col-span-1"> ${renderComponent($$result, "Image", $$Image, { "width": "414", "height": "94", "src": "/assets/images/misc/MeanPug-Footer-Logo.png", "alt": "MeanPug Logo", "class": "w-64 mx-auto md:mx-0 mt-3 md:mt-0", "loading": "lazy" })} <div class="pt-6 md:pt-16 pb-4 md:pb-8 mp-form mp-form--newsletter text-center md:text-left"> <strong class="text-yellow block pb-4 text-2xl md:text-base">Sign up for our newsletter and case alert system</strong> <form method="post" action="/" class="gform_fields top_label form_sublabel_below description_below validation_below"> <div class="gfield gfield--type-email field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible"> <label class="gfield_label gform-field-label" for="input_newsletter_email">Email</label> <div class="ginput_container ginput_container_email"> <input name="email" id="input_newsletter_email" type="email" value="" class="large" placeholder="Email" aria-invalid="false"> </div> </div> <div class="gform-footer gform_footer top_label"> <input type="submit" class="gform_button button" value="Submit"> </div> </form> </div> <ul class="flex justify-center md:justify-start pb-8 md:pb-0"> <li> <a href="https://www.facebook.com/meanpug" target="_blank" class="mp-link mp-link--ic hover:mp-link--ic--yellow transition-transform transform hover:scale-125 inline-block"> ${renderComponent($$result, "Image", $$Image, { "width": "12", "height": "26", "src": "/assets/images/icons/ic-fb.svg", "alt": "Facebook Icon", "class": "mp-link--ic__ic" })} </a> </li> <li class="px-8"> <a href="https://www.linkedin.com/company/meanpug-digital-agency/" target="_blank" class="mp-link mp-link--ic hover:mp-link--ic--yellow transition-transform transform hover:scale-125 inline-block"> ${renderComponent($$result, "Image", $$Image, { "width": "27", "height": "26", "src": "/assets/images/icons/ic-linkedin.svg", "alt": "LinkedIn Icon", "class": "mp-link--ic__ic" })} </a> </li> <li> <a href="https://www.instagram.com/meanpugdigital/" target="_blank" class="mp-link mp-link--ic hover:mp-link--ic--yellow transition-transform transform hover:scale-125 inline-block"> ${renderComponent($$result, "Image", $$Image, { "width": "26", "height": "26", "src": "/assets/images/icons/ic-ig.svg", "alt": "Instagram Icon", "class": "mp-link--ic__ic" })} </a> </li> </ul> <div class="hidden md:block pt-12 text-center md:text-left"> <p class="text-sm text-purple-900">
&copy; MeanPug 2017 - 2026
</p> </div> </div> <div class="md:col-start-3 max-md:text-center"> <div class="pb-6 md:pb-12"> <strong class="text-yellow block pb-4">Law Firm Marketing Guides</strong> <div class="mp-menu-container"> <ul id="menu-footer-guides" class="mp-footer-menu"> <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3574"> <a href="https://www.meanpug.com/law-firm-marketing/law-firm-marketing-basics/">2026 Law Firm Marketing Guide</a> </li> <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3850"> <a href="https://www.meanpug.com/law-firm-seo/the-foundations-of-law-firm-seo/">2026 Law Firm SEO Guide</a> </li> </ul> </div> </div> <div class="pb-3 md:pb-12"> <strong class="text-yellow block pb-4">Marketing Tools for Lawyers</strong> <div class="mp-menu-container"> <ul id="menu-footer-tools" class="mp-footer-menu"> <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3935"> <a href="https://www.meanpug.com/law-firm-technical-seo-check/">Law Firm Technical SEO Checker</a> </li> <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3956"> <a href="https://www.meanpug.com/law-firm-web-design-grader/">Law Firm Web Design Grader</a> </li> </ul> </div> </div> </div> <div class="max-md:pt-4"> <div class="pb-3 md:pb-12 max-md:text-center"> <strong class="text-yellow block pb-4">Company</strong> <div class="mp-menu-container"> <ul id="menu-footer" class="mp-footer-menu"> <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-91"> <a href="https://www.meanpug.com/about-us/">About Us</a> </li> <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-88"> <a href="https://www.meanpug.com/what-we-offer/">What We Offer</a> </li> <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1400"> <a href="https://www.meanpug.com/what-our-clients-say/">What Our Clients Say</a> </li> <li class="menu-item menu-item-type-post_type_archive menu-item-object-persona menu-item-1474"> <a href="https://www.meanpug.com/who-we-help/">Who We Help</a> </li> <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-89"> <a href="https://www.meanpug.com/growth-partner-for-law-firms/">Growth Partner For Law Firms</a> </li> <li class="menu-item menu-item-type-post_type_archive menu-item-object-portfolio menu-item-92"> <a href="https://www.meanpug.com/portfolio/">Portfolio</a> </li> <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2649"> <a href="https://www.meanpug.com/podcasts/">Podcasts</a> </li> <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-90"> <a href="https://www.meanpug.com/contact-us/">Contact Us</a> </li> <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3702"> <a target="_blank" href="https://apply.workable.com/meanpug/?lng=en">Careers</a> </li> </ul> </div> </div> <a href="https://www.meanpug.com/privacy-policy/" class="text-purple-900 text-sm hidden md:inline-block">Privacy Policy</a> </div> <div class="max-md:text-center max-md:pt-4"> <div class="pb-8"> <strong class="text-yellow block pb-4">Address</strong> <p class="text-white">
280 Madison Ave, Suite 506, New York, New York, 10016
</p> </div> <div class="pb-8"> <strong class="text-yellow block pb-4">Phone Number</strong> <a href="tel:18336326784" class="text-white">
833-MEANPUG
</a> </div> <div class="pb-12"> <strong class="text-yellow block pb-4">Email</strong> <a href="mailto:bark@meanpug.com" class="text-white">
bark@meanpug.com
</a> </div> </div> </div> <div class="block md:hidden text-center pt-4"> <a href="https://www.meanpug.com/privacy-policy/" class="text-purple-900 text-sm inline-block md:hidden">Privacy Policy</a> <p class="text-sm text-purple-900">&copy; MeanPug 2017 - 2026</p> </div> </div> </footer>`;
}, "D:/umair-work/side-projects/pitch-websites/mean-pug/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="content" class="site-content front-page"> ${renderComponent($$result2, "Header", $$Header, {})} <div id="primary" class="content-area"> <main id="main" class="site-main"> <article id="post-66" class="post-66 page type-page status-publish hentry"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Marquee", $$Marquee, {})} ${renderComponent($$result2, "Stats", $$Stats, {})} ${renderComponent($$result2, "AboutUs", $$AboutUs, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "SuccessHighlight", $$SuccessHighlight, {})} ${renderComponent($$result2, "BigImageHighlight", $$BigImageHighlight, {})} ${renderComponent($$result2, "Clients", $$Clients, {})} ${renderComponent($$result2, "PortfolioCarousel", $$PortfolioCarousel, {})} ${renderComponent($$result2, "CaseTypes", $$CaseTypes, {})} ${renderComponent($$result2, "OurProcess", $$OurProcess, {})} ${renderComponent($$result2, "TeamCarousel", $$TeamCarousel, {})} </article> </main> </div> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/umair-work/side-projects/pitch-websites/mean-pug/src/pages/index.astro", void 0);

const $$file = "D:/umair-work/side-projects/pitch-websites/mean-pug/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

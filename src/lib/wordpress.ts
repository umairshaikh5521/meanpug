/**
 * WordPress REST API client
 */

const BASE_URL = import.meta.env.WORDPRESS_API_URL as string;

if (!BASE_URL) {
    throw new Error("WORDPRESS_API_URL is not set in your .env file.");
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface WPPost {
    id: number;
    date: string;
    slug: string;
    status: string;
    link: string;
    title: { rendered: string };
    excerpt: { rendered: string };
    content: { rendered: string };
    featured_media: number;
    categories: number[];
    tags: number[];
    _embedded?: {
        "wp:featuredmedia"?: Array<{
            source_url: string;
            alt_text: string;
            media_details: {
                width: number;
                height: number;
                sizes: Record<string, { source_url: string; width: number; height: number }>;
            };
        }>;
        "wp:term"?: Array<Array<{ id: number; name: string; slug: string }>>;
        author?: Array<{ name: string; avatar_urls: Record<string, string> }>;
    };
}

export interface WPCategory {
    id: number;
    name: string;
    slug: string;
    count: number;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function fetchWP<T>(endpoint: string, params: Record<string, string | number> = {}): Promise<T> {
    const url = new URL(`${BASE_URL}/${endpoint}`);

    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, String(value));
    });

    const res = await fetch(url.toString());

    if (!res.ok) {
        throw new Error(`WordPress API error ${res.status}: ${url.toString()}`);
    }

    return res.json() as Promise<T>;
}

// ---------------------------------------------------------------------------
// Posts
// ---------------------------------------------------------------------------

/**
 * Fetch a paginated list of published posts.
 * Uses _embed so featured images and authors come in one request.
 */
export async function getPosts(options: {
    page?: number;
    perPage?: number;
    categoryId?: number;
    search?: string;
} = {}): Promise<WPPost[]> {
    const { page = 1, perPage = 10, categoryId, search } = options;

    const params: Record<string, string | number> = {
        _embed: 1,
        per_page: perPage,
        page,
        status: "publish",
    };

    if (categoryId) params.categories = categoryId;
    if (search) params.search = search;

    return fetchWP<WPPost[]>("posts", params);
}

/**
 * Fetch a single post by slug.
 */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
    const posts = await fetchWP<WPPost[]>("posts", { slug, _embed: 1, status: "publish" });
    return posts[0] ?? null;
}

/**
 * Fetch all post slugs — used by Astro's getStaticPaths for SSG.
 * Automatically pages through all posts in batches of 100.
 */
export async function getAllPostSlugs(): Promise<string[]> {
    const slugs: string[] = [];
    let page = 1;

    while (true) {
        const batch = await fetchWP<WPPost[]>("posts", {
            per_page: 100,
            page,
            status: "publish",
            fields: "slug",
        });

        if (batch.length === 0) break;
        slugs.push(...batch.map((p) => p.slug));
        if (batch.length < 100) break;
        page++;
    }

    return slugs;
}

// ---------------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------------

export async function getCategories(): Promise<WPCategory[]> {
    return fetchWP<WPCategory[]>("categories", { per_page: 100 });
}

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

/** Strip HTML tags from WP rendered content (for plain-text excerpts). */
export function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, "").trim();
}

/** Format a WP ISO date string to a human-readable date. */
export function formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

/** Get the best available featured image URL from a post. */
export function getFeaturedImageUrl(post: WPPost, size = "large"): string | null {
    const media = post._embedded?.["wp:featuredmedia"]?.[0];
    if (!media) return null;
    return media.media_details?.sizes?.[size]?.source_url ?? media.source_url;
}

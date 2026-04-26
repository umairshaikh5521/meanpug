const fs = require('fs');
const { parse } = require('node-html-parser');
const htmlStr = fs.readFileSync('blogs-details.html', 'utf8');
const root = parse(htmlStr);
const sidebarHtml = root.querySelector('aside#secondary') ? root.querySelector('aside#secondary').outerHTML : '';
const newAstroContent = `---
import Layout from "../../layouts/Layout.astro";
import Header from "../../components/Header.astro";
import Footer from "../../components/Footer.astro";
import { getAllPostSlugs, getPostBySlug, formatDate, getFeaturedImageUrl, stripHtml } from "../../lib/wordpress";

export async function getStaticPaths() {
    const slugs = await getAllPostSlugs();
    return slugs.map((slug) => ({ params: { slug } }));
}

const { slug } = Astro.params;
const post = await getPostBySlug(slug);

if (!post) {
    return Astro.redirect("/blog/");
}

const image = getFeaturedImageUrl(post, "large");
const imageAlt = post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered;
const author = post._embedded?.author?.[0];
const categories = post._embedded?.["wp:term"]?.[0] ?? [];
const plainExcerpt = stripHtml(post.excerpt.rendered);
---

<Layout
    title={\`\${stripHtml(post.title.rendered)} | MeanPug Blog\`}
    description={plainExcerpt.slice(0, 160)}
    ogImage={image ?? "/og-image.png"}
>
    <Header />

    <main id="main" class="site-main bg-yellow">
        <header class="container mx-auto md:pt-8">
            <div class="overflow-hidden">
                {image && (
                    <img
                        src={image}
                        alt={imageAlt}
                        class="w-full mp-post-header-image max-h-[40rem] object-cover object-center wp-post-image"
                        loading="eager"
                        decoding="async"
                    />
                )}
            </div>
            <div class="pt-4 md:pt-8 pb-4 md:pb-0 mp-breadcrumbs mp-mobile-bounds">
                <p id="breadcrumbs">
                    <span>
                        <span><a href="/">Home</a></span> &gt;
                        <span><a href="/blog/">Drawing Board</a></span> &gt;
                        <span class="breadcrumb_last" aria-current="page">
                            <strong set:html={post.title.rendered} />
                        </span>
                    </span>
                </p>
            </div>
            <div class="border-t-3 border-b-3 border-purple py-6 md:my-6 md:flex mp-mobile-bounds">
                <div class="md:w-1/3">
                    <h1 class="text-purple mp-header--3xl font-bold" set:html={post.title.rendered} />
                    {categories.length > 0 && (
                        <ul class="pt-2 md:pt-8 flex flex-wrap gap-4">
                            {categories.map((cat) => (
                                <li class="text-sm text-purple underline font-bold">
                                    {cat.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div class="md:w-2/3 md:px-16">
                    <div class="text-purple-900 py-3 md:py-0" set:html={post.excerpt.rendered} />
                    
                    <div class="flex justify-between items-center text-sm text-purple pt-12">
                        {author && (
                            <a href={\`/team/\${author.slug}/\`}>
                                <strong>by {author.name}</strong>
                            </a>
                        )}
                        <strong>{formatDate(post.date)}</strong>
                    </div>
                </div>
            </div>
        </header>

        <div class="flex flex-col md:flex-row container mx-auto py-6 md:py-12 nitro-offscreen">
            <aside class="w-full md:w-1/3 xl:w-1/4 pr-0 md:pr-6 xl:pr-12 order-last md:order-first">
                ${sidebarHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$')}
            </aside>
            <div class="w-full md:w-2/3 xl:w-3/4 md:pl-8 order-first md:order-last mp-mobile-bounds overflow-hidden">
                <article class="mp-core-style mp-content-style">
                    <div class="post-content wp-content" set:html={post.content.rendered} />
                </article>
            </div>
        </div>
    </main>

    <Footer />
</Layout>

<style is:global>
    .wp-content h2 { font-size: 1.6rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem; color: #3b1c6a; }
    .wp-content h3 { font-size: 1.3rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 0.75rem; color: #3b1c6a; }
    .wp-content p { margin-bottom: 1.5rem; line-height: 1.8; color: #3b1c6a; }
    .wp-content ul { list-style: disc; margin-left: 1.5rem; margin-bottom: 1.5rem; color: #3b1c6a; }
    .wp-content a { color: #3b1c6a; text-decoration: underline; }
    .wp-content img { max-width: 100%; height: auto; border-radius: 0.5rem; margin: 1.5rem 0; }
    .wp-content figure { margin: 1.5rem 0; }
</style>
`;
fs.writeFileSync('src/pages/blog/[slug].astro', newAstroContent);

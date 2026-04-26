const fs = require('fs');

const sidebarHtml = `
                  <section id="mp_page_link_widget-2" class="widget widget_mp_page_link_widget">
                    <div class="pl-4 lg:pl-8 pr-3 lg:pr-12 py-8 bg-purple relative">
                      <video class="absolute left-0 top-0 w-full h-full z-0 object-cover object-center" autoplay="" loop="">
                        <source src="https://media-v2.meanpug.com/wp-content/uploads/2021/09/Integration-Matters-Tetris-Video-1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div class="relative z-10">
                        <h2 class="text-purple-900 font-bold text-xl">
                          Our Marketing Services
                        </h2>
                        <hr class="w-16 my-3 border-2 border-purple-900" />
                        <div>
                          <div class="mp-header mp-header--xl text-purple-900">
                            <p>All Marketing Solutions Under One Roof</p>
                          </div>
                          <div class="flex items-center justify-between pt-4">
                            <a href="https://www.meanpug.com/what-we-offer/" class="mp-play-button">
                              <span> Play </span>
                            </a>
                            <a class="flex items-center font-bold text-sm text-purple-900 hover:text-purple transition-transform transform hover:scale-110 mp-link mp-link--ic hover:mp-link--ic--purple" href="https://www.meanpug.com/contact-us/">
                              <img alt="plus icon" src="https://www.meanpug.com/nitropack_static/xJpSgNrHbfNOIFyuwXrXqbYpwhUUWPCC/assets/images/optimized/rev-3230c95/media-v2.meanpug.com/wp-content/themes/meanpug-theme-v2/assets/images/icons/ic-plus-circle-purple-900.svg" class="mp-link--ic__ic lazyloaded" decoding="async" />
                              <span class="ml-2 md:ml-4 inline-block underline pt-1">
                                Chat Now
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section id="mp_post_carousel_widget-2" class="widget widget_mp_post_carousel_widget">
                    <div class="pt-8 pb-4 lg:pb-0 overflow-hidden" id="mp-post-carousel-widget">
                      <div class="flex justify-between items-center px-2 md:px-0">
                        <h2 class="text-xl font-bold text-purple-900">
                          Popular Posts
                        </h2>
                        <div class="flex items-center">
                          <img alt="Left Caret Icon" src="https://www.meanpug.com/nitropack_static/xJpSgNrHbfNOIFyuwXrXqbYpwhUUWPCC/assets/images/optimized/rev-3230c95/media-v2.meanpug.com/wp-content/themes/meanpug-theme-v2/assets/images/icons/ic-caret-left-purple-dark.svg" class="mp-carousel-btn mp-carousel-btn--prev mr-3 lazyloaded" decoding="async" />
                          <img alt="Right Caret Icon" src="https://www.meanpug.com/nitropack_static/xJpSgNrHbfNOIFyuwXrXqbYpwhUUWPCC/assets/images/optimized/rev-3230c95/media-v2.meanpug.com/wp-content/themes/meanpug-theme-v2/assets/images/icons/ic-caret-right-purple-dark-2.svg" class="mp-carousel-btn mp-carousel-btn--next lazyloaded" decoding="async" />
                        </div>
                      </div>
                      <div class="pt-2">
                        <div class="mp-carousel glide glide--ltr glide--carousel glide--swipeable" id="mp-post-carousel-widget-carousel">
                          <div class="glide__track" data-glide-el="track">
                            <ul class="flex glide__slides" style="transition: transform cubic-bezier(0.165, 0.84, 0.44, 1); width: 1400px; transform: translate3d(-282px, 0px, 0px);">
                              <li class="mp-service glide__slide glide__slide--active" style="width: 272px; margin-left: 5px; margin-right: 5px;">
                                <img width="300" height="113" alt="A pug wearing a red shirt is held upright by human hands." src="https://www.meanpug.com/nitropack_static/xJpSgNrHbfNOIFyuwXrXqbYpwhUUWPCC/assets/images/optimized/rev-3230c95/media-v2.meanpug.com/wp-content/uploads/2025/03/Featured_Image-300x113.jpg" class="w-full wp-post-image lazyloaded" decoding="async" />
                                <a href="https://www.meanpug.com/a-definitive-study-on-law-firm-website-color-choices-2025/">
                                  <strong class="pt-2 block text-lg text-purple px-2 md:px-0">
                                    A Definitive Study on Law Firm Website Color Choices (2025)
                                  </strong>
                                </a>
                                <div class="pt-2 md:pt-4 px-2 md:px-0">
                                  <a href="https://www.meanpug.com/a-definitive-study-on-law-firm-website-color-choices-2025/" class="text-purple-900 hover:text-purple mp-link mp-link--caret flex items-center justify-end text-xs font-bold" title="A Definitive Study on Law Firm Website Color Choices (2025)">
                                    <span class="underline">Read More</span>
                                    <img alt="right caret icon" src="https://www.meanpug.com/nitropack_static/xJpSgNrHbfNOIFyuwXrXqbYpwhUUWPCC/assets/images/optimized/rev-3230c95/media-v2.meanpug.com/wp-content/themes/meanpug-theme-v2/assets/images/icons/ic-caret-right-purple-dark.svg" class="mp-link--caret__ic ml-2 lazyloaded" decoding="async" />
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section id="mp_download_widget-2" class="widget widget_mp_download_widget">
                    <div class="pb-3 md:pb-8 md:pt-2">
                      <div class="bg-purple px-4 lg:px-8 py-6 lg:py-8">
                        <h2 class="text-yellow font-bold text-xl">
                          Useful Resources
                        </h2>
                        <hr class="w-16 border-2 border-yellow my-4" />
                        <div class="text-white text-xl">
                          <h3>
                            <strong>How to Pick A New Marketing Partner</strong>
                          </h3>
                        </div>
                      </div>
                      <div>
                        <a href="https://media-v2.meanpug.com/wp-content/uploads/2022/11/Choosing-a-New-Law-Firm-Marketing-Vendor.pdf" class="mp-cursor mp-cursor-paw--download-paw-dark overflow-hidden block max-h-48">
                          <img width="300" height="200" alt="designed purple PDF of MeanPug marketing vendor checklist on yellow background" src="https://www.meanpug.com/nitropack_static/xJpSgNrHbfNOIFyuwXrXqbYpwhUUWPCC/assets/images/optimized/rev-3230c95/media-v2.meanpug.com/wp-content/uploads/2022/11/choosing-a-marketing-vendor-cover-image-300x200.png" class="w-full mp-animation mp-animation--scale-hover mp-animation--scale-hover--110 wp-post-image lazyloaded" decoding="async" />
                        </a>
                      </div>
                    </div>
                  </section>
                  <section id="mp_social_share_widget-2" class="mp-last-widget-sticky sticky top-32 widget widget_mp_social_share_widget">
                    <div class="py-3 md:py-8 px-4 md:px-0">
                      <strong class="text-purple-900">Share This Post</strong>
                      <ul class="flex items-center pt-4">
                        <li>
                          <button class="mp-link mp-link--circle-expand mp-share-button relative" data-target="facebook">
                            <img alt="Facebook Follow Icon" src="https://www.meanpug.com/nitropack_static/xJpSgNrHbfNOIFyuwXrXqbYpwhUUWPCC/assets/images/optimized/rev-3230c95/media-v2.meanpug.com/wp-content/themes/meanpug-theme-v2/assets/images/icons/ic-fb-purple.svg" class="h-8 relative z-10 lazyloaded" decoding="async" />
                          </button>
                        </li>
                        <li class="px-8">
                          <button data-target="linkedin" class="mp-link mp-link--circle-expand mp-share-button relative lazyloaded">
                            <img alt="LinkedIn Follow Icon" src="https://www.meanpug.com/nitropack_static/xJpSgNrHbfNOIFyuwXrXqbYpwhUUWPCC/assets/images/optimized/rev-3230c95/media-v2.meanpug.com/wp-content/themes/meanpug-theme-v2/assets/images/icons/ic-linkedin-purple.svg" class="h-8 relative z-10 lazyloaded" decoding="async" />
                          </button>
                        </li>
                        <li>
                          <a class="mp-link mp-link--circle-expand relative block" target="_blank" href="https://www.instagram.com/meanpugdigital/">
                            <img alt="Instagram Follow Icon" src="https://www.meanpug.com/nitropack_static/xJpSgNrHbfNOIFyuwXrXqbYpwhUUWPCC/assets/images/optimized/rev-3230c95/media-v2.meanpug.com/wp-content/themes/meanpug-theme-v2/assets/images/icons/ic-ig-purple.svg" class="h-6 relative z-10 lazyloaded" decoding="async" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </section>
`;

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
                <aside id="secondary" class="widget-area">
                    ${sidebarHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$')}
                </aside>
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
console.log("Updated!");

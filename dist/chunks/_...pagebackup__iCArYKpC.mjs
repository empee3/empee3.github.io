/* empty css                          */
import { e as createAstro, a as createComponent, b as renderTemplate, d as renderComponent, m as maybeRenderHead, F as Fragment, f as addAttribute } from './astro/server_DTb14bo2.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_BpgAKuZb.mjs';
import { $ as $$HorizontalCard } from './HorizontalCard_CzN7nOrY.mjs';
import { g as getCollection } from './_astro_content_JUF2Qu4R.mjs';
import { c as createSlug } from './createSlug_D-iatWqU.mjs';

const $$Astro = createAstro("https://astrofy-template.netlify.app");
async function getStaticPaths({ paginate }) {
  const posts = await getCollection("blog");
  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return paginate(posts, { pageSize: 10 });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog", "sideBarActiveItemID": "blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-5"> <h1 class="text-3xl w-full font-bold">Blog</h1> </div> <div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "A Guide to Accessibility Resources for Global Accessibility Awareness Day", "img": "/blogs/thumb_ally.webp", "url": "https://www.viget.com/articles/global-accessibility-awareness-day/", "tags": ["a11y"] })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "A Case for CSS Columns vs. CSS Grid with Tailwind", "img": "/blogs/thumb_css.webp", "url": "https://www.viget.com/articles/a-case-for-css-columns-vs-css-grid-with-tailwind/", "tags": ["CSS", "UI"] })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Overcoming Anxiety in Code Reviews", "img": "/blogs/thumb_anxiety.webp", "url": "https://www.viget.com/articles/overcoming-anxiety-in-code-reviews/", "tags": ["General"] })} </div> ${page.data.length === 0 ? renderTemplate`<div class="bg-base-200 border-l-4 border-secondary w-full p-4 min-w-full"> <p class="font-bold">Sorry!</p> <p>There are no blog posts to show at the moment. Check back later!</p> </div>` : renderTemplate`<ul> ${page.data.map((post) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "HorizontalCard", $$HorizontalCard, { "title": post.data.title, "img": post.data.heroImage, "desc": post.data.description, "url": "/blog/" + createSlug(post.data.title, post.slug), "target": "_self", "badge": post.data.badge, "tags": post.data.tags })} <div class="divider my-0"></div> ` })}`)} </ul>`}<div class="flex justify-between"> ${page.url.prev ? renderTemplate`<a${addAttribute(page.url.prev, "href")} class="btn btn-ghost my-10 mx-5"> ${" "} <svg class="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path> </svg>${" "}
Recent posts
</a>` : renderTemplate`<div></div>`} ${page.url.next ? renderTemplate`<a${addAttribute(page.url.next, "href")} class="btn btn-ghost my-10 mx-5">
Older Posts${" "} <svg class="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> ${" "} <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path> </svg> </a>` : renderTemplate`<div></div>`} </div> ` })}`;
}, "/Users/melissapiper/Documents/personal/astrofy/src/pages/blog/[...pagebackup].astro", void 0);

const $$file = "/Users/melissapiper/Documents/personal/astrofy/src/pages/blog/[...pagebackup].astro";
const $$url = "/blog/[...pagebackup]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };

/* empty css                          */
import { e as createAstro, a as createComponent, b as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_DTb14bo2.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_BpgAKuZb.mjs';
import { $ as $$HorizontalCard } from './HorizontalCard_CzN7nOrY.mjs';
import { g as getCollection } from './_astro_content_JUF2Qu4R.mjs';

const $$Astro = createAstro("https://astrofy-template.netlify.app");
async function getStaticPaths({ paginate }) {
  const posts = await getCollection("blog");
  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return paginate(posts, { pageSize: 10 });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog", "sideBarActiveItemID": "blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-5"> <h1 class="text-3xl w-full font-bold">Blog</h1> </div> <div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "A Guide to Accessibility Resources for Global Accessibility Awareness Day", "img": "/blogs/thumb_ally.webp", "url": "https://www.viget.com/articles/global-accessibility-awareness-day/", "tags": ["a11y"] })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "A Case for CSS Columns vs. CSS Grid with Tailwind", "img": "/blogs/thumb_css.webp", "url": "https://www.viget.com/articles/a-case-for-css-columns-vs-css-grid-with-tailwind/", "tags": ["CSS", "UI"] })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Overcoming Anxiety in Code Reviews", "img": "/blogs/thumb_anxiety.webp", "url": "https://www.viget.com/articles/overcoming-anxiety-in-code-reviews/", "tags": ["General"] })} </div> ` })}`;
}, "/Users/melissapiper/Documents/personal/astrofy/src/pages/blog/[...page].astro", void 0);

const $$file = "/Users/melissapiper/Documents/personal/astrofy/src/pages/blog/[...page].astro";
const $$url = "/blog/[...page]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };

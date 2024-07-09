/* empty css                          */
import { a as createComponent, b as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_DTb14bo2.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_BpgAKuZb.mjs';
import { $ as $$HorizontalCard } from './HorizontalCard_CzN7nOrY.mjs';
import { g as getCollection } from './_astro_content_JUF2Qu4R.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  posts.slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "sideBarActiveItemID": "home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pb-12 mt-5"> <div class="text-xl py-1">Hey there 👋</div> <h1 class="text-5xl font-bold">Melissa Piper</h1> <div class="text-3xl py-3 font-bold">
Front-End/UI Developer | a11y Specialist
</div> <div class="py-2"> <p class="text-lg mb-6">
Hello! I'm Melissa, and I am a front-end engineer with over 17 years of experience developing for various industries, including higher education, nonprofits, services, and retail. I am an advocate for inclusiveness and accessibility throughout the web, and develop with the mindset that the internet is for everyone. I enjoy working on the subtle nuances that elevate a good website to a great website. I enjoy working on projects that use CMSs such as Drupal and WordPress, but also love working on a good UI using nothing but semantic HTML, CSS, and JavaScript.</p> <p class="text-lg">When I'm not working on websites, I enjoy watching baseball and <a class="underline hover:no-underline" href="https://www.instagram.com/empee3/">drawing wildlife</a>.</p> </div> </div> <div> <h2 class="text-3xl w-full font-bold mb-5 mt-10">Latest from blog</h2> </div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "A Guide to Accessibility Resources for Global Accessibility Awareness Day", "img": "/blogs/thumb_ally.webp", "url": "https://www.viget.com/articles/global-accessibility-awareness-day/", "tags": ["a11y"] })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "A Case for CSS Columns vs. CSS Grid with Tailwind", "img": "/blogs/thumb_css.webp", "url": "https://www.viget.com/articles/a-case-for-css-columns-vs-css-grid-with-tailwind/", "tags": ["CSS", "UI"] })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Overcoming Anxiety in Code Reviews", "img": "/blogs/thumb_anxiety.webp", "url": "https://www.viget.com/articles/overcoming-anxiety-in-code-reviews/", "tags": ["General"] })} ` })}`;
}, "/Users/melissapiper/Documents/personal/astrofy/src/pages/index.astro", void 0);

const $$file = "/Users/melissapiper/Documents/personal/astrofy/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

/* empty css                          */
import { e as createAstro, a as createComponent, b as renderTemplate, d as renderComponent, m as maybeRenderHead, f as addAttribute, g as renderSlot } from './astro/server_DTb14bo2.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_JUF2Qu4R.mjs';
import { a as $$Image, $ as $$BaseLayout } from './BaseLayout_BpgAKuZb.mjs';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat.js';
import '@astrojs/internal-helpers/path';

const $$Astro$1 = createAstro("https://astrofy-template.netlify.app");
const $$StoreItemLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$StoreItemLayout;
  const {
    title,
    description,
    updatedDate,
    heroImage,
    pricing,
    oldPricing,
    checkoutUrl,
    badge,
    custom_link,
    custom_link_label
  } = Astro2.props;
  dayjs.extend(localizedFormat);
  dayjs(updatedDate).format("ll");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "image": heroImage }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="md:flex md:justify-center"> <article class="prose prose-lg max-w-[750px] prose-img:mx-auto"> ${heroImage && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "width": 750, "height": 422, "format": "webp", "src": heroImage, "alt": title, "class": "w-full mb-6" })}`} <div class=""> <h1 class="title my-2 text-4xl font-bold"> ${title} ${badge && renderTemplate`<div class="badge badge-secondary mx-2">${badge}</div>`} </h1> <div class="flex place-content-between items-center"> <div class="grow md:grow-0"> <span class="text-xl mr-1"> ${pricing}</span> <span class="text-md opacity-50 line-through">${oldPricing}</span> </div> <div> ${custom_link && renderTemplate`<a class="btn btn-outline grow md:grow-0 ml-4"${addAttribute(custom_link, "href")} target="_blank"> ${custom_link_label} </a>`} <a class="btn btn-primary grow md:grow-0 ml-4"${addAttribute(checkoutUrl, "href")} target="_blank">Buy Now</a> </div> </div> </div> <div class="divider my-2"></div> ${renderSlot($$result2, $$slots["default"])} </article> </main> ` })}`;
}, "/Users/melissapiper/Documents/personal/astrofy/src/layouts/StoreItemLayout.astro", void 0);

const $$Astro = createAstro("https://astrofy-template.netlify.app");
async function getStaticPaths() {
  const itemEntries = await getCollection("store");
  return itemEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const item = entry.data;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "StoreItemLayout", $$StoreItemLayout, { "title": item.title, "description": item.description, "heroImage": item.heroImage, "updatedDate": item.updatedDate, "heroImage": item.heroImage, "pricing": item.pricing, "oldPricing": item.oldPricing, "checkoutUrl": item.checkoutUrl, "badge": item.badge, "custom_link": item.custom_link, "custom_link_label": item.custom_link_label }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/melissapiper/Documents/personal/astrofy/src/pages/store/[slug].astro", void 0);

const $$file = "/Users/melissapiper/Documents/personal/astrofy/src/pages/store/[slug].astro";
const $$url = "/store/[slug]";

export { $$slug as default, $$file as file, getStaticPaths, $$url as url };

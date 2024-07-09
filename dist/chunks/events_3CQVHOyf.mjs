/* empty css                          */
import { a as createComponent, b as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_DTb14bo2.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_BpgAKuZb.mjs';

const $$Events = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Events", "sideBarActiveItemID": "events" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <h1 class="text-3xl w-full font-bold mb-5">Events</h1> </div> <p>No events yet.</p> ` })}`;
}, "/Users/melissapiper/Documents/personal/astrofy/src/pages/events.astro", void 0);

const $$file = "/Users/melissapiper/Documents/personal/astrofy/src/pages/events.astro";
const $$url = "/events";

export { $$Events as default, $$file as file, $$url as url };

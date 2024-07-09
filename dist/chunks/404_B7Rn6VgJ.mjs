/* empty css                          */
import { a as createComponent, b as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_DTb14bo2.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_BpgAKuZb.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "404: Not Found", "includeSidebar": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center"> <h1 class="text-9xl font-bold mb-4">🏝</h1> <h1 class="text-9xl font-bold mb-2">404</h1> <h3 class="text-2xl">The page you're looking for couldn't be found.</h3> <a class="btn btn-accent mt-9" href="/">Home</a> </div> ` })}`;
}, "/Users/melissapiper/Documents/personal/astrofy/src/pages/404.astro", void 0);

const $$file = "/Users/melissapiper/Documents/personal/astrofy/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };

import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_DTb14bo2.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"file:///Users/melissapiper/Documents/personal/astrofy/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/melissapiper/Documents/personal/astrofy/dist/cv/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cv","isIndex":false,"type":"page","pattern":"^\\/cv\\/?$","segments":[[{"content":"cv","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cv.astro","pathname":"/cv","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/melissapiper/Documents/personal/astrofy/dist/events/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/events","isIndex":false,"type":"page","pattern":"^\\/events\\/?$","segments":[[{"content":"events","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/events.astro","pathname":"/events","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/melissapiper/Documents/personal/astrofy/dist/projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/melissapiper/Documents/personal/astrofy/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/melissapiper/Documents/personal/astrofy/dist/services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/melissapiper/Documents/personal/astrofy/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://astrofy-template.netlify.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/melissapiper/Documents/personal/astrofy/src/pages/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/melissapiper/Documents/personal/astrofy/src/pages/blog/[...pagebackup].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...pagebackup]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/melissapiper/Documents/personal/astrofy/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/melissapiper/Documents/personal/astrofy/src/pages/blog/tag/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/tag/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/melissapiper/Documents/personal/astrofy/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/melissapiper/Documents/personal/astrofy/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["/Users/melissapiper/Documents/personal/astrofy/src/pages/store/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/store/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/melissapiper/Documents/personal/astrofy/src/pages/store/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/store/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/melissapiper/Documents/personal/astrofy/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/melissapiper/Documents/personal/astrofy/src/pages/cv.astro",{"propagation":"none","containsHead":true}],["/Users/melissapiper/Documents/personal/astrofy/src/pages/events.astro",{"propagation":"none","containsHead":true}],["/Users/melissapiper/Documents/personal/astrofy/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["/Users/melissapiper/Documents/personal/astrofy/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/blog/tag/[tag]/[...page]@_@astro":"pages/blog/tag/_tag_/_---page_.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/[...page]@_@astro":"pages/blog/_---page_.astro.mjs","\u0000@astro-page:src/pages/blog/[...pagebackup]@_@astro":"pages/blog/_---pagebackup_.astro.mjs","\u0000@astro-page:src/pages/cv@_@astro":"pages/cv.astro.mjs","\u0000@astro-page:src/pages/events@_@astro":"pages/events.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/store/[slug]@_@astro":"pages/store/_slug_.astro.mjs","\u0000@astro-page:src/pages/store/[...page]@_@astro":"pages/store/_---page_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_6tnFxzUF.mjs","/src/pages/404.astro":"chunks/404_B7Rn6VgJ.mjs","/src/pages/blog/tag/[tag]/[...page].astro":"chunks/_...page__D5OtkV68.mjs","/src/pages/blog/[slug].astro":"chunks/_slug__DTnZyb3I.mjs","/src/pages/blog/[...page].astro":"chunks/_...page__D4YcePQj.mjs","/src/pages/blog/[...pagebackup].astro":"chunks/_...pagebackup__iCArYKpC.mjs","/src/pages/cv.astro":"chunks/cv_DOmvIc4b.mjs","/src/pages/events.astro":"chunks/events_3CQVHOyf.mjs","/src/pages/projects.astro":"chunks/projects_DXEmZt_n.mjs","/src/pages/rss.xml.js":"chunks/rss.xml_B2YSi9MN.mjs","/src/pages/services.astro":"chunks/services_CF8LycW0.mjs","/src/pages/store/[slug].astro":"chunks/_slug__NQ940JbD.mjs","/src/pages/store/[...page].astro":"chunks/_...page__BfE6Jkm8.mjs","/src/pages/index.astro":"chunks/index_Bn56u8md.mjs","/Users/melissapiper/Documents/personal/astrofy/src/content/blog/post1.md?astroContentCollectionEntry=true":"chunks/post1_DLNfT77z.mjs","/Users/melissapiper/Documents/personal/astrofy/src/content/blog/post2.md?astroContentCollectionEntry=true":"chunks/post2_Bz4MSg79.mjs","/Users/melissapiper/Documents/personal/astrofy/src/content/blog/post3.md?astroContentCollectionEntry=true":"chunks/post3_CkPdQAVZ.mjs","/Users/melissapiper/Documents/personal/astrofy/src/content/blog/post1.md?astroPropagatedAssets":"chunks/post1_De8Ejouq.mjs","/Users/melissapiper/Documents/personal/astrofy/src/content/blog/post2.md?astroPropagatedAssets":"chunks/post2_U1oJBpox.mjs","/Users/melissapiper/Documents/personal/astrofy/src/content/blog/post3.md?astroPropagatedAssets":"chunks/post3_BRw6Zp6k.mjs","/Users/melissapiper/Documents/personal/astrofy/src/content/blog/post1.md":"chunks/post1_U_Djp5az.mjs","/Users/melissapiper/Documents/personal/astrofy/src/content/blog/post2.md":"chunks/post2_DYe8sSWz.mjs","/Users/melissapiper/Documents/personal/astrofy/src/content/blog/post3.md":"chunks/post3_FpyIM11d.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Oozc_hRb.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///Users/melissapiper/Documents/personal/astrofy/dist/404.html","/file:///Users/melissapiper/Documents/personal/astrofy/dist/cv/index.html","/file:///Users/melissapiper/Documents/personal/astrofy/dist/events/index.html","/file:///Users/melissapiper/Documents/personal/astrofy/dist/projects/index.html","/file:///Users/melissapiper/Documents/personal/astrofy/dist/rss.xml","/file:///Users/melissapiper/Documents/personal/astrofy/dist/services/index.html","/file:///Users/melissapiper/Documents/personal/astrofy/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { manifest };

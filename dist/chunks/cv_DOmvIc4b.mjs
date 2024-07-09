/* empty css                          */
import { e as createAstro, a as createComponent, b as renderTemplate, m as maybeRenderHead, g as renderSlot, d as renderComponent } from './astro/server_DTb14bo2.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_BpgAKuZb.mjs';
import 'clsx';

const $$Astro = createAstro("https://astrofy-template.netlify.app");
const $$TimeLine = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TimeLine;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex"> <div class="education__time"> <span class="w-4 h-4 bg-primary block rounded-full mt-1"></span> <span class="education__line bg-primary block h-full w-[2px] translate-x-[7px]"></span> </div> <div class="experience__data bd-grid px-5"> <h3 class="font-semibold mb-1">${title}</h3> <span class="font-light text-sm">${subtitle}</span> <p class="my-2 text-justify"> ${renderSlot($$result, $$slots["default"])} </p> </div> </div>`;
}, "/Users/melissapiper/Documents/personal/astrofy/src/components/cv/TimeLine.astro", void 0);

const $$Cv = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Resume", "sideBarActiveItemID": "cv" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-5"> <h1 class="text-3xl w-full font-bold">Profile</h1> </div> <div class="mb-10 text-justify">
Front-End Developer with extensive experience across various industries,
    including higher education, nonprofits, service sectors, and retail.
    Passionate advocate for inclusiveness and accessibility in web development,
    dedicated to the principle that the internet is for everyone. Skilled in
    creating user-friendly, responsive, and visually appealing web applications
    using HTML, CSS, JavaScript, and modern front-end frameworks including
    React.js. Proven ability to deliver high-quality, scalable, and maintainable
    code. Strong collaborator with a track record of working effectively with
    teams to achieve project goals and enhance user experience. Committed to
    staying current with emerging technologies and best practices in web
    development.
</div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Experience</div> </div> <div class="time-line-container mb-10"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "UI Developer, Viget", "subtitle": "April 2023 - June 2024, Remote" }, { "default": ($$result3) => renderTemplate` <ul class="list-disc mx-6 mb-10 grid gap-2"> <li>
Developed and maintained flexible components for a major parts
          manufacturer’s website in Craft CMS, and was responsible for the UI
          updates for major component refresh
</li> <li>
Contributed to organization’s WordPress starter repo and helped
          developed reusable WordPress components
</li> <li>Participated in company’s Accessibility Working Group</li> <li>Tested own and peer work for WCAG compliance</li> <li>
Wrote for the company’s blog, and gave company-wide presentation on
          latest accessibility laws
</li> </ul> ` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Developer II, Sparkbox", "subtitle": "September 2022 - February 2023, Remote" }, { "default": ($$result3) => renderTemplate` <ul class="list-disc mx-6 mb-10 grid gap-2"> <li>
Developed components and updated existing components for the design
          system of a Fortune 500 company using TypeScript, React and Storybook
</li> <li>
Imported content from Contentful CMS into React Storybook app to
          maintain a decoupled site experience
</li> <li>
Maintained and themed website for a top-ranked private university
          using Drupal multisite
</li> <li>
Applied critical security updates and maintained configuration updates
          between environments in Drupal for a top-ten tire retailer
</li> <li>
Improved the performance of WordPress client sites by reducing the
          JavaScript libraries loaded per page, as well as generating critical
          path CSS
</li> <li>
Participated in code reviews with Sparkbox developers as well as
          client-side developers via Github
</li> <li>Tested websites for WCAG compliance</li> <li>
Mentored apprentice developers and led lesson on how to develop
          accessible websites with semantic HTML
</li> </ul> ` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Front-End Developer, Elliance", "subtitle": "August 2018 - August 2022, Pittsburgh PA" }, { "default": ($$result3) => renderTemplate` <ul class="list-disc mx-6 mb-10 grid gap-2"> <li>
Developed and maintained the front-end of client websites, microsites,
          and landing pages, paying close attention to usability and
          accessibility
</li> <li>
Wrote semantic HTML and SASS/CSS to be utilized in the front-end of
          Drupal and WordPress client websites
</li> <li>
Updated functionality within Drupal templates using Twig, and updated
          modules using Composer
</li> <li>Tested websites for WCAG compliance</li> <li>
Collaborated with designers to determine transitions/animations to be
          used in single-page marketing pieces (landing pages and microsites)
</li> </ul> ` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Front-End Developer, Level Agency", "subtitle": "August 2017 - July 2018, Pittsburgh PA" }, { "default": ($$result3) => renderTemplate` <ul class="list-disc mx-6 mb-10 grid gap-2"> <li>
Worked on RESTful API integration with major CRM platforms, including
          Netsuite and Infusionsoft
</li> <li>
Updated and maintained existing client and internal WordPress
          websites, hosted on WPEngine
</li> <li>Configured content types in WordPress using ACF plugin</li> <li>Provided project estimates and POVs</li> </ul> ` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Front-End / Drupal Developer, Beyond Spots & Dots", "subtitle": "May 2014 - July 2017, Pittsburgh PA" }, { "default": ($$result3) => renderTemplate` <ul class="list-disc mx-6 mb-10 grid gap-2"> <li>
Developed and maintained client and internal websites, primarily using
          Drupal
</li> <li>
Constructed custom Drupal themes, configured Views, and setup
          configurations in Drupal per client site
</li> <li>
Built a custom-built internal project management system in Drupal 7
          that was used company-wide
</li> <li>Managed hosting of client sites on Acquia and Pantheon</li> <li>Maintained legacy sites developed using PHP and jQuery</li> </ul> ` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Front-End Engineer, Branding Brand", "subtitle": "October 2013 - March 2014, Pittsburgh PA" }, { "default": ($$result3) => renderTemplate` <ul class="list-disc mx-6 mb-10 grid gap-2"> <li>
Worked on front-end customization of mobile-only ecommerce websites
          for major retailers across the United States during preparation for
          Black Friday sales.
</li> </ul> ` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Web Production Specialist/Front-End Developer, NuRelm", "subtitle": "June 2007 - October 2013, Uniontown PA" }, { "default": ($$result3) => renderTemplate` <ul class="list-disc mx-6 mb-10 grid gap-2"> <li>
Developed websites for for-profit and non-profit organizations using
          open-source CMSes (Drupal, WordPress, Umbraco) for user-side content
          management
</li> <li>
Focused on PSD to HTML, CSS, JSP, and Javascript theming and
          development
</li> <li>Integrated and maintained NuRelm's proprietary CMS, NuContent</li> <li>Led initiative to develop for mobile website experiences</li> <li>
Performed day-to-day maintenance and troubleshooting on current client
          and internal websites
</li> </ul> ` })} </div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Education</div> </div> <div class="time-line-container grid gap-4 mb-10"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Graduate Certificate", "subtitle": "California University of Pennsylvania (now PennWest California), California, PA" })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Bachelor of Science in Applied Computer Science", "subtitle": "California University of Pennsylvania (now PennWest California), California, PA" })} </div>  <div class="mb-5"> <div class="text-3xl w-full font-bold">Skills</div> </div> <ul class="list-disc md:columns-5 columns-2 mx-6"> <li>HTML</li> <li>CSS</li> <li>SASS</li> <li>Tailwind</li> <li>PHP</li> <li>JavaScript</li> <li>jQuery</li> <li>Node.js</li> <li>React.js</li> <li>TypeScript</li> <li>Alpine.js</li> <li>Drupal</li> <li>WordPress</li> <li>Gutenberg</li> <li>Craft CMS</li> <li>Sanity.io CMS</li> <li>Headless CMS</li> <li>Composer</li> <li>Twig</li> <li>Git</li> <li>Github</li> <li>Docker</li> <li>npm</li> <li>Webpack</li> <li>Vite</li> <li>Gatsby</li> <li>Sketch</li> <li>Figma</li> <li>Storybook</li> <li>JIRA</li> <li>Basecamp</li> <li>a11y</li> <li>WCAG</li> <li>Pantheon</li> <li>Acquia</li> <li>WPEngine</li> </ul> ` })}`;
}, "/Users/melissapiper/Documents/personal/astrofy/src/pages/cv.astro", void 0);

const $$file = "/Users/melissapiper/Documents/personal/astrofy/src/pages/cv.astro";
const $$url = "/cv";

export { $$Cv as default, $$file as file, $$url as url };

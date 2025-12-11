// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from "@lorenzo_lewis/starlight-utils";

export default defineConfig({
  integrations: [
    starlight({
      title: 'KUWoC',
      description: 'KU Winter of Code is an event where organizations collaborate with KUOSC to foster the opensource culture.', 
		customCss:[
			'./src/styles/custom.css',
			'@fontsource/pixelify-sans/400.css',
		],
      sidebar: [{
		  label:"leadingNavLinks",
		  items:['contribute' , 'organizations']
	  }], 
     plugins: [
       starlightUtils({
         navLinks: {
           leading: { useSidebarLabelled: "leadingNavLinks" }
         }
       })
     ],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/kuosc2005' }
      ],
      pagination: false,
      pagefind: false,
		components:{
			Footer:'./src/components/Footer.astro',
		},
    }),
  ],
});

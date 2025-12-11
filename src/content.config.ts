import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};


	// <Card title="" icon="edit">
	// 	Edit `src/content/docs/index.mdx` to see this page change.
	// </Card>

	// <Card title="Change page layout" icon="layout-sidebar">
	// 	Delete `template: splash` in `src/content/docs/index.mdx` to display a sidebar on this page.
	// </Card>

	// <Card title="Add new content" icon="file-plus">
	// 	Add Markdown or MDX files to `src/content/docs` to create new pages.
	// </Card>

	// <Card title="Configure your site" icon="settings">
	// 	Edit your `sidebar` and other configuration options in `astro.config.mjs`.
	// </Card>

	// <Card title="Read the docs" icon="book">
	// 	Learn more in [the Starlight Docs](https://starlight.astro.build/).
	// </Card>

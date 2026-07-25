// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.kbraquin.com',
	build: {
		inlineStylesheets: 'always',
	},
	fonts: [
		{
			name: 'Lexend',
			cssVariable: '--font-lexend',
			provider: fontProviders.google(),
			weights: ['400 700'],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['system-ui', 'sans-serif'],
		},
	],
});

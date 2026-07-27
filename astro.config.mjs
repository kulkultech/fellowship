// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'KulKul Fellowship',
			components: {
				PageFrame: './src/components/PageFrame.astro',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/kulkultech/fellowship' }],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Program Onboarding', slug: 'onboarding' },
						{ label: 'Non-Coder Guide', slug: 'non-coder-guide' },
						{
							label: '10-Step AI Challenge',
							items: [
								{ label: 'Challenge Overview', slug: 'challenge' },
								{ label: 'Step 1: Community Setup', slug: 'challenge/step-1' },
								{ label: 'Step 2: OS Environment', slug: 'challenge/step-2' },
								{ label: 'Step 3: Configure Coding Agents', slug: 'challenge/step-3' },
								{ label: 'Step 4: Select Helper Stack', slug: 'challenge/step-4' },
								{ label: 'Step 5: Fork & Clone Sandbox', slug: 'challenge/step-5' },
								{ label: 'Step 6: Sandbox Architecture', slug: 'challenge/step-6' },
								{ label: 'Step 7: Solve Sandbox Issue', slug: 'challenge/step-7' },
								{ label: 'Step 8: Prompt Automated Testing', slug: 'challenge/step-8' },
								{ label: 'Step 9: Deploy Application', slug: 'challenge/step-9' },
								{ label: 'Step 10: Submit & Review', slug: 'challenge/step-10' },
							]
						},
						{ label: 'Frequently Asked Questions', slug: 'faq' },
					],
				},
				{
					label: 'Community',
					items: [
						{ label: 'Overview', slug: 'fellows' },
						{
							label: 'Our Fellows',
							items: [{ autogenerate: { directory: 'fellows' } }]
						}
					],
				},
			],
		}),
	],
});

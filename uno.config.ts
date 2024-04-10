// unoCss 处理工具 请参阅 unocss.config.ts 进行配置 https://github.com/antfu/unocss  https://unocss.dev/interactive/

import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
	content: {
		pipeline: {
			include: [
				/\.(vue|ts|html)($|\?)/,
				// include js/ts files
			],
		},
	},
	rules: [
		[
			'no-select', // 不可被用户选中的元素
			{
				'user-select': 'none',
				'-webkit-user-select': 'none', // Chrome, Safari, 新版 Edge
				'-moz-user-select': 'none', // Firefox
				'-ms-user-select': 'none', // 旧版 IE 和 Edge
			},
		],
		[
			/^(color|c|text|bg)-(primary|success|warning|error|info)$/,
			([, prefix, color]) => ({
				[prefix === 'bg' ? 'background-color' : 'color']: `var(--el-color-${color})`,
			}),
		],
		[
			/^(color|c|text|bg)-(primary|success|warning|error|info)(?:-(light|dark))?-(2|3|5|7|8|9)$/,
			([, prefix, color, variant, opacity]) => {
				const property = prefix === 'bg' ? 'background-color' : 'color'
				const themeVariant = variant === 'dark' ? 'dark' : 'light'
				const themeOpacity = variant === 'dark' ? '2' : opacity
				const value = `var(--el-color-${color}-${themeVariant}-${themeOpacity})`

				return { [property]: value }
			},
		],
	],
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons({
			warn: true,
		}),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
})

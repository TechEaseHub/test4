import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// element-plus 按需自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// unoCss 处理工具 请参阅 unocss.config.ts 进行配置 https://github.com/antfu/unocss  https://unocss.dev/interactive/
import UnoCSS from 'unocss/vite'
// 打包分析
import { visualizer } from 'rollup-plugin-visualizer'
// GZIP 压缩
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			imports: ['vue', 'vue-router', 'pinia'],
			resolvers: [ElementPlusResolver()],
			dts: 'src/auto-imports.d.ts',
		}),
		Components({
			resolvers: [ElementPlusResolver()],
			dts: 'src/components.d.ts',
		}),
		UnoCSS(),
		visualizer({
			open: true,
			gzipSize: true,
		}),
		viteCompression({
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	base: '/',
	server: {
		host: '0.0.0.0',
		hmr: true,
	},
})

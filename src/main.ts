import { createApp } from 'vue'

import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import { router } from './router'

import App from './App.vue'
import 'uno.css'

const app = createApp(App)
const pinia = createPinia()
pinia.use(
	createPersistedState({
		key: id => `__${id}`,
	}),
)

app.use(router)
app.use(pinia)

app.mount('#app')

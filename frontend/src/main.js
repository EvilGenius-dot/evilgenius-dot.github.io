// import './assets/main.css'

// import { createApp } from 'vue'
// import { createPinia } from 'pinia'

// import App from './App.vue'
// import router from './router'

// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount('#app')


import './assets/main.css'
import { ViteSSG } from 'vite-ssg' // 1. 引入 ViteSSG
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router' // 确保这里导出的是路由配置，详见下方说明

// 2. 使用 ViteSSG 替代传统的 createApp
// 注意：这里不再手动执行 app.mount('#app')
export const createApp = ViteSSG(
    App,
    { routes: router.options.routes }, // 3. 传入路由配置
    ({ app, router, isClient, initialState }) => {
        // 4. 创建并使用 Pinia
        const pinia = createPinia()
        app.use(pinia)

        // 这里不再需要 app.use(router)，ViteSSG 内部已经处理好了

        if (isClient) {
            // 仅在客户端执行的逻辑（如同步初始状态）
            if (initialState.pinia) {
                pinia.state.value = initialState.pinia
            }
        } else {
            // 仅在构建时（服务端）执行的逻辑
        }
    }
)
// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// 전역 컴포넌트 테스트!
createApp(App)
    .component('CheckboxItem','./components/CheckboxItem.vue')
    .mount('#app')

// 지역 컴포넌트 테스트!
// createApp(App).mount('#app')

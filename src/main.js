import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//for bootstrap css
import "bootstrap/dist/css/bootstrap.css"
//for bootstrap icons but need to install first -- npm i bootstrap-icons
import "bootstrap-icons/font/bootstrap-icons.css"

createApp(App).use(router).mount('#app')

//for bootstrap js
import "bootstrap/dist/js/bootstrap.js"
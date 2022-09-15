import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'
//Vue.use(VueSession);
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons'
import 'bootstrap-icons/font/bootstrap-icons.css'

import VueCookies from 'vue-cookies' //import cookies
// import plugin toasted
import Toaster from "@meforma/vue-toaster";


const app = createApp(App)
app.use(VueAxios, axios) 

// use plugin
app.use(Toaster, {duration: 3000,position: 'top',queue: true})//duration: time of presence, postion: top,bottom, top-right

app.use(VueCookies, { expire: '7d'}) //only use http:
app.use(router).mount('#app')

//set base path as global variable 
app.provide('apiBasePath', "http://127.0.0.1:8000/")

app.provide('cookies', "app.config.globalProperties.$cookies") //plugin, global prority, In the coming sections, I'll explore both the Application API and Application Config.




import Vue from 'vue'
import button from  "./button"
import icon from "./g-icon"

Vue.component("g-icon",icon)
Vue.component("g-button",button)

new Vue({
	el: "#app",
	data: {
	}
	})

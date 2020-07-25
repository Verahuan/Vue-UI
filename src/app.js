import Vue from 'vue'
import button from "./button"
import icon from "./g-icon"
import Input from "./input.vue"
import Row from "./row.vue"
import Col from "./col.vue"

Vue.component("g-icon", icon)
Vue.component("g-button", button)
Vue.component("g-input", Input)
Vue.component("g-row", Row)
Vue.component("g-col", Col)

new Vue({
	el: "#app",
	data: {
		message:"我是message"
	},
	methods:{
		change:function(e){
			console.log(Number(e.target.value))
		}
	},
	created() {

	}
})


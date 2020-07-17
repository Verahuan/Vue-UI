import Vue from 'vue'
import button from  "./button"

Vue.component("g-button",button)
new Vue({
	el: "#app",
	data: {
		message:"hello",
		hello:"hhhh",
		posts:{id:"id"},
		postFontSize: 1
	},
	methods: {
		enlarge:function(){
			postFontSize++
	  }
})

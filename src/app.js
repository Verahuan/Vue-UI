import Vue from 'vue'
import button from "./button"
import icon from "./g-icon"
import Input from "./input.vue"

Vue.component("g-icon", icon)
Vue.component("g-button", button)
Vue.component("g-input", Input)

new Vue({
	el: "#app",
	data: {}
})


import chai from "chai"
import spies from "chai-spies"

chai.use(spies)
const expect = chai.expect
//单元测试
{
	const Constructor = Vue.extend(button)
	const btn = new Constructor({
		propsData: {
			icon: "setting"
		}
	})
	btn.$mount() //动态生成
	let useElement = btn.$el.querySelector("use")
	expect(useElement.getAttribute("xlink:href")).to.eq("#i-setting")
	btn.$el.remove()
	btn.$destroy()
}

{
	const Constructor = Vue.extend(button)
	const btn = new Constructor({
		propsData: {
			icon: "setting",
			loading: true
		}
	})
	btn.$mount() //动态生成
	let useElement = btn.$el.querySelector("use")
	expect(useElement.getAttribute("xlink:href")).to.eq("#i-loading")
	btn.$el.remove()
	btn.$destroy()
}

{
	const div = document.createElement("div")
	document.body.appendChild(div)
	const Constructor = Vue.extend(button)
	const btn = new Constructor({
		propsData: {
			icon: "setting",
			loading: true
		}
	})
	btn.$mount(div) //动态生成
	let svg = btn.$el.querySelector("svg")
	let {
		order
	} = window.getComputedStyle(svg)
	expect(order).to.eq("0")
	btn.$el.remove()
	btn.$destroy()
}

{
	const div = document.createElement("div")
	document.body.appendChild(div)
	const Constructor = Vue.extend(button)
	const btn = new Constructor({
		propsData: {
			icon: "setting",
			loading: true,
			iconPosition: "right"
		}
	})
	btn.$mount(div) //动态生成
	let svg = btn.$el.querySelector("svg")
	let {
		order
	} = window.getComputedStyle(svg)
	expect(order).to.eq("2")
	btn.$el.remove()
	btn.$destroy()
}

{
	//mock
	const Constructor = Vue.extend(button)
	const btn = new Constructor({
		propsData: {
			icon: "setting",
		}
	})
	btn.$mount() //动态生成		
	let butt = btn.$el
	let spy=chai.spy(function(){		
	})//伪装匿名函数
	butt.click=spy
	butt.click()
	expect(spy).to.have.been.called()
	btn.$el.remove()
	btn.$destroy()
}

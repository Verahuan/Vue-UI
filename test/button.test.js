const expect=chai.expect;
import Vue from "vue"
import button from "../src/button.vue"

Vue.config.productionTip=false
// Vue.config.devtools=devtools=false
//测试用例之间用it隔开
describe("button",()=>{
	//BDD 行为测试驱动  mocha describe
	//断言:chai expect
	// expect([1,2]).to.deep.eq([1,2]) 会判断数组里面的质是否相等
	// expect([1,2]).to.eq([1,2]) 只会判断数组的地址 两个数组是不相等的
	it("存在",()=>{
	expect(button).to.be.ok
})

it("可以设置icon",()=>{
	const Constructor = Vue.extend(button)
	const btn = new Constructor({
		propsData: {
			icon: "setting"
		}
	})
	btn.$mount() //动态生成
	let useElement = btn.$el.querySelector("use")
	expect(useElement.getAttribute("xlink:href")).to.equal("#i-setting")
	btn.$destroy()
})

it( "可以设置loading",()=>{
	const Constructor = Vue.extend(button)
	const btn = new Constructor({
		propsData: {
			icon: "setting",
			loading:true
		}
	})
	btn.$mount() //动态生成
	let useElement = btn.$el.querySelector("use")
	expect(useElement.getAttribute("xlink:href")).to.equal("#i-loading")
	btn.$destroy()
})


it("icon默认的order是0",()=>{
	const div=document.createElement("div")
	document.body.appendChild(div)
	const Constructor = Vue.extend(button)
	const btn = new Constructor({
		propsData: {
			icon: "setting"
		}
	})
	btn.$mount(div) //动态生成
	let svg = btn.$el.querySelector("svg")
	let {order}=window.getComputedStyle(svg)
	expect(order).to.equal("0")
	btn.$el.remove()
	btn.$destroy()
})

it("改变iconPosition可以改变order为2",()=>{
	const div=document.createElement("div")
	document.body.appendChild(div)
	const Constructor = Vue.extend(button)
	const btn = new Constructor({
		propsData: {
			icon: "setting",
			iconPosition:"right"
		}
	})
	btn.$mount(div) //动态生成
	let svg = btn.$el.querySelector("svg")
	let {order}=window.getComputedStyle(svg)
	expect(order).to.equal("2")
	btn.$el.remove()
	btn.$destroy()
})

it("点击button可以触发click事件",()=>{
	const Constructor = Vue.extend(button)
	const btn = new Constructor({
		propsData: {
			icon: "setting",
			iconPosition:"right"
		}
	})
	btn.$mount() //动态生成	
	const callback=sinon.fake();
	let butt = btn.$el
	butt.click=callback
	butt.click()
	expect(callback).to.have.been.called
	
	btn.$destroy()
})
})

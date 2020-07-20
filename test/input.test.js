const expect=chai.expect
import Vue from "vue"
import input from "../src/input.vue"

Vue.config.productionTip=false

describe("input",()=>{
	it("存在",()=>{
		expect(input).to.be.ok		
	})
	describe("props传值",()=>{
		it("可以设置value",()=>{
		const Constructor = Vue.extend(input)
		const el = new Constructor({
			propsData: {
				value: "请输入"
			}
		})
		el.$mount() //动态生成
		let inputElement = el.$el.querySelector("input")
		expect(inputElement.value).to.equal("请输入")
		el.$destroy()
	})
	it("可以设置error",()=>{
		const Constructor = Vue.extend(input)
		const el = new Constructor({
			propsData: {
				value: "请输入",
				error:"你出错了"
			}
		})
		el.$mount() //动态生成
		let spanElement = el.$el.querySelector("span")
		expect(spanElement.innerHTML).to.equal("你出错了")
		el.$destroy()
	})
	
	it("可以设置disabled",()=>{
		const Constructor = Vue.extend(input)
		const el = new Constructor({
			propsData: {
				disabled:true
			}
		})
		el.$mount() //动态生成
		let inputElement = el.$el.querySelector("input")
		expect(inputElement.disabled).to.equal(true)
		el.$destroy()
	})
	
	it("可以设置readonly",()=>{
		const Constructor = Vue.extend(input)
		const el = new Constructor({
			propsData: {
				readonly:true
			}
		})
		el.$mount() //动态生成
		let inputElement = el.$el.querySelector("input")
		expect(inputElement.readOnly).to.equal(true)
		el.$destroy()
	})
	})
	
	describe("事件",()=>{
		["input","blur","change","focus"].forEach((eventName)=>{
				it("input事件可以生效",()=>{
			const Constructor = Vue.extend(input)
			const el = new Constructor({
				propsData: {
				}
			})
			el.$mount() //动态生成
					
			let callback=sinon.fake()
			el.$on(eventName,callback)	
			let event=new Event(eventName)		
			let inputElement= el.$el.querySelector("input")	
			inputElement.dispatchEvent(event)
			expect(callback).to.have.been.called
			el.$destroy()
		})
		})
	})	
})
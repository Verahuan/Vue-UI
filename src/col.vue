<template>
	<!-- span可以用来表示一行的几个g-col的分布比例  不对称的时候需要写-->
	<!-- 添加属性 设置偏移量 -->
	<!-- 给col设置phone属性，然后设置对应的col的span和offset -->
	<div class="col" :class="colClass" :style="colStyle">
		<slot></slot>
	</div>
</template>

<script>
	let validator=(value)=>{
		if(Object.keys(value).indexOf("span")!==-1||Object.keys(value).indexOf("offset")!==-1){
						return true
		}return false
	}
	export default {
		name: "GuluCol",
		props: {
			span: [Number, String],
			offset: [Number, String],
			phone:{
				type:Object,
				validator
			},
			ipad:{
				type:Object,
				validator
			},
			pc:{
				type:Object,
				validator
			},
			xpc:{
				type:Object,
				validator
			}
			
		},
		data() {
			return {
				gutter: 0
			}
		},
		computed: {
			colClass(){
				let {span,offset,phone,ipad,pc,xpc}=this;
				return [`col-${span}`,
				offset&&`offset-${offset}`,
				...(phone?[`col-phone-${phone.span}`]:[]),
				...(ipad?[`col-ipad-${ipad.span}`]:[]),
				...(pc?[`col-pc-${pc.span}`]:[]),
				...(xpc?[`col-xpc-${xpc.span}`]:[])
				]
			},
			colStyle() {
				return {
					paddingLeft: this.gutter / 2 + 'px',
					paddingRight: this.gutter / 2 + 'px',
				}
			}
		}

	}
</script>

<style lang="scss" scoped>
	$bg-color: #FFFFCC;
	$border-color:#99CCCC;

	.col {
		height: 100px;
		// background-color:$bg-color;
		width: 50%;
		border: 1px solid $border-color;
		$class-prefix: col-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				width: ($n/24)*100%;
			}
		}
		;
		
		$class-prefix:offset-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				margin-left: ($n/24)*100%;
			}
		}
		 @media (max-width: 576px) {
		     $class-prefix:col-phone-;
		     @for $n from 1 through 24 {
		     	&.#{$class-prefix}#{$n} {
		     		width: ($n/24)*100%;
		     	}
		     }
			 
			 $class-prefix:offset-phone-;
			 @for $n from 1 through 24 {
			 	&.#{$class-prefix}#{$n} {
			 		margin-left: ($n/24)*100%;
			 	}
			 }
		   }
		   
		   
		   @media (min-width: 576px) and (max-width: 992px) {
		       $class-prefix:col-ipad-;
		       @for $n from 1 through 24 {
		       	&.#{$class-prefix}#{$n} {
		       		width: ($n/24)*100%;
		       	}
		       }
		   			 
		   			 $class-prefix:offset-phone-;
		   			 @for $n from 1 through 24 {
		   			 	&.#{$class-prefix}#{$n} {
		   			 		margin-left: ($n/24)*100%;
		   			 	}
		   			 }
		     }
		   
		   @media (min-width: 993px) and (max-width: 1200px) {
		       $class-prefix:col-pc-;
		       @for $n from 1 through 24 {
		       	&.#{$class-prefix}#{$n} {
		       		width: ($n/24)*100%;
		       	}
		       }
		   			 
		   			 $class-prefix:offset-phone-;
		   			 @for $n from 1 through 24 {
		   			 	&.#{$class-prefix}#{$n} {
		   			 		margin-left: ($n/24)*100%;
		   			 	}
		   			 }
		     }
		   @media (min-width: 1201px) {
		       $class-prefix:col-xpc-;
		       @for $n from 1 through 24 {
		       	&.#{$class-prefix}#{$n} {
		       		width: ($n/24)*100%;
		       	}
		       }
		   			 
		   			 $class-prefix:offset-phone-;
		   			 @for $n from 1 through 24 {
		   			 	&.#{$class-prefix}#{$n} {
		   			 		margin-left: ($n/24)*100%;
		   			 	}
		   			 }
		     }
		   
	}
</style>

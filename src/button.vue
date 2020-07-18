<!-- 单文件组件 -->
<template>
		<button class="g-button" :class="{[iconPosition]:true}" @click=change>
			<g-icon v-if=loading1 class="loading icon" icon="loading"></g-icon>
			<g-icon v-if="icon&&!loading1" class="icon" :icon="icon"></g-icon>
				<div class="content">
					<slot></slot>
				</div>
			
	    </button>
	
</template>

<script>
	export default{
		props:{
			"icon":{},
			"iconPosition":{},
			"loading":{				
					type:Boolean,
					default:false				
			}
		},
		data:function(){
			return{
				loading1:this.loading				
			}
			},
			methods:{
				change:function(){
					this.loading1=!this.loading1
				}
			}
		
	}
</script>

<style lang="scss">
	@-webkit-keyframes spin{
		0%{ transform: rotate(0deg);}
		100%{transform:rotate(360deg);}
	}
	.g-button {
		font-size: var(--font-size);
		height: var(--button-height);
		background-color: var(--button-bg);
		border-radius: var(--button-radius);
		padding: 0 1em;
		display: inline-flex;
		justify-content:space-between;
		align-items: center;
		vertical-align: top;
		&:hover {border-color:var(--border-color-hover);}
		&:active {background-color: var(--button-active-bg);}
		&:focus {outline: none;}
		> .loading{
			animation: spin 1s infinite linear;
			}
		&.right{
			> .icon{
				order:2;
				margin-right: 0;
				margin-left: .5em;
			}
		}
	/* 如果不加focus的样式，默认会出现蓝色的光晕 */	
	}
	
</style>

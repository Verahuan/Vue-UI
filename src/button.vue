<!-- 单文件组件 -->
<template>
		<button class="g-button" :class="{[iconPosition]:true}">
			
			<svg v-if="icon" class="icon"><use :xlink:href=`#i-${icon}`> </use> </svg>
				<div class="content">
					<slot></slot>
				</div>
			
	    </button>
	
</template>

<script>
	export default{
		props:[
			"icon",
			"iconPosition"
		]
		
	}
</script>

<style lang="scss">
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
		> .icon {margin-right: .5em;margin-left: 0;}
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

<!-- 单文件组件 -->
<template>
	<div>
		<button class="g-button">按钮+</button>
	</div>
	
</template>

<script>
	export default{
		
	}
</script>
<style lang="scss">
	.g-button {
		font-size: var(--font-size);
		height: var(--button-height);
		background-color: var(--button-bg);
		border-radius: var(--button-radius);
		padding: 0 1em;
		&:hover {border-color:var(--border-color-hover);}
		&:active {background-color: var(--button-active-bg);}
		&:focus {outline: none;}
	/* 如果不加focus的样式，默认会出现蓝色的光晕 */	
	}
	
</style>

<template>
	<div>
		<button @click=$emit("eventclick") class="g-button">按钮{{count}}</button>
		<p>zzz{{post.id}}</p>
	</div>
	
</template>

<script>
	export default{
		props:[
			"post"
		],
		data:function(){
			return{
				count:0
			}
		}
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

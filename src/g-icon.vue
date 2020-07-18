<template>
	<svg v-if="icon" class="g-icon"><use :xlink:href=`#i-${icon}`> </use> </svg>
</template>

<script>
	export default{
		props:[
			"icon"
		]
	}
</script>

<style  lang="scss">
	.g-icon {
		width: 1em;
		height: 1em;
		margin-right: .5em;
		margin-left: 0;}
</style>

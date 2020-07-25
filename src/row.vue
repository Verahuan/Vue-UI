<template>
	<div class="row" :style="{ marginLeft: -gutter/2+'px',marginRight: -gutter/2+'px' }" :gutter=gutter>
		<slot></slot>
	</div>
</template>

<script>
	export default {

		props: {
			gutter: [Number, String]
		},
		mounted(){
			this.$children.forEach((vm)=>{
				vm.gutter=this.gutter;
			})
		}

	}
</script>

<style scoped lang="scss">
	.row {
		display: flex;
	}
</style>

<template>
	<div class="toast" v-show="isShow">
		<slot></slot>
	</div>
</template>

<script> 
	export default{
		name:"GuluToast",
		props:{
			message:" ",
			time:Number
		},
		data() {
		  return {
		    message: '',
		    isShow: false
		  }
		},
		methods: {
		  show(message='默认文字', time=2000) {
		    this.message = message
		    this.isShow = true
		    setTimeout(() => {
		      this.isShow = false
		      this.message = ''
		    },time)
		  }
		}
	}
</script>

<style scoped lang="scss">
	$bg-color:rgba(0,0,0,0.74);
	$font-size:14px;
	$box-shadow:0px 0px 3px 0px rgba(0,0,0,0.50);
	.toast{
		height:40px;
		padding:10px;
		font-size: $font-size;
		color: white;
		background-color: $bg-color;
		position:absolute;
		top:0;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 8px;
		display: flex;
		align-items: center;
		box-shadow:$box-shadow;
		}
</style>

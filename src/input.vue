<!-- 普通样式 disabled focus hover error susscess -->
<!-- input的事件 change input blur foucs-->

<template>
	<div class="wrapper" :class="{error}">
		<input type="text" :value="value" :disabled="disabled" :readonly="readonly" 
		@change="$emit('change',$event)"
		@input="$emit('input',$event.target.value)"
		@blur="$emit('blur',$event)"
		@focus="$emit('focus',$event)"
		>
		<template v-if="error" >
			<g-icon icon="wrong"></g-icon><span class="icon">{{error}}</span>
		</template>

	</div>

</template>

<script>
	import Icon from "./g-icon.vue"
	export default {
		name: "g-input",
		comments: {
			"g-icon": Icon
		},
		props: {
			value: {
				type: String,
				default: "张欢欢无敌"
			},
			disabled: {
				type: Boolean,
				default: false
			},
			readonly: {
				type: Boolean,
				default: false
			},
			error: {
				type: String
			}
		}
	}
</script>

<style lang="scss" scoped>
	$height:32px;
	$border-color:#999;
	$border-color-hover:#99CCCC;
	$border-color-focus:#0099CC;
	$box-shadow-color:rgba(0, 0, 0, 0.5);
	$border-radious:4px;
	$font-size:12px;
	$error-red:#FF6666;
	.wrapper {
		display: inline-block;
		vertical-align: top;
		>input {
			height: $height;
			border: 1px solid $border-color;
			border-radius: $border-radious;
			font-size: $font-size;
			padding: 2px 8px;

			&:focus {
				// border-color: $border-color-focus;
				outline: none;
				box-shadow: inset 0 1px 3px $box-shadow-color;
			}

			&:hover {
				border-color: $border-color-hover;

			}

			&[disabled],
			&[readonly] {
				border-color: #aaa;
				color: #aaa;
				cursor: not-allowed;
			}			
		}}
		.error{
		> input {
			color: $error-red;
			border-color: $error-red;			
		}
		
		}
		.icon{
			color: $error-red;
		}
</style>

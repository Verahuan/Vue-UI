<template>
	<!-- span可以用来表示一行的几个g-col的分布比例  不对称的时候需要写-->
	<!-- 添加属性 设置偏移量 -->
	<div class="col" :class="colClass" :style="colStyle">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "GuluCol",
		props: {
			span: [Number, String],
			offset: [Number, String]
		},
		data() {
			return {
				gutter: 0
			}
		},
		computed: {
			colClass(){
				let {span,offset}=this;
				return [`col-${span}`,offset&&`offset-${offset}`]
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
	}
</style>

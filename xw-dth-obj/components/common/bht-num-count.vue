<template>
	<label>{{ animatedNumber }}</label>
</template>

<script>
import * as TweenLite from '@/utils/TweenMax.min.js';
export default {
	props: {
		num: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			tweenedNumber: this.num
		};
	},
	computed: {
		animatedNumber: function() {
			return this.tweenedNumber.toFixed(0);
		}
	},
	watch: {
		num: function(newValue) {
			TweenLite.to(this.$data, 0.3, { tweenedNumber: newValue });
		}
	}
};
</script>

<style></style>

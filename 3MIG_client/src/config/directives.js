import Vue from 'vue'

Vue.directive('scroll', {
	bind: function (el, binding) {
		el.addEventListener('scroll', () => {
	        if (el.scrollTop + window.innerHeight >= el.scrollHeight - 200) {
	          	let fnc = binding.value;
	          	fnc();
	        }
	    })
	}
})

export { Vue }
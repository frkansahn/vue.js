Vue.use(VueTelInput);

var vm = new Vue({
	el:'#app',
	data:{
		name:'',
		email:'',
		phone:'',
		date: new Date().toISOString().slice(0,10),
		message:''
	},

	mounted: function(){

	}
})
Vue.use(VueTelInput);

var vm = new Vue({
	el:'#app',

	components: {
  		vuejsDatepicker
  	},

	props:{
		isActive1: false,
		isActive2: false,
		isActive3: false
	},

	data:{
		name:'',
		email:'',
		phone:'',
		date: '',
		message:'',

		success: false,

		isErrorName:false,
		isErrorMail:false,
		isErrorPhone:false,
		isErrorDate:false,

		showTemplateOne:false,
		showTemplateTwo:false,
		showTemplateThere:false,

		tr: vdp_translation_tr.js
	},

	methods:{
		send:function(){
			if(this.name.length < 3)
			{
				this.isErrorName = true;
				return false;
			}
			if(this.email.indexOf('@') == -1 || this.email.length < 7) 
			{
				this.isErrorMail = true;
				return false;
			}
			if(this.date == '')
			{
				this.isErrorDate = true;
				return false;
			}
			if(this.phone == '')
			{
				this.isErrorPhone = true;
				return false;
			}

			this.success = true;

			this.name = null;
			this.date = null;
			this.phone = null;
			this.email = null;
			this.message = null;

		}
	},

	mounted: function(){

	},

	watch:{
		date(newDate){
			this.isErrorDate = false;
		},

		phone(newPhone){
			this.isErrorPhone = false;
		},

		success(newSuccess)
		{
			newSuccess == true ? setTimeout(() => this.success = false, 1000) : false; 
		}
	}
})
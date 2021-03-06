Vue.use(VueTelInput);

var vm = new Vue({
	el:'#app',

	components: {
  		vuejsDatepicker
  	},

	data:{
		name:'',
		email:'',
		phone:'',
		date: '',
		message:'',
		sozlesmeGoster:false,
		sozlesme:false,

		success: false,
		unsuccess: false,

		isErrorName:false,
		isErrorMail:false,
		isErrorPhone:false,
		isErrorDate:false,
		isErrorSozlesme:false,

		show:false,

		tr: vdp_translation_tr.js,

		bindProps:{
			placeholder: "Telefon Numarasını Giriniz.."
		}
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
			if(this.sozlesme == false)
			{
				this.isErrorSozlesme = true;
				return false;
			}

			let random = Boolean(Math.round(Math.random()));
			console.log(random);
			random == true ? this.success = true : this.unsuccess = true;

			this.name = null;
			this.date = null;
			this.phone = null;
			this.email = null;
			this.message = null;
			this.sozlesme = false;

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
			newSuccess == true ? setTimeout(() => this.success = false, 3000) : false; 
		},
		unsuccess(newUnsuccess)
		{
			newUnsuccess == true ? setTimeout(() => this.unsuccess = false, 3000) : false; 
		}
	}
})
const app1=new Vue({
    el:"#container",
        data:{
            son:0,
            peoples:[
                {},
            ],
            fname:"",
            sorname:"",
            year:"",
            phone:"",
            email:"",
        },
    
    methods: {
        plas(){
            this.son++
            const newobject={
                id:this.son,
                fname:this.fname,
                sorname:this.sorname,
                year:this.year,
                phone:this.phone,
                email:this.email,
            }
            this.peoples.push(newobject)
            this.fname=""
            this.sorname=""
            this.year=""
            this.phone=""
            this.email=""
        }
    },    
})
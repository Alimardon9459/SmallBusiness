
var add1=new Vue({
    el:'#name',
       data() {
           return{
          count:0,
           }
        },
   
    methods: {
        incr(){
            this.count++
        },
        dencr(){
            this.count--
        },
    },
   
})
var add2=new Vue({
    el:"#container",
        data:{
            peoples:[
                {fname:"Alimardon", lname:"Mullajonov", email:"mullajonov@gmail.com"},
                {fname:"Alimardon", lname:"Mullajonov", email:"mullajonov@gmail.com"},
                {fname:"Alimardon", lname:"Mullajonov", email:"mullajonov@gmail.com"},

            ],
            fname:"",
            lname:"",
            email:"",
        },
    methods:{
        inputName(){
            var newcomment={
                fname:this.fname,
                lname:this.fname,
                email:this.email,

            }    
            this.peoples.push(newcomment)
            this.fname=""
            this.lname=""
            this.email=""
        }
    }    
})
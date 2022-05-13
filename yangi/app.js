  
  var list= [
        { number:"Tr", name:"Ism",       surname:"Familiyas",  year:"Yil",   evaluation:"Ball"},
        { number:1,    name:"Alimardon", surname:"Mullajonov", year:"2003",  evaluation:96},
        { number:2,    name:"Anvar",     surname:"Karimov",    year:"2004",  evaluation:85},
        { number:3,    name:"Alimardon", surname:"Qosimov",    year:"2000",  evaluation:55},
        { number:4,    name:"Maxmudjon", surname:"Muqimjonov", year:"2001",  evaluation:84},
        { number:5,    name:"Sobirjoin", surname:"To'xtasinov",year:"2006",  evaluation:55},
        { number:6,    name:"Sanjarbek", surname:"bilmayman",  year:"2001",  evaluation:100},
        { number:7,    name:"Orzubek",   surname:"Shamsiddinov",year:"2007",  evaluation:100 }

    ]
    var namesearch=document.getElementById("searchneme")
    var surnamesearch=document.getElementById("searchsurname")
    var yearsearch=document.getElementById("searchyear")

    function qidirish(){
            var search=list.find((list)=>{
                return list.name===namesearch.value && list.surname===surnamesearch.value && list.year===yearsearch.value
            })
            document.getElementById("demo").innerHTML="O'rni:"+ search.number+"\n Ismi:"+search.name+"\n Familyasi:"+search.surname+"\n Yili:"+search.year+"\n Balli:"+search.evaluation
        }
    function qoshish(){
        let son=document.getElementById("son")    
        let son1=document.getElementById("son1")
        let amal=document.getElementById("amal")
        if( amal.value=="+"){
            document.getElementById("javob").innerHTML=(son.value*1)+(son1.value*1)
        } else if(amal.value=="-"){
            document.getElementById("javob").innerHTML=(son.value*1)-(son1.value*1)
        } else if(amal.value=="*"){
            document.getElementById("javob").innerHTML=(son.value*1)*(son1.value*1)
        } else if(amal.value=="/"){
            document.getElementById("javob").innerHTML=(son.value*1)/(son1.value*1)
        } else if (amal.value=="%"){
            document.getElementById("javob").innerHTML=(son.value*1)%(son1.value*1)
        }
        else{
            document.getElementById("javob").innerHTML="Amal not'g'ri"

        }
    }
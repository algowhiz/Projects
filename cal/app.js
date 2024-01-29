let input = document.getElementById("inputBox")
let btn = document.querySelectorAll("button");

// console.log(btn);

let string = "";
let arr = Array.from(btn);

// console.log(arr);

arr.forEach( btn2 => {
    btn2.addEventListener('click' , (e)=>{
        if(e.target.innerHTML == "AC"){
            string="";
             input.value=string;
        }

        else if(e.target.innerHTML == "DEL"){
            string =string.substring(0,string.length()-1);
             input.value=string;
        }

        else if(e.target.innerHTML =='='){
            string =eval(string);
             input.value=string;
        }

        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

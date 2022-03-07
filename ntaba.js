let ntaba=document.getElementById("DAY")
let gender1=document.getElementById("Male")
let gender2=document.querySelector("#Female")
let akan=document.getElementById("AKAN")
let highway=document.getElementById("locator")
let maleNames=["KWASI","KWADWO","KWABENA","KWAKU","YAW","KOFI","KWAME"]
let femaleNames=["AKOSUA","ADWOA","ABENNA","AKUA","YAA","AFUA","AMA"]
console.log(highway);
highway.addEventListener("submit",(y)=>{
    y.preventDefault()
    kamal()
})
function kamal(){
    let day1=ntaba.value
let gender3=gender1.value
let gender4=gender2.value
    
    if(gender3==="male"&day1==="Sunday"){
        akan.innerText=`${maleNames[0]}`
        }else if(gender3==="male"&day1==="Monday"){
        akan.innerText=`${maleNames[1]}`
            }else if(gender3==="male"&day1==="Tuesday"){
        akan.innerText=`${maleNames[2]}`
                }else if(gender3==="male"&day1==="Wednesday"){
        akan.innerText=`${maleNames[3]}`  
                    }else if(gender3==="male"&day1==="Thursday"){
        akan.innerText=`${maleNames[4]}` 
                        }else if(gender3==="male"&day1==="Friday"){
        akan.innerText=`${maleNames[5]}`    
                            }else if(gender3==="male"&day1==="Saturday"){
        akan.innerText=`${maleNames[6]}`
    }
    
    if(gender4==="female"&day1==="Sunday"){
        akan.innerText=`${femaleNames[0]}`
    }else if(gender4==="female"&day1==="Monday"){
    akan.innerText=`${femaleNames[1]}`
        }else if(gender4==="female"&day1==="Tuesday"){
    akan.innerText=`${femaleNames[2]}`
            }else if(gender4==="female"&day1==="Wednesday"){
    akan.innerText=`${femaleNames[3]}`  
                }else if(gender4==="female"&day1==="Thursday"){
    akan.innerText=`${femaleNames[4]}` 
                    }else if(gender4==="female"&day1==="Friday"){
    akan.innerText=`${femaleNames[5]}`    
                        }else if(gender4==="female"&day1==="Saturday"){
    akan.innerText=`${femaleNames[6]}`
    }

    else{
        akan.innerText="invalid input"
    }
}
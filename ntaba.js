let ntaba=document.getElementById("DAY")
let gender1=document.getElementById("Male")
let gender2=document.querySelector("#Female")
let akan=document.getElementById("AKAN")
let highway=document.getElementById("locator")
let maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
let femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
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
    }else{
        akan.innerText="invalid input"
    }}

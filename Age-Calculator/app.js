const container=0;
const error=0;

function getAge(){
   let dob= document.querySelector("#dob").value.split("-");
    // console.log(dob);
   let age=calcAge(dob);

   displayAge(age);
}

function calcAge(dob){ 
    let a=[];

    let currDate=new Date();

    let date = currDate.getDate();
    let month=currDate.getMonth()+1;
    let year=currDate.getFullYear();
    

    let y=year-dob[0];
    let m=0;
    let d=0;
    
    if(month>=dob[1])  
       m=month-dob[1];

    else{//currMonth is smaller than DOB month
        y--;

        m = 12 + month - dob[1];
    }
    if(date>=dob[2])
       d=date-dob[2];
    else{//currDate is smaller than DOB month
       m--;
      
       d = 31 + date - dob[2];
    }
    a.push(y);
    a.push(m);
    a.push(d);
    

    return a;
}

function displayAge(age){
    if(age[0]<0||age[1]<0||age[2]<0)
    {
       document.querySelector(".error").style.display="block";
    }
    else
    {
     document.querySelector(".desc").innerHTML="Your Age is : "+age[0] +"years";
     document.querySelector("#years").innerHTML=age[0];
     document.querySelector("#months").innerHTML=age[1];
     document.querySelector("#days").innerHTML=age[2];
    }

}


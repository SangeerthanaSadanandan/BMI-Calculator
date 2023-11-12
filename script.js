var age=document.getElementById("age")
var height=document.getElementById("height")
var weight=document.getElementById("weight")
var male=document.getElementById("male")
var female=document.getElementById("female")

function calculate(){
    if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
      alert("Something wrong....Try again.");
    }
    else{
        calculateBMI();
    }
}
function calculateBMI(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }
  else if(female.checked){
    p.push("female");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
  if(bmi<18.5){
    document.querySelector(".comment").style.color = "yellow";
    document.querySelector(".comment").innerHTML = "You are Underweight";
    }
    else if(18.5<=bmi&&bmi<=24.9){
        document.querySelector(".comment").style.color = "green";
        document.querySelector(".comment").innerHTML = "You are Healthy";
    }
    else if(25<=bmi&&bmi<=29.9){
        document.querySelector(".comment").style.color = "orange";
        document.querySelector(".comment").innerHTML = "You are Overweight";
    }
    else if(30<=bmi&&bmi<=34.9){
        document.querySelector(".comment").style.color = "red";
        document.querySelector(".comment").innerHTML = "You are Obese";
    }
    else if(35<=bmi){
        document.querySelector(".comment").style.color = "red";
        document.querySelector(".comment").innerHTML = "You are Extremely obese";
    }
    document.querySelector(".comment").style.display = "block";
    document.querySelector("#result").innerHTML = bmi.toFixed(2);
}

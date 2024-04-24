var fname=document.querySelector('fname').value;
console.log(fname);
var lname=document.querySelector('lname').value;
console.log(lname);
var address=document.querySelector('address').value;
console.log(address);
var pin=document.querySelector('pincode').value;
console.log(pincode);
document.querySelector('#country').value;
console.log(country);
document.querySelector('#state').value;
console.log(state);

var gender=document.querySelector('input[name-"gender"]:checked').value;
console.log(gender);
let food=[];
let checkboxes=document.querySelectorAll('food[]')
for(let i=0; i<checkboxes.length; i++){
    if(checkboxes[i].checked){
     food.push(checkboxes[i].value);
    }
}
console.log(checkboxes);







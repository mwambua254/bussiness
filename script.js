let result = document.getElementById('result')
let btn =document.getElementById('btn1')
let input = document.getElementById('input')
btn.addEventListener('click',function(){
let currentvalue = input.value.toLowerCase()
if(currentvalue==="rent"){
    result.textContent="cost=$700 per month ";
}else{
    result.textContent="cost=$20,000 ";
}
})
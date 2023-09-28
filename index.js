let passwordList= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',1,2,3,4,5,6,7,8,9,'~','!','@','#','$','%','^','&','(',')','?']
const tooltip=document.getElementById('tooltip')
const slide=document.getElementById('slider')
const button=document.getElementById('generate')
const input=document.getElementById('password1')
const input1=document.getElementById('password2')
const input2=document.getElementById('password3')
const input3=document.getElementById('password4')
let first=input.value
let second=input1.value
let third=input2.value
let forth=input3.value
tooltip.innerHTML=`Length: ${slide.value}`
slide.addEventListener('input',() => {
    tooltip.innerHTML=`Length: ${slide.value}`
})
button.addEventListener('click',() => {
    
    input.value=""
    input1.value=""
    input2.value=""
    input3.value=""
    for (let i = 0 ; i < slide.value ; i++) {
        input.value+=passwordList[Math.floor(Math.random() * passwordList.length)]
        first=input.value
        input1.value+=passwordList[Math.floor(Math.random() * passwordList.length)]
        second=input1.value
        input2.value+=passwordList[Math.floor(Math.random() * passwordList.length)]
        third=input2.value
        input3.value+=passwordList[Math.floor(Math.random() * passwordList.length)]
        forth=input3.value
    }
    
})
navigator.clipboard.writeText(input.value);
input.addEventListener('click',() => {
    navigator.clipboard.writeText(first);
    input.value="Copied"
    input1.value=second
    input2.value=third
    input3.value=forth
})
input1.addEventListener('click',() => {
    navigator.clipboard.writeText(second);
    input1.value="Copied"
    input.value=first
    input2.value=third
    input3.value=forth
})
input2.addEventListener('click',() => {
    navigator.clipboard.writeText(third);
    input2.value="Copied"
    input.value=first
    input1.value=second
    input3.value=forth
})
input3.addEventListener('click',() => {
    navigator.clipboard.writeText(forth);
    input3.value="Copied"
    input.value=first
    input1.value=second
    input2.value=third
})
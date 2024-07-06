let inputDisplay = document.querySelector('.input')
let expression = []
let numberButtons = document.querySelector(".numbers").querySelectorAll("button")
let operation= document.querySelector(".operations").querySelectorAll("button")
let zeroDotBtn = document.querySelector(".zero-dot").querySelectorAll("button")
let equalBtn = document.querySelector(".equal")
let clearBtn = document.querySelector("#clear")
function handleOperations(){
    operation.forEach((op) =>{
        this.classList.add("gray")
        if(op!=this){
            console.log("REmoved")
            op.classList.remove("gray")
        }
    })
    expression[0] = Number(inputDisplay.value)
    expression[1] = this.textContent
    this.blur()

}
function operationKeys(){
    let ops = {"+": operation[0], "-": operation[1], "*": operation[2], "/": operation[3]}
    for (op in ops){
        //Highlight only the button satifies the test otherwise remove the highlight
        if(event.key == op){
            ops[op].classList.add("gray")
            expression[0] = inputDisplay.value
            expression[1] = ops[op].textContent
            
        }else{
           // console.log(event.key, op)
            ops[op].classList.remove("gray")
        }    
    }
}
function displayKeys(){
    let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','.']
    nums.forEach((num) =>{
        if(event.key == num){
            if(inputDisplay.value == expression[0] || inputDisplay.value == "Seriously?"+'\u{1F620}' || inputDisplay.value == "0" ){
                inputDisplay.value = ""
            }//Clear the input field only when it contains the first operand
           inputDisplay.value+=num
        }
    })
}
function display(){
    let number = this.textContent
    operation.forEach((op) => {
        if(op.classList[1] == "gray"){
            op.classList.remove("gray")
        }
    })
    //Clear the input field only when it contains the first operand
    if(inputDisplay.value == expression[0] || inputDisplay.value == "Seriously?"+'\u{1F620}' ){
        inputDisplay.value = ""
    }
    inputDisplay.value+=number 
    this.blur()
    
}
function equal(){
    expression[2] = Number(inputDisplay.value)
    inputDisplay.value = evaluate(expression[0],expression[1],expression[2])
    expression[0] = Number(inputDisplay.value)
    this.blur()
}
function evaluate(a = 0 ,operation = "+" ,b = 0 ){
    if(operation == "+"){
        return Number(a) + Number(b);
    }
    if(operation == "-"){
        return a - b
    }
    if(operation == "*"){
        return a * b
    }
    if(operation == "/"){
        if(b === 0)return "Seriously?"+'\u{1F620}'
        return a / b
    }
}
function clear(){    
    inputDisplay.value = "0"
    expression = []
    this.blur()
}
window.addEventListener("keydown", displayKeys)
window.addEventListener("keydown", operationKeys)
window.addEventListener("keydown", () => {if(event.key == "Enter")equal()})
window.addEventListener("keydown", () => {if(event.key == " ")clear()})
zeroDotBtn.forEach((button) =>{
    button.addEventListener("click",display)
})
numberButtons.forEach((button) => {
    button.addEventListener("click",display)
})
equalBtn.addEventListener("click",equal)
operation.forEach((op)=> op.addEventListener("click",  handleOperations))    
clearBtn.addEventListener("click",clear)
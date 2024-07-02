let inputDisplay = document.querySelector('.input')
let expression = []
function displayNumbers(num){
    
    inputDisplay.value += num
}

let buttonsContainer = document.querySelector(".numbers")
let buttons = buttonsContainer.querySelectorAll("button")
let operation= document.querySelector(".operations").querySelectorAll("button")
let zeroDot = document.querySelector(".zero-dot")
let zeroDotBtn = zeroDot.querySelectorAll("button")
zeroDotBtn.forEach((button) =>{
    button.addEventListener("click",display)
})
buttons.forEach((button) => {
    button.addEventListener("click",display)
})
let clicked = []
operation.forEach((op)=>{
    op.addEventListener("click", ()=> {
       
        op.classList.add("gray")
        clicked.push(op)
        let lastIndex = clicked.length-1
        if(clicked.length >1 && (clicked[lastIndex]!=clicked[lastIndex-1])){
            for(let i = 0; i<clicked.length-1; i++){    
                clicked[i].classList.remove("gray")
            }
            clicked.splice(0,clicked.length-1)
            
        }
       
        expression[0] = inputDisplay.value
        expression[1] = op.textContent
    })
    
})






function display(){
    let number = ""
    if(this.id == "bDot"){
        number = "."
    }else{
        number = this.id[1]

    }
    if(clicked[0])clicked[0].classList.remove("gray")
    clicked.splice(0,1)
    displayNumbers(number)
        
       
}

function evaluate(a,operation,b){
    if(operation == "+"){
        return a + b;
    }
    if(operation == "-"){
        return a - b
    }
    if(operation == "*"){
        return a * b
    }
    if(operation == "/"){
        return a / b
    }
}




/**
 * Problem: Make the calculator calculate
 * Enters any number as a and store it inside an array
 * Click any operation and change its color, store the operation inside the same array 
 * enter the second number as b and delete the first number and store in the same array
 * Click = button and clear the screen and display the result
 * call evaluate function , the parameters a,operation,b are the first,second,last index of the array respectively
 * Display the result of the function in the inout field
 */

/**
 * Problem: When an operation button is clicked its color becomes gray, when another button is clicked it becomes gray and the previously clicked button return ti its color
 * Click the button and add to it a class .gray that gives  it background color gray
 * Push the recently clicked button into an array
 * if the array length is greter than 1 loop from the first element to the second last item
 * remove the class gray
 * remove the element from the array
 * 
 
 */


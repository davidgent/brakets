var btn = document.getElementsByTagName("button")[0]
var box = document.getElementsByClassName("switchable")[0]
var countDisplay = document.querySelector("p span")
var setNumber = document.getElementById("setNumber")
var fin = document.getElementById("fin")
var counter = 0
var total = 0
var target

var lis = document.querySelectorAll(".topNav a")

for (i = 0; i < lis.length; i++) {
    
    
    lis[i].addEventListener("mouseover", function() {
        this.classList.add("bg")
        console.log("mouseover")
    })
    
    lis[i].addEventListener("mouseout", function() {
        this.classList.remove("bg")
        console.log("mouseout")
    })
    lis[i].addEventListener("click", function(){
        this.classList.toggle("done")
    })
}




setNumber.addEventListener("change", function(){
    total = Number(this.value)
    fin.textContent = ""
    counter = 0
}) 


btn.addEventListener("click", function(){ 
    if (total === 0){
        
        console.log("total equals ", total)
        enter()
    } else {
        box.classList.toggle("on-off")
        counter++
        console.log("counter is ",counter)
        countDisplay.textContent = Number(counter)     
        
        if (counter === Number(total)) {
            amount()
        }   

    }
    
    
})


    function amount(){
        console.log("done it " + total + " times")
        counter = 0
        total = 0
        fin.textContent = "Target reached !!!"
        setNumber.value =""
        
}

    function enter(){
        console.log("Enter a value")
        fin.textContent ="Enter a value"
        countDisplay.textContent = 0
        counter = 0
    }
    
    

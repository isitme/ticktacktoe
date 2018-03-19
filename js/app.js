
var btnName = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9
};

var usedButton = [];

// It's the first turn, The random
function firstTurn (){
    var c = Math.floor(Math.random()*9)+1;
    
    switch(c){
        case 1: if(usedButton.includes(1) === true){
            console.log("False");
            firstTurn();
            console.log(c);
              
        }
        else{
            
            console.log(c);
            usedButton.push(c);
            document.querySelector(".btn1").textContent = "O";
            document.querySelector(".btn1").disabled = true;
        }
        break;
        case 2: if(usedButton.includes(2) === true){
            console.log("False");
            firstTurn();
            console.log(c);
              
        }
        else{
            
            console.log(c);
            usedButton.push(c);
            document.querySelector(".btn2").textContent = "O";
            document.querySelector(".btn2").disabled = true;
        }
        break;
        case 3: if(usedButton.includes(3) === true){
            console.log("False");
            firstTurn();
            console.log(c);
              
        }
        else{
            
            console.log(c);
            usedButton.push(c);
            document.querySelector(".btn3").textContent = "O";
            document.querySelector(".btn3").disabled = true;
        }
        break;
        case 4: if(usedButton.includes(4) === true){
            console.log("False");
            firstTurn();
            console.log(c);
              
        }
        else{
            
            console.log(c);
            usedButton.push(c);
            document.querySelector(".btn4").textContent = "O";
            document.querySelector(".btn4").disabled = true;
        }
        break;
        case 5: if(usedButton.includes(5) === true){
            console.log("False");
            firstTurn();
            console.log(c);
              
        }
        else{
            
            console.log(c);
            usedButton.push(c);
            document.querySelector(".btn5").textContent = "O";
            document.querySelector(".btn5").disabled = true;
        }
        break;
        case 6: if(usedButton.includes(6) === true){
            console.log("False");
            firstTurn();
            console.log(c);
              
        }
        else{
            
            console.log(c);
            usedButton.push(c);
            document.querySelector(".btn6").textContent = "O";
            document.querySelector(".btn6").disabled = true;
        }
        break;
        case 7: if(usedButton.includes(7) === true){
            console.log("False");
            firstTurn();
            console.log(c);
              
        }
        else{
            
            console.log(c);
            usedButton.push(c);
            document.querySelector(".btn7").textContent = "O";
            document.querySelector(".btn7").disabled = true;
        }
        break;
        case 8: if(usedButton.includes(8) === true){
            console.log("False");
            firstTurn();
            console.log(c);
              
        }
        else{
            
            console.log(c);
            usedButton.push(c);
            document.querySelector(".btn8").textContent = "O";
            document.querySelector(".btn8").disabled = true;
        }
        break;
        case 9: if(usedButton.includes(9) === true){
            console.log("False");
            firstTurn();
            console.log(c);
              
        }
        else{
            
            console.log(c);
            usedButton.push(c);
            document.querySelector(".btn9").textContent = "O";
            document.querySelector(".btn9").disabled = true;
        }
        break;
    }
    // Slect the other button autometicly
    


    console.log(c)
    
}



//If user Click the button
document.querySelector(".btn1").addEventListener("click", function(){
    document.querySelector(".btn1").textContent = "x";
    usedButton.unshift(1);
    //document.querySelector(".btn1").disabled = true;
    firstTurn();
})

document.querySelector(".btn2").addEventListener("click", function(){
    document.querySelector(".btn2").textContent = "x";
    document.querySelector(".btn2").disabled = true;
    usedButton.unshift(2);
    firstTurn();
})

document.querySelector(".btn3").addEventListener("click", function(){
    document.querySelector(".btn3").textContent = "x";
    usedButton.unshift(3);
    document.querySelector(".btn3").disabled = true;
    firstTurn();
})

document.querySelector(".btn4").addEventListener("click", function(){
    document.querySelector(".btn4").textContent = "x";
    usedButton.unshift(4);
    document.querySelector(".btn4").disabled = true;
    firstTurn();
})

document.querySelector(".btn5").addEventListener("click", function(){
    document.querySelector(".btn5").textContent = "x";
    usedButton.unshift(5);
    document.querySelector(".btn5").disabled = true;
    firstTurn();
})

document.querySelector(".btn6").addEventListener("click", function(){
    document.querySelector(".btn6").textContent = "x";
    usedButton.unshift(6);
    document.querySelector(".btn6").disabled = true;
    firstTurn();
})

document.querySelector(".btn7").addEventListener("click", function(){
    document.querySelector(".btn7").textContent = "x";
    usedButton.unshift(7);
    document.querySelector(".btn7").disabled = true;
    firstTurn();
})

document.querySelector(".btn8").addEventListener("click", function(){
    document.querySelector(".btn8").textContent = "x";
    usedButton.unshift(8);
    document.querySelector(".btn8").disabled = true;
    firstTurn();
})

document.querySelector(".btn9").addEventListener("click", function(){
    document.querySelector(".btn9").textContent = "x";
    usedButton.unshift(9);
    document.querySelector(".btn9").disabled = true;
    firstTurn();
})


// var g = [2,3,5,7,8];



// var b = g.find(function(element){
//     return element < 10;
// });
// console.log(b);

// var c = g.includes();
// console.log(c);


// function checkBtn(){
//     var x = [8,4,9,2];   
//     return x;
// }

// var t = checkBtn();
// for(var a = 0; a<= (t.length); a++){
    
//     if(t.indexOf(a) !== -1){
//         console.log("Find out");
        
//     }
//     else{
//         console.log("first success");
        
//         console.log(t.find(checkBtn));
        
        
//     }
    
// }


// var he = [2,1]
// function ranFun(){
//     var a = Math.floor(Math.random()*4)+1;
//     if(he.includes(a) === true ){      
//         ranFun();
//     }
//     else{
//         console.log(a);
        
//     }
//     return a;
// }
// var c = ranFun();











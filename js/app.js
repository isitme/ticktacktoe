
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

var globalUseButton = [];
var userButton = [1];
var comButton = [];

// It's the first turn, The random
function firstTurn (){

    var c = Math.floor(Math.random()*9)+1;
    if(globalUseButton.length === 1){
        //This is the first step of the Game..
        if(globalUseButton.includes(c)=== true){
            firstTurn();
        }
        else{
            console.log(c);
            globalUseButton.push(c);
            comButton.push(c);
            switch(c){
                case 1:{
                    document.querySelector(".btn1").textContent = "O";
                    document.querySelector(".btn1").disabled = true;
                }
                break;
                case 2:{
                    document.querySelector(".btn2").textContent = "O";
                    document.querySelector(".btn2").disabled = true;
                }
                break;
                case 3:{
                    document.querySelector(".btn3").textContent = "O";
                    document.querySelector(".btn3").disabled = true;
                }
                break;
                case 4:{
                    document.querySelector(".btn4").textContent = "O";
                    document.querySelector(".btn4").disabled = true;
                }
                break;
                case 5:{
                    document.querySelector(".btn5").textContent = "O";
                    document.querySelector(".btn5").disabled = true;
                }
                break;
                case 6:{
                    document.querySelector(".btn6").textContent = "O";
                    document.querySelector(".btn6").disabled = true;
                }
                break;
                case 7:{
                    document.querySelector(".btn7").textContent = "O";
                    document.querySelector(".btn7").disabled = true;
                }
                break;
                case 8:{
                    document.querySelector(".btn8").textContent = "O";
                    document.querySelector(".btn8").disabled = true;
                }
                break;
                case 9:{
                    document.querySelector(".btn9").textContent = "O";
                    document.querySelector(".btn9").disabled = true;
                }
                break;
            }   
        }   
    }
    else{
        console.log("Not Empty");
        //This is for 1
        
        
    }
   
    
}



//If user Click the button
document.querySelector(".btn1").addEventListener("click", function(){
    document.querySelector(".btn1").textContent = "x";
    globalUseButton.unshift(1);
    userButton.push(1);
    document.querySelector(".btn1").disabled = true;
    firstTurn();
})

document.querySelector(".btn2").addEventListener("click", function(){
    document.querySelector(".btn2").textContent = "x";
    document.querySelector(".btn2").disabled = true;
    globalUseButton.unshift(2);
    userButton.push(2);
    firstTurn();
})

document.querySelector(".btn3").addEventListener("click", function(){
    document.querySelector(".btn3").textContent = "x";
    globalUseButton.unshift(3);
    userButton.push(3);
    document.querySelector(".btn3").disabled = true;
    firstTurn();
})

document.querySelector(".btn4").addEventListener("click", function(){
    document.querySelector(".btn4").textContent = "x";
    globalUseButton.unshift(4);
    userButton.push(4);
    document.querySelector(".btn4").disabled = true;
    firstTurn();
})

document.querySelector(".btn5").addEventListener("click", function(){
    document.querySelector(".btn5").textContent = "x";
    globalUseButton.unshift(5);
    userButton.push(5);
    document.querySelector(".btn5").disabled = true;
    firstTurn();
})

document.querySelector(".btn6").addEventListener("click", function(){
    document.querySelector(".btn6").textContent = "x";
    globalUseButton.unshift(6);
    userButton.push(6);
    document.querySelector(".btn6").disabled = true;
    firstTurn();
})

document.querySelector(".btn7").addEventListener("click", function(){
    document.querySelector(".btn7").textContent = "x";
    globalUseButton.unshift(7);
    userButton.push(7);
    document.querySelector(".btn7").disabled = true;
    firstTurn();
})

document.querySelector(".btn8").addEventListener("click", function(){
    document.querySelector(".btn8").textContent = "x";
    globalUseButton.unshift(8);
    userButton.push(8);
    document.querySelector(".btn8").disabled = true;
    firstTurn();
})

document.querySelector(".btn9").addEventListener("click", function(){
    document.querySelector(".btn9").textContent = "x";
    globalUseButton.unshift(9);
    userButton.push(9);
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
//         console.log("first primary");
        
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











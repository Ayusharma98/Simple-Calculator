function dis(val){
 document.getElementById("display").value += val;
}

function myFunction(event){
    if(    event.key == '0' || event.key == '1'
        || event.key == '3' || event.key == '4'
        || event.key == '5' || event.key == '6'
        || event.key == '7' || event.key == '8'
        || event.key == '9' || event.key == '+'
        || event.key == '-' || event.key == '*'
         || event.key == '/')
    document.getElementById("display").value += event.key;
}

var cal = document.getElementById("Calculator");
cal.onkeyup = function (event) 
    {
            if(event.keyCode == 13){
                console.log("Enter");
                let x = document.getElementById("display").value
                console.log(x);
                solve();
            }
    }

    function solve() {
        let x = document.getElementById("display").value
        let y = math.evaluate(x)
        document.getElementById("display").value = y
    }

    function clr() {
        document.getElementById("display").value = ""
    }



// buttons = document.querySelectorAll('button');
// let screenValue="";
// for(item of buttons)
// {
//     item.addEventListener("click", (e) => {
//         buttonText = e.target.innerText;
//         if(buttonText=='X'){
//             buttonText='*';
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }
//         else if(buttonText=='C'){
//             screenValue="";
//             screen.value=screenValue;
//         }

//     });
// }
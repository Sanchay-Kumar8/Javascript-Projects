// document.getElementById("count-el").innerText = 5
let count = 0;
let countEL = document.getElementById("count-el");
//console.log(count);

function increment(){
    count += 1;
    countEL.textContent = count;
    
    //console.log(count);    
};
let saveEl = document.getElementById("save-entries");
function save() {
    let countStr = count + " - ";
    //console.log(count);
    saveEl.textContent += countStr;
    count = 0;
    countEL.textContent = count;
    
}



let boxes = document.querySelectorAll(".box");
let resetBin = document.querySelector("#reset-bin");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winpattern =[
    [0,1,2],
    [0,3,6],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const showwinner = (winner) =>{
    msg.innerText = `congratulation ,winner is $(winner)`;
    msgcontainer.classList.remove("hide");
    dis
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        //console.log("box was clicked");
        if(turn0){
            box.innerText="0";
            turn0=false;
        }else{
            box.innerText="1";
            turn0=true;
        }
        box.disabled=true;

        checkwinner();
    });
});

const checkwinner =()=>{
    for(let pattern of winpattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);
                return true;
            }
        }
    }
    
};
//console.log(pattern[0],pattern[1],pattern[2]);
//console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
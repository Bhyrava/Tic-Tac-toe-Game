let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGamebtn=document.querySelector("#new");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turno=true;
let count=0;//---------------------------

const winpatterns=[
    [0 ,1 ,2],
    [0 ,3 ,6],
    [0 ,4 ,8],
    [1 ,4 ,7],
    [2 ,5 ,8],
    [2 ,4 ,6],
    [3 ,4 ,5],
    [6 ,7 ,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            // box.style.color="red";
            box.classList.add("o");
            box.innerText="O";
            turno=false;
        }
        else{
            // box.style.color="black";
            box.classList.add("x");
            box.innerText="X";
            turno=true;
        }
        count++;//--------------------
        box.disabled=true;
        checkwinner();
    }
    );}
);

const disableboxes = () =>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

let flag=0;//-------------------------

const checkwinner=()=>{
    for(let patterns of winpatterns)
    {
        let pos1val=boxes[patterns[0]].innerText;
        let pos2val=boxes[patterns[1]].innerText;
        let pos3val=boxes[patterns[2]].innerText;

        if(pos1val!=""&&pos2val!=""&&pos3val!="")
        {
            if(pos1val===pos2val&&pos2val===pos3val)
            {
                showwinner(pos1val);
                flag=1;//-----------
                return;
            }
        }
    }
    if(count===9&&flag===0)//-----------------------
    {
        draw();
    }
};
 
const draw = () =>{
        msg.innerText="game draw ";
        msgcontainer.classList.remove("hide");
        disableboxes();
}

const showwinner = (winner)=>{
    msg.innerText=`congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const enableboxes = () =>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};

const resetgame = () =>
{
    turno=true;
    enableboxes();
    count=0;
    flag=0;
    msgcontainer.classList.add("hide");
}

newGamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
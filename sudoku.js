var numSelected= null;
var tileSelected= null;

var errors=0;

var board=[
    '--6-----1',
    '-7--6--5-',
    '8--1-32--',
    '--5-4-8--',
    '-4-7-2-9-',
    '--8-1-7--',
    '--12-5--3',
    '-6--7--8-',
    '2-----4--'
]

var solution=[
    '536827941',
    '172964358',
    '894153267',
    '715349826',
    '643782195',
    '928516734',
    '481295673',
    '369471582',
    '257638419'
]

window.onload=function(){
    setGame();
}

function setGame(){
    for(let i=1; i<=9; i++)
    {
        let number=document.createElement("div");
        number.id=i;
        number.innerText=i;
        number.addEventListener("click", selectNum);
        number.classList.add("number");
        document.getElementById("digit").appendChild(number);
    }

    for(let r=0; r<9; r++)
    {
        for(let c=0; c<9; c++)
        {
            let tile=document.createElement("div");
            tile.id=r.toString()+"-"+c.toString();
            if(board[r][c]!="-")
            {
                tile.innerText=board[r][c];
                tile.classList.add("tileStart");
            }
            if(r==2 || r==5)
            {
                tile.classList.add("horizontalLine1");
            }
            if(c==2 || c==5)
            {
                tile.classList.add("verticalLine1");
            }
            if(r==3 || r==6)
            {
                tile.classList.add("horizontalLine2");
            }
            if(c==3 || c==6)
            {
                tile.classList.add("verticalLine2");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNum()
{
    if(numSelected!=null)
    {
        numSelected.classList.remove("numSelected");
    }
    numSelected=this;
    numSelected.classList.add("numSelected");
}

function selectTile()
{
    if(numSelected)
    {
        if(this.innerText!="")
        {
            return;
        }
    }

    let coords=this.id.split("-");
    let r=parseInt(coords[0]);
    let c=parseInt(coords[1]);

    if(solution[r][c]==numSelected.id)
    {
        this.innerText=numSelected.id;
    }
    else{
        errors+=1;
        document.getElementById("errors").innerText=errors;
    }
}
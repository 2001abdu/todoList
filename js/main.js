let addText=document.querySelector(".addText");
let addBtn=document.querySelector(".addBtn");
let iteamList=document.querySelector(".iteamList1");

addBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    let div=document.createElement("div");
    div.classList.add("iteamList");
    
    let li=document.createElement("li");
    li.classList.add("addListIteam");

    li.innerHTML= addText.value;

    div.appendChild(li);
    iteamList.appendChild(div);

    let button=document.createElement("button");
    button.classList.add("btnCheck");
    button.innerHTML=`<i class="fas fa-check"></i>`;

    let buttonDel=document.createElement("button");
    buttonDel.classList.add("btnDelet");
    buttonDel.innerHTML=`<i class="fas fa-trash"></i>`;

    li.appendChild(button);
    li.appendChild(buttonDel);

    addText.value=""
});

iteamList.addEventListener("click" , (e) =>{
    const item=e.target;
    if(item.classList[0]=== "btnDelet"){
        item.remove();
    }
    console.log(e.target);
});










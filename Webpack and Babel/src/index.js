let logoDiv=document.querySelector(".logo");
logoDiv.style.height="100px";
logoDiv.style.backgroundColor="wheat";
let h1=document.createElement("h1");
h1.innerHTML="NOTES";
logoDiv.append(h1);
let buttn=document.querySelector("#btn");
let clickBtn=0;
buttn.addEventListener("click",()=>{
    let text=document.querySelector("#text").value;
    if(text==="")
    {
        alert("Enter a note");
        return;
    }
    clickBtn++;
    appendNote(text,clickBtn);
})

function appendNote(data,click){
    data=`${click}`+") "+data;
    let note_div=document.createElement("div");
    note_div.classList.add("addedNote");
    note_div.style.height="20px";
    note_div.innerHTML=data;
    document.querySelector(".notes").append(note_div);
}
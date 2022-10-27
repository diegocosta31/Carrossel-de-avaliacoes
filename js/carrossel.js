let count = 0
let item = document.querySelector("#item-"+count);
item.classList.remove("img_itens");
item.classList.add("block");


function proxima(){
    item.classList.remove("block");
    item.classList.toggle("img_itens");
    count += 1;
    if(count == 6 ){
        count = 0
    }
    item = document.querySelector("#item-"+count);
    item.classList.remove("img_itens");
    item.classList.toggle("block");
}
function anterior(){
    item.classList.remove("block");
    item.classList.toggle("img_itens");
    count -= 1;
    if(count == -6 ){
        count = 0
    };
    if(count < 0){
    count = count + 6
    };
    item = document.querySelector("#item-"+count);
    item.classList.remove("img_itens");
    item.classList.toggle("block");
}

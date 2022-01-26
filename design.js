

let size_of_grid=document.getElementById("sizePicker");
var table=document.getElementById("pixelCanvas");

size_of_grid.addEventListener('submit',event=>
{
    event.preventDefault();
    let height=document.getElementById("inputHeight").value;
    let width=document.getElementById("inputWidth").value;
    
    makeGrid(height,width);
})

function makeGrid(height,width){
 
    let i=1;
    let r_id="table"+i;
    let row=document.getElementById(r_id);
    while(row!==null)
    {
        row.remove();
        i=i++;
        r_id="table"+i;
        row=document.getElementById(r_id);
    }
   
    for(let i=1;i<=height;i++)
    {
        table.insertAdjacentHTML("afterbegin","<tr id=table"+i+"></tr>");
        var t_row=document.getElementById("table"+i);

        for(let j=1;j<=width;j++){
            t_row.insertAdjacentHTML("afterbegin","<td id = cell" + i + j +"></td>");
        }
    }

    table.addEventListener("click", event=> {
        let color = document.getElementById("colorPicker").value;
        
        var cell_id = event.target.id;

        var cell= document.getElementById(cell_id);
        var attribute = cell.hasAttribute("style");
        if (attribute === true) {
            cell.removeAttribute("style");
        } else {
            cell.style.backgroundColor = color;
        }
    })
 
    
}

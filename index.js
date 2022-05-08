var SelectedRow=null
function onFormSubmit(e){
    event.preventDefault();
    var formData=readFormDate();
    if(SelectedRow===null){
        inserNewRecord(formData);
    }else{
        updateRecord(formData);


    } 
    resetForm();

}

function readFormDate(){
    var formData={};
    formData["name"]=document.getElementById("name").value;
    formData["color"]=document.getElementById("color").value;
    formData["model"]=document.getElementById("model").value;
    formData["motor"]=document.getElementById("motor").value;
    return formData;

}
// insert the Date
function inserNewRecord(data){
    var table=document.getElementById("newlist").getElementsByTagName("tbody")[0];
    var newRow=table.insertRow(table.length)
    var cell1=newRow.insertCell(0)
        cell1.innerHTML=data.name;
    var cell2=newRow.insertCell(1)
        cell2.innerHTML=data.color;
    var cell3=newRow.insertCell(2)
        cell3.innerHTML=data.model;
    var cell4=newRow.insertCell(3)
        cell4.innerHTML=data.motor;
    var cell5=newRow.insertCell(4)
        cell5.innerHTML=`<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`
}
// edit the Data
function onEdit(td){
    SelectedRow=td.parentElement.parentElement;
    document.getElementById("name").value=SelectedRow.cells[0].innerHTML;
    document.getElementById("color").value=SelectedRow.cells[1].innerHTML;
    document.getElementById("model").value=SelectedRow.cells[2].innerHTML;
    document.getElementById("motor").value=SelectedRow.cells[3].innerHTML;

}
function updateRecord(formData){
    SelectedRow.cells[0].innerHTML=formData.name;
    SelectedRow.cells[1].innerHTML=formData.color;
    SelectedRow.cells[2].innerHTML=formData.model;
    SelectedRow.cells[3].innerHTML=formData.motor;

}

// delete the Data
function onDelete(td){
    if(confirm("Buni uchirishni hohlaysizmi?")){
        row=td.parentElement.parentElement;
        document.getElementById("newlist").deleteRow(row.rowIndex);
    }
    resetForm();
}
function resetForm(){
 document.getElementById("name").value=""
document.getElementById("color").value=""
document.getElementById("model").value=""
document.getElementById("motor").value=""

}

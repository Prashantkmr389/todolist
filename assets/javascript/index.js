
document.getElementById("deleteButton").addEventListener("click", function () {
  let checkvalue = document.querySelectorAll('input[type="checkbox"]:checked');
  let arr = [];
  for (let i of checkvalue) {
    
    arr.push(i.getAttribute("uid"));
  }
  // console.log('delete is pushed')
  // console.log(arr)
  if (arr.length == 0) {
    console.log('No item selected');
    return;
  }
  
  $.ajax({
    type: "POST",
    url: "/delete/?id=" + arr,
    success: function () {
        console.log('Deleted successfully');
        location.reload();
    },
    error: function (err) {
        
        console.log(err);
    }
  })

});


let value = document.querySelectorAll("#pcategory");
// console.log(value)
for(let i of value){
    i.style.width = "100px";
    i.style.height = "30px";
    i.style.borderRadius = "5px";
    i.style.textAlign = "center";
    i.style.paddingTop = "5px";
    if(i.innerText == "Work"){
        i.style.backgroundColor = "violet";
    }
    else if(i.innerText == "Personal"){
        i.style.backgroundColor = "skyblue";
    }
    else if(i.innerText == "Shopping"){
        i.style.backgroundColor = "yellow";
    }
    else if(i.innerText == "College"){
        i.style.backgroundColor = "orange";
    }
    else if(i.innerText == "Others"){
        i.style.backgroundColor = "brown";
    }
}
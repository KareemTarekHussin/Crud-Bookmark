var  nameinput = document.getElementById('productname');
var  categoryinput = document.getElementById('productcategory');
var tbody = document.getElementById('tbody');



if(localStorage.getItem('productsdata')==null){var productslist = [];}

else{
var productsliststring =  localStorage.getItem ('productsdata'); 
var productslist = JSON.parse(productsliststring);
displayproducts();}


function createproduct() {
   // var pname = nameinput.value;
   // var category = categoryinput.value;

var product = { pname : nameinput.value ,
   category : categoryinput.value ,
   
}  



 
  productslist.push(product)
  var x = JSON.stringify(productslist)
  localStorage.setItem('productsdata', x);
//   console.log(productslist)
//   console.log(product)
  displayproducts()
   clearform()



}




function clearform(){ 
   nameinput.value = '';
   categoryinput.value = '';0
}


function displayproducts(){
   var trs ='';
   for(var i =0 ; i < productslist.length ; i++){
   
trs += 
`
<div class="d-flex justify-content-between w-75 m-auto">
<div>
${productslist[i].pname}
</div>
<div>
    <a class="btn btn-background-info" href="https://${productslist[i].category}">Visit</a>
    <button class="btn-background-danger" onclick="deleteproduct(${i})" >Delete</button>
</div>
</div>`
}



console.log(trs);
tbody.innerHTML = trs;
}



function deleteproduct(indexofproduct) {

productslist.splice(indexofproduct , 1);

localStorage.setItem('productsdata' , JSON.stringify(productslist))

displayproducts();
console.log(productslist);
}
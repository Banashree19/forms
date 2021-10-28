function saveData(){
    let name1,email,company;
     name1 =document.getElementById("name1").value;
     email =document.getElementById("email").value;
     company =document.getElementById("company").value;
     console.log(name1)
     
     localStorage.setItem("name1",name1)
     localStorage.setItem("email",name1)
     localStorage.setItem("company",name1)
 }
 


   


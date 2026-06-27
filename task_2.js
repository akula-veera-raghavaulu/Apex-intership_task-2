document.getElementById("contactForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();
    let phone=document.getElementById("phone").value.trim();
    let gender=document.querySelector('input[name="gender"]:checked');
    let message=document.getElementById("message").value.trim();

    let valid=true;

    document.getElementById("nameError").textContent="";
    document.getElementById("emailError").textContent="";
    document.getElementById("phoneError").textContent="";
    document.getElementById("genderError").textContent="";
    document.getElementById("messageError").textContent="";

    if(name===""){
        document.getElementById("nameError").textContent="Name is required";
        valid=false;
    }

    let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        document.getElementById("emailError").textContent="Enter a valid email";
        valid=false;
    }

    let phonePattern=/^[6-9]\d{9}$/;

    if(!phonePattern.test(phone)){
        document.getElementById("phoneError").textContent="Enter a valid phone number";
        valid=false;
    }

    if(!gender){
        document.getElementById("genderError").textContent="Please select gender";
        valid=false;
    }

    if(message===""){
        document.getElementById("messageError").textContent="Message is required";
        valid=false;
    }

    if(valid){
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset();
    }

});

function addTask(){

    let taskInput=document.getElementById("taskInput");

    let taskText=taskInput.value.trim();

    if(taskText===""){
        alert("Please enter a task");
        return;
    }

    let li=document.createElement("li");

    li.textContent=taskText;

    let deleteBtn=document.createElement("button");

    deleteBtn.textContent="Delete";

    deleteBtn.className="delete-btn";

    deleteBtn.onclick=function(){
        li.remove();
    };

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    taskInput.value="";

}
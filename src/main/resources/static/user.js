let myUser = "";

fetch("http://localhost:8080/user")
    .then(res => res.json())
    .then(data => {
        myUser = data;
        console.log(data)
        showOneUser(myUser);
    })

function showOneUser(user) {
    let temp = "";
    temp += "<tr>"
    temp += "<td>" + user.id + "</td>"
    temp += "<td>" + user.name + "</td>"
    temp += "<td>" + user.surname + "</td>"
    temp += "<td>" + user.age + "</td>"
    temp += "<td>" + user.username + "</td>"
    temp += "<td>" + user.roles + "</td>"
    temp += "</tr>"
    document.getElementById("oneUserBody").innerHTML = temp;
}
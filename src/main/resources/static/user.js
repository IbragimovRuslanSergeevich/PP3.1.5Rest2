/**
 * @type {Object}
 */
let myUser = "";
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired");

    fetch("http://localhost:8080/user")
        .then(res => res.json())
        .then(data => {
            myUser = data;
            console.log(data)
            showOneUser(myUser);
            data.name
            data.id
            data.username
            data.surname

        })
        .catch(error => console.error("Ошибка запроса:", error));


    function showOneUser(user) {
        let temp = "";
        temp += "<tr>";
        temp += "<td>" + (user.id !== undefined ? user.id : "") + "</td>";
        temp += "<td>" + (user.name !== undefined ? user.name : "") + "</td>";
        temp += "<td>" + (user.surname !== undefined ? user.surname : "") + "</td>";
        temp += "<td>" + (user.age !== undefined ? user.age : "") + "</td>";
        temp += "<td>" + (user.username !== undefined ? user.username : "") + "</td>";
        temp += "<td>"; // начало блока для ролей

        // Перебор ролей и добавление их в ячейку
        if (user.roles !== undefined) {
            user.roles.forEach(role => {
                temp += role.roleType + " "; // предполагаем, что имя роли находится в свойстве roleType
            });
        }

        temp += "</td>"; // конец блока для ролей
        temp += "</tr>";

        document.getElementById("oneUserBody").innerHTML = temp;
    }
});
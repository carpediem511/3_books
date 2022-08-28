
let userName = prompt ("Введите своё имя") 
let titleHTML = document.getElementById("title")
let count = 0

    if (userName) {
        titleHTML.innerHTML = "Ваш список дел," + " " + userName + ":"
    } else {
        titleHTML.innerHTML = "Ваш список дел, анонимный пользователь"
    }

      
function add() {
    
    let inputHTML = document.getElementById("addItem")
    let listHTML = document.getElementById("list")
    let value = inputHTML.value

    count = count + 1

    if (count <= 5) {
        listHTML.innerHTML = listHTML.innerHTML + "<span> Дело № </span>" + count + ". " + value + "  " + "<br/>" + "<br/>"
    }
    else if (count > 5) {
        alert ("Вы можете ввести не более 5 дел!")
    }
   
}   
    
    
    

    
 

 
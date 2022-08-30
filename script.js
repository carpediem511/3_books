
const books = [
    {
        id: 1,
        title: "Гарри Поттер и философский камень",
        authors: "Джоан Роулинг",
        year: "1997",
        image: "/book1.jpg"
    },

    {
        id: 2,
        title: "Гарри Поттер и тайная комната",
        authors: "Джоан Роулинг",
        year: "1998",
        image: "/book2.jpg"
    },

    {
        id: 3,
        title: "Гарри Поттер и узник Азкабана",
        authors: "Джоан Роулинг",
        year: "1999",
        image: "/book3.jpg"
    },

    {
        id: 4,
        title: "Гарри Поттер и кубок огня",
        authors: "Джоан Роулинг",
        year: "2000",
        image: "/book4.jpg"
    }
]
   
const list2 = document.getElementById("list")

function renderBooks() {
    list2.innerHTML = ""
    books.forEach((book) => {
        list2.innerHTML += `
            <div class="list"> 
                <div class="book">
                    <div class="book-image"><img src="${book.image}" class="book-image-style"/></div>
                    <div class="book-title">${book.title}</div>
                    <div class="book-year">${book.year}</div>
                    <div class="book-author">${book.authors}</div>
                    <div class="book-buttons">
                        <button class="book-button">Изменить</button>
                        <button onclick="deleteBook(${book.id})" class="book-button">Удалить</button>
                    </div>
                </div>
            </div>
       `
    })
}


function deleteBook(id) {
    const bookDel = books.find((findBook) => {

        return findBook.id === id

        
    })

   const bookIndex = books.indexOf(bookDel)
   console.log(bookIndex)

   books.splice(bookIndex, 1)

   renderBooks()
}


function addBook() {
    
    const bookProperties = document.getElementById("bookPropertiesId")

    bookProperties.innerHTML += `
    <div class="propertiesNewBook" id="propertiesNewBookId">

    <input id="bookName" placeholder="Имя книги"></input>

    <input id="bookAuthor" placeholder="Автор книги"></input>

    <input id="bookYear" placeholder="Год публикации книги"></input>

    <input id="bookImage" placeholder="Ссылка на изображение"></input>

    <button id="bookSave" onclick="saveBook()">Сохранить</button></input>

    </div>

 `
}  

const addBookButton = document.getElementById("addBookButton")
addBookButton.addEventListener("click", addBook)
addBookButton.addEventListener("click", showForm)


let isOpen = false

function showForm() {

   let openForm = document.getElementById("bookPropertiesId")
   let buttonClick = document.getElementById("bookSave")

 
   if (buttonClick) { // если у нас нажали на первый элемент 
		if (isOpen) { // если он уже был открыт, значит, нажали еще раз - закрываем

            openForm.style.display = "none"
            isOpen = false // установить закрытым
   
		} else {
		
            openForm.style.display = "flex"
        	isOpen = true // установить открытым
        
		}
 	}
}
  

function clearField() {
    document.getElementById("bookName").value = ""
    document.getElementById("bookAuthor").value = ""
    document.getElementById("bookYear").value = ""
    document.getElementById("bookImage").value = ""
}

function saveBook () {

    const bookNameValue = document.getElementById("bookName").value
    const bookAuthorValue = document.getElementById("bookAuthor").value
    const bookYearValue = document.getElementById("bookYear").value
    const bookImageValue = document.getElementById("bookImage").value

    const book = {
        title: bookNameValue,
        authors: bookAuthorValue,
        year: bookYearValue,
        image: bookImageValue
    }

    books.push(book)
    renderBooks()
    clearField()
    hideField()
    
}

renderBooks()

    
    



    
 

 

const books = [
    {
        title: "Гарри Поттер и философский камень",
        authors: "Джоан Роулинг",
        year: "1997",
        image: "/book1.jpg"
    },

    {
        title: "Гарри Поттер и тайная комната",
        authors: "Джоан Роулинг",
        year: "1998",
        image: "/book2.jpg"
    },

    {
        title: "Гарри Поттер и узник Азкабана",
        authors: "Джоан Роулинг",
        year: "1999",
        image: "/book3.jpg"
    },

    {
        title: "Гарри Поттер и кубок огня",
        authors: "Джоан Роулинг",
        year: "2000",
        image: "/book4.jpg"
    }
]
   
const list2 = document.getElementById("list")

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
                    <button class="book-button">Удалить</button>
                </div>
            </div>
        </div>
   `
})

    
    
    

    
 

 
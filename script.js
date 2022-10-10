// ввожу счётчик для книг, чтобы в id записывались значения

let booksCounter = 1;

let books = [
  //создать массив из книг
  {
    // id: 1,
    id: booksCounter++,
    title: "Гарри Поттер и философский камень",
    authors: "Джоан Роулинг",
    year: "1997",
    image: "./book1.jpg",
  },

  {
    // id: 2,
    id: booksCounter++,
    title: "Гарри Поттер и тайная комната",
    authors: "Джоан Роулинг",
    year: "1998",
    image: "./book2.jpg",
  },

  {
    // id: 3,
    id: booksCounter++,
    title: "Гарри Поттер и узник Азкабана",
    authors: "Джоан Роулинг",
    year: "1999",
    image: "./book3.jpg",
  },

  {
    // id: 4,
    id: booksCounter++,
    title: "Гарри Поттер и кубок огня",
    authors: "Джоан Роулинг",
    year: "2000",
    image: "./book4.jpg",
  },

  {
    // id: 5,
    id: booksCounter++,
    title: "Гарри Поттер и орден Феникса",
    authors: "Джоан Роулинг",
    year: "2003",
    image: "./book5.jpg",
  },

  {
    // id: 6,
    id: booksCounter++,
    title: "Гарри Поттер и принц-полукровка",
    authors: "Джоан Роулинг",
    year: "2005",
    image: "./book6.jpg",
  },

  {
    // id: 7,
    id: booksCounter++,
    title: "Гарри Поттер и дары смерти",
    authors: "Джоан Роулинг",
    year: "2007",
    image: "./book7.jpg",
  },
];

const addModalWindow = document.getElementById("addModalWindowId"); //найти элемент модального окна
const closeModalWindowButton = document.getElementById("closeModalButton"); //найти кнопку "закрыть модальное окно"
const openModalWindowButton = document.getElementById("addModalButton"); //найти кнопку "открыть модальное окно"
const bookSave = document.getElementById("bookSave"); //найти кнопку "сохранить книгу"

const list2 = document.getElementById("list"); //найти в HTML контейнер с книгами

closeModalWindowButton.addEventListener("click", closeModalWindow); //по нажатию кнопки окно закрывается
openModalWindowButton.addEventListener("click", openModalWindow); //по нажатию кнопки окно открывается
bookSave.addEventListener("click", saveBook); //по нажатию кнопки книга сохраняется

function closeModalWindow() {  //ввожу функцию "закрыть модальное окно"
  addModalWindow.style.display = "none"; //не показывать стили
}

function openModalWindow() {  //ввожу функцию "открыть модальное окно"
  addModalWindow.style.display = "flex"; //показывать стили
}

function renderBooks() {   // ввести функцию - визуализировать книги
  list2.innerHTML = ""; // пока в контейнере пусто
  books.forEach((book) => {     // добавляю в html контейнер, в котором описаны свойства книг
    list2.innerHTML += ` 
    <div class="bookStyle"> 
      <div class="book">
        <div class="book-image"><img src="${book.image}" class="book-image-style"/></div>
        <div class="book-title">${book.title}</div>
        <div class="book-year">${book.year}</div>
        <div class="book-author">${book.authors}</div>
        
        <div class="book-buttons">
        
          <button id="openWindowUpdate-${book.id}" class="book-button">Обновить</button>
          <button id="deleteBookButton-${book.id}" class="book-button">Удалить</button>
          
        </div>
      </div>
    </div>
    `;
  });

  books.forEach((book) => {  //прохожусь по каждому элементу массива

    document.getElementById(`deleteBookButton-${book.id}`).addEventListener("click", () => { //ищу нужную книгу по id
      deleteBook(book.id); //если нажали на кнопку, книга удаляется
    });
  });

  saveToLocalStorage(); //сохраняю изменения в браузере
}

function saveBook() {  //ввести функцию "сохранить книгу"
  const bookNameValue = document.getElementById("bookName").value; //получить значение из поля "имя"
  const bookAuthorValue = document.getElementById("bookAuthor").value; //получить значение из поля "автор"
  const bookYearValue = document.getElementById("bookYear").value; //получить значение из поля "год"

  const book = {  //ввести переменную, где будут храниться все эти значения value

    id: booksCounter++,
    title: bookNameValue,
    authors: bookAuthorValue,
    year: bookYearValue,
    image: getImage(),
  };

  books.push(book); //добавить книгу
  renderBooks(); //отобразить книгу
  clearField(); //очистить поля
  closeModalWindow(); //скрыть модальное окно при сохранении книги
  saveToLocalStorage(); //сохранить в локал сторэдж
}

function saveToLocalStorage() {    //ввожу функцию сохранить в локал сторэдж
  const booksJson = JSON.stringify(books); //перевести объект-массив в джэйсон
  localStorage.setItem("books", booksJson); //передать данные в локал сторэдж
}

function deleteBook(id) {   //создаю функцию для удаления книги, кнопка "Удалить"

  const bookDel = books.find((findBook) => {
    return findBook.id === id; //найти книгу по id
  });

  const bookIndex = books.indexOf(bookDel); //присвоить переменной индексы книг из массива

  books.splice(bookIndex, 1);

  renderBooks();
  saveToLocalStorage();
}

function clearField() {  //очистить поля
  document.getElementById("bookName").value = "";
  document.getElementById("bookAuthor").value = "";
  document.getElementById("bookYear").value = "";
  document.getElementById("bookImage").value = "";
}

function getImage (bookImageValue) {

  let checkImage

  if (bookImageValue) {
    checkImage = bookImageValue
  } else {
    checkImage = "./none-image.jpg"
  }
  return checkImage
}

const booksJson = localStorage.getItem("books"); //преобразование из JSON в JS

if (booksJson) {
  books = JSON.parse(booksJson);
}

const updateWindow = document.getElementById("addUpdateWindow"); //найти элемент окна "обновление"
const updateCloseButton = document.getElementById("updateCloseButton"); //найти кнопку закрыть окно "обновить"
const openWindowUpdateButton = document.getElementById(`openWindowUpdate-${book.id}`); //найти кнопку открыть окно "обновить"
const updateBookButton = document.getElementById("updateBookButton"); //найти кнопку "обновить книгу"

updateCloseButton.addEventListener("click", closeUpdateWindow); //по нажатию кнопки окно закрывается
openWindowUpdateButton.addEventListener("click", openUpdateWindow); //по нажатию кнопки окно открывается
openWindowUpdateButton.addEventListener("click", saveBook); //по нажатию кнопки книга сохраняется

function closeUpdateWindow() {  //ввожу функцию "закрыть модальное окно"
  updateWindow.style.display = "none"; //не показывать стили
}

function openUpdateWindow() {  //ввожу функцию "открыть модальное окно"
  updateWindow.style.display = "flex"; //показывать стили
}

renderBooks();
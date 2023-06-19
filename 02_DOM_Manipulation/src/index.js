//BookStore has been moved to data.js 
console.log(bookStore);

function formatPrice(price) {
  return '$' + Number.parseFloat(price).toFixed(2);
}

//* Create a function that uses a selector to get the header and add the bookStore name as its text content
// Renders Header 

function renderHeader() {
  const header = document.querySelector('#store-name')
  header.textContent = bookStore.name
}


//* Create a function that grabs all the divs from the footer and add the book store name, address, hours and/or phone number
// Renders Footer

function renderFooter() {
  const footerDivs = document.querySelectorAll('footer div')
  footerDivs[0].textContent = bookStore.name
  footerDivs[1].textContent = bookStore.number
  footerDivs[2].textContent = bookStore.address
}


// create a function called renderBook(book)
// it will take a book object as an argument
// and create the html struture for rendering 
// that book and insert it into our webpage!

const bookObj = bookStore.inventory
const bookList = document.querySelector('#book-list')

function renderBook(bookObj) {
  const li = document.createElement('li')
  const h3 = document.createElement('h3')
  const pAuthor = document.createElement('p')
  const pPrice = document.createElement('p')
  const img = document.createElement('img')
  const btn = document.createElement('button')
  
  h3.textContent = bookObj.title
  pAuthor.textContent = bookObj.author
  pPrice.textContent = formatPrice(bookObj.price)
  img.src = bookObj.imageUrl
  btn.textContent = "Delete"
  
  li.classList.add('list-li')
  li.append(h3, pAuthor, pPrice, img, btn)
  
  bookList.appendChild(li)
}

function deleteBook() {
  document.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
    document.querySelector("li").remove()
  })
})
}

//function calls
renderHeader()
renderFooter()
bookObj.forEach((bookObj) => renderBook(bookObj))
deleteBook()

// function renderBook(book) {
// should create an li element that looks something like this:
  // <li class="list-li">
  //   <h3>Eloquent JavaScript : A Modern Introduction to Programming</h3>
  //   <p>Marjin Haverbeke</p>
  //   <p>$10.00</p>
  //   <img src="https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Eloquent JavaScript cover"/>
  //   <button>Delete</button>
  // </li>




  
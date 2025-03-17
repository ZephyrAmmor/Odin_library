document.addEventListener('DOMContentLoaded', () => {
  const bookName = document.getElementById('name');
  const author = document.getElementById('author');
  const year = document.getElementById('year');
  const pages = document.getElementById('pages');
  const read = document.getElementById('read');
  const addBookButton = document.getElementById('submit');
  const booksContainer = document.getElementById('books');

  function createBookElement(book) {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    bookElement.innerHTML = `
      <h3>${book.name}</h3>
      <h3>${book.author}</h3>
      <h3>${book.year}</h3>
      <h3>${book.pages}</h3>
      <h3>${book.read ? 'Read' : 'Not Read'}</h3>`;
    return bookElement;
  }

  function addBookToLibrary(event) {
    event.preventDefault();
    if (!bookName.value || !author.value || !year.value || !pages.value) {
      alert('Please fill in all required fields.');
      return;
    }
    const book = {
      name: bookName.value,
      author: author.value,
      year: year.value,
      pages: pages.value,
      read: read.checked
    };
    const bookElement = createBookElement(book);
    booksContainer.appendChild(bookElement);
    bookForm.reset();
  }

  const bookForm = document.getElementById('book');
  addBookButton.addEventListener('click', addBookToLibrary);
});
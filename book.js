function adddetails() {
    bookName = p1.value
    if (bookName in localStorage) {
        confirm("Book is already exist")
    }
    else {

        authername = p2.value
        description = exampleFormControlTextarea1.value


        user = { bookName, authername, description }
        localStorage.setItem(bookName, JSON.stringify(user))

        confirm("book is added")
    }

}

function searchBook() {
    bookName = search.value
    
    if  (bookName in localStorage) {
        let book=localStorage.getItem(bookName)
        book=JSON.parse(book)
        output.innerHTML = "<h4>BOOK DETAILS</h4><p>" + "Book Name: " + book.bookName + "<br>" + "Author Name: " + book.authername + "<br>" + "Description: " + book.description + "</p>"

    }
    else{
        alert("book not found")
    }    
    //store in lc
    //localStorage.setItem("uname", uname)

    //window.location = "page.html"
}
function adddetails() {
    uname = p1.value
    if (uname in localStorage) {
        confirm("Book is already exist")
    }
    else {

        authername = p2.value
        description = exampleFormControlTextarea1.value


        user = { uname, authername, description }
        localStorage.setItem(uname, JSON.stringify(user))

        confirm("book is added")
    }

}

function searchBook() {
    uname = search.value
    
    if  (uname in localStorage) {
        let book=localStorage.getItem(uname)
        book=JSON.parse(book)
        output.innerHTML = "<h4>BOOK DETAILS</h4><p>" + "Username: " + book.uname + "<br>" + "Author Name: " + book.authername + "<br>" + "Description" + book.description + "</p>"

    }
    else{
        alert("book not found")
    }    
    //store in lc
    //localStorage.setItem("uname", uname)

    //window.location = "page.html"
}
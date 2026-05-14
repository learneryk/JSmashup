const books =   {
                    title: "The Alchemist",
                    author: "Paulo Coelho",
                    year: 1988
}


const content = document.getElementById("library")

function printBookSummary(bookObj) {
    content.innerText = `The Book '${bookObj.title}' was written by ${bookObj.author} in ${bookObj.year}`
}

printBookSummary(books)
class Book {
    constructor(title, author, price) {
        this.title =  title;
        this.author = author;
        this.price = price;
    }

    getTitle = function() {
        return this.title;
    }
    getAuthor = function() {
        return this.author;
    }
    getPrice = function() {
        return this.price;
    }

    setTitle = function(title) {
        this.title = title
    }
    setAuthor = function(author) {
        this.author = author;
    }
    setPrice = function(price) {
        if( (typeof(price) == "number") && (price > 0)) {
            this.price = price;
            return;
        }
        throw new Error("Invalid Price");
    }
}

const newBook = new Book("Harry Potter", "J.K. Rowling", 12);

newBook.setPrice("fawdf")
console.log(newBook.getTitle())
console.log(newBook.getAuthor())
console.log(newBook.getPrice())
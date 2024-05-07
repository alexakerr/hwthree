// Problem One

// Task One
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Task Two 
Book.prototype.displayInfo = function() {
    console.log("Title: " + this.title + ", Author: " + this.author + ", Pages: " + this.pages);
}

// Task Three
let library = [];

function addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    library.push(newBook);
}

function searchByTitle(title) {
    return library.filter(function(book) {
        return book.title.toLowerCase().includes(title.toLowerCase());
    });
}

function searchByAuthor(author) {
    return library.filter(function(book) {
        return book.author.toLowerCase().includes(author.toLowerCase());
    });
}

// Task Four
function filterBooksByPageCount() {
    return library.filter(function(book) {
        return book.pages <= 100;
    });
}

function addPrefixToBookInfo() {
    return library.map(function(book) {
        return {
            title: "Title: " + book.title,
            author: "Author: " + book.author,
            pages: book.pages
        };
    });
}




// Problem Two

//Task One
function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}


//Task Two
Account.prototype.deposit = function(amount) {   // to deposit funds
    if (amount > 0) {
        this.balance += amount;
        console.log(`Successfully deposited $${amount}. New balance is $${this.balance}.`);
    } else {
        console.log("Invalid deposit amount.");
    }
}


Account.prototype.withdraw = function(amount) { //withdraw funds
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Successfully withdrew $${amount}. New balance is $${this.balance}.`);
    } else {
        console.log("Insufficient funds or invalid withdrawal amount.");
    }
}



//Task Three
Account.prototype.calculateInterest = function(interestRate, years) {
    const compoundInterest = this.balance * (1 + interestRate / 100, years) - this.balance;
    console.log(`After ${years} years at an interest rate of ${interestRate}%);
}
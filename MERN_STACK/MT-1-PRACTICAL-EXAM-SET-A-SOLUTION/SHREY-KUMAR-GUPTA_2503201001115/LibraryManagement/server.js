const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
    {
        id: 101,
        title: "Wings of Fire",
        author: "A.P.J. Abdul Kalam",
        genre: "Autobiography",
        publishedYear: 1999,
        available: true
    },
    {
        id: 102,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Fiction",
        publishedYear: 1988,
        available: true
    },
    {
        id: 103,
        title: "Harry Potter",
        author: "J.K. Rowling",
        genre: "Fantasy",
        publishedYear: 1997,
        available: false
    }
];

let nextId = 104;

app.get('/api/books', (req, res) => {
    res.status(200).json(books);
});

app.post('/api/books', (req, res) => {
    const { title, author, genre, publishedYear, available } = req.body;

    if (
        typeof title !== 'string' || !title.trim() ||
        typeof author !== 'string' || !author.trim() ||
        typeof genre !== 'string' || !genre.trim() ||
        typeof publishedYear !== 'number' ||
        !Number.isInteger(publishedYear) ||
        publishedYear <= 0 ||
        typeof available !== 'boolean'
    ) {
        return res.status(400).json({
            message: "Invalid input. All fields are required with correct data types."
        });
    }

    const newBook = {
        id: nextId++,
        title: title.trim(),
        author: author.trim(),
        genre: genre.trim(),
        publishedYear,
        available
    };

    books.push(newBook);

    res.status(201).json({
        message: "Book added successfully!",
        book: newBook
    });
});

app.get('/api/books/filter', (req, res) => {
    const author = req.query.author;

    if (typeof author !== 'string' || !author.trim()) {
        return res.status(400).json({
            message: "Please provide an author query parameter."
        });
    }

    const filteredBooks = books.filter(b =>
        b.author.toLowerCase() === author.trim().toLowerCase()
    );

    res.status(200).json(filteredBooks);
});

app.get('/api/books/:id', (req, res) => {
    const id = Number(req.params.id);

    const book = books.find(b => b.id === id);

    if (!Number.isInteger(id) || id <= 0 || !book) {
        return res.status(404).json({
            message: "Book not found!"
        });
    }

    res.status(200).json(book);
});

app.put('/api/books/:id', (req, res) => {
    const id = Number(req.params.id);

    const book = books.find(b => b.id === id);

    if (!Number.isInteger(id) || id <= 0 || !book) {
        return res.status(404).json({
            message: "Book not found!"
        });
    }

    const { title, author, genre, publishedYear, available } = req.body;

    if (
        typeof title !== 'string' || !title.trim() ||
        typeof author !== 'string' || !author.trim() ||
        typeof genre !== 'string' || !genre.trim() ||
        typeof publishedYear !== 'number' ||
        !Number.isInteger(publishedYear) ||
        publishedYear <= 0 ||
        typeof available !== 'boolean'
    ) {
        return res.status(400).json({
            message: "Invalid input. All fields are required with correct data types."
        });
    }

    book.title = title.trim();
    book.author = author.trim();
    book.genre = genre.trim();
    book.publishedYear = publishedYear;
    book.available = available;

    res.status(200).json({
        message: "Book updated successfully!",
        book: book
    });
});

app.delete('/api/books/:id', (req, res) => {
    const id = Number(req.params.id);

    const index = books.findIndex(b => b.id === id);

    if (!Number.isInteger(id) || id <= 0 || index === -1) {
        return res.status(404).json({
            message: "Book not found!"
        });
    }

    books.splice(index, 1);

    res.status(200).json({
        message: "Book deleted successfully!"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
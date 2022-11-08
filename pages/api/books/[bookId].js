import { books } from "../../../data";

export default (req, res) => {
    switch(req.method) {
        case 'GET':
            getBook(req, res);
            break;
        case 'PUT':
            updateBook(req, res);
            break;
        case 'DELETE':
            deleteBook(req, res);
            break;
    }
}

const deleteBook = (req, res) => {
    const bookId = req.query.bookId;
    const index = books.findIndex((book) => book.id == bookId);
    books.splice(index, 1);
    res.status(200).json({message: `Book with id ${bookId} deleted`});
}

const getBook = (req, res) => {
    const bookId = req.query.bookId;
    const book = books.find((book) => book.id === parseInt(bookId));
    if(!book) {
        res.status(404).json({message: `Book with id ${bookId} not found`});
    } else {
        res.status(200).json(book);
    }
}

const updateBook = (req, res) => {
    const bookId = req.query.bookId;
    const book = books.find((book) => book.id === parseInt(bookId));
    if(!book) {
        res.status(404).json({message: `Book with id ${bookId} not found`});
    } else {
        book.title = req.body.title;
        res.status(200).json(book);
    }
}
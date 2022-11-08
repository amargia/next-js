import { books } from "../../../data";

export default (req, res) => {
    switch(req.method) {
        case 'GET':
            getBooks(req, res);
            break;
        case 'POST':
            addBook(req, res);
            break;
    }
}

const getBooks = (req, res) => {
    res.status(200).json(books);
};

const addBook = (req, res) => {
    const book = req.body;
    books.push(book);
    res.status(201).json(book);
}
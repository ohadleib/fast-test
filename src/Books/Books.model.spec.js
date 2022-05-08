import booksModel from "./Books.model";
import { booksStub } from "./Books.mock";


it("should load books", async () => {
    const books = await booksModel.getBooks();
    expect(books.length > 0).toBe(true);
});

it("should add book", async () => {
    const jsdomAlert = window.alert;
    window.alert = () => { };
    const book = booksStub[0]
    const response = await booksModel.addBook(book);
    expect(response).toBe(true);
    window.alert = jsdomAlert;
});

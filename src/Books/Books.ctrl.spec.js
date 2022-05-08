import BooksController from "./Books.ctrl";
import booksModel from "./Books.model";
import { booksStub } from "./Books.mock";

let booksController;

beforeEach(async () => {
    booksController = new BooksController();

    // dynamic backend
    booksModel.getBooks = jest.fn().mockImplementation(() => {
        return Promise.resolve(booksStub);
    });

    /*httpGateway.get = jest.fn().mockImplementation((path) => {
      return Promise.resolve(booksStub);
    });*/
});

it("should load my private+public by default", async () => {
    await booksController.init();
    expect(booksController.booksList.length).toBe(4);
});

it("should add book", async () => {
    const jsdomAlert = window.alert;
    window.alert = () => { };
    const response = await booksController.addBook();
    expect(response).toBe(true);
    window.alert = jsdomAlert;
});

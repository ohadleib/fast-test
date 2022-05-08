import { makeAutoObservable, runInAction } from "mobx";
import booksModel from "./Books.model";

export default class BooksController {
    books = [];

    constructor() {
        makeAutoObservable(this);
    }

    async loadData() {
        try {
            const books = await booksModel.getBooks();
            runInAction(() => this.books.push(...books))
        } catch (e) {
            console.debug("ERROR:", e);
        }
    }

    async init() {
        await this.loadData()
    }

    get booksList() {
        return this.books.map(b => ({ visibleName: `${b.name}:${b.author}` }))
    }

    addBook = async () => {
        let isAdded = false;
        try {
            const newBook = {
                name: "x_name",
                author: "x_author"
            };
            await booksModel.addBook(newBook);
            alert("New Book Added Successfuly...")
            isAdded = true
            runInAction(() => this.books.push(newBook))
        } catch (e) {
            console.debug("ERROR:", e);
            alert("New Book Add Failed...")
        }
        return isAdded;

    }
}

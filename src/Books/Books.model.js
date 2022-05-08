import ApiGateway from "../Shared/ApiGateway.js";

class BooksModel {
  constructor() {
    this.httpGateway = new ApiGateway();
  }

  getBooks = async () => {
    const booksDto = await this.httpGateway.get("/");
    return booksDto;
  };

  addBook = async ({ name, author }) => {
    const bookAddDto = await this.httpGateway.post("/", { name, author });
    return bookAddDto && bookAddDto.status === "ok";
  };
}

const booksModel = new BooksModel();
export default booksModel;

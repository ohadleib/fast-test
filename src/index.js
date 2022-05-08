import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import Books from "./Books/Books";
import BooksController from "./Books/Books.ctrl";
import "./styles.css";

const App = observer(({ controller }) => {
  useEffect(() => {
    const load = async () => await controller.init()
    load();
  }, [controller]);

  return (
    <Books
      books={controller.booksList}
      onBookAdd={controller.addBook}
    />
  );
});


const rootElement = document.getElementById("root");
ReactDOM.render(<App controller={new BooksController()} />, rootElement);

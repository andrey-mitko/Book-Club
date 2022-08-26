import React, { useState, useEffect } from "react";
import BooksContainer from "./components/BooksContainer";

const App = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://book-club-json.herokuapp.com/books");
        if (response.status === 200) {
          const data = await response.json();
          setBooks(data);
        }
      } catch (errors) {
        console.log(errors);
      }
    };

    fetchData();
  }, []);

  console.log(`Books are: ${books}`);
  return (
    <div>
      <BooksContainer books={books} />
      <p>learn react</p>
    </div>
  );
};

export default App;

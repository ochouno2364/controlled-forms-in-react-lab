import { useState } from "react";

const Bookshelf = () => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);

      const [newBook, setNewBook] = useState([{
        title: '',
        author: '',
      }]);


      const handleInputChange = (event) => {
        setBooks(event.target.value);
        console.log(event.target.value);
        newBook({... books})
        // setNewBook({... books, [event.target.title]: [event.target.author]});
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        setBooks({... books, ... newBook});
        setNewBook({
            title: '',
            author: '',
        })

      };

      


 return (
    <>
    <div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
         id="title"
         name="title" 
         value={books.title} 
         onChange={handleInputChange}
         />
        <label htmlFor="author">Author: </label>
        <input 
        id="author"
        name="author"
        value={books.author}
        onChange={handleInputChange}
        />
        <br></br>
        <button type="submit">Add Book</button>

    </form>
    
  </div>
  <div className="bookCardsDiv"></div>
</div>

    </>
 )
};
    


export default Bookshelf;
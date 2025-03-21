import { useState } from "react";

const Bookshelf = (props) => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);


      const [newBook, setNewBook] = useState({
        title: '',
        author: '',
      });


      const handleInputChange = (event) => {
        console.log(event.target.value); 
        setNewBook((newBook) => ({...newBook, [event.target.name]: event.target.value}))
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        const allBooks = [...books, newBook];
        setBooks(allBooks);
        setNewBook({
          title: '',
          author: '',
        });
        

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
         value={newBook.title} 
         onChange={handleInputChange}
         />
        <label htmlFor="author">Author: </label>
        <input 
        id="author"
        name="author"
        value={newBook.author}
        onChange={handleInputChange}
        />
        <br></br>
        <button type="submit">Add Book</button>

    </form>
    
  </div>
  <ul className="bookCardsDiv">
    {books.map((props, index) => {
      return <li className="bookCard"
       key={props.index}> {props.title} 
       <br></br>
       <br></br>
       by {props.author}</li>
    })}
  </ul>
</div>

    </>
 )
};
    


export default Bookshelf;
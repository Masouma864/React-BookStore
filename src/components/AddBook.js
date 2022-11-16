import {React , useState} from 'react';
 import { useDispatch } from 'react-redux';
 import { addBook } from '../redux/books/books';
 import { v4 as uuidv4 } from 'uuid';


const AddBook = () => {

 const dispatch = useDispatch();
 const [title, setTitle] = useState('');
 const [author, setAuthor] = useState('');
  const formHandler = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        id: uuidv4(),
        title,
        author,
      }),
    );
    setTitle('');
    setAuthor('');
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };
  return (
    <div className="formContainer">
      <div className="line" />
      <h2 className="title">ADD NEW BOOK</h2>
      <form  onSubmit={formHandler}>
        <input className="input" value={title}  onChange={titleHandler} placeholder="Book title" required />
        <input className="input2" value={author} onChange={authorHandler}  placeholder="Category" required/>
        <button  type="submit" className="submitBtn">ADD BOOK</button>
      </form>
    </div>
  );
};
export default AddBook;

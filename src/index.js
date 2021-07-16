import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

//stateless functional component
//always return JSX
//css
//set up variable
const books = [
{id: 1,
  img: 'https://images-eu.ssl-images-amazon.com/images/I/51K8xEvReAS._AC_SX184_.jpg',
  title: 'The Three Khans: And the Emergence of New IndiaThe Three Khans: And the Emergence of New IndiaThe Three Khans: And the Emergence of New…',
  author: 'Kaveree Bamzai'
},
{id: 2,
  img: 'https://images-na.ssl-images-amazon.com/images/I/51NHKZC1a0L._SX324_BO1,204,203,200_.jpg',
  title:'Grandmas Bag of Stories',
  author: 'sudha murthy'
},
{id: 3,
  img: 'https://images-eu.ssl-images-amazon.com/images/I/61n26kH1HES._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
  title: 'The Upside-Down King: Unusual Tales about Rama and Krishna',
  author: 'sudha murthy'
}
];
const names = ['niraj', 'ilan', 'jena']
const newName = names.map((name)=>{
  return <h1>{name}</h1>
})
console.log(newName);
function BookList(){
  return <section className="booklist">
    {books.map((book, index)=>{
    return (
      <Book key={book.id} {...book}></Book>
    );
  })}</section>;
}
//use of props
const Book = ({ img, title, author }) => {
  // console.log(props);
  // const {img, title, author} = props;
  
  return <article className='book'>
    <img src={img} alt=""/>
    <h1>{title}</h1>
    <h3>{author}</h3>
    
  </article>
}

ReactDOM.render(<BookList/>, document.getElementById('root'));
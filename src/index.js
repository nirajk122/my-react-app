import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

//stateless functional component
//always return JSX
//css
//set up variable
const firstBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/51K8xEvReAS._AC_SX184_.jpg',
  title: 'The Three Khans: And the Emergence of New IndiaThe Three Khans: And the Emergence of New IndiaThe Three Khans: And the Emergence of New…',
  author: 'Kaveree Bamzai'
}
const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51NHKZC1a0L._SX324_BO1,204,203,200_.jpg',
  title:'Grandmas Bag of Stories',
  author: 'sudha murthy'
}
function BookList(){
  return <section className="booklist">
    <Book 
    img={firstBook.img} 
    title={firstBook.title} 
    author={firstBook.author}/>
    <Book 
    img={secondBook.img} 
    title={secondBook.title} 
    author={secondBook.author}/>
  </section>;
}
//use of props
const Book = ({ img, title, author}) => {
  // const {img, title, author} = props
  return <article className='book'>
    <img src={img} alt=""/>
    <h1>{title}</h1>
    <h3>{author}</h3>
  </article>
}

ReactDOM.render(<BookList/>, document.getElementById('root'));
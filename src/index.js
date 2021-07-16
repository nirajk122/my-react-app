import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

//stateless functional component
//always return JSX
//css

function BookList(){
  return <section className="booklist">
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>;
}
const Book = () => {
  return <article className='book'>
    <Image></Image>
    <Title></Title>
    <Author/>
  </article>
}
const Image = () => <img src="https://images-eu.ssl-images-amazon.com/images/I/51K8xEvReAS._AC_SX184_.jpg" alt=""/>

const Title = () => <h1>The Three Khans: And the Emergence of New IndiaThe Three Khans: And the Emergence of New IndiaThe Three Khans: And the Emergence of New…</h1>
const Author = () => <h3 style={{color: '#617d98',fontSize: '0.75rem', marginTop: '0.25rem'}}>Kaveree Bamzai</h3>
ReactDOM.render(<BookList/>, document.getElementById('root'));
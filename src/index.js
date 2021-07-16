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
    <img src="https://images-eu.ssl-images-amazon.com/images/I/51K8xEvReAS._AC_SX184_.jpg" alt=""/>
    <h1>The Three Khans: And the Emergence of New IndiaThe Three Khans: And the Emergence of New IndiaThe Three Khans: And the Emergence of New…</h1>
    <h3 style={{color: '#617d98',fontSize: '0.75rem', marginTop: '0.25rem'}}>Kaveree Bamzai</h3>
  </article>
}

ReactDOM.render(<BookList/>, document.getElementById('root'));
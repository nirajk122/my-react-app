 export const Book = ({ img, title, author }) => {
    //attribute, eventHandler
    //onclick, onMouseOver
    const clickHandler = (e) =>{
      console.log(e);
      console.log(e.target)
      alert('hello world');
    };
    const complexExample = (author) =>{
      console.log(author);
    }
    return ( 
    <article className='book' onMouseOver={()=>{
      console.log(title);
    }}>
      <img src={img} alt=""/>
      <h1 onClick={()=> console.log(title)}>{title}</h1>
      <h3>{author}</h3>
      <button type="button" onClick={clickHandler}>reference example</button>
      <button type="button" onClick={() => complexExample(author)}>more complex</button>
    </article>
    );
  }
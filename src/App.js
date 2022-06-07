import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [value, setValue] = useState(0);

  useEffect(()=>{
    const lastIndex = people.length - 1;
    if (value < 0){
      setValue(lastIndex);
    }
    if (value > lastIndex){
      setValue(0)
    }
  }, [value, people])

  useEffect(()=>{
    let slider = setInterval(()=>{
      setValue(value + 1)
    }, 5000)
    return ()=> clearInterval(slider)
  }, [value])
  return <section className='section'>
    <div className='title'>
      <h2>
        <span>/</span>Reviews
      </h2>
    </div>
    <section className='section-center'>
      {people.map((person, index) =>{
        let position = 'nextSlide'
        if (index === value){
          position = 'activeSlide'
        }
        if (index === value-1 || (value === 0 && index === people.length -1)) {
          position = 'lastIndex'
        }
        return (<article className={position} key={person.id}>
          <img src={person.image} alt={person.name} className='person-img'/>
          <h4>{person.name}</h4>
          <p className='title'>{person.title}</p>
          <p className='text'>{person.quote}</p>
          <FaQuoteRight className='icon' />
          </article>);
      })}
      <button className='prev' onClick = {()=> setValue(value - 1)}>
        <FiChevronLeft />
      </button>
      <button className='next' onClick = {()=> setValue(value + 1)}>
        <FiChevronRight />
      </button>
    </section>
    </section>;
}

export default App;

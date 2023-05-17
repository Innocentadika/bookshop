import React, { useState } from 'react'
import Footer from '../../hero/Footer/Footer'
import './categories.css'
import moreData from './moreData'
import Navbar from '../../hero/navbar/Navbar'


const Category = () => {

  const handleClick = () => {
    alert('Book not available in our store at the moment or Check spelling!');
  }
  const [moreDataState] = useState(moreData);
  const [searchField, setSearchField] = useState('');

  const filteredPrograms = moreDataState.filter((program) => {
    return program.title.toLowerCase().includes(searchField);
  });

  return (
    <>
    <Navbar/>
      <div className='text-center pt-10 pb-5 bg-current'>
        <label className='space-x-1' htmlFor="">
          <input
            className='bg-zinc-100 rounded px-1 text-slate-800 font-mono '
            placeholder='Search for class'
            type="search"
            name=""
            id=""
            onChange={(event) => {
              console.log(event.target.value);
              const searchField = event.target.value.toLowerCase();
              setSearchField(searchField);
            }}
          />
          <button className=' bg-sky-300 px-1 rounded text-white hover:text-blue-600'
            onClick={handleClick}>
            Search
          </button>
        </label>
      </div>

      <div className="startup">
        <section className='startup2'>
          <div className=' grid5 mtop'>
            {filteredPrograms.map((items, index) => (
              <div className='grow box' key={index}>
                <img style={{ height: 150, width: 800 }} src={items.image} alt='' className=' px-10' />
                <h4>{items.title}</h4>
                <label>{items.review}</label>
                <div className='py-2'>
                  <a href={items.href} className="rounded-2xl btn btn-primary">Explore</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Category;

import React, { useState } from 'react'
import dataSecondary from './dataSecondary';
import Navbar from '../../../hero/navbar/Navbar';
const Secondary = () => {
  const handleClick = () => {
    alert('Book not available in our store at the moment or Check spelling!');
  }
  const [moreDataState] = useState(dataSecondary);
  const [searchField, setSearchField] = useState('');

  const filteredPrograms = moreDataState.filter((program) => {
    return program.title.toLowerCase().includes(searchField);
  });

  return (
    <div style={{backgroundColor: '#f5f5f3'}}>
      <Navbar/>
    <div className='text-center pt-10 pb-5 bg-current'>
    <label className='space-x-1' htmlFor="">
      <input
        className='bg-zinc-100 rounded px-1 text-slate-800 font-mono '
        placeholder='Search for book.'
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

    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead style={{backgroundColor: 'rgb(111, 141, 145)'}}>
        <tr>
          <th style={tableHeaderStyle}>Book Title</th>
          <th style={tableHeaderStyle}>Image</th>
          <th style={tableHeaderStyle}>Publisher</th>
          <th style={tableHeaderStyle}>Price</th>
        </tr>
      </thead>
      <tbody>
        {filteredPrograms.map((book, index) => (
          <tr key={index}>
            <td style={tableCellStyle}>{book.title}</td>
            <td style={tableCellStyle}>
              <img src={book.image} alt={book.title} style={imageStyle} />
            </td>
            <td style={tableCellStyle}>{book.publisher}</td>
            <td style={tableCellStyle}>{book.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

// Styles
const tableHeaderStyle = {
  padding: '8px',
  borderBottom: '1px solid #ddd',
};

const tableCellStyle = {
  backgroundColor: '#f2f2f2',
  padding: '8px',
  borderBottom: '1px solid #ddd',
  borderRight: '1px solid #ddd', 
};

const imageStyle = {
  width: '100px',
  height: 'auto',
};

export default Secondary;

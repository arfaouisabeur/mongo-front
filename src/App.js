import React, { useState,useEffect } from 'react';
import axios from "axios";

export default function App() {
  const [msg, setMsg] = useState('');

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://98.66.136.102:80/", {
        msg
      });
      // Add code to handle success if needed
    } catch (error) {
      console.error(error);
      // Add code to handle errors if needed
    }
  };
  const [genres, setgenres] = useState([]);

  useEffect(() => {
    fetch('http://98.66.136.102:80/')
      .then((response) => response.json())
      .then((data) => setgenres(data))
      .catch((error) => console.error('Error fetching data:', error));

      
  }, []);

  return (
    <div className='cont'>
      <form onSubmit={submit}>
        <textarea
          name="text"
          value={msg}
          onChange={(e) => { setMsg(e.target.value) }}
          placeholder='hiiiiii'
        ></textarea>
        <input type='submit' value='submit' />
      </form>
      <h1>genres List</h1>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
}



/*import React, { useEffect, useState } from 'react';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching data:', error));

      
  }, []);
  console.log(books)
  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;*/

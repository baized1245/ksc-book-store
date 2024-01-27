import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards'

const OtherBooks = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('https://ksc-book-store-server.vercel.app/all-books')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBooks(data.slice(4, 12))
      })
  }, [])
  return (
    <div>
      <BookCards books={books} headline="Other Books" />
    </div>
  )
}

export default OtherBooks

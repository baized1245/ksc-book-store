import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards'

const BestSellerBooks = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('https://ksc-book-store-server.vercel.app/all-books')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBooks(data.slice(0, 8))
      })
  }, [])
  return (
    <div>
      <BookCards books={books} headline="Best Seller Books" />
    </div>
  )
}

export default BestSellerBooks

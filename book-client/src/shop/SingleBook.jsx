import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
  const {
    _id,
    book,
    bookTitle,
    imageURL,
    authorName,
    category,
    bookDescription,
  } = useLoaderData()
  return (
    <div className="mt-28 px-4 lg:px-24 mx-auto">
      <div className="flex items-center justify-center">
        <img src={imageURL} alt="" className="h-96 object-cover rounded-md" />
      </div>
      <div className="text-center w-1/2 mx-auto ">
        <h2 className="text-2xl font-bold text-blue-700 my-1">
          Book name : {bookTitle}
        </h2>
        <p className="text-md font-semibold my-1">Writter : {authorName}</p>
        <p className="text-md font-semibold my-1">Category : {category}</p>
        <p className="text-wrap text-sm  my-1">
          Description : {bookDescription}
        </p>
      </div>
    </div>
  )
}

export default SingleBook

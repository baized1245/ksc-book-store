import React, { useState } from "react";
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import Swal from 'sweetalert2';

const EditBooks = () => {
  const {id} = useParams();
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = useLoaderData();

 const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistry",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliographt",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Art and Design",
  ]

  const [ selectedBookCategory, setSelectedBookCategory ] = useState(bookCategories[0]);

  const handleChangeBookCategory = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value)
  }

  // handle book update
  const handleBookUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
    };
    // console.log(bookObj);

    // update book data
  fetch(`http://localhost:5000/book/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(updateBookObj)
  })
  .then(res => res.json())
  .then(data => {
    if(data.acknowledged === true) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Book Updated Successfully",
        showConfirmButton: false,
        timer: 2500
      });
    }
  })
    
  }

  // acknowledged

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update the book data</h2>
      <form onSubmit={handleBookUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
      <div className="flex gap-8">
        {/* Book title */}
      <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name="bookTitle" type="text" required defaultValue={bookTitle} />
      </div>
      {/* authorName */}
      <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name="authorName" type="text" defaultValue={authorName} required />
      </div>
      </div>

      {/* 2nd row */}
      <div className="flex gap-8">
        {/* Book Image URL */}
      <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>
        <TextInput id="imageURL" name="imageURL" type="text" defaultValue={imageURL} required />
      </div>
      {/* Category */}
      <div className="lg:w-1/2">
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>

          <select id="inputState" name="category" className="w-full rounded" value={selectedBookCategory} onChange={handleChangeBookCategory} >
            {
              bookCategories.map((option) => <option key={option} value={option} defaultValue={selectedBookCategory}>
                {option}
              </option>)
            }
          </select>

      </div>
      </div>

      {/* bookDescriptions */}
      <div>
        <div className="mb-2 block">
          <Label
          htmlFor="bookDescription"
          value="Book Description"
          />
        </div>
        <Textarea
        id="bookDescription"
        name="bookDescription"
        required
        className="w-full"
        rows={6}
        defaultValue={bookDescription}
        />
      </div>

      {/* book pdf link */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF Url" />
        </div>
        <TextInput id="bookPDFURL" name="bookPDFURL" type="text" defaultValue={bookPDFURL} required />
      </div>
      
      <Button type="submit" className="mt-5">Update Book</Button>

    </form>
    </div>
  );
}

export default EditBooks
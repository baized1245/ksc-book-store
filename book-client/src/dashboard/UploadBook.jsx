import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react'
import Swal from 'sweetalert2'

const UploadBook = () => {
  const bookCategories = [
    'Fiction',
    'Non-Fiction',
    'Mistry',
    'Programming',
    'Science Fiction',
    'Fantasy',
    'Horror',
    'Bibliographt',
    'Autobiography',
    'History',
    'Self-help',
    'Memoir',
    'Business',
    'Children Books',
    'Travel',
    'Art and Design',
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  )

  const handleChangeBookCategory = (event) => {
    console.log(event.target.value)
    setSelectedBookCategory(event.target.value)
  }

  // handle book submission
  const handleBookSubmit = (event) => {
    event.preventDefault()
    const form = event.target

    const bookTitle = form.bookTitle.value
    const authorName = form.authorName.value
    const imageURL = form.imageURL.value
    const category = form.category.value
    const bookDescription = form.bookDescription.value
    const bookPDFURL = form.bookPDFURL.value

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    }
    console.log(bookObj)

    // send data to db

    fetch('https://ksc-book-store-server.vercel.app/upload-book', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        // alert("Book Uploaded Successfully")
        if (data.acknowledged === true) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Book Uploaded Successfully',
            showConfirmButton: false,
            timer: 2500,
          })
          form.reset()
        }
      })
  }

  // acknowledged

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>
      <form
        onSubmit={handleBookSubmit}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* first row */}
        <div className="flex gap-8">
          {/* Book title */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book name"
              required
            />
          </div>
          {/* authorName */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name"
              required
            />
          </div>
        </div>

        {/* 2nd row */}
        <div className="flex gap-8">
          {/* Book Image URL */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book Image URL"
              required
            />
          </div>
          {/* Category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>

            <select
              id="inputState"
              name="category"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeBookCategory}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* bookDescriptions */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Write Your Book Description..."
            required
            className="w-full"
            rows={5}
          />
        </div>

        {/* book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF Url" />
          </div>
          <TextInput
            id="bookPDFURL"
            name="bookPDFURL"
            type="text"
            placeholder="Book PDF Url"
            required
          />
        </div>

        <Button type="submit" className="mt-5">
          Upload Book
        </Button>
      </form>
    </div>
  )
}

export default UploadBook

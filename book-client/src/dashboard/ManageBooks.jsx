import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([])
  // https://ksc-book-store-server.vercel.app/
  // fetch("http://localhost:5000/all-books"
  useEffect(() => {
    fetch('https://ksc-book-store-server.vercel.app/all-books', {})
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data)
      })
  }, [])

  // delete a book

  const handleDelete = (id) => {
    fetch(`https://ksc-book-store-server.vercel.app/book/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Book Deleted Successfully',
            showConfirmButton: false,
            timer: 2500,
          })
        }
      })
  }

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Book</h2>

      {/* Table for book data */}

      <Table className="lg:w-[1180px]">
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Edit or Manage</Table.HeadCell>
        </Table.Head>
        {allBooks.map((book, index) => (
          <Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {book.bookTitle}
              </Table.Cell>
              <Table.Cell>{book.authorName}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>$10.00</Table.Cell>
              <Table.Cell>
                <Link
                  to={`/admin/dashboard/edit-books/${book._id}`}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(book._id)}
                  className="bg-rose-700 px-4 py-1 font-semibold text-white rounded-md"
                >
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  )
}

export default ManageBooks

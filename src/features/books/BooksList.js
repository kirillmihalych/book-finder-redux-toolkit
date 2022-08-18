import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import styled from 'styled-components'

const BooksList = () => {
  const books = useSelector((state) => state.books.books)

  return (
    <section>
      {books.map((book) => {
        console.log(book)
        return (
          <article key={book.id}>
            <h3>Title: {book.volumeInfo.title}</h3>
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt="book's image"
            />
          </article>
        )
      })}
    </section>
  )
}

export default BooksList

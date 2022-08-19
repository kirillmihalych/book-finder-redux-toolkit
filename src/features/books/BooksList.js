import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import LoadingSpinner from '../../components/LoadingSpinner'
import styled from 'styled-components'

const BooksList = () => {
  const { books, status } = useSelector((state) => state.books)

  if (status === 'rejected') {
    return (
      <Error>
        <h3 className='error-title'>Что-то пошло не так...</h3>
      </Error>
    )
  }
  return (
    <section>
      {status === 'loading' ? (
        <LoadingSpinner />
      ) : (
        books.map((book) => {
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
        })
      )}
    </section>
  )
}

const Error = styled.section`
  .error-title {
    text-align: center;
    color: var(--grey);
    font-size: 1.25rem;
  }
`

export default BooksList

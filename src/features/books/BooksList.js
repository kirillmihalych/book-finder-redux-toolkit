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
    <Wrapper>
      {status === 'loading' ? (
        <LoadingSpinner />
      ) : (
        books.map((book) => {
          console.log(book)
          return (
            <article key={book.id} className='book-box'>
              <div className='book-wrapper'>
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt="book's image"
                  className='book-image'
                />
                <h3 className='book-title'>{book.volumeInfo.title}</h3>
              </div>
              <div className='price-wrapper'>
                <a href={book.volumeInfo.infoLink} className='book-link'>
                  клик
                </a>
              </div>
            </article>
          )
        })
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 90vw;
  max-width: 1170px;
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 5rem;
  place-items: center;
  .book-box {
    background: rgba(185, 185, 185, 0.1);
    padding: 25px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100%;
  }
  .book-box:hover {
    cursor: pointer;
    background: rgba(185, 185, 185, 0.2);
  }
  .book-wrapper {
    flex: 1;
    display: grid;
  }
  .book-title {
    color: var(--red);
    text-align: center;
  }
  .book-image {
    height: 200px;
    width: 150px;
    margin: 0 auto;
    object-fit: cover;
  }
  .price-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .book-link {
    text-decoration: none;
    font-size: 1.25rem;
    background: rgba(255, 255, 255, 0.2);
    padding: 5px 25px;
    text-transform: capitalize;
    color: var(--white);
  }
  .book-link:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`

const Error = styled.section`
  .error-title {
    text-align: center;
    color: var(--grey);
    font-size: 1.25rem;
  }
`

export default BooksList

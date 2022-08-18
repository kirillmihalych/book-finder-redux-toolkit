import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { fetchBooks } from '../features/books/booksSlice'

const SearchForm = () => {
  const [query, setQuery] = useState('')

  const dispatch = useDispatch()

  const setQueryHandler = (e) => setQuery(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      fetchBooks(`https://www.googleapis.com/books/v1/volumes?q=${query}+terms`)
    )
  }

  return (
    <Wrapper>
      <form className='search-form' onSubmit={handleSubmit}>
        <h2 className='search-title'>Book Finder</h2>
        <input
          type='text'
          name='text'
          value={query}
          onChange={setQueryHandler}
        />
        <button type='submit'>search</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: green;
  width: 95vw;
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  align-self: center;
  justify-content: center;
  .search-form {
    background: red;
  }
  .search-title {
    text-align: center;
  }
`

export default SearchForm

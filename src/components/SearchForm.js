import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchBooks } from '../features/books/booksSlice'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'

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
      <h2 className='search-title'>Книжный искатель</h2>
      <form className='search-form' onSubmit={handleSubmit}>
        <button className='btn search-btn' type='submit'>
          <AiOutlineSearch className='search-icon' />
        </button>
        <input
          type='text'
          name='text'
          value={query}
          placeholder='поиск...'
          onChange={setQueryHandler}
          className='search-input'
        />
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  font-family: 'Ubunty', sans-serif;
  width: 95vw;
  max-width: 1170px;
  margin: 5rem auto;
  .search-form {
    width: 90vw;
    height: 40px;
    max-width: 700px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
  }
  .search-input {
    background: transparent;
    border: none;
    outline: none;
    text-transform: capitalize;
    flex: 1;
    font-size: 1.25rem;
    color: var(--white);
    padding: 25px;
  }
  .search-btn {
    cursor: pointer;
    background: transparent;
    border: none;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
  }
  .search-icon {
    color: var(--white);
    font-size: 1.5rem;
  }
  .search-title {
    text-align: center;
    font-size: 1.85rem;
    color: var(--red);
    margin-bottom: 3rem;
  }
`

export default SearchForm

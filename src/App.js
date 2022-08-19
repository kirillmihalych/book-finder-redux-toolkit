import React from 'react'
import SearchForm from './components/SearchForm'
import BooksList from './features/books/BooksList'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
  return (
    <>
      <SearchForm />
      <BooksList />
      <LoadingSpinner />
    </>
  )
}

export default App

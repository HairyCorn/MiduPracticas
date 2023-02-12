import './App.css'
import { useEffect, useRef, useState } from 'react';
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }


    if (search == '') {
      setError('No se puede buscar una película vacía.')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con número.')
      return
    }
    if (search.length < 3) {
      setError('La busqueda debe tener almenos 3 letras.')
      return
    }
    setError(null)
  }, [search])
  return {search, updateSearch, error}
}

function App() {
  const [count, setCount] = useState(0)
  const { movies } = useMovies()
  const {search, updateSearch, error} = useSearch()


  const inputRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault()
/*     const fields = Object.fromEntries(
      new window.FormData(event.target)
    ) */
  }
  const handleChange = (event) => {
    updateSearch(event.target.value)
  }



  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='search' ref={inputRef} type="text" placeholder='Avengers, Star Wars, Matrix...' />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App

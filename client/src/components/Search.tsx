import { FormEvent, useState } from 'react';
import  loader  from '../loader/loader.gif'

function Search() {
    const [ searchState, setSearchState ] = useState(false)
    const [ search, setSearch ] = useState('')
    const [ result, setResult ] = useState('')
    const [ error, setError ] = useState(null)
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setResult('')
      setError(null)
      setSearchState(true)
    
      const response = await fetch('/', {
        method: 'POST',
        headers : {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify(search)
      })
    
      const data = await response.json()
    
      if (data.error) {
        setError(data.error.message)
        setSearchState(false)
      } else {
        setSearchState(false)
        setResult(data.choices[0].text)
      }
    }

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    };

 return (
    <>
        {error && (
        <header>
            <p style={ { color: 'red', paddingBottom: '50px' }}>{error}</p>
        </header>
        )}

        <div className='search'>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={inputHandler} placeholder='Say, Ask, Search or Request'/>
        </form>
        </div>

        <div className='result'>
        {searchState === true ? <img src={loader} alt='loader'/> : <p>{result}</p>}
        </div>
    </>
  )
}

export default Search
import { FormEvent, useState } from 'react';
import  loader  from '../loader/loader.gif'

function ImageGeneration() {
    const [ searchState, setSearchState ] = useState(false)
    const [ prompt, setPrompt ] = useState('')
    const [ result, setResult ] = useState(null)
    const [ error, setError ] = useState(null)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setResult(null)
        setError(null)
        setSearchState(true)
      
        const response = await fetch('/image', {
          method: 'POST',
          headers : {
            'Content-Type': 'application/json'
            },
          body: JSON.stringify(prompt)
        })
      
        const data = await response.json()
      
        if (data.err) {
          setError(data.err)
          setSearchState(false)
        } else {
          setSearchState(false)
          setResult(data[0].b64_json)
            console.log(data)
        }
      }
  
      const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrompt(event.target.value);
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
                <input type='text' onChange={inputHandler} placeholder='Prompt to generate image'/>
            </form>
            </div>

            <div className='result'>
            {searchState === true ? 
                <img src={loader} alt='loader'/> : 
                <img src={`data:image/jpeg;base64,${result}`} alt='Genreated'/>
            }
            </div>
        </>
    )
}

export default ImageGeneration
import { FormEvent, useState } from 'react';
import  loader  from '../loader/loader.gif'

function ImageGeneration() {
    interface Prompt {
        prompt: string
        n: number
    }

    interface Result {
        b64_json: null
    }

    interface Results extends Array<Result>{}

    const [ searchState, setSearchState ] = useState(false)
    const [ prompt, setPrompt ] = useState<Prompt>({
        prompt: '',
        n: 1
    })
    const [ results, setResults ] = useState<Results>([])
    const [ error, setError ] = useState(null)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setResults([])
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

        setSearchState(false)
        setResults(data)
      }
  
      const promptStringHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrompt({
            ...prompt,
            prompt: e.target.value
        });
      };

      const promptNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrompt({
            ...prompt,
            n: Number(e.target.value)
        });
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
                    <div>
                        <input type='text' onChange={promptStringHandler} placeholder='Image Generation Prompt'/>
                    </div>
                    <div>
                        <label>Number of Images To Generate </label>
                        <input type='number' onChange={promptNumberHandler} defaultValue='1' min='1' max='10'/>
                    </div>
                    <button type='submit'>Generate</button>
                </form>
            </div>

            <div className='result'>
                {searchState === true && <img src={loader} alt='loader'/>}

                {results.length > 0 && (
                    results.map((image, i) => {
                        return (
                            <img key={i} src={`data:image/jpeg;base64,${image.b64_json}`} alt='Genreated'/>
                        )
                    })
                )}
            </div>
        </>
    )
}

export default ImageGeneration
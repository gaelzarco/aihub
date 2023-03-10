import { AiFillCloseSquare } from "react-icons/ai"
import { FormEvent, useState } from 'react'
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate()

    const [ credentials, setCredentials ] = useState({
        email: '',
        username: '',
        password: ''
    })
    const [ errMsg, setErrMsg ] = useState('')
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
    
      const response = await fetch('/login', {
        method: 'POST',
        headers : {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify(credentials)
      })
    
      const data = await response.json()

      if(data.err) {
        setErrMsg(prevState => prevState = data.err)
      }
      
      console.log(data)
    }

    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCredentials({...credentials, email: event.target.value});
    };

    const usernameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({...credentials, username: event.target.value});
    };

    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({...credentials, password: event.target.value});
    };

    return (
        <div className='pop-container'>
            <div className='pop-user-form'>
                <div className='pop-cancel' onClick={() => navigate(-1)}>
                    <AiFillCloseSquare color='white' size='80px'/>
                </div>

                <h1>Login</h1>

                {errMsg.length > 1 && (
                    <p className='err'>{errMsg}</p>
                )}

                <div>
                <form onSubmit={handleSubmit}>
                    <div><input type='email' placeholder='Email' onChange={(e) => {emailHandler(e)}}/></div>
                    <div><input type='text' placeholder='Username' onChange={(e) => {usernameHandler(e)}}/></div>
                    <div><input type='password' placeholder='Password' onChange={(e) => {passwordHandler(e)}}/></div>
                    <div><input type='submit' value='submit' /></div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Login
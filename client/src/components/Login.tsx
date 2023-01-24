import { AiFillCloseSquare } from "react-icons/ai"
import { FormEvent } from 'react'
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('submit!')
    }

    return (
        <div className='pop-container'>
            <div className='pop-user-form'>
                <div className='pop-cancel' onClick={() => navigate(-1)}>
                    <AiFillCloseSquare color='white' size='80px'/>
                </div>

                <h1>Login</h1>

                <div>
                <form onSubmit={handleSubmit}>
                    <div><input type='email' placeholder='Email' /></div>
                    <div><input type='text' placeholder='Username' /></div>
                    <div><input type='password' placeholder='Password' /></div>
                    <div><input type='button' value='submit' /></div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Login
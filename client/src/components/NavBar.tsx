import { Link } from 'react-router-dom'
import React, { useState } from 'react'

function NavBar() {
    const [ active, setActive ] = useState('')

    const setActiveId = (e: React.SyntheticEvent) => {
        setActive((e.target as HTMLElement).id)
    }

    return (
        <nav>
            <Link className={active === 'gpt' ? 'active' : ''} id='gpt' to='/chat' onClick={(e) => setActiveId(e)}>
                GPT-3
            </Link>
            <Link className={active === 'dall' ? 'active' : ''} id='dall' to='/image' onClick={(e) => setActiveId(e)}>
                DALL·E
            </Link>
        </nav>
    )
}

export default NavBar
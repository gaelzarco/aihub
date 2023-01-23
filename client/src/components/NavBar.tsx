import { Link } from 'react-router-dom'
import React, { useState } from 'react'

function NavBar() {
    const [ active, setActive ] = useState('gpt')
    let path = window.location.pathname

    const setActiveId = (e: React.SyntheticEvent) => {
        setActive((e.target as HTMLElement).id)
    }

    return (
        <nav>
            <Link to='/'>
                <p className={active === 'gpt' ? 'nav-active' : 'nav-item'} id='gpt' onClick={(e) => setActiveId(e)}>
                    GPT-3
                </p>
            </Link>
            <Link to='/image'>
                <p className={active === 'dall' ? 'nav-active' : 'nav-item'} id='dall' onClick={(e) => setActiveId(e)}>
                    DALL·E
                </p>
            </Link>
        </nav>
    )
}

export default NavBar
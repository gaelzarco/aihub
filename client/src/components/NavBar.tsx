import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <Link to='/'><p>GPT-3</p></Link>
            <Link to='/image'><p>DALL·E</p></Link>
        </nav>
    )
}

export default NavBar
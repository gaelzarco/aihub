import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <Link to='/'><p>Search</p></Link>
            <Link to='/image'><p>Generate Image</p></Link>
        </nav>
    )
}

export default NavBar
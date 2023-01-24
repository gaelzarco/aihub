import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
            <footer>
                <Link to='/create'>
                    Create Account
                </Link>
                <Link to='/login'>
                    Login
                </Link>
            </footer>
        </>
    )
}
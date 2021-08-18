import Link from 'next/link'
import stylesNav from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={stylesNav.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav

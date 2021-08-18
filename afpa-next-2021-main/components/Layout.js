import Head from 'next/head'
import Meta from './Meta'
import Header from './Header'
import Nav from './Nav'

import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <>
        <Meta/>
        <Nav/>
        <div className={styles.container}>
            <Header/>
            
            <main className={styles.main}>
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout

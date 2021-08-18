import stylesHeader from '../styles/Header.module.css'

const Header = () => {
    // const x = 3;
    return (
        <div>
            <h1 className={stylesHeader.title}>Welcome to   <span>AFPA</span>
            </h1>
            <p className={stylesHeader.description}>Learn new stuff everyday !</p>

            {/* <style jsx>
                {`
                    .title{
                        color: ${x > 4 ? 'red' : 'blue'};
                    }
                `}
            </style> */}
        </div>
    )
}

export default Header

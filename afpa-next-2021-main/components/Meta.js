import Head from "next/head"

const Meta = ({title, keywords, description}) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content={keywords}/>
            <meta name="description" content={description} />
            <meta name="charset=utf-8"/>
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: "AFPA - Learning Next",
    keywords: "nextjs, afpa, learning",
    description: "Learning new stuff everyday (or almost)"
}


export default Meta


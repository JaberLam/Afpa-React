import { server } from '../config'
import Head from 'next/head'
import PostList from "../components/PostList";

export default function Home({posts}) {
  return (
    <div>
      <h1>Learning Next</h1>
      <PostList posts={posts} />
    </div>

  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/posts`)

  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=2`)

//   const posts = await res.json()

//   return {
//     props: {
//       posts
//     }
//   }
// }
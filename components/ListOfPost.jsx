import LikeButton from "./LikeButton"
import Link from "next/link"

const getPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      next: {
        revalidate: 10
      }
    })
        .then( response => response.json() )
}

async function ListOfPosts() {

  const allPosts = await getPosts()
   
  return (
    <>
      { allPosts.slice(0,5).map( ({ id, title, body }) => (
        <article key={ id }>
          <Link href='/posts/[id]' as={`/posts/${id}`}>
            <h2 className="text-xl text-sky-800">{ title }</h2>
            <p> { body } </p>
            <LikeButton id={ id }/>
          </Link>
        </article>
      ))
      }
    </>
  )
}

export default ListOfPosts

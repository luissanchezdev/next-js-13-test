import Link from "next/link"

const fetchSinglePost = ( id ) => {
  // ISG
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate : 60
    }
  })
  .then( res => res.json())
}

async function LayoutPost( { children, params } ) {
  const { id } = params

  const  dataPost = await fetchSinglePost( id )

  return (
    <>
      <article>
        <h2 className="text-center text-2xl">{ dataPost.title } </h2>
        <p className="my-2">{ dataPost.body }</p>
        <Link href={`/posts/${ id }/comments`} > Ver commentarios </Link>
        { children }
      </article>
    </>
  )
}

export default LayoutPost

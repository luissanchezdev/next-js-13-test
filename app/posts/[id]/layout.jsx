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
      <article className=" container mx-auto">
        <h2 className="my-2 text-xl text-sky-900">{ dataPost.title } </h2>
        <p className="my-2">{ dataPost.body }</p>
        <Link href={`/posts/${ id }/comments`} className="my-2 block w-auto rounded-md bg-sky-700 p-2 text-white"> Ver comentarios </Link>
        { children }
      </article>
    </>
  )
}

export default LayoutPost

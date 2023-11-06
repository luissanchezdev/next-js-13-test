const fetchSinglePost = ( id ) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate : 60
    }
  })
  .then( res => res.json())
}

async function PostPage( { params } ) {
  const { id } = params

  const  dataPost = await fetchSinglePost( id )

  return (
    <div>
      <h2 className="text-center text-2xl">{ dataPost.title } </h2>
      <p className="my-2">{ dataPost.body }</p>
    </div>
  )
}

export default PostPage

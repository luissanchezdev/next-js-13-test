const fetchPostComments = ( id ) => {
  // ISG
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate : 60
    }
  })
  .then( res => res.json())
}

async function postComment( { params } ) {
  const { id } = params

  const  comments = await fetchPostComments( id )

  return (
    <>
      {
        comments.map( ({ name, body }) => {
          return (
            <>
              <div>
                <p className="text-center text-xl">{ name } </p>
                <p className="my-2">{ body }</p>
              </div>
            </>
          )
          })
      }
    </>
  )
}

export default postComment

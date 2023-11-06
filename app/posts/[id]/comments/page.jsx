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
    <ul>
      {
        comments.map( ({ name, body }, index) => {
          return (
              <li key={ index }>
                <p className="text-center text-xl">{ name } </p>
                <p className="my-2">{ body }</p>
              </li>
          )
          })
      }
    </ul>
  )
}

export default postComment
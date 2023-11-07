import Image from "next/image"

const fetchPostComments = async ( id ) => {
  await new Promise( resolve => setTimeout( resolve, 5000))
  // throw new Error('Error en la carga de comentarios')
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
                <Image height={100} width={100}
  src={`https://i.pravatar.cc/300`}
  alt={`avatar`} />
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

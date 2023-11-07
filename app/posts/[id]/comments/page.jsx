import Image from "next/image"

const fetchPostComments = async ( id ) => {
  // await new Promise( resolve => setTimeout( resolve, 5000))
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
    <ul className="ml-4">
      {
        comments.map( ({ name, body }, index) => {
          return (
              <li key={ index } className="grid grid-cols-7 gap-2">
                <Image height={100} width={100}
  src={`https://i.pravatar.cc/300`}
  alt={`avatar`} className=" col-start-1 col-end-2"/>
                <div className="col-start-2 col-end-8">
                  <p className="text-lg">{ name } </p>
                  <p className="my-2">{ body }</p>
                </div>
              </li>
          )
          })
      }
    </ul>
  )
}

export default postComment

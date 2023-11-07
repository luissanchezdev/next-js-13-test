import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ['latin'], weight: ['400']  });

function PostsLayout({ children }) {

  return (
    <>
      <small className={`${poppins.className}`}>Home &bull; Posts</small>
      <section>
        { children }
      </section>
    </>
  )
}

export default PostsLayout

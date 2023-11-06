import Counter from "@/components/Counter"

function PostsLayout({ children }) {

  return (
    <>
      <Counter />
      <section>
        { children }
      </section>
    </>
  )
}

export default PostsLayout

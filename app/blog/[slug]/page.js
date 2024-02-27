export default function BlogPostPage({params}){
  return(
    <main>
      <h1 className="text-2xl text-center my-4">Blog Post</h1>
      <p>{params.slug}</p>
    </main>
  )
}

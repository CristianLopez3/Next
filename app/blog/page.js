import Link from 'next/link';

export default function BlogPage(){
  return(
    <main>
      <h2>Blog</h2>
      <p>
        <Link href="/blog/post-1" >Post 1</Link>
        <Link href="/blog/post-2" >Post 2</Link>
      </p>
    </main>
  )
}
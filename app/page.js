import Link from 'next/link';
import Header from '@/components/header';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <h1 className="text-center text-3xl">Main page</h1>

      <h2 className="underline text-xl">Navigation</h2>
      <Link href="/about">AboutPage</Link>
      <Link href="/blog">Blog </Link>
    </main>
  );
}

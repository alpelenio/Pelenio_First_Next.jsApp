import Link from "next/link";
export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Hi, I'm Alnor Pelenio
      </h1>
      <p className="mt-2">
        Welcome to my first Next.js app!
      </p>
      <br></br>

      <Link href="/projects" className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
        See my Projects
      </Link>
    </main>
  );
}
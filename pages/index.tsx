import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl mb-4">Selamat Datang</h1>
        <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 hover:text-gray-600 transition-colors duration-200 ease-in-out"
          >
            Super Chat
          </Link>
          
          <Link
            href="https://github.com/yayxs/super-chat"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out rounded-lg hover:bg-gray-50"
          >
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}
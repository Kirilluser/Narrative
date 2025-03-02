// src/components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Кирилл. Все права защищены.
        </p>
        <div className="mt-2">
          <Link href="/privacy" className="text-blue-600 hover:underline mr-4">
            Политика конфиденциальности
          </Link>
          <Link href="/terms" className="text-blue-600 hover:underline">
            Условия использования
          </Link>
        </div>
      </div>
    </footer>
  );
}

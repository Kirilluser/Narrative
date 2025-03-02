// src/app/books/page.js
import Image from 'next/image';
import Link from 'next/link';

const books = [
  {
    id: 'a',
    title: 'Говард Шульц «Полный вперед!»',
    description:
      'Учиться на ошибках, проявлять лидерские качества и стремиться к инновациям, несмотря на препятствия, чтобы создать успешный бизнес.',
    image: '/images/book1.jpg',
  },
  {
    id: 'b',
    title: 'Брене Браун – «Дары несовершенства»',
    description:
      'Исследование уязвимости и важности принятия себя таким, какой ты есть.',
    image: '/images/book2.jpg',
  },
  {
    id: 'c',
    title: 'Марк Мэнсон — «Тонкое искусство пофигизма»',
    description:
      'О том, как сосредоточиться на главном, отказываясь от ненужного, чтобы жить более свободно.',
    image: '/images/book3.jpg',
  },
];

export default function Books() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Рекомендации книг</h1>
        <p className="mt-2 text-gray-600">
          Здесь собраны книги, которые вдохновляют меня на саморазвитие и успех.
        </p>
      </header>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <article
            key={book.id}
            className="border rounded-lg bg-white shadow hover:shadow-lg transition"
          >
            <div className="relative w-full h-64">
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900">
                {book.title}
              </h2>
              <p className="text-gray-600 mt-2">{book.description}</p>
              <Link href={`/books/${book.id}`}>
                <span className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">
                  Подробнее &rarr;
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

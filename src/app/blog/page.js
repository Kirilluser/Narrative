// src/app/blog/page.js
import Link from 'next/link';

const posts = [
  {
    id: '1',
    title: 'Мотивация или дисциплина?',
    excerpt:
      'Размышляем, что важнее: мотивация или дисциплина? Делюсь личным опытом и практическими советами.',
    date: '2025-02-28',
  },
  {
    id: '2',
    title: 'Правила успешного человека',
    excerpt:
      'Как построить успешную карьеру и личную жизнь: 5 правил, которые помогут вам достичь своих целей.',
    date: '2025-02-25',
  },
  {
    id: '3',
    title: 'Почему важно поставить цели?',
    excerpt:
      'Цели — ключ к успеху. Узнайте, как правильно их формулировать и достигать поставленных задач.',
    date: '2025-02-20',
  },
  {
    id: '4',
    title: 'Новые тенденции в IT',
    excerpt:
      'Обзор современных трендов и технологий в IT-индустрии, которые формируют будущее.',
    date: '2025-03-01',
  },
  {
    id: '5',
    title: 'Эффективная удалённая работа',
    excerpt:
      'Советы и стратегии для повышения продуктивности при работе из дома или в путешествии.',
    date: '2025-03-05',
  },
];

export default function Blog() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Блог</h1>
        <p className="mt-2 text-gray-600">
          Читайте мои последние статьи и делитесь мнением.
        </p>
      </header>

      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="border rounded-lg p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              {post.title}
            </h2>
            <p className="text-gray-500 text-sm">{post.date}</p>
            <p className="mt-4 text-gray-700">{post.excerpt}</p>
            <Link href={`/blog/${post.id}`}>
              <span className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium">
                Читать далее &rarr;
              </span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

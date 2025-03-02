// src/app/page.js
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero-секция */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            УСПЕХ — ЭТО НАУКА
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
            Если у вас есть условия, вы получите РЕЗУЛЬТАТ.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/about"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition"
            >
              Познакомиться
            </Link>
          </div>
        </div>
      </section>

      {/* Блок статей */}
      <section className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">Последние статьи</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Пример карточки статьи */}
          <article className="overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transition">
            {/* Картинка (примерная) */}
            <div className="relative w-full h-48">
              <Image
                src="/images/img1.jpg"
                alt="Превью статьи"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Мотивация или дисциплина?</h3>
              <p className="text-gray-600 mb-4">
                Краткий анонс первой статьи: о мотивации и силе дисциплины...
              </p>
              <Link
                href="/blog/1"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Читать далее &rarr;
              </Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transition">
            <div className="relative w-full h-48">
              <Image
                src="/images/img2.jpg"
                alt="Превью статьи"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Правила успешного человека</h3>
              <p className="text-gray-600 mb-4">
                Обзор современных подходов к развитию личности и навыков...
              </p>
              <Link
                href="/blog/2"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Читать далее &rarr;
              </Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transition">
            <div className="relative w-full h-48">
              <Image
                src="/images/img3.jpg"
                alt="Превью статьи"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Почему важно поставить цели?</h3>
              <p className="text-gray-600 mb-4">
                Почему важно ставить амбициозные цели и идти к ним...
              </p>
              <Link
                href="/blog/3"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Читать далее &rarr;
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Блок книг */}
      <section className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">Рекомендации книг</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Пример карточки книги */}
          <article className="overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transition">
            <div className="relative w-full h-48">
              <Image
                src="/images/book1.jpg"
                alt="Обложка книги"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Говард Шульц «Полный вперед!».</h3>
              <p className="text-gray-600 mb-4">
                Учиться на ошибках, проявлять лидерские качества и стремиться к инновациям, несмотря на препятствия, чтобы создать успешный бизнес.
              </p>
              <Link
                href="/books/a"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Подробнее &rarr;
              </Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transition">
            <div className="relative w-full h-48">
              <Image
                src="/images/book2.jpg"
                alt="Обложка книги"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Брене Браун – «Дары несовершенства»</h3>
              <p className="text-gray-600 mb-4">
                Исследование уязвимости и важности принятия себя таким, какой ты есть.
              </p>
              <Link
                href="/books/b"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Подробнее &rarr;
              </Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transition">
            <div className="relative w-full h-48">
              <Image
                src="/images/book3.jpg"
                alt="Обложка книги"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Марк Мэнсон — «Тонкое искусство пофигизма»</h3>
              <p className="text-gray-600 mb-4">
                О том, как сосредоточиться на главном, отказываясь от ненужного.
              </p>
              <Link
                href="/books/c"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Подробнее &rarr;
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Блок контактов (или CTA) */}
      <section className="bg-blue-50 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Остались вопросы?</h2>
          <p className="mt-2 text-gray-600">Напишите мне, и я с радостью отвечу.</p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition"
            >
              Связаться
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

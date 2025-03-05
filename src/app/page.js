import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
      <div className="space-y-24">
        {/* Hero-секция с фоновым изображением */}
        <section className="hero relative">
          {/* Фоновое изображение с наложением */}
          <div className="absolute inset-0 z-0">
            <Image
                src="/images/fon.jpg"
                alt="Фоновое изображение"
                fill
                style={{ objectFit: 'cover' }}
                quality={75}
                className="opacity-50"
            />
            {/* Полупрозрачный оверлей для смягчения фона */}
            <div className="absolute inset-0 bg-white opacity-40" />
          </div>
          <div className="relative z-10 mx-auto max-w-5xl px-4 py-32 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
              УСПЕХ — ЭТО НАУКА
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
              Если у вас есть условия, вы получите результат.
            </p>
            <div className="mt-10">
              <Link
                  href="/about"
                  className="inline-block px-8 py-3 border border-transparent text-lg font-medium rounded-md text-gray-900 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                Познакомиться
              </Link>
            </div>
          </div>
        </section>

        {/* Блок "Обо мне" */}
        <section className="about-block mx-auto max-w-4xl px-4 py-16 bg-gray-100 rounded-lg shadow">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
            Обо мне
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-full h-64 md:w-1/2 rounded-lg overflow-hidden shadow-sm transform hover:scale-105 transition-transform duration-200">
              <Image
                  src="/images/profile.jpg"
                  alt="Мой портрет"
                  fill
                  style={{ objectFit: 'cover' }}
              />
            </div>
            <p className="text-gray-600 text-lg leading-relaxed md:w-1/2">
              Я верю в постоянное развитие, дисциплину и силу знаний. Мой сайт – это отражение моего пути, идей и опыта. Здесь я делюсь статьями, книгами и проектами, которые вдохновляют меня на новые свершения.
            </p>
          </div>
        </section>

        {/* Блок статей */}
        <section className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
            Последние статьи
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Карточка статьи */}
            <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1 duration-200">
              <div className="relative w-full h-48">
                <Image
                    src="/images/img1.jpg"
                    alt="Превью статьи"
                    fill
                    style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Мотивация или дисциплина?
                </h3>
                <p className="text-gray-600 mb-4">
                  Краткий анонс первой статьи: о мотивации и силе дисциплины...
                </p>
                <Link
                    href="/blog/1"
                    className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
                >
                  Читать далее &rarr;
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1 duration-200">
              <div className="relative w-full h-48">
                <Image
                    src="/images/img2.jpg"
                    alt="Превью статьи"
                    fill
                    style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Правила успешного человека
                </h3>
                <p className="text-gray-600 mb-4">
                  Обзор современных подходов к развитию личности и навыков...
                </p>
                <Link
                    href="/blog/2"
                    className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
                >
                  Читать далее &rarr;
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1 duration-200">
              <div className="relative w-full h-48">
                <Image
                    src="/images/img3.jpg"
                    alt="Превью статьи"
                    fill
                    style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Почему важно поставить цели?
                </h3>
                <p className="text-gray-600 mb-4">
                  Почему важно ставить амбициозные цели и идти к ним...
                </p>
                <Link
                    href="/blog/3"
                    className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
                >
                  Читать далее &rarr;
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Блок книг */}
        <section className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
            Рекомендации книг
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1 duration-200">
              <div className="relative w-full h-48">
                <Image
                    src="/images/book1.jpg"
                    alt="Обложка книги"
                    fill
                    style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Говард Шульц «Полный вперед!»
                </h3>
                <p className="text-gray-600 mb-4">
                  Учиться на ошибках, проявлять лидерские качества и стремиться к инновациям...
                </p>
                <Link
                    href="/books/a"
                    className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
                >
                  Подробнее &rarr;
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1 duration-200">
              <div className="relative w-full h-48">
                <Image
                    src="/images/book2.jpg"
                    alt="Обложка книги"
                    fill
                    style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Брене Браун – «Дары несовершенства»
                </h3>
                <p className="text-gray-600 mb-4">
                  Исследование уязвимости и важности принятия себя таким, какой ты есть.
                </p>
                <Link
                    href="/books/b"
                    className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
                >
                  Подробнее &rarr;
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1 duration-200">
              <div className="relative w-full h-48">
                <Image
                    src="/images/book3.jpg"
                    alt="Обложка книги"
                    fill
                    style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Марк Мэнсон — «Тонкое искусство пофигизма»
                </h3>
                <p className="text-gray-600 mb-4">
                  О том, как сосредоточиться на главном, отказываясь от ненужного.
                </p>
                <Link
                    href="/books/c"
                    className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
                >
                  Подробнее &rarr;
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Блок проектов */}
        <section className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
            Мои проекты
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1 duration-200">
              <div className="relative w-full h-48">
                <Image
                    src="/images/project1.jpg"
                    alt="Проект 1"
                    fill
                    style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Aviasales API bot
                </h3>
                <p className="text-gray-600 mb-4">
                  Мой первый проект с использованием технологии API,если вкратце этот бот ищет реальные авиабилеты,места и погоду на указанный город,так же доступны гибкие билеты,горячие предложения,история поиска,личный кабинет и многое другое.
                </p>
                <Link
                    href="/projects/1"
                    className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
                >
                  Подробнее &rarr;
                </Link>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1 duration-200">
              <div className="relative w-full h-48">
                <Image
                    src="/images/project2.jpg"
                    alt="Проект 2"
                    fill
                    style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Проект 2 (personal-website)
                </h3>
                <p className="text-gray-600 mb-4">
                  Это самый первый мой проект,личный вебсайт материал котрого является родителем этого сайта,этот проект был введением меня в программирование и обучения этим навыкам,сейчас он лежит в свободном доступе на гитхаб.
                </p>
                <Link
                    href="/projects/2"
                    className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
                >
                  Подробнее &rarr;
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Блок контактов */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-3xl font-semibold text-gray-800">
              Остались вопросы?
            </h2>
            <p className="mt-4 text-gray-600">
              Напишите мне, и я с радостью отвечу.
            </p>
            <div className="mt-8">
              <Link
                  href="/contact"
                  className="inline-block bg-blue-200 text-gray-800 px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-300 transition-colors duration-200"
              >
                Связаться
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
}

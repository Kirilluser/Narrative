// src/app/books/[id]/page.js
import Image from 'next/image';
import { notFound } from 'next/navigation';

const books = {
  a: {
    title: 'Говард Шульц «Полный вперед!»',
    description:
      'Учиться на ошибках, проявлять лидерские качества и стремиться к инновациям, несмотря на препятствия, чтобы создать успешный бизнес.',
    image: '/images/book1.jpg',
    content: `
      <p>Подробное описание книги "Полный вперед!". Здесь можно рассказать о том, как Говард Шульц использовал свои принципы для построения успешного бизнеса, какие уроки можно извлечь, и почему эта книга стала для меня источником вдохновения.</p>
      <p>Книга содержит множество практических примеров и советов, которые помогут каждому стремящемуся к успеху.</p>
    `,
  },
  b: {
    title: 'Брене Браун – «Дары несовершенства»',
    description:
      'Исследование уязвимости и важности принятия себя таким, какой ты есть.',
    image: '/images/book2.jpg',
    content: `
      <p>"Дары несовершенства" — книга, которая помогает понять, что истинная сила заключается в принятии себя. Автор делится опытом, как любовь к себе может изменить жизнь.</p>
      <p>Эта книга вдохновляет на личное развитие и освобождение от навязанных стандартов.</p>
    `,
  },
  c: {
    title: 'Марк Мэнсон — «Тонкое искусство пофигизма»',
    description:
      'О том, как сосредоточиться на главном, отказываясь от ненужного, чтобы жить более свободно.',
    image: '/images/book3.jpg',
    content: `
      <p>"Тонкое искусство пофигизма" предлагает свежий взгляд на проблемы современной жизни. Книга учит выбирать, чему уделять внимание, а чему — нет, и помогает освободиться от лишних забот.</p>
      <p>Она станет полезным руководством для тех, кто хочет жить свободнее и сосредоточиться на действительно важных вещах.</p>
    `,
  },
  d: {
    title: 'Стивен Кови — «7 навыков высокоэффективных людей»',
    description:
        'Классика саморазвития, в которой автор выделяет семь ключевых принципов успеха, включая проактивность, расстановку приоритетов и постоянное совершенствование.',
    image: '/images/book4.jpg',
    content: `
      <p>"Тонкое искусство пофигизма" предлагает свежий взгляд на проблемы современной жизни. Книга учит выбирать, чему уделять внимание, а чему — нет, и помогает освободиться от лишних забот.</p>
      <p>Она станет полезным руководством для тех, кто хочет жить свободнее и сосредоточиться на действительно важных вещах.</p>
    `,
  },
  e: {
    title: 'Марк Мэнсон — «Тонкое искусство пофигизма»',
    description:
        'О том, как сосредоточиться на главном, отказываясь от ненужного, чтобы жить более свободно.',
    image: '/images/book3.jpg',
    content: `
      <p>"Тонкое искусство пофигизма" предлагает свежий взгляд на проблемы современной жизни. Книга учит выбирать, чему уделять внимание, а чему — нет, и помогает освободиться от лишних забот.</p>
      <p>Она станет полезным руководством для тех, кто хочет жить свободнее и сосредоточиться на действительно важных вещах.</p>
    `,
  },
};

export default function BookDetails({ params }) {
  const { id } = params;
  const book = books[id];

  if (!book) {
    notFound();
  }

  return (
    <article className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-4xl font-bold">{book.title}</h1>
      <div className="relative w-full h-64 my-6">
        <Image
          src={book.image}
          alt={book.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: book.content }} />
    </article>
  );
}

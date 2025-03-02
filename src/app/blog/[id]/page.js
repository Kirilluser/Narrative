// src/app/blog/[id]/page.js
import Image from 'next/image';
import { notFound } from 'next/navigation';

const articles = {
  '1': {
    title: 'Мотивация или дисциплина?',
    date: '2025-02-28',
    image: '/images/art1.png', // убедитесь, что файл существует в public/images
    content: `
      <p>В современном мире успех зависит от множества факторов, и два из них — мотивация и дисциплина — часто вызывают споры.</p>
      <p>Мотивация — это внутреннее побуждение, которое заставляет нас начинать новые дела и стремиться к целям. Без мотивации сложно найти энергию для достижения поставленных задач.</p>
      <p>Дисциплина же помогает нам придерживаться плана, даже когда мотивация угасает. Именно дисциплина позволяет доводить начатое до конца, несмотря на трудности.</p>
      <h2>Личный опыт</h2>
      <p>Когда я только начинал свой путь в IT, у меня часто была мотивация, но ей не хватало дисциплины. Со временем, научившись структурировать свой день и ставить реальные цели, я понял, что дисциплина — это ключевой фактор, позволяющий добиться поставленных задач.</p>
      <h2>Практические советы</h2>
      <ul>
        <li>Ставьте четкие и измеримые цели.</li>
        <li>Разбивайте большие задачи на мелкие шаги.</li>
        <li>Планируйте свой день заранее.</li>
        <li>Награждайте себя за достижения.</li>
      </ul>
      <p>Сочетание мотивации и дисциплины помогает не только достигать успеха, но и строить устойчивую систему личного роста.</p>
    `,
  },
  // Можно добавить и другие статьи, если потребуется
};

export default function BlogPost({ params }) {
  const { id } = params;
  const article = articles[id];

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-4xl font-bold">{article.title}</h1>
      <p className="text-gray-500">{article.date}</p>
      {article.image && (
        <div className="relative w-full h-64 my-6">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  );
}

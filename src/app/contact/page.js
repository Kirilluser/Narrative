// src/app/contact/page.js
"use client";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки формы, например, через API
    alert('Сообщение отправлено!');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">
      {/* Заголовок */}
      <header className="text-center">
        <h1 className="text-4xl font-bold">Контакты</h1>
        <p className="mt-2 text-gray-600">
          Свяжитесь со мной для сотрудничества, вопросов или предложений.
        </p>
      </header>

      {/* Блок с контактной информацией */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Мои контакты</h2>
        <ul className="text-lg text-gray-800 space-y-2">
          <li>
            Email:{" "}
            <a
              href="mailto:kolomieckirill38@gmail.com"
              className="text-blue-600 hover:underline"
            >
              example@example.com
            </a>
          </li>
          <li>
            Телеграм:{" "}
            <a
              href="https://t.me/NarrativeLive"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              @NarrativeLive
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/kirill-kolomiyets-ab2a9a2b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              yourprofile
            </a>
          </li>
        </ul>
      </section>

      {/* Форма обратной связи */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Обратная связь</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Ваше имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Введите ваше имя"
              required
              className="mt-1 w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Ваш Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Введите ваш email"
              required
              className="mt-1 w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
              Ваше сообщение
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Введите ваше сообщение"
              required
              className="mt-1 w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition"
          >
            Отправить сообщение
          </button>
        </form>
      </section>
    </div>
  );
}

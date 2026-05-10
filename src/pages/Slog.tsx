import { useState } from "react";

const S1 = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/5ce95c68-2535-4728-b699-e0197c95f962.jpg";
const S2 = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/4922570b-481e-4986-8ca5-69e54c5682cd.jpg";
const S3 = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/2886df49-f165-4174-9dbe-2c4330723950.jpg";
const S4 = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/7c843ba2-3be1-4beb-9d9c-c72c32a62a2f.jpg";
const S5 = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/2cff6f25-ae13-4647-8fb1-839c05be9701.jpg";
const S6 = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/eee51467-658b-45b5-91c2-099c6ae8242a.jpg";
const S7 = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/b5daec48-8e89-4682-a665-84020aa03278.jpg";
const S8 = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/74d710f4-bee5-4733-b32f-6d30558fe519.jpg";
const S9 = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/9f4b69c8-6df9-4dc7-8455-4257fd3dde4f.jpg";

const C1 = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/4bbd9a9d-57b1-4dd4-b548-590bc19a480e.jpg";
const C2 = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/c402cc8c-af77-435b-b509-b39bf4700716.jpg";
const C3 = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/663380d8-cabd-4f8a-bbdd-8837fec02c7a.jpg";
const C4 = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/bf4e6f4b-13b5-41ea-8db5-cf6bd3b713f2.jpg";
const C5 = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/e296b3c0-1122-4c0b-b533-2bbac7eb41f3.jpg";
const C6 = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/292da296-18c6-4745-a150-95ad675bcb6d.jpg";

const D1 = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/043bd1e0-58b0-4dfc-a13e-ce1f3fb38230.jpg";
const D2 = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/ff0c8d45-c6a1-430e-bb8e-f75ed3d51696.jpg";
const D3 = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/2e55ac06-111b-465c-a3c4-dfeaceddbdc9.jpg";

const slides = [
  { id: 0, label: "Титул", emoji: "🚂" },
  { id: 1, label: "Разминка", emoji: "✍️" },
  { id: 2, label: "Цель", emoji: "🎯" },
  { id: 3, label: "Правило", emoji: "📐" },
  { id: 4, label: "Перенос", emoji: "➡️" },
  { id: 5, label: "Физминутка", emoji: "👏" },
  { id: 6, label: "Игра", emoji: "🔍" },
  { id: 7, label: "Творчество", emoji: "💡" },
  { id: 8, label: "Рефлексия", emoji: "🚦" },
  { id: 9, label: "Карточки", emoji: "🖨️" },
  { id: 10, label: "Для доски", emoji: "📋" },
];

const slideImages = [S1, S2, S3, S4, S5, S6, S7, S8, S9];

const cards = [
  { img: C1, label: "Карточка №1", sub: "Посчитай слоги", color: "border-pink-400" },
  { img: C2, label: "Карточка №2", sub: "Раздели на слоги", color: "border-blue-400" },
  { img: C3, label: "Карточка №3", sub: "Перенос слов", color: "border-green-400" },
  { img: C4, label: "Карточка №4", sub: "Исправь ошибки", color: "border-orange-400" },
  { img: C5, label: "Карточка №5", sub: "Весёлые слоги", color: "border-purple-400" },
  { img: C6, label: "Памятка", sub: "Вклеить в тетрадь", color: "border-yellow-400" },
];

const boardItems = [
  { img: D1, label: "Правило гласных", sub: "Карточки на магниты", color: "border-red-400" },
  { img: D2, label: "Поезд для переноса", sub: "Наглядность на доску", color: "border-teal-400" },
  { img: D3, label: "Смайлики-котики", sub: "Рефлексия — вырежьте", color: "border-yellow-400" },
];

const slideTitles = [
  "Деление на слоги",
  "Речевая разминка",
  "Цель урока",
  "Повторяем правило",
  "Правила переноса",
  "Физминутка",
  "Игра: Найди ошибку",
  "Творческое задание",
  "Рефлексия",
];

export default function Slog() {
  const [current, setCurrent] = useState(0);

  const goTo = (idx: number) => {
    if (idx >= 0 && idx < slides.length) setCurrent(idx);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-green-50 to-yellow-100 flex flex-col" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <div className="flex items-center justify-between px-4 py-2 bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="font-bold text-blue-600 text-lg hidden sm:block">🚂 Слоги</div>
        <div className="flex gap-1 overflow-x-auto max-w-full">
          {slides.map((s) => (
            <button
              key={s.id}
              onClick={() => goTo(s.id)}
              className={`flex flex-col items-center px-2 py-1 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                current === s.id
                  ? "bg-blue-600 text-white scale-105 shadow-lg"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-200"
              }`}
            >
              <span>{s.emoji}</span>
              <span className="hidden md:block">{s.label}</span>
            </button>
          ))}
        </div>
        <div className="text-blue-500 text-lg font-bold ml-2">{current + 1}/{slides.length}</div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-6">

        {/* СЛАЙДЫ 0–8: просто большое изображение */}
        {current <= 8 && (
          <div className="w-full max-w-5xl">
            <div className="text-center mb-3">
              <div className="text-2xl font-bold text-blue-700">{slideTitles[current]}</div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={slideImages[current]}
                alt={slideTitles[current]}
                className="w-full object-contain max-h-[70vh]"
              />
            </div>
            <div className="flex justify-between mt-4 gap-3">
              <button
                onClick={() => goTo(current - 1)}
                disabled={current === 0}
                className="flex-1 py-3 rounded-2xl bg-white border-2 border-blue-300 text-blue-700 font-bold text-lg hover:bg-blue-50 disabled:opacity-30 transition-all"
              >
                ← Назад
              </button>
              <a
                href={slideImages[current]}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-2xl bg-white border-2 border-gray-300 text-gray-500 font-bold text-sm hover:bg-gray-50 transition-all text-center"
              >
                🔍 На весь экран
              </a>
              <button
                onClick={() => goTo(current + 1)}
                disabled={current === slides.length - 1}
                className="flex-1 py-3 rounded-2xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 disabled:opacity-30 transition-all"
              >
                Вперёд →
              </button>
            </div>
          </div>
        )}

        {/* SLIDE 9: КАРТОЧКИ */}
        {current === 9 && (
          <div className="w-full max-w-5xl">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-700 mb-2">🖨️ Раздаточный материал</div>
              <div className="text-xl text-blue-400" style={{ fontFamily: "Caveat, cursive" }}>Карточки на парты — нажми для печати</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {cards.map((card, i) => (
                <a
                  key={i}
                  href={card.img}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block rounded-2xl overflow-hidden border-4 ${card.color} shadow-lg hover:scale-105 transition-all duration-200 cursor-zoom-in bg-white`}
                >
                  <img src={card.img} alt={card.label} className="w-full aspect-[3/4] object-cover" />
                  <div className="p-2 text-center">
                    <div className="font-bold text-sm text-gray-800">{card.label}</div>
                    <div className="text-sm text-gray-500" style={{ fontFamily: "Caveat, cursive" }}>{card.sub}</div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-4 bg-blue-50 rounded-2xl p-4 border-2 border-blue-200 text-center">
              <div className="text-blue-600 text-lg" style={{ fontFamily: "Caveat, cursive" }}>🖨️ Нажми на карточку — откроется для печати</div>
            </div>
          </div>
        )}

        {/* SLIDE 10: НАГЛЯДНОСТЬ ДЛЯ ДОСКИ */}
        {current === 10 && (
          <div className="w-full max-w-5xl">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-teal-700 mb-2">📋 Наглядный материал для доски</div>
              <div className="text-xl text-teal-400" style={{ fontFamily: "Caveat, cursive" }}>Распечатай и прикрепи на магнитах</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {boardItems.map((item, i) => (
                <a
                  key={i}
                  href={item.img}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block rounded-2xl overflow-hidden border-4 ${item.color} shadow-lg hover:scale-105 transition-all duration-200 cursor-zoom-in bg-white`}
                >
                  <img src={item.img} alt={item.label} className="w-full aspect-video object-cover" />
                  <div className="p-2 text-center">
                    <div className="font-bold text-sm text-gray-800">{item.label}</div>
                    <div className="text-sm text-gray-500" style={{ fontFamily: "Caveat, cursive" }}>{item.sub}</div>
                  </div>
                </a>
              ))}
            </div>
            <div className="bg-teal-50 rounded-2xl p-5 border-2 border-teal-200">
              <div className="text-teal-700 font-bold text-lg mb-3">📌 Как использовать:</div>
              <ul className="space-y-2 text-gray-700">
                <li>🟥 <strong>Правило гласных</strong> — повесить на доску в начале урока</li>
                <li>🚂 <strong>Поезд для переноса</strong> — работа у доски, дети «отцепляют» вагоны</li>
                <li>🐱 <strong>Смайлики-котики</strong> — раздать детям в конце урока, дети выбирают нужный</li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

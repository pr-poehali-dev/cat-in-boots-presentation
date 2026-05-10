import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SLIDES = [
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/6a4a9d6d-b7a7-4eb2-81a3-90678a017f38.jpg", title: "Умножение на 3" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/458e8529-f6aa-4a63-9e43-18c2bfec13a4.jpg", title: "Устный счёт — Разминка" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/ba67e725-45fb-49d5-a69b-90b30b75d5f3.jpg", title: "Цель урока" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/6bb55745-9846-458a-a90e-6c8fa299e9d0.jpg", title: "Умножение — это сложение" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/3e8fb5bc-a1bb-4d29-9292-d6e1a7647343.jpg", title: "Таблица на 3 — Часть 1" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/685e2fb3-4ec3-467f-b7b7-7747c0926827.jpg", title: "Таблица на 3 — Часть 2" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/d523d175-0586-4932-982d-9875dc06bf97.jpg", title: "Физминутка" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/6f9c235f-d51b-4821-82b1-622ddd98e5d1.jpg", title: "Задача" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/77d9b393-c526-4400-8af7-9a91daab69bf.jpg", title: "Игра: Найди пару" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/c8925bc7-1ce5-4960-a5ef-2d0cef9bb34c.jpg", title: "Самостоятельная работа" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/cdfe2731-1cd3-4bb9-9fb0-f68e05de606c.jpg", title: "Проверь себя!" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/bc88253c-09af-42e3-b817-53cd76111837.jpg", title: "Рефлексия — Лесенка успеха" },
];

const CARDS = [
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/ae85cedb-cb89-4ed4-9332-e2f4071ff8ad.jpg", label: "Карточка №1", sub: "Замени сложение умножением", color: "border-pink-400" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/50f11e7e-ad6e-4a6f-879c-d2def4ce241c.jpg", label: "Карточка №2", sub: "Таблица умножения на 3", color: "border-blue-400" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/5b7e4c66-367b-4184-8baf-3b46603b6f69.jpg", label: "Карточка №3", sub: "Реши за 1 минуту", color: "border-orange-400" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/c667494a-7f05-4689-8b4f-4f2d4e490f67.jpg", label: "Карточка №4", sub: "Задача", color: "border-green-400" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/321642df-8b7b-439f-845c-e252ac658fc7.jpg", label: "Карточка №5", sub: "Сравни", color: "border-purple-400" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/5dc71385-3513-4421-b224-93c5d5c651c0.jpg", label: "Карточка №6", sub: "Найди ошибку", color: "border-red-400" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/7689bd32-3a4b-476a-b071-467e0e4496a9.jpg", label: "Памятка", sub: "Вклеить в тетрадь", color: "border-yellow-400" },
];

const BOARD = [
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/b80af99f-f54e-47ab-a343-25bad055a803.jpg", label: "Весёлый поезд", sub: "Вагоны — примеры, станции — ответы", color: "border-teal-400" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/054a9c46-7a53-49f8-a0ee-d953b2134e88.jpg", label: "Таблица на доску", sub: "Плакат над доской", color: "border-blue-400" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/4a151d08-8d9f-4543-8cb0-17c998961718.jpg", label: "Карточки «Захлопни число»", sub: "Раздать детям, хлопают по ответу", color: "border-orange-400" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/f616f4c3-301a-46c1-8ce9-c1d0edbd2b8b.jpg", label: "Смайлики — Лесенка успеха", sub: "Рефлексия — вырежьте и раздайте", color: "border-green-400" },
];

const tabs = [
  { id: "slides", label: "Слайды", emoji: "📊" },
  { id: "cards", label: "Карточки", emoji: "🖨️" },
  { id: "board", label: "Для доски", emoji: "📋" },
];

export default function Mnozh() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"slides" | "cards" | "board">("slides");
  const [current, setCurrent] = useState(0);

  const goTo = (idx: number) => {
    if (idx >= 0 && idx < SLIDES.length) setCurrent(idx);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 flex flex-col" style={{ fontFamily: "'Nunito', sans-serif" }}>
      {/* TOP NAV */}
      <div className="flex items-center justify-between px-4 py-2 bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/")}
            className="text-xs px-2 py-1 rounded-lg bg-purple-100 text-purple-600 font-bold hover:bg-purple-200 transition-all hidden sm:block"
          >← Перро</button>
          <button
            onClick={() => navigate("/slog")}
            className="text-xs px-2 py-1 rounded-lg bg-blue-100 text-blue-600 font-bold hover:bg-blue-200 transition-all hidden sm:block"
          >🚂 Слоги</button>
          <button
            onClick={() => navigate("/kreml")}
            className="text-xs px-2 py-1 rounded-lg bg-red-100 text-red-600 font-bold hover:bg-red-200 transition-all hidden sm:block"
          >🏰 Кремль</button>
          <span className="font-bold text-orange-600 text-lg">✖️ Умножение на 3</span>
        </div>
        <div className="flex gap-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => { setTab(t.id as "slides" | "cards" | "board"); setCurrent(0); }}
              className={`flex items-center gap-1 px-3 py-1 rounded-xl text-sm font-bold transition-all duration-200 ${
                tab === t.id
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-orange-100 text-orange-700 hover:bg-orange-200"
              }`}
            >
              <span>{t.emoji}</span>
              <span className="hidden md:block">{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-6">

        {/* СЛАЙДЫ */}
        {tab === "slides" && (
          <div className="w-full max-w-5xl">
            <div className="text-center mb-3">
              <span className="text-sm text-gray-400 font-bold">{current + 1} / {SLIDES.length}</span>
              <div className="text-2xl font-bold text-orange-700">{SLIDES[current].title}</div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={SLIDES[current].url}
                alt={SLIDES[current].title}
                className="w-full object-contain max-h-[68vh]"
              />
            </div>

            {/* Навигация по точкам */}
            <div className="flex justify-center gap-1 mt-3 flex-wrap">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-orange-500 scale-125" : "bg-orange-200 hover:bg-orange-300"}`}
                />
              ))}
            </div>

            <div className="flex justify-between mt-3 gap-3">
              <button
                onClick={() => goTo(current - 1)}
                disabled={current === 0}
                className="flex-1 py-3 rounded-2xl bg-white border-2 border-orange-300 text-orange-700 font-bold text-lg hover:bg-orange-50 disabled:opacity-30 transition-all"
              >← Назад</button>
              <a
                href={SLIDES[current].url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-2xl bg-white border-2 border-gray-200 text-gray-500 font-bold text-sm hover:bg-gray-50 transition-all text-center"
              >🔍 Крупнее</a>
              <button
                onClick={() => goTo(current + 1)}
                disabled={current === SLIDES.length - 1}
                className="flex-1 py-3 rounded-2xl bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 disabled:opacity-30 transition-all"
              >Вперёд →</button>
            </div>
          </div>
        )}

        {/* КАРТОЧКИ */}
        {tab === "cards" && (
          <div className="w-full max-w-5xl">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-orange-700 mb-1">🖨️ Раздаточный материал</div>
              <div className="text-lg text-orange-400">Нажми на карточку — откроется для печати</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {CARDS.map((c, i) => (
                <a
                  key={i}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block rounded-2xl overflow-hidden border-4 ${c.color} shadow-lg hover:scale-105 transition-all duration-200 cursor-zoom-in bg-white`}
                >
                  <img src={c.url} alt={c.label} className="w-full aspect-[3/4] object-cover" />
                  <div className="p-2 text-center">
                    <div className="font-bold text-sm text-gray-800">{c.label}</div>
                    <div className="text-xs text-gray-500">{c.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* ДЛЯ ДОСКИ */}
        {tab === "board" && (
          <div className="w-full max-w-5xl">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-teal-700 mb-1">📋 Наглядный материал для доски</div>
              <div className="text-lg text-teal-400">Распечатай и прикрепи на магнитах</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {BOARD.map((b, i) => (
                <a
                  key={i}
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block rounded-2xl overflow-hidden border-4 ${b.color} shadow-lg hover:scale-105 transition-all duration-200 cursor-zoom-in bg-white`}
                >
                  <img src={b.url} alt={b.label} className="w-full aspect-video object-cover" />
                  <div className="p-3 text-center">
                    <div className="font-bold text-gray-800">{b.label}</div>
                    <div className="text-sm text-gray-500">{b.sub}</div>
                  </div>
                </a>
              ))}
            </div>
            <div className="bg-orange-50 rounded-2xl p-5 border-2 border-orange-200">
              <div className="text-orange-700 font-bold text-lg mb-3">📌 Как использовать:</div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>🚂 <strong>Весёлый поезд</strong> — соединить вагоны-примеры со станциями-ответами стрелками</li>
                <li>📊 <strong>Таблица на доску</strong> — повесить над доской на весь урок</li>
                <li>👏 <strong>Захлопни число</strong> — раздать каждому карточку, хлопают если у них ответ</li>
                <li>🟢 <strong>Лесенка успеха</strong> — раздать в конце урока, дети выбирают нужный смайлик</li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
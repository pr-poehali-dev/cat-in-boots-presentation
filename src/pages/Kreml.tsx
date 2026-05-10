import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SLIDES = [
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/3d6e3d16-9b8f-4beb-b61a-a8624470bede.jpg", title: "Московский Кремль" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/a91e3004-b57f-4b59-a6d2-93ff691cbf71.jpg", title: "Разминка — Что я знаю о Москве?" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/114bb084-5096-4587-ad67-68ce29937e38.jpg", title: "Цель урока" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/c2dfb038-d8fe-48fb-b057-f6ff5097f65f.jpg", title: "Что такое Кремль?" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/f11162c1-65f8-4818-af4c-8700b160fce2.jpg", title: "История Кремля" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/d1f82234-8d72-47d9-96d4-07b9a402c38d.jpg", title: "Башни Кремля" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/30d1b1e2-252f-4881-80fa-a26718d3f425.jpg", title: "Физминутка" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/17798113-1e8e-4775-ba75-d4fd5b5e8d2e.jpg", title: "Что ещё есть в Кремле?" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/d203865a-6a51-4b62-9ad4-94e83516aaea.jpg", title: "Кто работает в Кремле?" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/db9c5e95-b607-48bf-9e7e-260eb2d7e3ed.jpg", title: "Интересные факты" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/3b3d5e3b-c0dc-4381-b8d1-02bc41ffaa9e.jpg", title: "Что ты запомнил?" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/721babcb-608c-4a40-8384-dba10d87f664.jpg", title: "Рефлексия — Солнышко" },
];

const CARDS = [
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/40f89a3f-f6a0-42f5-97ef-be54c3ab45d8.jpg", label: "Карточка №1", sub: "Собери башню — соедини стрелками", color: "border-red-400" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/e85b64ee-27b6-433f-b305-dfa96101df27.jpg", label: "Карточка №2", sub: "Что это? — узнай по описанию", color: "border-orange-400" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/09313b0c-7b87-469f-bddd-58726632519a.jpg", label: "Карточка №3", sub: "История Кремля — правильная последовательность", color: "border-amber-400" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/5dbbfc4d-af05-4402-928f-47427488ebbf.jpg", label: "Карточка №4", sub: "Верю — не верю", color: "border-blue-400" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/4ed3c93d-9b8d-43fd-ae97-e8f07ee3f5a9.jpg", label: "Карточка №5", sub: "Раскрась Кремль", color: "border-pink-400" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/2351ca14-c930-4f15-8f77-c8da03706012.jpg", label: "Карточка №6", sub: "Кроссворд — для сильных учеников", color: "border-purple-400" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/207e5ca3-4fdf-4dc3-9bbd-cf41aa81c7d7.jpg", label: "Памятка", sub: "Вклеить в тетрадь", color: "border-green-400" },
];

const BOARD = [
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/91c605a7-3476-4b94-83a3-8c16977d9689.jpg", label: "Спасская башня", sub: "Плакат крупным планом с подписями", color: "border-red-400" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/52bb1ddd-3de6-4c8b-8aa8-64c7477df733.jpg", label: "Карточки с терминами", sub: "На магниты: Кремль, Куранты, Царь-пушка...", color: "border-amber-400" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/120239ad-76a0-4885-a919-0234aa19f469.jpg", label: "Лента времени", sub: "От деревянного до краснокирпичного", color: "border-blue-400" },
  { url: "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/c0fc4f94-2612-4968-8524-49e7bd132126.jpg", label: "Солнышки рефлексии", sub: "Раздать детям в конце урока", color: "border-yellow-400" },
];

const STORY = `Московский Кремль — это как сердце нашей России. Он стоит в центре Москвы на берегу реки.

Представляете, сначала Кремль был деревянным. А потом его построили из белого камня — тогда Москву называли Белокаменной. А сейчас Кремль — красный, из кирпича.

У Кремля 20 башен. Самая красивая — Спасская башня. На ней висят главные часы страны — КУРАНТЫ. Каждый час они бьют, и их слышно по всей Москве.

Внутри Кремля есть Царь-пушка и Царь-колокол. Они самые большие в мире, но никогда не использовались. А ещё там работает наш Президент.`;

const GAME = [
  { desc: "Красная, высокая, на ней часы", answer: "Спасская башня" },
  { desc: "Огромная, стоит во дворе, не стреляла", answer: "Царь-пушка" },
  { desc: "Огромный, разбитый, лежит на земле", answer: "Царь-колокол" },
  { desc: "Там работает президент", answer: "Здание Сената в Кремле" },
];

const tabs = [
  { id: "slides", label: "Слайды", emoji: "📊" },
  { id: "cards", label: "Карточки", emoji: "🖨️" },
  { id: "board", label: "Для доски", emoji: "📋" },
  { id: "bonus", label: "Бонус", emoji: "⭐" },
];

export default function Kreml() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"slides" | "cards" | "board" | "bonus">("slides");
  const [current, setCurrent] = useState(0);
  const [revealed, setRevealed] = useState<number[]>([]);

  const goTo = (idx: number) => {
    if (idx >= 0 && idx < SLIDES.length) setCurrent(idx);
  };

  const toggleReveal = (i: number) => {
    setRevealed((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-amber-50 to-yellow-50 flex flex-col" style={{ fontFamily: "'Nunito', sans-serif" }}>
      {/* TOP NAV */}
      <div className="flex items-center justify-between px-4 py-2 bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate("/")} className="text-xs px-2 py-1 rounded-lg bg-purple-100 text-purple-600 font-bold hover:bg-purple-200 transition-all hidden sm:block">← Перро</button>
          <button onClick={() => navigate("/slog")} className="text-xs px-2 py-1 rounded-lg bg-blue-100 text-blue-600 font-bold hover:bg-blue-200 transition-all hidden sm:block">🚂 Слоги</button>
          <button onClick={() => navigate("/mnozh")} className="text-xs px-2 py-1 rounded-lg bg-orange-100 text-orange-600 font-bold hover:bg-orange-200 transition-all hidden sm:block">✖️ Умножение</button>
          <span className="font-bold text-red-700 text-lg">🏰 Кремль</span>
        </div>
        <div className="flex gap-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => { setTab(t.id as "slides" | "cards" | "board" | "bonus"); setCurrent(0); }}
              className={`flex items-center gap-1 px-3 py-1 rounded-xl text-sm font-bold transition-all duration-200 ${
                tab === t.id
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-red-100 text-red-700 hover:bg-red-200"
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
              <div className="text-2xl font-bold text-red-700">{SLIDES[current].title}</div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img src={SLIDES[current].url} alt={SLIDES[current].title} className="w-full object-contain max-h-[68vh]" />
            </div>
            <div className="flex justify-center gap-1 mt-3 flex-wrap">
              {SLIDES.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-red-600 scale-125" : "bg-red-200 hover:bg-red-300"}`} />
              ))}
            </div>
            <div className="flex justify-between mt-3 gap-3">
              <button onClick={() => goTo(current - 1)} disabled={current === 0}
                className="flex-1 py-3 rounded-2xl bg-white border-2 border-red-300 text-red-700 font-bold text-lg hover:bg-red-50 disabled:opacity-30 transition-all">
                ← Назад
              </button>
              <a href={SLIDES[current].url} target="_blank" rel="noopener noreferrer"
                className="px-5 py-3 rounded-2xl bg-white border-2 border-gray-200 text-gray-500 font-bold text-sm hover:bg-gray-50 transition-all text-center">
                🔍 Крупнее
              </a>
              <button onClick={() => goTo(current + 1)} disabled={current === SLIDES.length - 1}
                className="flex-1 py-3 rounded-2xl bg-red-600 text-white font-bold text-lg hover:bg-red-700 disabled:opacity-30 transition-all">
                Вперёд →
              </button>
            </div>
          </div>
        )}

        {/* КАРТОЧКИ */}
        {tab === "cards" && (
          <div className="w-full max-w-5xl">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-red-700 mb-1">🖨️ Раздаточный материал</div>
              <div className="text-lg text-red-400">Нажми на карточку — откроется для печати</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {CARDS.map((c, i) => (
                <a key={i} href={c.url} target="_blank" rel="noopener noreferrer"
                  className={`block rounded-2xl overflow-hidden border-4 ${c.color} shadow-lg hover:scale-105 transition-all duration-200 cursor-zoom-in bg-white`}>
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
              <div className="text-4xl font-bold text-amber-700 mb-1">📋 Наглядный материал для доски</div>
              <div className="text-lg text-amber-400">Распечатай и прикрепи на магнитах</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {BOARD.map((b, i) => (
                <a key={i} href={b.url} target="_blank" rel="noopener noreferrer"
                  className={`block rounded-2xl overflow-hidden border-4 ${b.color} shadow-lg hover:scale-105 transition-all duration-200 cursor-zoom-in bg-white`}>
                  <img src={b.url} alt={b.label} className="w-full aspect-video object-cover" />
                  <div className="p-3 text-center">
                    <div className="font-bold text-gray-800">{b.label}</div>
                    <div className="text-sm text-gray-500">{b.sub}</div>
                  </div>
                </a>
              ))}
            </div>
            <div className="bg-red-50 rounded-2xl p-5 border-2 border-red-200">
              <div className="text-red-700 font-bold text-lg mb-3">📌 Как использовать:</div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>🏰 <strong>Спасская башня</strong> — повесить на доску как основной плакат урока</li>
                <li>🏷️ <strong>Карточки с терминами</strong> — прикрепить на магнитах, снимать по мере изучения</li>
                <li>📜 <strong>Лента времени</strong> — прикрепить под доской горизонтально</li>
                <li>☀️ <strong>Солнышки</strong> — раздать каждому в конце урока для рефлексии</li>
              </ul>
            </div>
          </div>
        )}

        {/* БОНУС */}
        {tab === "bonus" && (
          <div className="w-full max-w-3xl space-y-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-700 mb-1">⭐ Дополнительный материал</div>
            </div>

            {/* Рассказ */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-amber-200 p-6">
              <div className="text-xl font-bold text-amber-700 mb-3">📖 Краткий рассказ о Кремле</div>
              <div className="text-sm text-gray-500 mb-3 italic">Для учителя — читать вслух детям</div>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line text-base">{STORY}</div>
            </div>

            {/* Игра */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-red-200 p-6">
              <div className="text-xl font-bold text-red-700 mb-1">🎮 Игра «Угадай по описанию»</div>
              <div className="text-sm text-gray-500 mb-4 italic">Нажми на карточку — узнай ответ!</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {GAME.map((g, i) => (
                  <button key={i} onClick={() => toggleReveal(i)}
                    className={`rounded-2xl p-4 text-left border-2 transition-all duration-300 ${
                      revealed.includes(i)
                        ? "border-green-400 bg-green-50"
                        : "border-red-200 bg-red-50 hover:bg-red-100"
                    }`}>
                    <div className="font-bold text-gray-700 text-sm mb-2">🔍 {g.desc}</div>
                    {revealed.includes(i) ? (
                      <div className="text-green-700 font-bold">✅ {g.answer}</div>
                    ) : (
                      <div className="text-red-400 text-sm">Нажми, чтобы узнать ответ</div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Диктант */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-6">
              <div className="text-xl font-bold text-purple-700 mb-3">✏️ Карточки с терминами (для доски)</div>
              <div className="flex flex-wrap gap-2">
                {["КРЕМЛЬ", "КРАСНАЯ ПЛОЩАДЬ", "КУРАНТЫ", "ЦАРЬ-ПУШКА", "ЦАРЬ-КОЛОКОЛ", "ПРЕЗИДЕНТ"].map((term) => (
                  <span key={term} className="px-4 py-2 bg-purple-100 text-purple-800 font-bold rounded-xl border-2 border-purple-300 text-sm">
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

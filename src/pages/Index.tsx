import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const PERRAULT_IMG = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/852d77de-d4b7-435f-955f-76a80770431f.jpg";
const CAT_IMG = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/bc87269d-549d-4680-b8fa-84749657be84.jpg";
const HEROES_IMG = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/9da95b0f-5d49-415c-a4d0-294b6e7c502a.jpg";

const CARD1_IMG = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/f0a4b2e6-e28d-4a23-b53c-837de68efc69.jpg";
const CARD2_IMG = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/0c4c55fe-5a6b-4e64-a9b2-2f60b8060a66.jpg";
const CARD3_IMG = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/e0701678-5fb6-4bb1-a58b-1121a031d6d2.jpg";
const CARD4_IMG = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/9afe3913-1423-4e48-8358-0fe54eb71b14.jpg";
const WORDCLOUD_IMG = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/552067f3-8b91-4626-b9ee-0ce6e58015da.jpg";
const CLUSTER_IMG = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/d30694a0-5cef-47cb-a60f-7b04b4ea316f.jpg";
const SMILEYS_IMG = "https://cdn.poehali.dev/projects/db172e21-3e91-45b3-81c4-364d7b91b252/files/adeb267f-24e1-4cac-b20e-581fcbc21a3e.jpg";

const slides = [
  { id: 0, label: "Титул", emoji: "📖" },
  { id: 1, label: "Разминка", emoji: "🗣️" },
  { id: 2, label: "Цели", emoji: "🎯" },
  { id: 3, label: "Викторина", emoji: "❓" },
  { id: 4, label: "Характеры", emoji: "🎭" },
  { id: 5, label: "Физминутка", emoji: "🐾" },
  { id: 6, label: "Пересказ", emoji: "📝" },
  { id: 7, label: "Пословица", emoji: "💡" },
  { id: 8, label: "Рефлексия", emoji: "🌈" },
  { id: 9, label: "Материалы", emoji: "🖨️" },
];

const quizQuestions = [
  { text: "Кот в Сапогах умеет говорить по-человечески", answer: true },
  { text: "Маркиз де Карабас — настоящее имя хозяина кота", answer: false },
  { text: "Великан умел превращаться в разных животных", answer: true },
  { text: "Кот попросил хозяина купить ему шляпу", answer: false },
  { text: "В конце сказки хозяин кота стал королём", answer: false },
  { text: "Кот перехитрил великана, попросив его стать мышью", answer: true },
];

const heroTraits = [
  { hero: "🐱 Кот в Сапогах", traits: ["Хитрый", "Находчивый", "Верный", "Смелый"], color: "#FF6B6B" },
  { hero: "👨 Хозяин кота", traits: ["Простодушный", "Доверчивый", "Добрый", "Удачливый"], color: "#4ECDC4" },
  { hero: "👑 Король", traits: ["Гордый", "Доверчивый", "Весёлый", "Щедрый"], color: "#F59E0B" },
  { hero: "👹 Великан", traits: ["Злой", "Хвастливый", "Самоуверенный", "Глупый"], color: "#A855F7" },
];

const planItems = [
  { num: "1", text: "Как кот достался младшему сыну", emoji: "🎁" },
  { num: "2", text: "Первые хитрости кота", emoji: "🐇" },
  { num: "3", text: "Кот и Король на реке", emoji: "🌊" },
  { num: "4", text: "Замок великана", emoji: "🏰" },
  { num: "5", text: "Победа над великаном", emoji: "🐭" },
  { num: "6", text: "Счастливая свадьба", emoji: "💒" },
];

const proverbs = [
  { text: "Ловкость и ум — лучшее богатство", emoji: "🧠" },
  { text: "Без труда не вытащишь рыбку из пруда", emoji: "🎣" },
  { text: "Умный не тот, кто много знает, а кто знает нужное", emoji: "📚" },
  { text: "Смелость города берёт", emoji: "⚔️" },
];

const reflectionSmileys = [
  { emoji: "😄", label: "Всё понял! Было весело!", color: "#22c55e" },
  { emoji: "🙂", label: "Понял, но есть вопросы", color: "#3b82f6" },
  { emoji: "😐", label: "Нужно повторить", color: "#f59e0b" },
  { emoji: "😕", label: "Было сложно", color: "#ef4444" },
];

const physSteps = [
  { emoji: "🐾", text: "Встаньте ровно как Кот!" },
  { emoji: "👢", text: "Топните сапогами — раз, два, три!" },
  { emoji: "🎩", text: "Поклонитесь как настоящий маркиз!" },
  { emoji: "🐭", text: "Сожмитесь в маленькую мышку!" },
  { emoji: "🦁", text: "Вырастите в огромного льва! Р-р-р!" },
  { emoji: "🐱", text: "Умойтесь лапкой как довольный кот!" },
];

export default function Index() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, boolean | null>>({});
  const [selectedProverb, setSelectedProverb] = useState<number | null>(null);
  const [selectedSmiley, setSelectedSmiley] = useState<number | null>(null);
  const [physStep, setPhysStep] = useState(0);

  const goTo = (idx: number) => {
    if (idx >= 0 && idx < slides.length) setCurrent(idx);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100 font-nunito flex flex-col">
      {/* TOP NAV */}
      <div className="flex items-center justify-between px-4 py-2 bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="font-pacifico text-purple-600 text-lg hidden sm:block">🧙 Перро</div>
          <button
            onClick={() => navigate("/slog")}
            className="hidden sm:block text-xs px-2 py-1 rounded-lg bg-blue-100 text-blue-600 font-bold hover:bg-blue-200 transition-all"
          >🚂 Слоги</button>
        </div>
        <div className="flex gap-1 overflow-x-auto max-w-full">
          {slides.map((s) => (
            <button
              key={s.id}
              onClick={() => goTo(s.id)}
              className={`flex flex-col items-center px-2 py-1 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                current === s.id
                  ? "bg-purple-600 text-white scale-105 shadow-lg"
                  : "bg-purple-100 text-purple-700 hover:bg-purple-200"
              }`}
            >
              <span>{s.emoji}</span>
              <span className="hidden md:block">{s.label}</span>
            </button>
          ))}
        </div>
        <div className="font-caveat text-purple-500 text-lg font-bold ml-2">{current + 1}/{slides.length}</div>
      </div>

      {/* SLIDES */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-6">

        {/* SLIDE 0: TITLE */}
        {current === 0 && (
          <div className="w-full max-w-4xl">
            <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-3xl p-8 text-white shadow-2xl text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "40px 40px"}} />
              <div className="relative z-10">
                <div className="font-pacifico text-5xl md:text-7xl mb-4 drop-shadow-lg">Кот в Сапогах</div>
                <div className="font-caveat text-2xl md:text-3xl mb-8 opacity-90">Сказка Шарля Перро</div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl">
                      <img src={PERRAULT_IMG} alt="Шарль Перро" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-black rounded-full px-3 py-1 font-bold text-sm shadow-lg">
                      Шарль Перро
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 text-left">
                    <div className="bg-white/20 backdrop-blur rounded-2xl px-5 py-3 font-bold text-lg">📅 1628 – 1703</div>
                    <div className="bg-white/20 backdrop-blur rounded-2xl px-5 py-3 font-bold text-lg">🇫🇷 Французский писатель</div>
                    <div className="bg-white/20 backdrop-blur rounded-2xl px-5 py-3 font-bold text-lg">✨ Автор 11 сказок</div>
                    <div className="bg-white/20 backdrop-blur rounded-2xl px-5 py-3 font-bold text-lg">📚 «Сказки моей матушки Гусыни»</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 1: РЕЧЕВАЯ РАЗМИНКА */}
        {current === 1 && (
          <div className="w-full max-w-4xl">
            <div className="text-center mb-6">
              <div className="font-pacifico text-4xl text-purple-700 mb-2">🗣️ Речевая разминка</div>
              <div className="font-caveat text-xl text-pink-600">Скороговорки — читай быстро и чётко!</div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { text: "Кот котёнка кормит кашкой,\nкотик ест её с ложкой!", color: "from-pink-400 to-red-400", speed: "⚡" },
                { text: "Шарль шарил шарфом,\nшаря по шкафу шутя!", color: "from-orange-400 to-yellow-400", speed: "⚡⚡" },
                { text: "Сапоги да перчатки —\nзагадки без отгадки!", color: "from-green-400 to-teal-400", speed: "⚡⚡⚡" },
                { text: "Маркиз марширует,\nмышей не боится,\nмельница мелет —\nмука не кончается!", color: "from-purple-400 to-pink-400", speed: "🔥" },
              ].map((item, i) => (
                <div key={i} className={`bg-gradient-to-br ${item.color} rounded-2xl p-5 text-white shadow-xl`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm bg-white/30 rounded-full px-3 py-1">Скороговорка {i + 1}</span>
                    <span className="text-xl">{item.speed}</span>
                  </div>
                  <div className="font-caveat text-2xl leading-relaxed whitespace-pre-line">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE 2: ЦЕЛИ УРОКА */}
        {current === 2 && (
          <div className="w-full max-w-3xl">
            <div className="text-center mb-6">
              <div className="font-pacifico text-4xl text-orange-600 mb-2">🎯 Цели урока</div>
              <div className="font-caveat text-xl text-orange-400">Сегодня мы научимся...</div>
            </div>
            <div className="grid gap-4">
              {[
                { emoji: "📖", text: "Познакомиться с жизнью Шарля Перро", color: "from-blue-400 to-blue-600" },
                { emoji: "❤️", text: "Понять характеры главных героев сказки", color: "from-pink-400 to-rose-500" },
                { emoji: "💬", text: "Научиться пересказывать сказку по плану", color: "from-green-400 to-emerald-500" },
                { emoji: "⭐", text: "Определить главную идею и мораль", color: "from-yellow-400 to-orange-400" },
                { emoji: "😊", text: "Получить удовольствие от урока!", color: "from-purple-400 to-pink-500" },
              ].map((goal, i) => (
                <div key={i} className={`bg-gradient-to-r ${goal.color} rounded-2xl px-6 py-4 text-white shadow-lg flex items-center gap-4`}>
                  <span className="text-4xl">{goal.emoji}</span>
                  <span className="font-nunito font-bold text-lg">{goal.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE 3: ВИКТОРИНА */}
        {current === 3 && (
          <div className="w-full max-w-3xl">
            <div className="text-center mb-6">
              <div className="font-pacifico text-4xl text-green-600 mb-2">❓ Верю — Не верю!</div>
              <div className="font-caveat text-xl text-green-500">Нажми на правильный ответ</div>
            </div>
            <div className="grid gap-3">
              {quizQuestions.map((q, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 shadow-lg border-2 border-purple-100">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="bg-purple-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                    <span className="font-nunito font-semibold text-gray-800">{q.text}</span>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setQuizAnswers({ ...quizAnswers, [i]: true })}
                      className={`flex-1 py-2 rounded-xl font-bold text-sm transition-all ${
                        quizAnswers[i] === true
                          ? q.answer ? "bg-green-500 text-white scale-105 shadow-md" : "bg-red-500 text-white"
                          : "bg-green-100 text-green-700 hover:bg-green-200"
                      }`}
                    >
                      ✅ Верю
                    </button>
                    <button
                      onClick={() => setQuizAnswers({ ...quizAnswers, [i]: false })}
                      className={`flex-1 py-2 rounded-xl font-bold text-sm transition-all ${
                        quizAnswers[i] === false
                          ? !q.answer ? "bg-green-500 text-white scale-105 shadow-md" : "bg-red-500 text-white"
                          : "bg-red-100 text-red-700 hover:bg-red-200"
                      }`}
                    >
                      ❌ Не верю
                    </button>
                    {quizAnswers[i] !== undefined && (
                      <div className={`flex items-center px-3 rounded-xl font-bold text-sm ${
                        (quizAnswers[i] === q.answer) ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      }`}>
                        {quizAnswers[i] === q.answer ? "🎉" : "💭"}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <button onClick={() => setQuizAnswers({})} className="bg-purple-600 text-white font-bold py-2 px-6 rounded-xl hover:bg-purple-700 transition-all">
                🔄 Начать заново
              </button>
            </div>
          </div>
        )}

        {/* SLIDE 4: ТАБЛИЦА ХАРАКТЕРОВ */}
        {current === 4 && (
          <div className="w-full max-w-4xl">
            <div className="text-center mb-6">
              <div className="font-pacifico text-4xl text-pink-600 mb-2">🎭 Характеры героев</div>
              <div className="font-caveat text-xl text-pink-400">Кто есть кто в нашей сказке?</div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="w-full md:w-1/2">
                <img src={HEROES_IMG} alt="Герои сказки" className="w-full rounded-2xl shadow-xl" />
              </div>
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-3">
                {heroTraits.map((hero, i) => (
                  <div key={i} className="rounded-2xl p-4 shadow-lg" style={{ backgroundColor: hero.color + "20", border: `2px solid ${hero.color}` }}>
                    <div className="font-bold text-base mb-2" style={{ color: hero.color }}>{hero.hero}</div>
                    <div className="flex flex-wrap gap-1">
                      {hero.traits.map((t, j) => (
                        <span key={j} className="text-xs font-semibold px-2 py-1 rounded-full text-white" style={{ backgroundColor: hero.color }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 5: ФИЗМИНУТКА */}
        {current === 5 && (
          <div className="w-full max-w-3xl">
            <div className="text-center mb-6">
              <div className="font-pacifico text-4xl text-teal-600 mb-2">🐾 Физминутка</div>
              <div className="font-caveat text-xl text-teal-500">Двигаемся как Кот в Сапогах!</div>
            </div>
            <div className="flex justify-between mb-4 gap-2">
              {physSteps.map((_, i) => (
                <div key={i} className={`h-2 flex-1 rounded-full transition-all duration-500 ${i <= physStep ? "bg-teal-500" : "bg-gray-200"}`} />
              ))}
            </div>
            <div className="bg-gradient-to-br from-teal-400 to-emerald-500 rounded-3xl p-10 text-white text-center shadow-2xl">
              <div className="text-8xl mb-6">{physSteps[physStep].emoji}</div>
              <div className="font-pacifico text-3xl mb-4">{physSteps[physStep].text}</div>
              <div className="font-caveat text-xl opacity-80">Шаг {physStep + 1} из {physSteps.length}</div>
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              <button
                onClick={() => setPhysStep(Math.max(0, physStep - 1))}
                disabled={physStep === 0}
                className="bg-teal-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-teal-700 disabled:opacity-40 transition-all flex items-center gap-2"
              >
                <Icon name="ChevronLeft" size={20} /> Назад
              </button>
              <button
                onClick={() => { if (physStep < physSteps.length - 1) setPhysStep(physStep + 1); else setPhysStep(0); }}
                className="bg-teal-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-teal-700 transition-all flex items-center gap-2"
              >
                {physStep < physSteps.length - 1 ? <><Icon name="ChevronRight" size={20} /> Вперёд!</> : <>🔄 Снова!</>}
              </button>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <img src={CAT_IMG} alt="Кот в Сапогах" className="w-24 h-24 object-cover rounded-full border-4 border-teal-400 shadow-lg" />
              <div className="font-caveat text-2xl text-teal-700 font-bold">"Ну что, ты готов как настоящий кот? 😸"</div>
            </div>
          </div>
        )}

        {/* SLIDE 6: ПЛАН ПЕРЕСКАЗА */}
        {current === 6 && (
          <div className="w-full max-w-3xl">
            <div className="text-center mb-6">
              <div className="font-pacifico text-4xl text-blue-600 mb-2">📝 План пересказа</div>
              <div className="font-caveat text-xl text-blue-400">Расскажи сказку по порядку!</div>
            </div>
            <div className="grid gap-3">
              {planItems.map((item, i) => (
                <div key={i} className="flex items-center gap-4 rounded-2xl p-4 shadow-md border-l-4 bg-white"
                  style={{ borderLeftColor: `hsl(${220 + i * 20}, 70%, 60%)` }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-pacifico text-xl text-white shadow-md"
                    style={{ backgroundColor: `hsl(${220 + i * 20}, 70%, 60%)` }}>
                    {item.num}
                  </div>
                  <span className="text-3xl">{item.emoji}</span>
                  <span className="font-nunito font-bold text-gray-800 text-lg">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-blue-50 rounded-2xl p-4 border-2 border-blue-200 text-center">
              <div className="font-caveat text-xl text-blue-600">💡 Используй слова: <strong>сначала, потом, затем, наконец</strong></div>
            </div>
          </div>
        )}

        {/* SLIDE 7: ГЛАВНАЯ ИДЕЯ */}
        {current === 7 && (
          <div className="w-full max-w-3xl">
            <div className="text-center mb-6">
              <div className="font-pacifico text-4xl text-orange-600 mb-2">💡 Главная идея</div>
              <div className="font-caveat text-xl text-orange-400">Выбери пословицу, которая подходит к сказке!</div>
            </div>
            <div className="grid gap-4">
              {proverbs.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedProverb(i)}
                  className={`rounded-2xl p-5 text-left shadow-lg transition-all duration-300 flex items-center gap-4 border-2 ${
                    selectedProverb === i
                      ? "border-orange-500 bg-orange-50 shadow-xl"
                      : "border-transparent bg-white hover:border-orange-300 hover:bg-orange-50"
                  }`}
                >
                  <span className="text-4xl">{p.emoji}</span>
                  <span className={`font-nunito font-bold text-lg ${selectedProverb === i ? "text-orange-700" : "text-gray-700"}`}>
                    {p.text}
                  </span>
                  {selectedProverb === i && <span className="ml-auto text-3xl">✅</span>}
                </button>
              ))}
            </div>
            {selectedProverb !== null && (
              <div className="mt-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl p-5 text-white text-center shadow-lg">
                <div className="font-pacifico text-2xl mb-2">Отлично! 🎉</div>
                <div className="font-caveat text-xl">Расскажи классу, почему ты выбрал эту пословицу!</div>
              </div>
            )}
          </div>
        )}

        {/* SLIDE 9: РАЗДАТОЧНЫЙ И НАГЛЯДНЫЙ МАТЕРИАЛ */}
        {current === 9 && (
          <div className="w-full max-w-5xl">
            <div className="text-center mb-6">
              <div className="font-pacifico text-4xl text-indigo-700 mb-2">🖨️ Раздаточный материал</div>
              <div className="font-caveat text-xl text-indigo-400">Карточки на парты и наглядность для доски</div>
            </div>

            <div className="mb-6">
              <div className="font-pacifico text-2xl text-purple-600 mb-3">📋 Карточки на парты</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { img: CARD1_IMG, label: "Карточка №1", sub: "Цепочка событий", color: "border-pink-400" },
                  { img: CARD2_IMG, label: "Карточка №2", sub: "Характер героя", color: "border-orange-400" },
                  { img: CARD3_IMG, label: "Карточка №3", sub: "Верю — не верю", color: "border-green-400" },
                  { img: CARD4_IMG, label: "Карточка №4", sub: "Имена героев", color: "border-purple-400" },
                ].map((card, i) => (
                  <a key={i} href={card.img} target="_blank" rel="noopener noreferrer"
                    className={`block rounded-2xl overflow-hidden border-4 ${card.color} shadow-lg hover:scale-105 transition-all duration-200 cursor-zoom-in`}>
                    <img src={card.img} alt={card.label} className="w-full aspect-[3/4] object-cover" />
                    <div className="bg-white p-2 text-center">
                      <div className="font-bold text-sm text-gray-800">{card.label}</div>
                      <div className="font-caveat text-sm text-gray-500">{card.sub}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="font-pacifico text-2xl text-indigo-600 mb-3">🖼️ Наглядность для доски</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { img: WORDCLOUD_IMG, label: "Облако слов", sub: "Ключевые слова урока", color: "border-blue-400" },
                  { img: CLUSTER_IMG, label: "Кластер", sub: "Схема про Кота", color: "border-teal-400" },
                  { img: SMILEYS_IMG, label: "Смайлики", sub: "Рефлексия — вырежьте", color: "border-yellow-400" },
                ].map((item, i) => (
                  <a key={i} href={item.img} target="_blank" rel="noopener noreferrer"
                    className={`block rounded-2xl overflow-hidden border-4 ${item.color} shadow-lg hover:scale-105 transition-all duration-200 cursor-zoom-in`}>
                    <img src={item.img} alt={item.label} className="w-full aspect-video object-cover" />
                    <div className="bg-white p-2 text-center">
                      <div className="font-bold text-sm text-gray-800">{item.label}</div>
                      <div className="font-caveat text-sm text-gray-500">{item.sub}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-4 bg-indigo-50 rounded-2xl p-4 border-2 border-indigo-200 text-center">
              <div className="font-caveat text-lg text-indigo-600">🖨️ Нажми на карточку, чтобы открыть в полном размере и распечатать</div>
            </div>
          </div>
        )}

        {/* SLIDE 8: РЕФЛЕКСИЯ */}
        {current === 8 && (
          <div className="w-full max-w-3xl">
            <div className="text-center mb-6">
              <div className="font-pacifico text-4xl text-purple-700 mb-2">🌈 Рефлексия</div>
              <div className="font-caveat text-xl text-purple-400">Как прошёл урок? Выбери своего смайлика!</div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {reflectionSmileys.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedSmiley(i)}
                  className="rounded-3xl p-6 text-center shadow-lg transition-all duration-300 border-2 hover:scale-105"
                  style={{
                    backgroundColor: s.color + (selectedSmiley === i ? "25" : "15"),
                    borderColor: selectedSmiley === i ? s.color : "transparent",
                    transform: selectedSmiley === i ? "scale(1.05)" : undefined,
                  }}
                >
                  <div className="text-7xl mb-3">{s.emoji}</div>
                  <div className="font-caveat text-lg font-bold" style={{ color: s.color }}>{s.label}</div>
                </button>
              ))}
            </div>
            {selectedSmiley !== null && (
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 text-white shadow-2xl">
                  <div className="text-6xl mb-3">{reflectionSmileys[selectedSmiley].emoji}</div>
                  <div className="font-pacifico text-2xl mb-2">Спасибо за урок!</div>
                  <div className="font-caveat text-xl">Ты молодец! До следующего приключения! 🐾✨</div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* BOTTOM NAV */}
      <div className="sticky bottom-0 flex items-center justify-between px-6 py-3 bg-white/90 backdrop-blur-sm shadow-[0_-2px_16px_rgba(0,0,0,0.08)]">
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          className="flex items-center gap-2 bg-purple-600 text-white font-bold py-2 px-5 rounded-xl hover:bg-purple-700 disabled:opacity-40 transition-all shadow-md"
        >
          <Icon name="ChevronLeft" size={20} /> Назад
        </button>
        <div className="flex gap-1">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-3 rounded-full transition-all duration-300 ${i === current ? "bg-purple-600 w-6" : "w-3 bg-purple-200 hover:bg-purple-400"}`}
            />
          ))}
        </div>
        <button
          onClick={() => goTo(current + 1)}
          disabled={current === slides.length - 1}
          className="flex items-center gap-2 bg-purple-600 text-white font-bold py-2 px-5 rounded-xl hover:bg-purple-700 disabled:opacity-40 transition-all shadow-md"
        >
          Вперёд <Icon name="ChevronRight" size={20} />
        </button>
      </div>
    </div>
  );
}
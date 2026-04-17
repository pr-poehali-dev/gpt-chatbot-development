const EXAMPLES = [
  {
    tag: "Текст",
    title: "Генерация контента",
    desc: "Автоматическое создание описаний товаров, статей и постов для соцсетей на основе кратких тезисов.",
    metric: "×12 быстрее",
    details: "Интернет-магазин из 500+ позиций автоматизировал написание карточек товаров. Время на контент сократилось с 2 недель до 1 дня.",
  },
  {
    tag: "Данные",
    title: "Анализ отзывов",
    desc: "Классификация тональности тысяч отзывов клиентов и выявление ключевых проблем продукта.",
    metric: "98% точность",
    details: "Крупный ритейлер анализирует 50 000 отзывов в день. Команда поддержки видит только критичные проблемы — остальное автоматически.",
  },
  {
    tag: "Поддержка",
    title: "ИИ-ассистент",
    desc: "Чат-бот, решающий до 70% обращений без участия оператора, с передачей сложных случаев человеку.",
    metric: "70% автоответов",
    details: "SaaS-компания сократила нагрузку на поддержку в 3 раза. Операторы занимаются только сложными кейсами.",
  },
  {
    tag: "Поиск",
    title: "Семантический поиск",
    desc: "Поиск по смыслу, а не ключевым словам. Пользователи находят нужное даже при опечатках.",
    metric: "+40% конверсия",
    details: "Маркетплейс внедрил умный поиск и увидел рост конверсии на 40% — люди находят товары, которые раньше не замечали.",
  },
  {
    tag: "Код",
    title: "Ревью кода",
    desc: "Автоматическая проверка pull request'ов на баги, стиль и безопасность.",
    metric: "-60% багов",
    details: "Команда из 15 разработчиков сократила время ревью с 2 часов до 20 минут. Критичных багов в продакшне стало вдвое меньше.",
  },
  {
    tag: "HR",
    title: "Скрининг резюме",
    desc: "Автоматический разбор и ранжирование кандидатов по заданным критериям.",
    metric: "×8 быстрее найм",
    details: "HR-агентство обрабатывает 1000 резюме в день вместо 120. Время найма на позицию сократилось с 3 недель до 4 дней.",
  },
];

export default function Examples() {
  return (
    <div className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-xs font-mono text-muted-foreground block mb-4">// ПРИМЕРЫ</span>
        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
          Реальные кейсы
        </h1>
        <p className="text-muted-foreground text-lg mb-16 max-w-xl">
          Как компании используют наш ИИ для решения бизнес-задач.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXAMPLES.map((e, i) => (
            <div
              key={e.title}
              className="relative border border-border rounded-sm p-8 overflow-hidden group hover:border-foreground transition-all hover:shadow-sm"
            >
              <span className="absolute top-6 right-6 text-xs font-mono text-muted-foreground border border-border px-2 py-1 rounded-sm">
                {e.tag}
              </span>
              <div className="text-5xl font-black text-foreground/5 font-mono mb-6 group-hover:text-foreground/10 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-bold text-lg mb-3">{e.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{e.desc}</p>
              <p className="text-xs text-muted-foreground/70 leading-relaxed mb-6 italic">{e.details}</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--accent))]" />
                <span className="text-sm font-semibold">{e.metric}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Хотите такой же результат?</p>
          <a
            href="/contacts"
            className="inline-block px-8 py-3 bg-foreground text-background text-sm font-semibold rounded-sm hover:opacity-80 transition-opacity"
          >
            Обсудить ваш проект
          </a>
        </div>
      </div>
    </div>
  );
}

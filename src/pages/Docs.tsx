import { useState } from "react";
import Icon from "@/components/ui/icon";

const SECTIONS = [
  {
    number: "01",
    title: "Быстрый старт",
    desc: "Установка, ключ API и первый запрос за 5 минут.",
    content: `# Быстрый старт

Установите библиотеку:

\`\`\`bash
pip install ai-project
\`\`\`

Получите ключ API в личном кабинете и сделайте первый запрос:

\`\`\`python
import ai_project

client = ai_project.Client(api_key="ваш-ключ")
response = client.generate(prompt="Привет!", model="v2")
print(response.text)
\`\`\``,
  },
  {
    number: "02",
    title: "Справочник API",
    desc: "Все методы, параметры и форматы ответов.",
    content: `# Справочник API

## POST /v2/generate

Генерация текста по запросу.

**Параметры:**
- \`prompt\` (string) — текст запроса
- \`model\` (string) — модель: v2, v2-ultra
- \`max_tokens\` (int) — максимум токенов (default: 1000)
- \`temperature\` (float) — температура 0.0–1.0 (default: 0.7)

**Ответ:**
\`\`\`json
{
  "text": "...",
  "tokens_used": 42,
  "model": "v2"
}
\`\`\``,
  },
  {
    number: "03",
    title: "Примеры кода",
    desc: "Python, JS, Go — готовые сниппеты для старта.",
    content: `# Примеры кода

## JavaScript / TypeScript

\`\`\`js
const response = await fetch('https://api.ai-project.ru/v2/generate', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer ВАШ_КЛЮЧ', 'Content-Type': 'application/json' },
  body: JSON.stringify({ prompt: 'Привет!', model: 'v2' })
});
const data = await response.json();
console.log(data.text);
\`\`\`

## Python

\`\`\`python
import ai_project
client = ai_project.Client(api_key="ваш-ключ")
print(client.generate(prompt="Привет!").text)
\`\`\``,
  },
  {
    number: "04",
    title: "FAQ",
    desc: "Ответы на самые частые вопросы от разработчиков.",
    content: `# FAQ

**Как получить API ключ?**
Зарегистрируйтесь на сайте и перейдите в раздел «Настройки → API ключи».

**Есть ли лимиты на запросы?**
На бесплатном тарифе — 1000 запросов в месяц. На платных — без ограничений.

**Какие модели доступны?**
- \`v2\` — базовая модель, быстрая и экономичная
- \`v2-ultra\` — максимальное качество

**Как обрабатываются ошибки?**
API возвращает стандартные HTTP коды: 200, 400, 401, 429, 500.`,
  },
];

export default function Docs() {
  const [active, setActive] = useState(0);

  return (
    <div className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-xs font-mono text-muted-foreground block mb-4">// ДОКУМЕНТАЦИЯ</span>
        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-16">
          Начните за минуты
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            {SECTIONS.map((s, i) => (
              <button
                key={s.number}
                onClick={() => setActive(i)}
                className={`w-full flex gap-4 items-start p-4 rounded-sm text-left transition-colors ${
                  active === i
                    ? "bg-foreground text-background"
                    : "hover:bg-secondary/50 border border-border"
                }`}
              >
                <span className={`text-lg font-black font-mono shrink-0 ${active === i ? "text-background/40" : "text-muted-foreground/30"}`}>
                  {s.number}
                </span>
                <div>
                  <div className="font-semibold text-sm">{s.title}</div>
                  <div className={`text-xs mt-0.5 ${active === i ? "text-background/60" : "text-muted-foreground"}`}>{s.desc}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="md:col-span-2 border border-border rounded-sm p-8">
            <div className="flex items-center gap-2 mb-6 pb-6 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">{SECTIONS[active].title.toLowerCase().replace(/ /g, "_")}.md</span>
            </div>
            <div className="prose prose-sm max-w-none">
              {SECTIONS[active].content.split("\n").map((line, i) => {
                if (line.startsWith("# ")) return <h2 key={i} className="text-xl font-black mb-4">{line.slice(2)}</h2>;
                if (line.startsWith("## ")) return <h3 key={i} className="text-base font-semibold mt-6 mb-2">{line.slice(3)}</h3>;
                if (line.startsWith("```")) return null;
                if (line.startsWith("- ")) return <li key={i} className="text-sm text-muted-foreground ml-4 mb-1">{line.slice(2)}</li>;
                if (line.startsWith("**") && line.endsWith("**")) return <p key={i} className="font-semibold text-sm mt-4 mb-1">{line.slice(2, -2)}</p>;
                if (line.trim() === "") return <div key={i} className="h-2" />;
                return <p key={i} className="text-sm text-muted-foreground leading-relaxed">{line}</p>;
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-3 p-4 border border-border rounded-sm bg-secondary/30">
          <Icon name="MessageCircle" size={16} className="text-muted-foreground shrink-0" />
          <p className="text-sm text-muted-foreground">Не нашли ответ? <a href="/contacts" className="text-foreground font-medium hover:underline">Напишите нам</a> — ответим в течение часа.</p>
        </div>
      </div>
    </div>
  );
}

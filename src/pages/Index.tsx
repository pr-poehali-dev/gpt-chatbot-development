import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "О проекте", href: "#about" },
  { label: "Возможности", href: "#features" },
  { label: "Документация", href: "#docs" },
  { label: "Примеры", href: "#examples" },
  { label: "Контакты", href: "#contacts" },
];

const FEATURES = [
  {
    icon: "Zap",
    title: "Молниеносная скорость",
    desc: "Обрабатывает миллионы запросов в секунду без потери точности. Архитектура оптимизирована для высоких нагрузок.",
  },
  {
    icon: "Brain",
    title: "Глубокое понимание",
    desc: "Контекстный анализ данных на нескольких уровнях абстракции. Модель понимает смысл, а не только синтаксис.",
  },
  {
    icon: "Shield",
    title: "Надёжная безопасность",
    desc: "Данные шифруются на каждом этапе. Полное соответствие GDPR и российскому законодательству.",
  },
  {
    icon: "GitBranch",
    title: "Гибкая интеграция",
    desc: "REST API, webhooks и SDK для популярных языков. Подключение за несколько строк кода.",
  },
  {
    icon: "BarChart2",
    title: "Аналитика в реальном времени",
    desc: "Дашборды, графики и отчёты прямо в интерфейсе. Понимайте, как ИИ помогает вашему бизнесу.",
  },
  {
    icon: "Layers",
    title: "Масштабируемость",
    desc: "Работает как для стартапа, так и для корпорации. Тарифы растут вместе с вашим проектом.",
  },
];

const DOCS_SECTIONS = [
  { number: "01", title: "Быстрый старт", desc: "Установка, ключ API и первый запрос за 5 минут." },
  { number: "02", title: "Справочник API", desc: "Все методы, параметры и форматы ответов." },
  { number: "03", title: "Примеры кода", desc: "Python, JS, Go — готовые сниппеты для старта." },
  { number: "04", title: "FAQ", desc: "Ответы на самые частые вопросы от разработчиков." },
];

const EXAMPLES = [
  {
    tag: "Текст",
    title: "Генерация контента",
    desc: "Автоматическое создание описаний товаров, статей и постов для соцсетей на основе кратких тезисов.",
    metric: "×12 быстрее",
  },
  {
    tag: "Данные",
    title: "Анализ отзывов",
    desc: "Классификация тональности тысяч отзывов клиентов и выявление ключевых проблем продукта.",
    metric: "98% точность",
  },
  {
    tag: "Поддержка",
    title: "ИИ-ассистент",
    desc: "Чат-бот, решающий до 70% обращений без участия оператора, с передачей сложных случаев человеку.",
    metric: "70% автоответов",
  },
];

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-sm bg-foreground flex items-center justify-center">
              <span className="text-background text-xs font-mono font-bold">AI</span>
            </span>
            <span className="font-semibold text-sm tracking-wide">ИИ Проект</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors line-hover"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contacts"
              className="px-4 py-2 text-sm font-medium bg-foreground text-background rounded-sm hover:opacity-80 transition-opacity"
            >
              Начать
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background border-b border-border px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacts"
              className="px-4 py-2 text-sm font-medium bg-foreground text-background rounded-sm text-center"
              onClick={() => setMenuOpen(false)}
            >
              Начать
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center pt-16">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground border border-border px-3 py-1.5 rounded-sm mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Версия 2.0 — в открытом доступе
              </span>
            </div>

            <h1 className="animate-fade-up-delay-1 text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mb-6">
              Интеллект,{" "}
              <span className="relative inline-block">
                который
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[hsl(var(--accent))]" />
              </span>{" "}
              работает
            </h1>

            <p className="animate-fade-up-delay-2 text-lg text-muted-foreground leading-relaxed mb-10 max-w-md">
              Платформа для разработчиков и компаний, которые хотят встроить
              искусственный интеллект в свои продукты без лишней сложности.
            </p>

            <div className="animate-fade-up-delay-3 flex flex-wrap gap-3">
              <a
                href="#features"
                className="px-6 py-3 bg-foreground text-background text-sm font-semibold rounded-sm hover:opacity-80 transition-opacity"
              >
                Посмотреть возможности
              </a>
              <a
                href="#docs"
                className="px-6 py-3 border border-border text-sm font-semibold rounded-sm hover:border-foreground transition-colors"
              >
                Документация →
              </a>
            </div>
          </div>

          <div className="animate-fade-up-delay-4 hidden md:block">
            <div className="relative">
              <div className="bg-foreground/5 border border-border rounded-sm p-6 font-mono text-xs leading-relaxed">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-muted-foreground">api_example.py</span>
                </div>
                <div className="space-y-1 text-muted-foreground">
                  <p><span className="text-blue-500">import</span> ai_project</p>
                  <p className="mt-3">client = ai_project.<span className="text-foreground">Client</span>(</p>
                  <p className="pl-4">api_key=<span className="text-green-600">"sk-••••••••"</span></p>
                  <p>)</p>
                  <p className="mt-3">response = client.<span className="text-foreground">generate</span>(</p>
                  <p className="pl-4">prompt=<span className="text-green-600">"Привет, мир!"</span>,</p>
                  <p className="pl-4">model=<span className="text-green-600">"v2-ultra"</span></p>
                  <p>)</p>
                  <p className="mt-3"><span className="text-blue-500">print</span>(response.text)</p>
                  <p className="mt-2 text-green-600"># → "Привет! Чем могу помочь?"</p>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[hsl(var(--accent))]" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[hsl(var(--accent))]" />
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-3 gap-8 border-t border-border pt-10">
          {[
            { val: "10M+", label: "Запросов в день" },
            { val: "99.9%", label: "Uptime" },
            { val: "<50мс", label: "Среднее время ответа" },
          ].map((s) => (
            <div key={s.val} className="text-center">
              <div className="text-3xl font-black mb-1">{s.val}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-mono text-background/40 block mb-4">// О ПРОЕКТЕ</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Мы строим
              <br />
              будущее вместе
            </h2>
          </div>
          <div className="space-y-6 text-background/70 leading-relaxed">
            <p>
              Проект основан командой исследователей и инженеров с опытом в компаниях
              мирового уровня. Наша миссия — сделать технологии искусственного интеллекта
              доступными для каждой компании.
            </p>
            <p>
              За три года работы мы обработали более 10 миллиардов запросов и помогли
              тысячам команд запустить ИИ-функции в своих продуктах.
            </p>
            <div className="flex gap-6 pt-4 border-t border-background/10">
              <div>
                <div className="text-2xl font-black text-background">2021</div>
                <div className="text-xs text-background/40 mt-1">Основан</div>
              </div>
              <div>
                <div className="text-2xl font-black text-background">1200+</div>
                <div className="text-xs text-background/40 mt-1">Клиентов</div>
              </div>
              <div>
                <div className="text-2xl font-black text-background">32</div>
                <div className="text-xs text-background/40 mt-1">Страны</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-xs font-mono text-muted-foreground block mb-4">// ВОЗМОЖНОСТИ</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight max-w-md">
              Всё, что нужно вашей команде
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-background p-8 hover:bg-secondary/50 transition-colors group"
              >
                <div className="w-10 h-10 border border-border rounded-sm flex items-center justify-center mb-5 group-hover:border-foreground transition-colors">
                  <Icon name={f.icon} fallback="Zap" size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCS */}
      <section id="docs" className="py-28 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-xs font-mono text-muted-foreground block mb-4">// ДОКУМЕНТАЦИЯ</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Начните за минуты
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {DOCS_SECTIONS.map((d) => (
              <div
                key={d.number}
                className="flex gap-6 p-6 bg-background border border-border rounded-sm hover:border-foreground transition-colors group cursor-pointer"
              >
                <span className="text-3xl font-black text-muted-foreground/30 font-mono shrink-0 group-hover:text-[hsl(var(--accent))] transition-colors">
                  {d.number}
                </span>
                <div>
                  <h3 className="font-semibold mb-1">{d.title}</h3>
                  <p className="text-sm text-muted-foreground">{d.desc}</p>
                </div>
                <Icon name="ArrowRight" size={16} className="ml-auto self-center text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMPLES */}
      <section id="examples" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-xs font-mono text-muted-foreground block mb-4">// ПРИМЕРЫ</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Реальные кейсы
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {EXAMPLES.map((e, i) => (
              <div
                key={e.title}
                className="relative border border-border rounded-sm p-8 overflow-hidden group hover:border-foreground transition-colors"
              >
                <span className="absolute top-6 right-6 text-xs font-mono text-muted-foreground border border-border px-2 py-1 rounded-sm">
                  {e.tag}
                </span>
                <div className="text-5xl font-black text-foreground/5 font-mono mb-6 group-hover:text-foreground/10 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-lg mb-3">{e.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{e.desc}</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[hsl(var(--accent))]" />
                  <span className="text-sm font-semibold">{e.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-xs font-mono text-muted-foreground block mb-4">// КОНТАКТЫ</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Готовы начать?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
              Оставьте заявку, и наша команда свяжется с вами в течение рабочего дня.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Icon name="Mail" size={16} />
                <span>hello@ai-project.ru</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Icon name="MessageCircle" size={16} />
                <span>Telegram: @aiproject_support</span>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Имя</label>
                  <input
                    type="text"
                    placeholder="Иван"
                    className="w-full px-4 py-3 text-sm border border-border rounded-sm bg-background focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Компания</label>
                  <input
                    type="text"
                    placeholder="ООО «Пример»"
                    className="w-full px-4 py-3 text-sm border border-border rounded-sm bg-background focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  placeholder="ivan@company.ru"
                  className="w-full px-4 py-3 text-sm border border-border rounded-sm bg-background focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Сообщение</label>
                <textarea
                  rows={4}
                  placeholder="Расскажите о вашем проекте..."
                  className="w-full px-4 py-3 text-sm border border-border rounded-sm bg-background focus:outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-foreground text-background text-sm font-semibold rounded-sm hover:opacity-80 transition-opacity"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-sm bg-foreground flex items-center justify-center">
              <span className="text-background text-[10px] font-mono font-bold">AI</span>
            </span>
            <span className="text-sm font-semibold">ИИ Проект</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2024 ИИ Проект. Все права защищены.</p>
          <div className="flex gap-6">
            {["Политика", "Условия", "Cookies"].map((l) => (
              <a key={l} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
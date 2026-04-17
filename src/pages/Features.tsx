import Icon from "@/components/ui/icon";

const FEATURES = [
  { icon: "Zap", title: "Молниеносная скорость", desc: "Обрабатывает миллионы запросов в секунду без потери точности. Архитектура оптимизирована для высоких нагрузок." },
  { icon: "Brain", title: "Глубокое понимание", desc: "Контекстный анализ данных на нескольких уровнях абстракции. Модель понимает смысл, а не только синтаксис." },
  { icon: "Shield", title: "Надёжная безопасность", desc: "Данные шифруются на каждом этапе. Полное соответствие GDPR и российскому законодательству." },
  { icon: "GitBranch", title: "Гибкая интеграция", desc: "REST API, webhooks и SDK для популярных языков. Подключение за несколько строк кода." },
  { icon: "BarChart2", title: "Аналитика в реальном времени", desc: "Дашборды, графики и отчёты прямо в интерфейсе. Понимайте, как ИИ помогает вашему бизнесу." },
  { icon: "Layers", title: "Масштабируемость", desc: "Работает как для стартапа, так и для корпорации. Тарифы растут вместе с вашим проектом." },
  { icon: "Globe", title: "Мультиязычность", desc: "Поддержка 40+ языков из коробки. Русский, английский, китайский — без дополнительных настроек." },
  { icon: "Clock", title: "История запросов", desc: "Полный лог всех обращений с фильтрацией и экспортом. Идеально для аудита и отладки." },
  { icon: "Users", title: "Командный доступ", desc: "Роли, права, совместная работа. Управляйте доступом для всей команды из одного места." },
];

export default function Features() {
  return (
    <div className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-xs font-mono text-muted-foreground block mb-4">// ВОЗМОЖНОСТИ</span>
        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
          Всё, что нужно вашей команде
        </h1>
        <p className="text-muted-foreground text-lg mb-16 max-w-xl">
          Полный набор инструментов для работы с ИИ — от простого API до корпоративных решений.
        </p>

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

        <div className="mt-16 p-10 bg-foreground text-background rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black mb-2">Готовы попробовать?</h2>
            <p className="text-background/70 text-sm">Первые 1000 запросов бесплатно, без карты.</p>
          </div>
          <a
            href="/contacts"
            className="px-6 py-3 bg-background text-foreground text-sm font-semibold rounded-sm hover:opacity-90 transition-opacity shrink-0"
          >
            Начать бесплатно
          </a>
        </div>
      </div>
    </div>
  );
}

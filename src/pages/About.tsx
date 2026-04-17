export default function About() {
  return (
    <div className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-xs font-mono text-muted-foreground block mb-4">// О ПРОЕКТЕ</span>
        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-16">
          Мы строим будущее вместе
        </h1>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg text-foreground font-medium">
              Проект основан командой исследователей и инженеров с опытом в компаниях
              мирового уровня.
            </p>
            <p>
              Наша миссия — сделать технологии искусственного интеллекта
              доступными для каждой компании, независимо от её размера и бюджета.
            </p>
            <p>
              За три года работы мы обработали более 10 миллиардов запросов и помогли
              тысячам команд запустить ИИ-функции в своих продуктах. Мы верим, что
              будущее за компаниями, которые умеют работать с данными умно.
            </p>
            <p>
              Сегодня нашими клиентами являются стартапы, средний бизнес и крупные
              корпорации из 32 стран мира. Мы гордимся каждым из них.
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "2021", label: "Год основания" },
                { val: "1200+", label: "Клиентов" },
                { val: "32", label: "Страны" },
                { val: "10B+", label: "Запросов обработано" },
              ].map((s) => (
                <div key={s.val} className="border border-border rounded-sm p-6">
                  <div className="text-3xl font-black mb-1">{s.val}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="border border-border rounded-sm p-6 bg-foreground text-background">
              <p className="text-sm leading-relaxed text-background/80">
                "Мы не просто строим инструменты — мы меняем то, как компании
                принимают решения и взаимодействуют с данными."
              </p>
              <div className="mt-4 text-sm font-semibold">— Основатель проекта</div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-16 border-t border-border">
          <h2 className="text-2xl font-black mb-8">Наши ценности</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Прозрачность", desc: "Мы открыты о том, как работает наш ИИ и какие данные используем." },
              { title: "Надёжность", desc: "99.9% uptime — не просто цифра, а обязательство перед клиентами." },
              { title: "Инновации", desc: "Каждый месяц выпускаем новые функции, основанные на обратной связи." },
            ].map((v) => (
              <div key={v.title} className="p-6 border border-border rounded-sm">
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

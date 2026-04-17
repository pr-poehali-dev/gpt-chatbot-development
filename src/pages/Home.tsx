import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="min-h-[calc(100vh-64px)] flex flex-col justify-center">
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
              <Link
                to="/features"
                className="px-6 py-3 bg-foreground text-background text-sm font-semibold rounded-sm hover:opacity-80 transition-opacity"
              >
                Посмотреть возможности
              </Link>
              <Link
                to="/docs"
                className="px-6 py-3 border border-border text-sm font-semibold rounded-sm hover:border-foreground transition-colors"
              >
                Документация →
              </Link>
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
    </div>
  );
}

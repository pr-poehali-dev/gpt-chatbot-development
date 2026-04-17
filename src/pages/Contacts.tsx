import Icon from "@/components/ui/icon";

export default function Contacts() {
  return (
    <div className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-xs font-mono text-muted-foreground block mb-4">// КОНТАКТЫ</span>
        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-16">
          Готовы начать?
        </h1>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-sm text-lg">
              Оставьте заявку, и наша команда свяжется с вами в течение рабочего дня.
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 border border-border rounded-sm flex items-center justify-center shrink-0">
                  <Icon name="Mail" size={16} className="text-muted-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">Email</div>
                  <span className="text-sm font-medium">hello@ai-project.ru</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 border border-border rounded-sm flex items-center justify-center shrink-0">
                  <Icon name="MessageCircle" size={16} className="text-muted-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">Telegram</div>
                  <span className="text-sm font-medium">@aiproject_support</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 border border-border rounded-sm flex items-center justify-center shrink-0">
                  <Icon name="Clock" size={16} className="text-muted-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">Время ответа</div>
                  <span className="text-sm font-medium">В течение 1 рабочего дня</span>
                </div>
              </div>
            </div>

            <div className="p-6 border border-border rounded-sm bg-secondary/30">
              <div className="text-sm font-semibold mb-1">Для enterprise-запросов</div>
              <p className="text-xs text-muted-foreground">Напишите напрямую на enterprise@ai-project.ru — выделенный менеджер ответит в течение 2 часов.</p>
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
                <label className="text-xs text-muted-foreground mb-1.5 block">Тема</label>
                <select className="w-full px-4 py-3 text-sm border border-border rounded-sm bg-background focus:outline-none focus:border-foreground transition-colors">
                  <option>Общий вопрос</option>
                  <option>Техническая поддержка</option>
                  <option>Партнёрство</option>
                  <option>Enterprise</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Сообщение</label>
                <textarea
                  rows={5}
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
      </div>
    </div>
  );
}

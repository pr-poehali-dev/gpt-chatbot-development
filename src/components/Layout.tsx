import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useTheme } from "@/context/ThemeContext";

const NAV_LINKS = [
  { label: "Главная", href: "/" },
  { label: "О проекте", href: "/about" },
  { label: "Возможности", href: "/features" },
  { label: "Документация", href: "/docs" },
  { label: "Примеры", href: "/examples" },
  { label: "Контакты", href: "/contacts" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur border-b border-border" : "bg-background/80 backdrop-blur"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-sm bg-foreground flex items-center justify-center">
              <span className="text-background text-xs font-mono font-bold">AI</span>
            </span>
            <span className="font-semibold text-sm tracking-wide">ИИ Проект</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm transition-colors line-hover ${
                  location.pathname === l.href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-sm border border-border hover:border-foreground transition-colors"
              aria-label="Переключить тему"
            >
              <Icon name={theme === "light" ? "Moon" : "Sun"} size={16} />
            </button>
            <Link
              to="/contacts"
              className="hidden md:block px-4 py-2 text-sm font-medium bg-foreground text-background rounded-sm hover:opacity-80 transition-opacity"
            >
              Начать
            </Link>
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={20} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background border-b border-border px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm transition-colors ${
                  location.pathname === l.href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contacts"
              className="px-4 py-2 text-sm font-medium bg-foreground text-background rounded-sm text-center"
            >
              Начать
            </Link>
          </div>
        )}
      </header>

      <main className="pt-16">{children}</main>

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

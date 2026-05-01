import { Header } from './components/layout/Header';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { FooterSection } from './components/sections/FooterSection';
import { HeroSection } from './components/sections/HeroSection';
import { HighlightsBar } from './components/sections/HighlightsBar';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { TechnologiesSection } from './components/sections/TechnologiesSection';
import { getPortfolioContent } from './data/portfolio';
import { useLanguage } from './hooks/useLanguage';
import { useTheme } from './hooks/useTheme';

function App() {
  const { isDark, theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const content = getPortfolioContent(language);

  return (
    <div
      className={`theme-${theme} min-h-screen overflow-hidden text-[var(--color-text)] transition-colors duration-300 [background:var(--color-page-bg)]`}
    >
      <Header
        content={content}
        isDark={isDark}
        language={language}
        onToggleLanguage={toggleLanguage}
        onToggleTheme={toggleTheme}
      />

      <main className="pt-20">
        <HeroSection content={content} />
        <HighlightsBar content={content} />
        <AboutSection content={content} />
        <TechnologiesSection content={content} />
        <ProjectsSection content={content} />
        <ContactSection content={content} />
        <FooterSection content={content} />
      </main>
    </div>
  );
}

export default App;

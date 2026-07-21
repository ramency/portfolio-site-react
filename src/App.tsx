// CSS style sheet
import './App.css';

// Static assets
import de from './locales/de.json';
import en from './locales/en.json';

// Internal components
import AsideContainer from './components/AsideContainer';
import MainContainer from './components/MainContainer';
import ToolBar from './components/ToolBar.tsx';

// Context & Type imports
import { ThemeContext, type ThemeContextType } from './context/ThemeContext.tsx';
import type { Language } from './types/language.ts';

// Library imports
import { useState } from 'react';
import { IntlProvider } from 'use-intl';


export default function App() {
  const [theme, setTheme] = useState<ThemeContextType>('Theme__Sand');
  const [language, setLanguage] = useState<Language>('en');
  const messages = {
    de: de,
    en: en
  }

  document.getElementById('html')!.className = `${theme}`;

  function changeTheme(newTheme: ThemeContextType): void {
    setTheme(newTheme);
    document.getElementById('html')!.className = `${theme}`
  }

  function changeLanguage(newLanguage: Language): void {
    setLanguage(newLanguage);
    document.getElementById('html')!.lang = `${language}`;
  }


  return (
    <>
      <ThemeContext value={theme}>
        <IntlProvider locale={language} messages={messages[language]}>
          <AsideContainer />
          <ToolBar changeTheme={changeTheme} changeLanguage={changeLanguage} />
          <MainContainer />
        </IntlProvider>
      </ThemeContext>
    </>
  )
}

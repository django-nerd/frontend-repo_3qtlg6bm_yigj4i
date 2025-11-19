import React, { useState } from 'react'
import Toggle from './components/Toggle'
import Hero from './components/Hero'
import { WhoWeHelp, WhatWeDo, HowItWorks, Benefits, FAQ, Reviews, FinalCTA } from './components/Sections'

function App() {
  const [lang, setLang] = useState('en')

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Toggle lang={lang} setLang={setLang} />

      <Hero lang={lang} />

      <WhoWeHelp lang={lang} />
      <WhatWeDo lang={lang} />
      <HowItWorks lang={lang} />
      <Benefits lang={lang} />
      <FAQ lang={lang} />
      <Reviews lang={lang} />
      <FinalCTA lang={lang} />

      <footer className="max-w-6xl mx-auto px-6 py-10 text-sm text-slate-500">
        <div className="flex items-center justify-between border-t border-slate-200 pt-6">
          <div>© {new Date().getFullYear()} Vexai</div>
          <a href="mailto:renee@vexai.nl" className="hover:text-slate-700">renee@vexai.nl</a>
        </div>
      </footer>
    </div>
  )
}

export default App

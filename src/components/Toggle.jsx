import React from 'react'

const Toggle = ({ lang, setLang }) => {
  return (
    <div className="w-full flex items-center justify-between py-4 px-6 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="font-semibold tracking-tight text-slate-900">Vexai</div>
      <div className="inline-flex items-center rounded-md border border-slate-300 bg-white p-1 shadow-sm">
        <button
          onClick={() => setLang('en')}
          className={`px-3 py-1.5 text-sm rounded ${lang === 'en' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'}`}
        >
          EN
        </button>
        <button
          onClick={() => setLang('nl')}
          className={`px-3 py-1.5 text-sm rounded ${lang === 'nl' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'}`}
        >
          NL
        </button>
      </div>
    </div>
  )
}

export default Toggle

import React from 'react'

const Hero = ({ lang }) => {
  const t = {
    en: {
      headline: 'Stop losing HVAC jobs to missed calls',
      sub: 'Vexai answers every call, checks the job and books qualified work into your calendar so you can focus on the work, not the phone.',
      cta: 'Book a call',
    },
    nl: {
      headline: 'Stop met het mislopen van klussen door gemiste telefoontjes',
      sub: 'Vexai neemt elke call op, stelt de juiste vragen en plant goede klussen direct in je agenda.',
      cta: 'Plan een gesprek',
    },
  }[lang]

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50" />
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-14 sm:pt-28 sm:pb-20">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
              {t.headline}
            </h1>
            <p className="mt-5 text-slate-600 text-lg max-w-2xl">
              {t.sub}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="mailto:renee@vexai.nl"
                className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 text-base font-medium shadow-sm hover:bg-slate-800 transition-colors"
              >
                {t.cta}
              </a>
              <span className="text-slate-500 text-sm">renee@vexai.nl</span>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative mx-auto md:mx-0 max-w-md">
              <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-tr from-slate-100 to-slate-200 border border-slate-200 shadow-sm" />
              <div className="absolute -right-3 -bottom-3 w-32 h-32 rounded-xl bg-slate-50 border border-slate-200 shadow-sm hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

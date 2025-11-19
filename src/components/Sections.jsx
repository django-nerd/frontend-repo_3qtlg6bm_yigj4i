import React from 'react'

const Section = ({ title, children }) => (
  <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
    {title && (
      <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-6">{title}</h2>
    )}
    <div className="text-slate-700">{children}</div>
  </section>
)

export const WhoWeHelp = ({ lang }) => {
  const t = {
    en: {
      title: 'Who we help',
      bullets: [
        'Busy HVAC owners who miss calls while on the job',
        'Teams drowning in phone chaos who want structure',
        'Businesses that want more qualified jobs booked',
      ],
    },
    nl: {
      title: 'Wie we helpen',
      bullets: [
        'Drukke installatiebedrijven die telefoontjes missen',
        'Teams die structuur willen in plaats van telefoonchaos',
        'Bedrijven die meer goede klussen in de agenda willen',
      ],
    },
  }[lang]

  return (
    <Section title={t.title}>
      <ul className="grid sm:grid-cols-3 gap-4">
        {t.bullets.map((b, i) => (
          <li key={i} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">{b}</li>
        ))}
      </ul>
    </Section>
  )
}

export const WhatWeDo = ({ lang }) => {
  const t = {
    en: {
      title: 'What Vexai does',
      bullets: [
        'Answers every call in your company name',
        'Asks a few smart questions',
        'Books qualified jobs into your calendar',
      ],
    },
    nl: {
      title: 'Wat Vexai doet',
      bullets: [
        'Neemt elke call op in jullie bedrijfsnaam',
        'Stelt een paar slimme vragen',
        'Plant gekwalificeerde klussen direct in je agenda',
      ],
    },
  }[lang]

  return (
    <Section title={t.title}>
      <ul className="grid sm:grid-cols-3 gap-4">
        {t.bullets.map((b, i) => (
          <li key={i} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">{b}</li>
        ))}
      </ul>
    </Section>
  )
}

export const HowItWorks = ({ lang }) => {
  const t = {
    en: { title: 'How it works', steps: ['Connect', 'Set your rules', 'Go live'] },
    nl: { title: 'Zo werkt het', steps: ['Koppelen', 'Jouw regels', 'Live'] },
  }[lang]

  return (
    <Section title={t.title}>
      <ol className="grid sm:grid-cols-3 gap-4">
        {t.steps.map((s, i) => (
          <li key={i} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
            <div className="text-slate-400 text-sm">Step {i + 1}</div>
            <div className="font-medium text-slate-900 mt-1">{s}</div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export const Benefits = ({ lang }) => {
  const t = {
    en: {
      title: 'Why choose Vexai',
      bullets: [
        'Never miss a booking-worthy call again',
        'Consistent intake so you get the right jobs',
        'Less phone stress, more revenue',
      ],
    },
    nl: {
      title: 'Waarom Vexai',
      bullets: [
        'Mis nooit meer een kansrijke call',
        'Consistente intake: de juiste klussen',
        'Minder telefoonstress, meer omzet',
      ],
    },
  }[lang]

  return (
    <Section title={t.title}>
      <ul className="grid sm:grid-cols-3 gap-4">
        {t.bullets.map((b, i) => (
          <li key={i} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">{b}</li>
        ))}
      </ul>
    </Section>
  )
}

export const FAQ = ({ lang }) => {
  const t = {
    en: {
      title: 'FAQ',
      items: [
        { q: 'What is Vexai?', a: 'A phone answering service that books qualified HVAC jobs directly into your calendar.' },
        { q: 'How do you connect?', a: 'We forward your calls to our system and sync with your calendar of choice.' },
        { q: 'When do you answer?', a: 'During office hours by default, with options for extended coverage.' },
        { q: 'How fast can we start?', a: 'Most teams go live within 48 hours after a quick setup call.' },
      ],
    },
    nl: {
      title: 'Veelgestelde vragen',
      items: [
        { q: 'Wat is Vexai?', a: 'Een telefoondienst die gekwalificeerde klussen direct in je agenda plant.' },
        { q: 'Hoe koppelen jullie?', a: 'We zetten doorschakeling aan en koppelen met jouw agenda.' },
        { q: 'Wanneer nemen jullie op?', a: 'Standaard tijdens kantooruren, met opties voor uitgebreidere dekking.' },
        { q: 'Hoe snel kunnen we starten?', a: 'Meestal binnen 48 uur na een korte intake.' },
      ],
    },
  }[lang]

  return (
    <Section title={t.title}>
      <div className="grid sm:grid-cols-2 gap-4">
        {t.items.map((item, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
            <div className="font-medium text-slate-900">{item.q}</div>
            <div className="text-slate-600 mt-2 text-sm">{item.a}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export const Reviews = ({ lang }) => {
  const t = {
    en: {
      title: 'Reviews',
      items: [
        {
          name: 'Mark H.',
          role: 'Owner, Northside HVAC',
          text: 'We went from missing 6–8 calls a day to booking them. Our weeks are calmer and revenue is up.'
        },
        {
          name: 'Jenna R.',
          role: 'Ops Manager, CoolWorks',
          text: 'Intake is consistent and customers get answers right away. Technicians focus on the job, not the phone.'
        },
        {
          name: 'Luis P.',
          role: 'Founder, RapidAir',
          text: 'Setup took a day. By day two we had three extra jobs on the calendar. Worth it.'
        },
      ],
    },
    nl: {
      title: 'Reviews',
      items: [
        {
          name: 'Sanne K.',
          role: 'Eigenaar, KlimaatPro',
          text: 'We misten dagelijks meerdere calls. Nu staat het direct in de agenda en is er veel meer rust.'
        },
        {
          name: 'Rachid A.',
          role: 'Planner, Koel & Warm',
          text: 'Strakke intake, klanten worden meteen geholpen. Monteurs kunnen zich focussen op het werk.'
        },
        {
          name: 'Bram V.',
          role: 'Directeur, FreshAir Installatie',
          text: 'Binnen een dag live. De eerste week al meerdere extra klussen ingepland.'
        },
      ],
    },
  }[lang]

  return (
    <Section title={t.title}>
      <div className="grid sm:grid-cols-3 gap-4">
        {t.items.map((r, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
            <div className="font-medium text-slate-900">{r.name}</div>
            <div className="text-slate-400 text-xs">{r.role}</div>
            <div className="text-slate-700 mt-3 text-sm">“{r.text}”</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export const FinalCTA = ({ lang }) => {
  const t = {
    en: {
      title: 'Ready to stop losing jobs to missed calls?',
      cta: 'Book a call',
    },
    nl: {
      title: 'Klaar om geen klussen meer te missen door gemiste telefoontjes?',
      cta: 'Plan een gesprek',
    },
  }[lang]

  return (
    <section className="max-w-3xl mx-auto px-6 py-14 sm:py-20 text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
        {t.title}
      </h2>
      <div className="mt-6 flex items-center justify-center gap-4">
        <a href="mailto:renee@vexai.nl" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 text-base font-medium shadow-sm hover:bg-slate-800 transition-colors">
          {t.cta}
        </a>
        <a href="mailto:renee@vexai.nl" className="inline-flex items-center justify-center rounded-lg border border-slate-300 text-slate-700 px-5 py-3 text-base font-medium hover:bg-slate-50">
          {lang === 'en' ? 'Contact' : 'Contact'}
        </a>
      </div>
      <div className="mt-3 text-slate-500 text-sm">renee@vexai.nl</div>
    </section>
  )
}

export default Section

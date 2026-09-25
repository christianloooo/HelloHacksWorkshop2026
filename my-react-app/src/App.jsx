import { useState } from 'react'

const types = ['Fire', 'Water', 'Grass', 'Ground']

function App() {
  const [selectedType, setSelectedType] = useState('')

    function getMatchup(type) {
    // API CALL WILL GO HERE, AND WE WILL RETURN THE RESPONSE
    return `Fake API response: You are fighting a ${type}-type Pokémon.`;
  }

  function handleTypeClick(type) {
    const response = getMatchup(type);
    setSelectedType(response);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f5ef] px-5 py-12 text-slate-800">
      <section className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
        <div className="mb-7 flex items-center gap-3">
          <span aria-hidden="true" className="relative flex size-10 items-center justify-center overflow-hidden rounded-full border-2 border-slate-800 bg-white">
            <span className="absolute inset-x-0 top-0 h-1/2 bg-[#e63946]" />
            <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-slate-800" />
            <span className="z-10 size-3 rounded-full border-2 border-slate-800 bg-white" />
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Trainer tools</span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Pokémon Battle Assistant</h1>
        <p className="mt-3 text-slate-600">What type of Pokémon are you facing?</p>

        <div aria-label="Choose an opposing Pokémon type" className="mt-6 grid grid-cols-2 gap-3" role="group">
          {types.map((type) => (
            <button
              aria-pressed={selectedType === type}
              className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e63946] ${
                selectedType === type
                  ? 'border-[#e63946] bg-[#e63946] text-white'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-[#e63946] hover:text-[#c92f3b]'
              }`}
              key={type}
              onClick={() => handleTypeClick(type.name)}
              type="button"
            >
              {type}
            </button>
          ))}
        </div>

        {selectedType && (
          <p aria-live="polite" className="mt-5 text-sm font-semibold text-slate-900">
            {selectedType}
          </p>
        )}
      </section>
    </main>
  )
}

export default App

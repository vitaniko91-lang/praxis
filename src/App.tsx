import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Manifesto from './routes/Manifesto'
import NotFound from './routes/NotFound'
import { brand } from './content/copy'
import { Nav } from './components/Nav'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:px-3 focus:py-2">Skip to content</a>
      <header className="flex items-center justify-between px-5 md:px-20 py-5">
        <a href="/" className="font-extrabold tracking-[1px]"><span className="text-[var(--accent)]">{brand.mark}</span>{brand.name}</a>
        <Nav />
      </header>
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

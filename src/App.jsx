import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { ResumePage } from './pages/ResumePage'
import { CoverLetter } from './pages/CoverLetter'
import { Career } from './pages/Career'
import { Credentials } from './pages/Credentials'
import { Projects } from './pages/Projects'
import { Capstone } from './pages/Capstone'
import { Experience } from './pages/Experience'
import { Contact } from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/cover-letter" element={<CoverLetter />} />
          <Route path="/career" element={<Career />} />
          <Route path="/credentials" element={<Credentials />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/capstone" element={<Capstone />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

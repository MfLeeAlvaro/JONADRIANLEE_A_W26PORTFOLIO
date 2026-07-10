import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { ResumePage } from './pages/ResumePage'
import { DiplomaPage } from './pages/DiplomaPage'
import { Projects } from './pages/Projects'
import { Experience } from './pages/Experience'
import { Contact } from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/diploma" element={<DiplomaPage />} />
          <Route path="/contact" element={<Contact />} />
          {/* Legacy routes → keep bookmarks from breaking */}
          <Route path="/capstone" element={<Navigate to="/projects" replace />} />
          <Route path="/cover-letter" element={<Navigate to="/contact" replace />} />
          <Route path="/career" element={<Navigate to="/about" replace />} />
          <Route path="/credentials" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

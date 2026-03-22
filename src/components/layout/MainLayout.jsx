import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ScrollToTop } from './ScrollToTop'

export function MainLayout() {
  return (
    <div className="relative flex min-h-screen flex-col bg-void text-mist">
      <div className="atmosphere atmosphere-vignette" aria-hidden />
      <div className="atmosphere atmosphere-grain" aria-hidden />
      <ScrollToTop />
      <Navbar />
      <main className="relative z-10 isolate flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

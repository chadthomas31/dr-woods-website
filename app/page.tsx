import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import HomeContact from './components/HomeContact'
import BookCTA from './components/BookCTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <Services />
      <HomeContact />
      <BookCTA />
    </div>
  )
}

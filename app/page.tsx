import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Mission from './components/Mission'
import HomeContact from './components/HomeContact'
import BookCTA from './components/BookCTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Mission />
      <HomeContact />
      <BookCTA />
    </div>
  )
}

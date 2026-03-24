import BookCTA from '../components/BookCTA'
import PageBanner from '../components/PageBanner'
import AboutDoctorWoods from '../components/AboutDoctorWoods'

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="pt-28">
        <PageBanner title="About Me" imageSrc="/images/services-banner.jpeg" />
      </div>

      <AboutDoctorWoods />

      <BookCTA />
    </div>
  )
}

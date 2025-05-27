import Navbar from "@/components/navbar"
import HeroAbout from "@/components/hero-about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <ScrollProgress />
      <Navbar />
      <HeroAbout />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

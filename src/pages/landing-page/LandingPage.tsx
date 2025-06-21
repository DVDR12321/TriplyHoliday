import { CoverVideo } from "./cover-video/CoverVideo"
import { Footer } from "./footer/Footer"
import { Header } from "./header/Header"
import { RecommendedDestinations } from "./recommended-destinations/RecommendedDestinations"

export const LandingPage = () => {
  return <>
    <Header />
    <CoverVideo />
    <RecommendedDestinations />
    <Footer />
  </>
}

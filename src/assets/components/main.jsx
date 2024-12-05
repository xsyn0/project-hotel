import Header from "./Header"
import HeroSection from "./HeroSection"
const Main = () => {
  return (
    <div>
        <Header />
        <div className="max-w-full min-w-md sm mx-auto pt-20 px-6 h-450 bg-color3 ">
            <HeroSection />
        </div>
    </div>
  )
}

export default Main
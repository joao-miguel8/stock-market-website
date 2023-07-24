import './App.css'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import TopMarketTrendingList from '@/components/TopMarketTrendsList'
import FeaturesSection from './components/Features-section'

function App() {
  
  return (
  <div>
    <Header/>
    <HeroSection/>
    <TopMarketTrendingList/>
    <FeaturesSection/>
  </div> 
  )
}

export default App

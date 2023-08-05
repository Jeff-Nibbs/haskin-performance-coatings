import ColorBars from './components/ColorBars'
import LandingPage from './view/LandingPage'

function App() {
  return (
    <div className="font-barlow grid grid-cols-[1fr_3fr] md:grid-cols-[1fr_5fr] grid-rows-[1fr_1fr] w-full h-full overflow-clip bg-[#F1E4CF]">
      <ColorBars />
      <LandingPage />
    </div>
  )
}

export default App

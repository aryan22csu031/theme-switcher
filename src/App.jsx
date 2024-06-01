import { ThemeProvider } from './contexts/theme'
import './App.css'
import { useEffect, useState } from 'react'
import Themebtn from './components/Themebtn';
import Card from './components/Card';

function App() {
  const [Mode, setMode] = useState("light");
  const lightmode = () => {
    setMode("light");
  }
  const darkmode = () => {
    setMode("dark");
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(Mode);
  },[Mode])

  return (
    <ThemeProvider value={{Mode, darkmode, lightmode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Themebtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

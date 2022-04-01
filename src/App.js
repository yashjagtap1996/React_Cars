import React from 'react'
import photo from './API/Photos'
import Footer from './component/Footer'
import Gallery from './component/Gallery'
import Header from './component/Header'
import LeftSide from './component/LeftSide'
import Navbar from './component/Navbar'
import Overview from './component/Overview'
import RightSide from './component/RightSide'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <LeftSide />
      <Overview />
      <RightSide />
      <Gallery photo={photo} />
      <Footer />
    </>
  )
}

export default App

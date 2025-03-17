import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Body1 from './components/Body1'
import ImageGrid from './components/ImageGrid'
import DonateSection from './components/DonateSection'
import PostSection from './components/PostSection'
import Blogs from './components/Blogs'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
     <Navbar/>  
     <Body1/>
     <ImageGrid/>
     <DonateSection/>
     <PostSection/>
     <Blogs/>
     <Footer/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detail from './pages/Detail'
import Home from './pages/Home'
import Search from './pages/Search'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import PageContainer from './containers/PageContainer'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <PageContainer>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="videos/:id" element={<Detail />} />
          <Route path="search/:keyword" element={<Search />} />
        </Routes>
      </PageContainer>
    </BrowserRouter >
  )
}


export default App

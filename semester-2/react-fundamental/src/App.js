// parent component

import React from 'react'
import MainLayouts from './components/layouts/main.layouts'
import Albums from './components/Albums/main.album'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPost from './components/Posts/main.post'
import DetailPost from './components/Posts/detail.post'
import Home from './components/Home/main.home'

const App = () => {
  return (
    <>
      <MainLayouts>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/albums" element={<Albums title="Albums" />} />
            <Route path="/posts" element={<MainPost title="Posts" />} />
            <Route path="/posts/:id" element={<DetailPost />} />
            <Route path="*" element={<h1>404 not found</h1>} />
          </Routes>
        </Router>
        {/* <Albums title="Image API" description="we fetch random API form third party." /> */}
      </MainLayouts>
    </>
  )
}

export default App
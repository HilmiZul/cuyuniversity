// parent component

import React from 'react'
import MainLayouts from './components/layouts/main.layouts'
import Albums from './components/Albums/main.album'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <MainLayouts>
        <Router>
          <Routes>
            <Route path="/" element={<h1>Home page</h1>} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/posts" element={<h1>Post</h1>} />
            <Route path="*" element={<h1>404 not found</h1>} />
          </Routes>
        </Router>
        {/* <Albums title="Image API" description="we fetch random API form third party." /> */}
      </MainLayouts>
    </>
  )
}

export default App
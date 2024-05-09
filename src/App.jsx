import { Route, Routes } from 'react-router-dom'

// Imports from anthor files
import Home from './Pages/Home.jsx'
import Subscribe from './Pages/Subscribe'
import NewsArctile from './Pages/NewsArctile'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/subscribe' element={<Subscribe />} />
      <Route path='/article/:id' element={<NewsArctile />} />
    </Routes>
    <Footer />
  </div>
)

export default App
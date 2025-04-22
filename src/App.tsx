
import { Provider } from 'react-redux'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './pages/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Categories from './pages/Categories'
import Analytics from './pages/Analytics'
import Transactions from './pages/Transactions'
import NotFound from './pages/NotFound'
import ThemeProvider from './theme/ThemeProvider'
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            {/* Outside MainLayout */}
            <Route path="/login" element={<Login />} />
            {/* Inside MainLayout with Sidebar */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/transactions" element={<Transactions />} />
            </Route>
            {/* Catch-all for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App

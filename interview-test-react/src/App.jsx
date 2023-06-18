import { useMemo } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoute from './routes/routes'

const App = () => useMemo(() => {
  return (
    <Router>
      <AppRoute />
    </Router>
  )
}, []);

export default App

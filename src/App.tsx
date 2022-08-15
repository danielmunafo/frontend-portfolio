import { FC } from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import './App.scss'

const App: FC = () => {
  return <Router>
    <CssBaseline />
    <div>hello worldo</div>
  </Router>
}

export default App

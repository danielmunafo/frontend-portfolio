import { FC } from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import './App.scss'

export const COMPONENT_ID = 'app'
const App: FC = () => {
  return <Router>
    <CssBaseline />
    <div data-testid={COMPONENT_ID}>hello worldo</div>
  </Router>
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { router } from './router/index'

import './styles/basic.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {router.map(route =>
          <Route path={route.path} element={route.element} key={route.path} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

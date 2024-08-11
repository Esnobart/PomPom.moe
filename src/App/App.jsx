import { lazy, Suspense } from 'react';

import './App.css'
import { Loading } from '../Loading/Loading';
import { Routes, Route } from 'react-router-dom';

const MainPage = lazy(() => import('../Pages/MainPage/MainPage'));

function App() {
  return (
    <>
    <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
    </Suspense>
    </>
  )
}

export default App

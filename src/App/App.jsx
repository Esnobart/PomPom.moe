import { lazy, Suspense } from 'react';

import './App.css'
import { Loading } from '../Loading/Loading';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../Header/Header';

const MainPage = lazy(() => import('../Pages/MainPage/MainPage'));
const CharactersList = lazy(() => import('../CharactersList/CharactersList'));
const CharacterPage = lazy(() => import('../Pages/CharacterPage/CharacterPage'));
const ConesPage = lazy(() => import('../Pages/ConesPage/ConesPage'));
const RelicsPage = lazy(() => import('../Pages/RelicsPage/RelicsPage'))

function App() {
  return (
    <>
    <Header />
    <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/characters" element={<CharactersList />} />
          <Route path="/characters/:id" element={<CharacterPage />} />
          <Route path="/cones" element={<ConesPage />} />
          <Route path="/relics" element={<RelicsPage />} />
        </Routes>
    </Suspense>
    </>
  )
}

export default App

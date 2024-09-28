import { lazy, Suspense } from 'react';

import './App.css'
import { Loading } from '../Loading/Loading';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../Header/Header';

const MainPage = lazy(() => import('../Pages/MainPage/MainPage'));
const CharactersPage = lazy(() => import('../Pages/CharactersPage/CharacterPage'));
const CharacterPage = lazy(() => import('../Pages/CharacterPage/CharacterPage'));
const ConesPage = lazy(() => import('../Pages/ConesPage/ConesPage'));
const RelicsPage = lazy(() => import('../Pages/RelicsPage/RelicsPage'));
const PlanarsPage = lazy(() => import('../Pages/PlanarsPage/PlanarsPage'));

function App() {
  return (
    <>
    <Header />
    <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/characters/:id" element={<CharacterPage />} />
          <Route path="/cones" element={<ConesPage />} />
          <Route path="/relics" element={<RelicsPage />} />
          <Route path="/planars" element={<PlanarsPage />} />
        </Routes>
    </Suspense>
    </>
  )
}

export default App

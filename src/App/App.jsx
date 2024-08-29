import { lazy, Suspense } from 'react';

import './App.css'
import { Loading } from '../Loading/Loading';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../Header/Header';

const MainPage = lazy(() => import('../Pages/MainPage/MainPage'));
const CharactersList = lazy(() => import('../CharactersList/CharactersList'));
const CharacterPage = lazy(() => import('../Pages/CharacterPage/CharacterPage'));

function App() {
  return (
    <>
    <Header />
    <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/characters" element={<CharactersList />} />
          <Route path="/characters/:id" element={<CharacterPage />} />
        </Routes>
    </Suspense>
    </>
  )
}

export default App

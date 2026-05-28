import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'

const Home = lazy(() => import('./pages/Home'))
const SolutionsPage = lazy(() => import('./pages/Solutions'))
const Market = lazy(() => import('./pages/Market'))
const HeartbeatCocoon = lazy(() => import('./pages/HeartbeatCocoon'))
const DadQuest = lazy(() => import('./pages/DadQuest'))
const SafeBox = lazy(() => import('./pages/SafeBox'))
const WarmMom = lazy(() => import('./pages/WarmMom'))
const FamilyBridge = lazy(() => import('./pages/FamilyBridge'))
const Cases = lazy(() => import('./pages/Cases'))

export default function App() {
  const location = useLocation()

  return (
    <Layout>
      <Suspense fallback={null}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/market" element={<Market />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/heartbeat" element={<HeartbeatCocoon />} />
            <Route path="/solutions/dadquest" element={<DadQuest />} />
            <Route path="/solutions/safebox" element={<SafeBox />} />
            <Route path="/solutions/warmmom" element={<WarmMom />} />
            <Route path="/solutions/familybridge" element={<FamilyBridge />} />
            <Route path="/cases" element={<Cases />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </Layout>
  )
}

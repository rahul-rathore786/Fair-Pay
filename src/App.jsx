import { Routes, Route } from 'react-router-dom'
import {
  Home,
  JobListing,
  MyProjects,
  Chats,
  ViewBidders,
  MyBids,
  MyJobs,
  RecentConversations,
  DisputedProjects,
} from './pages'
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import { isWalletConnected, loadData } from './services/blockchain'
import AuthenticatedRoutes from './utils/AuthenticatedRoutes'
import Authenticate from './pages/Authenticate'
import { useGlobalState } from './store'
import { CreateJob, UpdateJob, CompleteJob, PlaceBid, RaiseDispute, ResolveDispute } from './components'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const [dataUpdate] = useGlobalState('dataUpdate')
  
  useEffect(() => {
    isWalletConnected()
  }, [connectedAccount])

  useEffect(() => {
    if (dataUpdate > 0) {
      loadData()
    }
  }, [dataUpdate])

  useEffect(() => {
    const handleAccountsChanged = () => {
      window.location.reload()
    }

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged)
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged)
      }
    }
  }, [])

  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <div className="pt-16 md:pt-20"> {/* Padding top to accommodate fixed header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/joblisting/:id" element={<JobListing />} />
          <Route path="/myprojects" element={<MyProjects />} />
          <Route path="/viewbidders/:id" element={<ViewBidders />} />
          <Route path="/mybids" element={<MyBids />} />
          <Route path="/myjobs" element={<MyJobs />} />
          <Route path="/authenticate" element={<Authenticate />} />

          <Route element={<AuthenticatedRoutes />}>
            <Route path="/messages" element={<RecentConversations />} />
            <Route path="/chats/:id" element={<Chats />} />
          </Route>

          <Route path="/disputed-projects" element={<DisputedProjects />} />
        </Routes>
      </div>

      <CreateJob />
      <UpdateJob />
      <CompleteJob />
      <PlaceBid />
      <RaiseDispute />
      <ResolveDispute />

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="shadow-elevated rounded-lg overflow-hidden"
        bodyClassName="text-sm font-medium"
      />
    </div>
  )
}

export default App

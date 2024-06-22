import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './pages/auxiliary/Error'
import AuthProvider from './pages/auxiliary/AuthProvider'
import MainContainer from './pages/principal/MainContainer'
import Home from './pages/principal/public/Home'
import AddJob from './pages/principal/private/AddJob'
import PostedJobs from './pages/principal/private/PostedJobs';
import Bids from './pages/principal/private/Bids';
import BidRequests from './pages/principal/private/BidRequests';
import SignIn from './pages/principal/authentication/SignIn';
import SignUp from './pages/principal/authentication/SignUp';
import Details from './pages/principal/public/Details'
import Private from './pages/auxiliary/Private';
import JobDetails from './pages/principal/private/JobDetails'
import Update from './pages/principal/private/Update'



const allRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer></MainContainer>,
    errorElement: <Error></Error>,
    children: [

      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <Details></Details>
      },
      {
        path: "/job/:id",
        element: <Private><JobDetails></JobDetails></Private>,
        loader: ({ params }) => fetch(`https://b8a11-server-side-mehedihasan712277.vercel.app/job/${params.id}`)
      },
      {
        path: "/addJob",
        element: <Private><AddJob></AddJob></Private>
      },
      {
        path: "/postedJobs/:id",
        element: <Private><PostedJobs></PostedJobs></Private>,
        loader: ({ params }) => fetch(`https://b8a11-server-side-mehedihasan712277.vercel.app/posted/${params.id}`)
      },
      {
        path: "/update/:id",
        element: <Private><Update></Update></Private>,
        loader: ({ params }) => fetch(`https://b8a11-server-side-mehedihasan712277.vercel.app/job/${params.id}`)
      },
      {
        path: "/bids",
        element: <Private><Bids></Bids></Private>
      },
      {
        path: "/bidRequests",
        element: <Private><BidRequests></BidRequests></Private>
      },
      {
        path: "/login",
        element: <SignIn></SignIn>
      },
      {
        path: "/register",
        element: <SignUp></SignUp>
      }
    ]
  }
])

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={allRoute}></RouterProvider>
    </AuthProvider>
  )
}

export default App
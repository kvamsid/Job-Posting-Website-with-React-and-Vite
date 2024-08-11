import React from 'react'
// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import HomeCards from "./components/HomeCards"
// import JobListings from "./components/JobListings"
// import ViewAllJobs from "./components/ViewAllJobs"
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' index element={<JobsPage />} />
      <Route path='/jobs/:id' index element={<JobPage />} loader={jobLoader} />
      <Route path='*' element={<NotFoundPage />}></Route>
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
}

export default App
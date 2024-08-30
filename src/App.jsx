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
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'


const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob),
    });
    return;
  }

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  }
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job),
    });
    return;
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' index element={<JobsPage />} />
        <Route path='/add-job' index element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='/jobs/:id' index element={<JobPage deleteJobSubmit={deleteJob} />} loader={jobLoader} />
        <Route path='*' element={<NotFoundPage />}></Route>
        <Route path='/edit-job/:id' index element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App
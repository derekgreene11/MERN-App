// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages
import TopicPage from './pages/TopicPage';
import HomePage from './pages/HomePage';
import CsCourses from './pages/CsCourses';
import AddCoursePageForm from './pages/AddCoursePageForm';
import EditCoursePageForm from './pages/EditCoursePageForm';

// Define the function that renders the content in Routes, using State.
function App() {
  // Define state for courses
  const [course, setCourseToEdit] = useState([])

  return (
    <>
      <BrowserRouter>
        <header>
          <img src="android-chrome-192x192.png" alt="Derek Greene" />
          <h1>Web Development Portfolio</h1>
          <p className="appH">Derek Greene</p>
        </header>

        <Navigation />

        <main>
          <section>
            <Routes>
              {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
              <Route path="/TopicPage" element={<TopicPage />} />
              <Route path="/" element={<HomePage />} />
              {/* Pass courses state and updateCourses function to CsCourses and AddCoursePageForm */}
              <Route path="/CsCourses" element={<CsCourses setCourse={setCourseToEdit} />}
              />
              <Route path="/create" element={<AddCoursePageForm />}
              />
              <Route path="/update" element={<EditCoursePageForm courseToEdit={course}/>} />
            </Routes>
          </section>
        </main>

        <footer>
          <p>&#169; 2024 Derek Greene</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;


import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import { ClerkProvider, SignIn, SignUp, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Home from './pages/Home'
import CourseList from './pages/CourseList'
import CourseDetail from './pages/CourseDetail'
import Dashboard from './pages/Dashboard';
import { useEffect, useState } from 'react';
import axios from 'axios';


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

console.log("Clerk Publishable Key:", PUBLISHABLE_KEY);





function App() {
    let [coursesData, setCoursesData] = useState([]);
    useEffect(() => {
          axios.get('http://localhost:8081/course-details')
          .then((res) => {
            setCoursesData(res.data);
          })
          .catch((err) => console.error("Error fetching courses:", err));
    }, []);
  return (
    <>
      
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/courses' element={<CourseList courses={coursesData} />} />
            <Route path='/course-detail/:userid' element={<CourseDetail />}/>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              path='/dashboard'
              element={
                <>
                  <SignedIn>
                    <Dashboard />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />


          </Routes>
        </Router>
        

      
    </>
  )
}

export default App

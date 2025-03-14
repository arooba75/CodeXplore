
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import CourseList from './pages/CourseList'
import CourseDetail from './pages/CourseDetail'


const coursesData = [
  {
    id: 1,
    image:"/images/javascript.jpg",
    title: "Introduction to JavaScript",
    trainer: "Bushra Pathan",
    price:"3000"
  },
  {
    id: 2,
    image:"/images/cloud.jpg",
    title: "Cloud Computing Essentials",
    trainer: "Arooba Sajjan",
    price:"3500"
  }
];

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<CourseList courses={coursesData} />} />
          <Route path='/course-detail/:userid' element={<CourseDetail />}/>
          
        </Routes>
      </Router>
    </>
  )
}

export default App

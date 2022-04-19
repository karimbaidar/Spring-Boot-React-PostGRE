import './App.css';
 import Home from './Component/Home';
import Allcourse from './Component/AllCourses';
import AddCourse from './Component/AddCourse';
import Header from './Component/Header';
import UpdateCoursing from './Component/UpdateCoursing';

import { Container, Row, Col } from 'reactstrap';
import {
  BrowserRouter as Router,
  
  Route,
  
} from "react-router-dom";
import Menu from './Component/Menu';

function App() {
  return (
    <div>
      <Router>

        <Container>

          <Header />

    

          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>
              <Route path="/" component={Home} exact></Route>
              <Route path="/add-course" component={AddCourse} exact></Route>
              <Route path="/view-courses" component={Allcourse} exact></Route>
              <Route path="/update-courses" component={UpdateCoursing} exact></Route>
            </Col>

          </Row>


        </Container>


      </Router>



    </div>






  );
}

export default App;

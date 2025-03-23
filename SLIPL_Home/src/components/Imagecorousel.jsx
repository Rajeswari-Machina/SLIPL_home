import Carousel from 'react-bootstrap/Carousel';

import prev0 from '../assets/images/prev0.jpg';
import prev1 from '../assets/images/prev1.jpg';
import prev2 from '../assets/images/prev2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function UncontrolledExample() {
  return(
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={prev0}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={prev1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={prev2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
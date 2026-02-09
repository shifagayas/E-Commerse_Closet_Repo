import Exclusiveitems from '../assets/images/Exclusiveitems.png'
import ExquisiteCollection from '../assets/images/ExquisiteCollection.png'
import Exclusiveshoes from '../assets/images/Exclusiveshoes.png'
import Newarrivals from '../assets/images/Newarrivals.png'
import { Row, Col } from 'react-bootstrap';


const categories = [
  {
    title: "Exclusive Shoes",
    offer: "PRICE 20% OFF",
    code: "VATR3920",
    image: Exclusiveshoes,
    large: true
  },
  {
    title: "Exquisite Styles & Collections",
    offer: "PRICE 20% OFF",
    code: "VATR3920",
    image: ExquisiteCollection,
    large: true
  },
  {
    title: "New Arrivals",
    offer: "PRICE 20% OFF",
    code: "VATR3920",
    image: Newarrivals
  },
  {
    title: "Exclusive Items",
    offer: "PRICE 20% OFF",
    code: "VATR3920",
    image: Exclusiveitems
  }
];


function CategoryCard({ item }) {
  return (
    <div
      className="category-card"
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <h2 className='item-title'>{item.title}</h2>

      <div className="offer-box">
        <h6>{item.title}</h6>
        <span>{item.offer}</span>
        <small>DISCOUNT CODE - {item.code}</small>
      </div>
    </div>
  );
}

export default function CategoryGrid() {
  return (
    <div className="gridcontainer">
      
      <h4>THIS WEEKS HIGHLIGHTS</h4>
    
      {/* ROW 1 */}
      <Row className="g-3 mb-3">
        <Col md={5}>
          <CategoryCard item={categories[0]} />
        </Col>

        <Col md={7}>
          <CategoryCard item={categories[1]} />
        </Col>
      </Row>

      {/* ROW 2 */}
      <Row className="g-3">
        <Col md={7}>
          <CategoryCard item={categories[2]} />
        </Col>

        <Col md={5}>
          <CategoryCard item={categories[3]} />
        </Col>
      </Row>

    </div>
  );
}

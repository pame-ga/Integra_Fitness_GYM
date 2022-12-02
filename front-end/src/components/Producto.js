import Card from 'react-bootstrap/Card';
import "../css/Producto.css";
import cre1 from "../image/cre1.png";
import cre2 from "../image/cre2.png";
import cre3 from "../image/cre3.png";
import cre4 from "../image/cre4.png";

function Productos() {
  return (
    
    <div className='container'>
      <div className='row my-5'>
      <div className='col-12'>
      <div className='card-group'>
      <Card className='card card-prod'>
      <Card.Img variant="top" src={cre1} className='card-img-top card-img-top-prod' />
         <Card.Body>
               <Card.Title>Creatine Phosphate</Card.Title>
                <div class="precio-col-features">
                <p className='pre'>precio:$800</p>
                </div>

             </Card.Body>
           </Card>
           <Card className='card card-prod'>
             <Card.Img variant="top" src={cre2} className='card-img-top card-img-top-prod' />
             <Card.Body>
               <Card.Title>Planetinum Creatine</Card.Title>
               <div class="precio-col-features">
                <p className='pre'>precio:$1,500</p>
                </div>
             </Card.Body>
           </Card>
           <Card className='card card-prod'>
             <Card.Img variant="top" src={cre3} className='card-img-top card-img-top-prod' />
             <Card.Body>
               <Card.Title>Creatine Xtreme</Card.Title>
               <div class="precio-col-features">
                <p className='pre'>precio:$1,000</p>
                </div>
             </Card.Body>
           </Card>
           <Card className='card card-prod'>
             <Card.Img variant="top" src={cre4} className='card-img-top card-img-top-prod' />
             <Card.Body>
               <Card.Title>Creatine Powder</Card.Title>
               <div class="precio-col-features">
                <p className='pre'>pecio:$1,200</p>
                </div>
             </Card.Body>
           </Card>
    </div>
    </div>
    </div>
    </div>
    
  );
}
  
  export default Productos;
import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import CardBody from "../../pages/Home/CardTemp";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../pages/Home/CardStyle.css";
function Home({data}) {
  return (
    <Container>
          <Row xs={1} md={2} lg={3} className="row">
              {data.map((item, index) => (
            <Col key={index} className="element_center mb-4">
              {/* <Card> */}
                <CardBody 
                img= {item.image}
                heading= {item.title}
                text= {item.text} 
                link= {item.link} />
              {/* </Card> */}

            </Col>
                ))}
          </Row>
    </Container>
  )
}

const ParentComponent = () => {
  const cardData = [
    {
      title: 'Career Catalyst',
      image: '/images/careerCatalyst.png',
      text: 'Elevate your career guidance services with our automated platform. Revolutionize the way you empower clients. Contact us now!',
      link: '/templates/career'
    },
    {
      title: 'Card 2',
      image: '/images/datingApp.png',
      text: 'Spread the essence of love through QuirkMail. Start mailing and get the best results. Attract your customer and make them enjoy!',
      link: '/templates/product'
    },
    {
      title: 'Food Delivery',
      image: '/images/Food.png',
      text: 'Elevate your elegance through our automated mailing system and increase efficiency quickly and efortlessly. Start your journey now!',
    },
    {
      title: 'Card 2',
      image: '/images/Product.png',
      text: 'This is Card 2',
    },
    {
      title: 'Card 2',
      image: '/images/Shoe.png',
      text: 'This is Card 2',
    },
    {
      title: 'Card 2',
      image: '/images/Tech.png',
      text: 'This is Card 2',
    },
  ];
  return <Home data={cardData} />;
};
// function Home() {
//   return (


//     <Container>
//       <Row>
//         <Col sm={12} md={6} xl={4} className="mb-4 element_center">
//           <Card>
//             <CardBody
//             img= '/images/careerCatalyst.png'
//             heading="Career Catalyst"
//             text="Create a career catalyst email to promote your career guiding courses in an unique way!" />
//           </Card>
//         </Col>
//         <Col sm={12} md={6} xl={4} className="mb-4">
//           <Card>
//             <CardBody
//             img= '/images/datingApp.png'
//             heading="Dating App"
//             text="Create a dating app promoting mail which creates an impact and converts more customers." />
//           </Card>
//         </Col>
//         <Col sm={12} md={6} xl={4} className="mb-4">
//           <Card>
//             <CardBody />
//           </Card>
//         </Col>
//         <Col sm={12} md={6} xl={4}  className="mb-4">
//           <Card>
//             <CardBody />
//           </Card>
//         </Col>

//         <Col md={4} className="mb-4">
//           <Card>
//             <CardBody />
//           </Card>
//         </Col>
//       </Row>
//     </Container>
         

//   );
// }

// export default Home;
export default ParentComponent;

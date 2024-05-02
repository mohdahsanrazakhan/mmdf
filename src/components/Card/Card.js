import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample({imgUrl, title, desc, solution}) {
  return (
    <>
      <style type="text/css">
        {`
          .customCard {
            background-color: rgba(128, 128, 128, 0.5) !important;
            color: white !important;
            border: 2px solid whitesmoke !important;
            transition: all 0.5s ease-in-out;
          }
          .customCard:hover {
            transform: scale(1.05);
          }
          .customImg {
            height: 180px;
          }
          .customFooter {
            border-color: whitesmoke !important;
          }
          .text-muted {
            color: whitesmoke !important;
          }
        `}
      </style>
      <Card className='customCard'>
        <Card.Img variant="top" src={imgUrl} className='customImg' />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
        <Card.Footer className='customFooter'>
          <small className="text-muted">{solution}</small>
        </Card.Footer>
      </Card>
    </>
  );
}

export default GroupExample;
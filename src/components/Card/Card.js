import Card from 'react-bootstrap/Card';

function GroupExample({imgUrl, title, desc, solution}) {
  return (
    <>
      <style type="text/css">
        {`
          .customCard {
            background-color: rgba(10, 10, 10, 0.5) !important;
            color: white !important;
            border: 2px solid goldenrod !important;
            transition: all 0.5s ease-in-out;
          }
          .customCard:hover {
            transform: scale(1.05);
            box-shadow: 0 0 12px rgba(218, 165, 32, 0.8);
          }
          .customImg {
            height: 180px;
          }
          .customTitle {
            color: goldenrod;
          }
          .customFooter {
            border-color: goldenrod !important;
          }
          .text-muted {
            color: whitesmoke !important;
          }
        `}
      </style>
      <Card className='customCard'>
        <Card.Img variant="top" src={imgUrl} className='customImg' />
        <Card.Body>
          <Card.Title className='customTitle'>{title}</Card.Title>
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
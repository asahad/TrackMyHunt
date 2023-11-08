// JobCard.jsx
import { Button, Card, Row, Col } from "react-bootstrap";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./Constants";
import { BiTrash } from "react-icons/bi";

const JobCard = ({ job, status }) => {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { job },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    [job]
  );
  return (
    <>
      <Card ref={dragRef} style={{ opacity }} className={`status job-card`}>
        <Card.Body>
          <Row>
            <Col xs={6}>
              <Card.Title>{job.company}</Card.Title>
              <Card.Text>{job.position}</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Card.Text>{job.daysAgo} days ago</Card.Text>
            </Col>
            <Col xs={6}>
              <Card.Text>
                <BiTrash />
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
export default JobCard;

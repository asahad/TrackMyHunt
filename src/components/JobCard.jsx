import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useDrag } from "react-dnd";
import { BiTrash } from "react-icons/bi";

const JobCard = ({ job, status, onDelete }) => {
  const [, drag] = useDrag({
    type: "JOB_CARD",
    item: { job, status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Card ref={drag} className="job-card">
      <Card.Body>
        <Row>
          <Col xs={10}>
            <Card.Title>{job.company}</Card.Title>
            <Card.Text>{job.position}</Card.Text>
            <Card.Text>{job.daysAgo} days ago</Card.Text>
          </Col>
          <Col xs={2} className="text-right delete-icon">
            <BiTrash onClick={() => onDelete(status, job)} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default JobCard;

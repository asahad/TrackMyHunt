import React, { useState } from "react";
import JobCard from "./JobCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./Constants";

const JobBoard = () => {
  // Sample data
  const [jobData, setJobData] = useState({
    wishlist: [
      { company: "Company B", position: "Designer", daysAgo: 5 },
      { company: "Company B", position: "Designer", daysAgo: 5 },
      { company: "Company B", position: "Designer", daysAgo: 5 },
    ],
    // ... other jobs

    interviewed: [
      { company: "Company B", position: "Designer", daysAgo: 5 },
      { company: "Company B", position: "Designer", daysAgo: 5 },
      { company: "Company B", position: "Designer", daysAgo: 5 },
      // ... other jobs
    ],
    accepted: [
      { company: "Company B", position: "Designer", daysAgo: 5 },
      { company: "Company B", position: "Designer", daysAgo: 5 },
      { company: "Company B", position: "Designer", daysAgo: 5 },
    ],
    rejected: [
      { company: "Company B", position: "Designer", daysAgo: 5 },
      { company: "Company B", position: "Designer", daysAgo: 5 },
      { company: "Company B", position: "Designer", daysAgo: 5 },
      // ... other jobs
    ],
  });

  const handleDropJob = (status, droppedJob) => {
    // Basic logic to handle moving the job to the new category.
    const updatedData = { ...jobData };
    Object.keys(updatedData).forEach((key) => {
      updatedData[key] = updatedData[key].filter((job) => job !== droppedJob);
    });
    updatedData[status].push(droppedJob);
    setJobData(updatedData);
  };

  const JobCategory = ({ status }) => {
    const [, dropRef] = useDrop({
      accept: ItemTypes.CARD,
      drop: (item) => handleDropJob(status, item.job),
    });

    return (
      <div ref={dropRef}>
        <h2>{status.charAt(0).toUpperCase() + status.slice(1)}</h2>
        <Button variant="primary" size="lg" className="job-add-button">
          ➕
        </Button>
        {jobData[status].map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    );
  };

  return (
    <>
      <Container fluid className="job-board">
        <Row>
          {Object.keys(jobData).map((status) => (
            <Col key={status} lg="2" md="4" sm="6" xs="12" className={status}>
              <JobCategory status={status} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default JobBoard;

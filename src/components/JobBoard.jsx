import JobCard from "./JobCard";
import { Container, Row, Col } from "reactstrap";

const JobBoard = () => {
  // Sample data
  const jobs = {
    wishlist: [
      { company: "Company A", position: "Developer", daysAgo: 2 },
      // ... other jobs
    ],
    applied: [
      { company: "Company B", position: "Designer", daysAgo: 5 },
      // ... other jobs
    ],
    interviewed: [
      { company: "Company B", position: "Designer", daysAgo: 5 },
      // ... other jobs
    ],
    accepted: [
      { company: "Company B", position: "Designer", daysAgo: 5 },
      // ... other jobs
    ],
    rejected: [
      { company: "Company B", position: "Designer", daysAgo: 5 },
      // ... other jobs
    ],
  };

  return (
    <Container fluid className="job-board">
      <Row>
        {Object.keys(jobs).map((status) => (
          <Col key={status} lg="2" md="4" sm="6" xs="12" className={status}>
            <h2>{status.charAt(0).toUpperCase() + status.slice(1)}</h2>
            {jobs[status].map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default JobBoard;

import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import JobForm from "./JobForm";

const JobBoard = () => {
  const [jobData, setJobData] = useState({
    wishlist: [],
    applied: [],
    interviewed: [],
    accepted: [],
    rejected: [],
  });

  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const storedJobs = localStorage.getItem("jobData");
    if (storedJobs) {
      setJobData(JSON.parse(storedJobs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("jobData", JSON.stringify(jobData));
  }, [jobData]);

  const moveJob = (job, sourceCategory, targetCategory) => {
    setJobData((prevData) => {
      const sourceJobs = prevData[sourceCategory].filter((j) => j !== job);
      const targetJobs = [job, ...prevData[targetCategory]];
      return {
        ...prevData,
        [sourceCategory]: sourceJobs,
        [targetCategory]: targetJobs,
      };
    });
  };

  const addJob = (newJob) => {
    if (selectedCategory) {
        setJobData(prevData => ({
            ...prevData,
            [selectedCategory]: [...prevData[selectedCategory], newJob]
        }));
        setShowForm(false);
    }
};
  const deleteJob = (category, jobToDelete) => {
    setJobData((prevData) => ({
      ...prevData,
      [category]: prevData[category].filter((job) => job !== jobToDelete),
    }));
  };

  const JobCategory = ({ category }) => {
    const [, drop] = useDrop({
      accept: "JOB_CARD",
      drop: (item) => moveJob(item.job, item.status, category),
    });

    return (
      <div ref={drop} className="job-category">
        <h5 style={{ textAlign: "center" }}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h5>
        <Button
          variant="primary"
          onClick={() => {
            setShowForm(true);
            setSelectedCategory(category);
          }}
          className="job-add-button"
        >
          ➕
        </Button>
        {jobData[category].map((job, index) => (
          <JobCard
            key={index}
            job={job}
            status={category}
            onDelete={() => deleteJob(category, job)}
          />
        ))}
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      {showForm && (
        <div className="form-modal">
          <JobForm onSave={addJob} onDiscard={() => setShowForm(false)} />
        </div>
      )}
      <Container fluid className="job-board">
        <Row>
          {Object.keys(jobData).map((category) => (
            <Col key={category} lg={2} md={4} sm={6} xs={12}>
              <JobCategory category={category} />
            </Col>
          ))}
        </Row>
      </Container>
    </DndProvider>
  );
};

export default JobBoard;

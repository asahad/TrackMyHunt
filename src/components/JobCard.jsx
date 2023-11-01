// JobCard.jsx

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.company}</h3>
      <p>{job.position}</p>
      <p>{job.daysAgo} days ago</p>
    </div>
  );
}

export default JobCard;

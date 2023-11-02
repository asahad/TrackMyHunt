// JobCategory.jsx
import { useDrop } from "react-dnd";
import { ItemTypes } from "./Constants";
import JobCard from "./JobCard";

const JobCategory = ({ status, jobs, onDropJob }) => {
  const [, dropRef] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item) => onDropJob(status, item.job),
  });
  return (
    <div ref={dropRef}>
      <h2>{status.charAt(0).toUpperCase() + status.slice(1)}</h2>
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};
export default JobCategory;

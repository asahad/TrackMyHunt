// JobCard.jsx
import { Card } from 'react-bootstrap';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './Constants';

const JobCard=({ job })=> {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { job },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    }),
    [job]
  );
  return (
    <Card 
      ref={dragRef} 
      style={{ opacity }}
      className="job-card mb-3"
    >
      <Card.Body>
        <Card.Title>{job.company}</Card.Title>
        <Card.Text>{job.position}</Card.Text>
        <Card.Text>{job.daysAgo} days ago</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default JobCard;

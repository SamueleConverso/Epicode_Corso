import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";

function Favourites() {
  const favJobs = useSelector((state) => {
    return state.favourites.jobs;
  });
  return (
    <ListGroup className="text-center mt-5">
      {favJobs.map((job, i) => {
        return <ListGroup.Item key={i}>{job}</ListGroup.Item>;
      })}
    </ListGroup>
  );
}

export default Favourites;

import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Favourites() {
  const favJobs = useSelector((state) => {
    return state.favourites.jobs;
  });

  return (
    <ListGroup className="text-center mt-5">
      {favJobs.map((job, i) => {
        return (
          <Link key={i} to={`/${job}`}>
            <ListGroup.Item>{job}</ListGroup.Item>
          </Link>
        );
      })}
    </ListGroup>
  );
}

export default Favourites;

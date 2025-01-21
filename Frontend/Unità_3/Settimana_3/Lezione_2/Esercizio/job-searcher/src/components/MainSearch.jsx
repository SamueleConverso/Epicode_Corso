import { useState } from "react";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobsAction } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  //const [jobs, setJobs] = useState([]);

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const jobsArray = useSelector((state) => {
    return state.getCompany.jobs;
  });

  const isError = useSelector((state) => {
    return state.getCompany.error;
  });

  const isLoading = useSelector((state) => {
    return state.getCompany.isLoading;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await fetch(baseEndpoint + query + "&limit=20");
    //   if (response.ok) {
    //     const { data } = await response.json();
    //     console.log(data);
    //     setJobs(data);
    //   } else {
    //     alert("Error fetching results");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    dispatch(getJobsAction(baseEndpoint, query));
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h1 className="display-1">Remote Jobs Search</h1>
            <Link to="/favourites">Favourites</Link>
          </Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="type and press Enter"
              />
            </Form>
            {isLoading && <Spinner animation="grow" className="mt-4" />}
          </Col>
          {!isError && (
            <Col xs={10} className="mx-auto mb-5">
              {jobsArray.map((jobData) => (
                <Job key={jobData._id} data={jobData} />
              ))}
            </Col>
          )}
        </Row>
        {isError && (
          <span className="text-danger">Errore nel recupero dati...</span>
        )}
      </Container>
    </>
  );
};

export default MainSearch;

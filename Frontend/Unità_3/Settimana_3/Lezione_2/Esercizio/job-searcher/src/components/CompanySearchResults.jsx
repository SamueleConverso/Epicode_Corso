import { useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyAction } from "../redux/actions";

const CompanySearchResults = () => {
  //const [jobs, setJobs] = useState([]);
  const params = useParams();

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  const dispatch = useDispatch();

  const company = useSelector((state) => {
    return state.getCompany.company;
  });

  const isError = useSelector((state) => {
    return state.getCompany.error;
  });

  const isLoading = useSelector((state) => {
    return state.getCompany.isLoading;
  });

  useEffect(() => {
    dispatch(getCompanyAction(baseEndpoint, params.company));
    //getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const getJobs = async () => {
  //   try {
  //     const response = await fetch(baseEndpoint + params.company);
  //     if (response.ok) {
  //       const { data } = await response.json();
  //       setJobs(data);
  //     } else {
  //       alert("Error fetching results");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {isError && (
            <span className="text-danger">Errore nel recupero dati...</span>
          )}
          {isLoading && <Spinner animation="grow" className="mt-4" />}
          {!isError &&
            company.map((jobData) => <Job key={jobData._id} data={jobData} />)}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;

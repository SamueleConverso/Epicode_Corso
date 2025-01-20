import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  const [isFav, setIsFav] = useState(false);
  //const [showBtn, setShowBtn] = useState(true);

  const location = useLocation();

  const needsToSetStar = function () {
    if (isFav) {
      return "⭐";
    } else if (!isFav) {
      return "✡️";
    } else {
      return "";
    }
  };

  return (
    <Row
      className="mx-0 mt-3 p-3 align-items-center"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={4}>
        {location.pathname === "/" ? (
          <Button
            type="button"
            onClick={() => {
              if (!isFav) {
                dispatch({
                  type: "ADD_TO_FAVOURITE",
                  payload: data.company_name,
                });
              } else {
                dispatch({
                  type: "REMOVE_FROM_FAVOURITES",
                  payload: data.company_name,
                });
              }
              setIsFav(!isFav);
            }}
          >
            {needsToSetStar()}
          </Button>
        ) : (
          <></>
        )}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;

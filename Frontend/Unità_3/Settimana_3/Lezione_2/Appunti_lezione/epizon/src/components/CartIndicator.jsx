import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setUserAction } from "../redux/actions";

const CartIndicator = () => {
  const navigate = useNavigate();
  const content = useSelector((state) => {
    return state.cart.content;
  });

  const name = useSelector((state) => {
    return state.user.name;
  });

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="d-flex justify-content-end my-4">
      {name ? (
        <>
          <span className="d-flex align-items-center me-2">Ciao, {name}!</span>
          <Button
            onClick={() => navigate("/cart")}
            className="d-flex align-items-center"
          >
            <FaShoppingCart />
            <span className="ms-2">{content.length}</span>
          </Button>
        </>
      ) : (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(setUserAction(inputValue));
          }}
        >
          <Form.Control
            type="text"
            placeholder="Fai il login"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </Form>
      )}
    </div>
  );
};

export default CartIndicator;

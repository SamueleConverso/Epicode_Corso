import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const CartIndicator = () => {
  const navigate = useNavigate();
  const content = useSelector((state) => {
    return state.cart.content;
  });

  return (
    <div className="d-flex justify-content-end my-4">
      <Button
        onClick={() => navigate("/cart")}
        className="d-flex align-items-center"
      >
        <FaShoppingCart />
        <span className="ms-2">{content.length}</span>
      </Button>
    </div>
  );
};

export default CartIndicator;

import { useSelector } from "react-redux";

const Footer = () => {
  const booksArray = useSelector((state) => state.book.stock);
  return (
    <footer className="epizon-footer">
      <span className="text-muted">
        Epizon {new Date().getFullYear()}© - Abbiamo {booksArray.length} libri
      </span>
    </footer>
  );
};

export default Footer;

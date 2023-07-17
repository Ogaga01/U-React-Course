import { useNavigate } from "react-router-dom";
import Button from "./Button";

const BackButton = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <Button type="back" onClick={handleNavigate}>
      &larr; Back
    </Button>
  );
};

export default BackButton;

import { ButtonGroup, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const StyledButton = styled(Button)(({ theme }) => ({
  height: "24px",
  padding: "2px",
  color: theme.palette.getContrastText(blueGrey[50]),
  backgroundColor: blueGrey[50],
  borderColor: blueGrey[200],
  "&:hover": {
    backgroundColor: blueGrey[100],
    borderColor: blueGrey[300],
  },
}));

const StyledInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    width: "40px",
    height: "24px",
    fontSize: "14px",
    "& fieldset": {
      borderRadius: 0,
      borderColor: blueGrey[200],
    },
    "&:hover fieldset": {
      borderColor: blueGrey[300],
    },
    "&.Mui-focused fieldset": {
      borderColor: blueGrey[500],
    },
    "& input": {
      textAlign: "center",
      color: blueGrey[700],
    },
  },
});

export default function Counter({ count = 1, setCount }) {
  const handleChange = (event) => {
    setCount(Math.max(Number(event.target.value), 1));
  };
  return (
    <ButtonGroup>
      <StyledButton
        onClick={() => setCount((prev) => prev - 1)}
        disabled={count === 1}
      >
        <RemoveIcon sx={{ height: "14px" }} />
      </StyledButton>
      <StyledInput onChange={handleChange} value={count} />
      <StyledButton onClick={() => setCount((prev) => prev + 1)}>
        <AddIcon sx={{ height: "14px" }} />
      </StyledButton>
    </ButtonGroup>
  );
}

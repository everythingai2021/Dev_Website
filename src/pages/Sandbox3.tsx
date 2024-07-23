
import { Container, Box} from "@mui/material";

const Sandbox3: React.FC = () => {

  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ mb: 5, textAlign: "center" }}>
        <iframe
          src="https://www.online-python.com/"
          allowFullScreen
          width="100%"
          height="500px"
          frameBorder="0"
          title="Scratch Project"
          style={{ maxWidth: '100%' }}
        ></iframe>
      </Box>
    </Container>
  );
};

export default Sandbox3;

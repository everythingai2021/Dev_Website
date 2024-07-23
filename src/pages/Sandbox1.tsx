
import { Container, Box} from "@mui/material";

const Sandbox1: React.FC = () => {

  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ mb: 5, textAlign: "center" }}>
        <iframe
          src="https://onecompiler.com/javascript"
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

export default Sandbox1;

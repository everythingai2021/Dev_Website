import MetaData from "../components/Metadata";
import { Container, Box} from "@mui/material";

const Sandbox1: React.FC = () => {

  return (
    <div>
    <MetaData title="OneComplier | SandBox" description="Welcome to EverythingAI Home" />
  
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
    </div> 
  );
};

export default Sandbox1;

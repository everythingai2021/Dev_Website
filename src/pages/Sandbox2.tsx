import React, { useState } from 'react';
import { Container, Box, Typography, Link } from '@mui/material';

const Sandbox2: React.FC = () => {
  const [src, setSrc] = useState('https://www.programiz.com/javascript/online-compiler/');

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const newSrc = (event.currentTarget as HTMLAnchorElement).getAttribute('data-src');
    setSrc(newSrc || '');
  };

  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ mb: 5 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', background: '#cfd8dc' }}>
          <Typography variant="h1">Sandbox</Typography>
          <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={{ paddingLeft: '1rem' }}>
              <Link href="#" data-src="https://www.programiz.com/javascript/online-compiler/" onClick={handleLinkClick}>
                JavaScript
              </Link>
            </li>
            <li style={{ paddingLeft: '1rem' }}>
              <Link href="#" data-src="https://www.programiz.com/python-programming/online-compiler/" onClick={handleLinkClick}>
                Python
              </Link>
            </li>
            <li style={{ paddingLeft: '1rem' }}>
              <Link href="#" data-src="https://www.programiz.com/sql/online-compiler/" onClick={handleLinkClick}>
                SQL
              </Link>
            </li>
          </ul>
        </div>
      </Box>
      <Box sx={{ mb: 5, textAlign: 'center' }}>
        <iframe
          src={src}
          allowFullScreen
          width="100%"
          height="600px"
          frameBorder="0"
          title="Sandbox Frame"
          style={{ maxWidth: '100%' }}
        ></iframe>
      </Box>
    </Container>
  );
};

export default Sandbox2;

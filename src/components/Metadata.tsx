// src/components/MetaData.tsx
import React from 'react';
import { Helmet } from 'react-helmet';

interface MetaDataProps {
  title: string;
  description: string;
}

const MetaData: React.FC<MetaDataProps> = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export default MetaData;

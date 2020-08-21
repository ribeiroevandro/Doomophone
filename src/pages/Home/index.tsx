import React from 'react';

import { Link } from 'react-router-dom';
import { Title } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Title>Home</Title>
      <Link to="/room">Room</Link>
    </>
  );
};

export default Home;

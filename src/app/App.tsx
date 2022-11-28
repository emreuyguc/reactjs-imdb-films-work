import React from 'react';
import './App.css';
import { Box, Container } from '@chakra-ui/react';
import NavBar from './components/NavBar/NavBar';
import FilmList from './components/FilmList/FilmList';
import { RouterProvider } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <Container bg={"black"}  width={"100%"} maxWidth={"100vw"} px={20} py={4}>
        <RouterProvider router={AppRoutes} />
    </Container>
  );
}

export default App;

import React  from 'react';
import './App.css';
import {ThemeProvider} from '@mui/material/styles';
import { customKaltranTheme } from './theme/theme';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import ProductList from './components/ProductList/ProductList';
import GlobalStyles from './theme/globelStyle';
function MyApp() {

  return (
    <ThemeProvider theme={customKaltranTheme}>
      <>
     <GlobalStyles/>
   
      <Header />
      <Banner />
      <ProductList />
      <ProductList />
      <ProductList />
      <Footer />
      </>
    </ThemeProvider>
  );
}

export default MyApp;

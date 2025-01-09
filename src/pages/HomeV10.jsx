import Layout from "../Layout";
import Header from "../components/header/v1/Header";
import Footer from "../components/header/v1/Footer";
import Banner from "../sections/banner/v10/Banner";
import GridWaveCanvas from "../sections/gridwave/GridWaveCanvas";
import { ToastContainer } from 'react-toastify';


const HomeV10 = () => {
  return (
    <Layout pageTitle="INSO Pre-sale">
      <Header variant="v1" />
      <GridWaveCanvas />
      <Banner /> 
      <ToastContainer />
      <Footer variant="v1" />
    </Layout>
  );
};

export default HomeV10;

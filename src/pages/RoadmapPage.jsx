import Layout from "../Layout";
import Header from "../components/header/v1/Header";
import Footer from "../components/header/v1/Footer";
import Roadmap from "../components/roadmap/Roadmap";

const RoadmapPage = () => {
  return (
    <Layout pageTitle="INSO Pre-sale">
      <Header variant="v1" />
      <Roadmap />
      <Footer variant="v1" />
    </Layout>
  );
};

export default RoadmapPage;

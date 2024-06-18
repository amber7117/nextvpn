import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
       <SeoHead
        title="Home"
        description="Welcome to blackvpn.io - the best VPN for privacy, country, and price. Explore our secure, high-speed servers worldwide."
      />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}

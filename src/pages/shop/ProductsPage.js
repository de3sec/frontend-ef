import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import { ProductWrapper } from "../../components/Product/ProductWrapper";
import { useSelector } from "react-redux";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  font-size: 35px;
`;

const ProductsPage = () => {
  const location = useLocation();

  const cat = location.pathname.split("/")[2];

  const products = useSelector((state) => state.product.products);

  // const t1 = cat.replaceAll("%20", " ")

  const search = location.state;

  return (
    <Container>
      {/* Page Title */}
      <Title>
        {cat
          ? `${cat.charAt(0).toUpperCase() + cat.slice(1)} Category`
          : search
          ? `Products tagged ${search}`
          : "Products"}
      </Title>

      {/* Products */}
      <ProductWrapper categories={cat} search={search !== null && search} />

      {/* Footer */}
      <Footer />
    </Container>
  );
};

export default ProductsPage;

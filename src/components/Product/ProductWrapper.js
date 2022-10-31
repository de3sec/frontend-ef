// import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../../requestMethods";
import Loader from "../loader/loader";
// import Product from "./Product";
import { mobile } from "../../responsive";

import ProductGrid from "./ProductGrid/ProductGrid";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  justify-content: space-between;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 8px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

// const data = [
//   {
//     id: 1,
//     name: 'Earthen Bottle',
//     href: '#',
//     price: '$48',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
//     imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//   },
//   {
//     id: 2,
//     name: 'Nomad Tumbler',
//     href: '#',
//     price: '$35',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
//     imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
//   },
//   {
//     id: 3,
//     name: 'Focus Paper Refill',
//     href: '#',
//     price: '$89',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
//     imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
//   },
//   {
//     id: 4,
//     name: 'Machined Mechanical Pencil',
//     href: '#',
//     price: '$35',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//   },
//   // More products...
// ]

export const ProductWrapper = ({ categories, search }) => {
  const location = useLocation();

  const [products, setProducts] = useState([]);

  // Filter Set State
  const [filters, setFilters] = useState("all");
  const [sort, setSort] = useState("newest");

  // Filters
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await publicRequest.get(
          !categories ? `products` : `products?cat=${categories}`
        );
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [categories]);

  useEffect(() => {
    const getSearchProducts = async () => {
      if (search) {
        try {
          const response = await publicRequest.get(
            `products/search?keyword=${search}`
          );
          setProducts(response.data);
        } catch (error) {
          console.log(error);
        }
      } else {
        return;
      }
    };
    getSearchProducts();
  }, [search]);

  useEffect(() => {
    // categories &&
    //   setFilteredProducts(
    //     products.filter((item) =>
    //       Object.entries(filters).every(([key, value]) =>
    //         item[key].name.includes(value)
    //       )
    //     )
    //   );
    let finalProducts = [...products];
    if (filters && filters !== "all") {
      finalProducts = finalProducts.filter((product) => {
        return product.sizes[0].name.includes(filters);
      });
      console.log(finalProducts);
    }
    setFilteredProducts(finalProducts);
  }, [products, categories, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort(
          (a, b) => +new Date(a.createdAt) - +new Date(b.createdAt)
        )
      );
      setProducts((prev) =>
        [...prev].sort(
          (a, b) => +new Date(a.createdAt) - +new Date(b.createdAt)
        )
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.pprice - b.pprice)
      );
      setProducts((prev) => [...prev].sort((a, b) => a.pprice - b.pprice));
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.pprice - a.pprice)
      );
      setProducts((prev) => [...prev].sort((a, b) => b.pprice - a.pprice));
    }
  }, [sort]);

  const getAllSizes = () => {
    // let sizesArr = products.map((product) => product.sizes[0].name);
    let sizesArr = [];
    let Arr = products.map((product) =>
      product.sizes.forEach((item, idx) => {
        sizesArr.push(item.name);
      })
    );

    sizesArr = sizesArr.filter(
      (item, idx, inputArray) => inputArray.indexOf(item) === idx
    );

    return sizesArr;
  };

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters(value);
  };

  return (
    <Container>
      {location.pathname !== "/" && (
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>

            {/* Size Filter Start */}
            <Select
              name="sizes"
              className="border"
              onChange={handleFilters}
              defaultValue={"default"}
            >
              <Option value="all">Sizes</Option>
              {getAllSizes().map((size, idx) => (
                <Option value={size} key={idx}>
                  {size}
                </Option>
              ))}
            </Select>

            {/* Size Filter End */}
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select
              onChange={(e) => setSort(e.target.value)}
              defaultValue={"default"}
            >
              <Option value={"default"} disabled>
                Sort By:
              </Option>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
      )}

      {/* {!products || (!filteredProducts && <Loader />)}
      {categories || filteredProducts ? (
        <ProductGrid products={filteredProducts}></ProductGrid> ||
        !categories ? (
          <ProductGrid products={products}></ProductGrid>
        ) : (
          <ProductGrid products={products}></ProductGrid>
        )
      ) : (
        <ProductGrid products={products}></ProductGrid>
      )} */}

      {categories || filteredProducts || sort || search ? (
        <ProductGrid products={filteredProducts}></ProductGrid>
      ) : (
        <ProductGrid products={products}></ProductGrid>
      )}
    </Container>
  );
};

import { useState } from "react";
import { ProductWrapper } from "../../components/Product/ProductWrapper";
import styled from "styled-components";
import { mobile } from "../../responsive";

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
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

export default function Shop() {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters([value]);
  };
  return (
    <div className="bg-white">
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select
            name="sizes"
            onChange={handleFilters}
            defaultValue={"default"}
          >
            <Option value={"default"} disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
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
      <ProductWrapper type={"grid"} />
    </div>
  );
}

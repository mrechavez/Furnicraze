import React, {useState} from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import "../styles/shop.css";
import products from '../assets/data/products'
import ProductsList from "../components/UI/ProductsList";
import useGetData from "../custom-hooks/useGetData";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);


  const handleFilter = (e) => {
    const filterValue = e.target.value;
      if(filterValue==="sofa"){
        const filteredProducts = products.filter((item) => item.category==='sofa');

        setProductsData(filteredProducts);
      }


      if(filterValue==="chair"){
        const filteredProducts = products.filter((item) => item.category==='chair');

        setProductsData(filteredProducts);
      }

      if(filterValue==="screens"){
        const filteredProducts = products.filter((item) => item.category==='screens');

        setProductsData(filteredProducts);
      }

      if(filterValue==="lighting"){
        const filteredProducts = products.filter((item) => item.category==='lighting');

        setProductsData(filteredProducts);
      }

      if(filterValue==="tech"){
        const filteredProducts = products.filter((item) => item.category==='tech');

        setProductsData(filteredProducts);
      }
  };


  

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="chair">Chair</option>
                  <option value="screens">Screens</option>
                  <option value="lighting">Lighting</option>
                  <option value="tech">Tech</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search......"
                 
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No products are found!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
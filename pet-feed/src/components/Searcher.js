import React, { useState } from "react";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import petfeed1 from "../assets/image/petfeed1.jpg";
import "../assets/styles/components/Searcher.css";
import Button from "@mui/material/Button";
import axios from "axios";
export default function Searcher({ onAddProduct }) {
  const [brand, setBrand] = useState("");
  const [product, setProduct] = useState("");
  const [productList, setProductList] = useState([]);
  const getProductList = async (brand_id) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/products/${brand_id}`
      );
      setProductList(response.data);
    } catch (error) {
      console.error("Error fetching ProductList:", error);
    }
  };

  const handleBrandChange = (event) => {
    const selectedBrand = event.target.value;
    setBrand(selectedBrand);
    setProduct(""); // 重置產品選擇
    getProductList(selectedBrand);
  };
  const handleProductChange = (event) => {
    const selectedProduct = event.target.value;
    setProduct(selectedProduct);
  };
  const handleAddClick = async () => {
    if (product) {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/products/ingredients",
          {
            params: { brandId: brand, product_name: product },
          }
        );
        onAddProduct(product, response.data.ingredients);
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    }
  };

  const comparesame = () => {};

  return (
    <div className="display_page">
      <img src={petfeed1} alt="petfeed1" />
      <div className="search">
        <Box sx={{ minWidth: 300, pt: 5 }}>
          <FormControl fullWidth className="selectitem">
            <InputLabel id="demo-simple-select-label">品牌</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleBrandChange}
              value={brand}
              label="品牌"
            >
              <MenuItem value="1">皇家</MenuItem>
              <MenuItem value="Hills">希爾斯</MenuItem>
              <MenuItem value="Nutram">紐頓</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 300, pt: 5 }}>
          <FormControl fullWidth disable={!brand}>
            <InputLabel id="product-select-label">產品</InputLabel>
            <Select
              labelId="product-select-label"
              id="product-select"
              value={product}
              label="產品"
              onChange={handleProductChange}
            >
              {productList.map((product, index) => (
                <MenuItem key={index} value={product}>
                  {product}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Button
          variant="contained"
          className="add"
          sx={{ mt: 5, ml: 10 }}
          onClick={handleAddClick}
          disable={!product}
        >
          新增
        </Button>
      </div>
    </div>
  );
}

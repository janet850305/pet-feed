import React, { useState } from "react";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import petfeed1 from "../assets/image/petfeed1.jpg";
import "../assets/styles/components/Searcher.css";
import Button from "@mui/material/Button";

export default function Searcher({ onAddProduct }) {
  const productsByBrand = {
    Queen: ["L40 體重控制成貓專用乾糧", "S37 絕育成貓專用乾糧"],
    Hills: ["希爾斯產品1", "希爾斯產品2"],
    Nutram: ["紐頓產品1", "紐頓產品2"],
  };
  const [brand, setBrand] = useState("");
  const [product, setProduct] = useState("");
  const handleBrandChange = (event) => {
    const selectedBrand = event.target.value;
    setBrand(selectedBrand);
    setProduct(""); // 重置產品選擇
  };
  const handleProductChange = (event) => {
    const selectedProduct = event.target.value;
    setProduct(selectedProduct);
  };
  const handleAddClick = () => {
    if (product) {
      onAddProduct(product);
      // 可選：重置選擇
      // setBrand("");
      // setProduct("");
    }
  };
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
              <MenuItem value="Queen">皇家</MenuItem>
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
              {brand &&
                productsByBrand[brand].map((product) => (
                  <MenuItem key={product} value={product}>
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

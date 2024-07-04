import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const productData = {
  "L40 體重控制成貓專用乾糧": [
    "脫水禽肉蛋白",
    "蔬菜纖維",
    "玉米",
    "小麥麩質*",
    "玉米麩質",
    "小麥麵粉",
    "水解家禽蛋白",
    "小麥",
    "米",
    "動物脂肪",
    "礦物質",
    "甜菜漿",
    "酵母產品",
    "魚油",
    "洋車前子殼及籽(0.5%)",
    "大豆油",
  ],
  "S37 絕育成貓專用乾糧": [
    "脫水禽肉蛋白",
    "玉米",
    "植物分離蛋白*",
    "植物纖維",
    "動物脂肪",
    "水解動物蛋白",
    "米",
    "小麥",
    "甜菜漿",
    "玉米麩質",
    "酵母菌",
    "礦物質",
    "魚油",
    "果寡糖",
    "大豆油",
  ],
  // 可以添加更多產品...
};

export default function PetfeedTable({ products }) {
  // 找出所有產品中最長的成分列表長度
  const maxIngredientsLength = Math.max(
    ...products.map((product) => productData[product]?.length || 0)
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "primary.main",
            }}
          >
            {products.map((product, index) => (
              <TableCell
                key={index}
                align="center"
                sx={{
                  fontFamily: "Noto Sans TC, sans-serif",
                  fontSize: "1rem",
                  fontWeight: "500",
                  color: "#ffffff",
                  letterSpacing: 2,
                }}
              >
                {product}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: maxIngredientsLength }).map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {products.map((product, productIndex) => (
                <TableCell key={productIndex} align="center">
                  {productData[product]?.[rowIndex] || ""}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

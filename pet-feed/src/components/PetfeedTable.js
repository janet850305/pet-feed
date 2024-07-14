import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function PetfeedTable({ products }) {
  // 找出所有產品中最長的成分列表長度
  const maxIngredientsLength = Math.max(
    ...products.map((product) => product.ingredients.length || 0)
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
                {product.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: maxIngredientsLength }).map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {products.map((product, productIndex) => (
                <TableCell key={productIndex} align="center">
                  {product.ingredients[rowIndex] || ""}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

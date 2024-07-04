// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#bba487",
      light: "#white",
      dark: "#9c8266",
    },
    secondary: {
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "#7b1fa2",
    },
    // 你可以添加自定義顏色
    custom: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Roboto Mono, Arial, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 1000,
    },
    button: {
      textTransform: "none", // 防止按鈕文字自動大寫
    },
  },
  spacing: 8, // 基礎間距單位，默認是 8px
  // 你可以覆蓋任何組件的默認樣式
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          fontWeight: "500",
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;

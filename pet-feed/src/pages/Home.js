import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import petfeed from "../assets/image/petfeed.jpg";
import Button from "@mui/material/Button";
import "../assets/styles/pages/Home.css";
import img1 from "../assets/image/product/img1.jpg";
import img2 from "../assets/image/product/img2.jpg";
import img3 from "../assets/image/product/img3.jpg";
import img4 from "../assets/image/product/img4.jpg";
import img5 from "../assets/image/product/img5.jpg";
import img6 from "../assets/image/product/img6.jpg";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
export default function Home() {
  const navigate = useNavigate();
  const navigateToCompare = () => {
    navigate("/compare");
  };
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    // ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom: "5rem",
  }));

  return (
    <div>
      <Header />

      <div className="firstPage">
        <img src={petfeed} alt="homeimg"></img>
        <div className="rightinfo">
          <div className="intro">
            <div className="introLogo">Healthy</div>
            <div className="introLogo">Pet Choices</div>
          </div>
          <Button
            variant="contained"
            className="goto"
            sx={{ mt: 8, ml: 10, width: 200, fontSize: 15 }}
            onClick={navigateToCompare}
          >
            Go To Compare
          </Button>
        </div>
      </div>
      <div className="suggestpage">
        <Box sx={{ width: "80%", ml: "10vw" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <Item>
                <div className="product">
                  <img src={img1} alt="img1" />
                  <hr></hr>
                  <div className="product_intro">
                    <div className="intro-title">
                      <div>Brand:</div>
                      <div>Name:</div>
                    </div>
                    <div className="content">
                      <div>Origin</div>
                      <div>貓和幼貓</div>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <div className="product">
                  <img src={img2} alt="img2" />
                  <hr></hr>
                  <div className="product_intro">
                    <div className="intro-title">
                      <div>Brand:</div>
                      <div>Name:</div>
                    </div>
                    <div className="content">
                      <div>Hills</div>
                      <div>室內幼貓</div>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <div className="product">
                  <img src={img3} alt="img3" />
                  <hr></hr>
                  <div className="product_intro">
                    <div className="intro-title">
                      <div>Brand:</div>
                      <div>Name:</div>
                    </div>
                    <div className="content">
                      <div>法米納</div>
                      <div>挑嘴成貓</div>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <div className="product">
                  <img src={img4} alt="img4" />
                  <hr></hr>
                  <div className="product_intro">
                    <div className="intro-title">
                      <div>Brand:</div>
                      <div>Name:</div>
                    </div>
                    <div className="content">
                      <div>皇家</div>
                      <div>室內成貓</div>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <div className="product">
                  <img src={img5} alt="img5" />
                  <hr></hr>
                  <div className="product_intro">
                    <div className="intro-title">
                      <div>Brand:</div>
                      <div>Name:</div>
                    </div>
                    <div className="content">
                      <div>Hero</div>
                      <div>益生菌凍乾</div>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <div className="product">
                  <img src={img6} alt="img6" />
                  <hr></hr>
                  <div className="product_intro">
                    <div className="intro-title">
                      <div>Brand:</div>
                      <div>Name:</div>
                    </div>
                    <div className="content">
                      <div>Instinct</div>
                      <div>皇極系列</div>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Footer></Footer>
    </div>
  );
}

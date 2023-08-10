import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useWindowSize } from "./utils/useWindowSize";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

function App() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const sizeWindow = useWindowSize();
  const isMobile = sizeWindow.width < 767.98;

  return (
    <Container maxWidth={"xl"} disableGutters>
      <AppBar position="static" color="transparent" sx={{ boxShadow: "unset" }}>
        <Toolbar>
          <img src="/nextJs-logo.webp" height={40}></img>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: 1 }}
          >
            Company
          </Typography>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Container
            maxWidth={false}
            sx={{
              backgroundImage: `url('/benjamin-wong-4-ka5rdCesI-unsplash.jpeg')`,
              // backgroundColor: "red",
              backgroundSize: "100% 100%",
              minHeight: "200px",
              paddingTop: "100px",
            }}
            disableGutters
          >
            <Container
              maxWidth={false}
              sx={{
                backgroundImage: `url('/right-trapesium.svg')`,
                backgroundSize: "cover",
                minHeight: "200px",
                // marginTop: "100px",
              }}
              disableGutters
            >
              <Container
                maxWidth={false}
                sx={{
                  backgroundImage: `url('/left-trapesium.svg')`,
                  backgroundSize: "cover",
                  minHeight: "200px",
                  // marginTop: "100px",
                }}
                disableGutters
              >
                <Box
                  pt={isMobile ? 8 : 30}
                  pr={isMobile ? 5 : 30}
                  pb={5}
                  pl={isMobile ? 5 : 10}
                >
                  <Typography variant="h4" color={"white"}>
                    Discover Your Wonder
                  </Typography>
                  <Typography variant="subtitle1" color={"white"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </Typography>
                </Box>
              </Container>
            </Container>
          </Container>
          <Item sx={{ borderRadius: 0 }}>
            <Box
              pt={isMobile ? 4 : 6}
              pr={isMobile ? 5 : 30}
              pb={5}
              pl={isMobile ? 5 : 10}
            >
              <Typography variant="h4" color={"#029FE4"} align={"left"}>
                Who we are
              </Typography>
              <Typography
                variant="h6"
                align={"left"}
                fontWeight={"bold"}
                pt={3}
              >
                Technology Company
              </Typography>
              <Typography variant="subtitle2" align={"left"} pt={1}>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </Typography>
            </Box>

            <Container maxWidth={false} sx={{ minHeight: 100 }} disableGutters>
              <Grid container pl={isMobile ? "17px" : "39px"}>
                <Grid item xs={isMobile ? 3 : 1}>
                  <Item sx={{ boxShadow: "unset" }}>01 / 03</Item>
                </Grid>
                <Grid item xs={isMobile ? 2 : 9}></Grid>
                <Grid item xs={isMobile ? 7 : 2}>
                  <Item sx={{ boxShadow: "unset" }}>
                    <Button
                      variant="outlined"
                      startIcon={<ArrowBackIcon />}
                    ></Button>
                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                    ></Button>
                  </Item>
                </Grid>
              </Grid>
            </Container>
          </Item>
          <Item sx={{ backgroundColor: "#F8F8F8", borderRadius: 0 }}>
            <Box
              pt={isMobile ? 4 : 6}
              pr={isMobile ? 5 : 30}
              pb={5}
              pl={isMobile ? 5 : 10}
            >
              <Typography
                variant="h4"
                color={"#029FE4"}
                align={isMobile ? "center" : "left"}
              >
                Our Core Values
              </Typography>
              <Typography variant="subtitle1" align={"left"} pt={1}>
                Ridiculus laoreet libero pretium et, sit vel elementum convallis
                fames. Sit suspendisse etiam eget egestas. Aliquet odio et
                lectus etiam sit.
              </Typography>
              <Typography variant="subtitle1" align={"left"} pt={1}>
                In mauris rutrum ac ut volutpat, ornare nibh diam. Montes,
                vitae, nec amet enim.
              </Typography>

              <Grid container pt={1}>
                <Grid item xs={isMobile ? 1 : 1}>
                  <Item sx={{ boxShadow: "unset", backgroundColor: "#F8F8F8" }}>
                    <HorizontalRuleIcon fontSize="large" />
                  </Item>
                </Grid>
                <Grid item xs={isMobile ? 11 : 11}>
                  <Item sx={{ boxShadow: "unset", backgroundColor: "#F8F8F8" }}>
                    <Typography variant="h5" align={"left"} fontWeight="bold">
                      Dedication
                    </Typography>
                  </Item>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={isMobile ? 1 : 1}></Grid>
                <Grid item xs={isMobile ? 11 : 11}>
                  <Item sx={{ boxShadow: "unset", backgroundColor: "#F8F8F8" }}>
                    <Typography variant="subtitle2" align={"left"} pt={1}>
                      Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod maxime placeat.
                    </Typography>
                  </Item>
                </Grid>
              </Grid>
              <Grid container pt={1}>
                <Grid item xs={isMobile ? 1 : 1}>
                  <Item sx={{ boxShadow: "unset", backgroundColor: "#F8F8F8" }}>
                    <HorizontalRuleIcon fontSize="large" />
                  </Item>
                </Grid>
                <Grid item xs={isMobile ? 11 : 11}>
                  <Item sx={{ boxShadow: "unset", backgroundColor: "#F8F8F8" }}>
                    <Typography variant="h5" align={"left"} fontWeight="bold">
                      Intellectual Honesty
                    </Typography>
                  </Item>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={isMobile ? 1 : 1}></Grid>
                <Grid item xs={isMobile ? 11 : 11}>
                  <Item sx={{ boxShadow: "unset", backgroundColor: "#F8F8F8" }}>
                    <Typography variant="subtitle2" align={"left"} pt={1}>
                      Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                      reiciendis voluptatibus maiores alias conse.
                    </Typography>
                  </Item>
                </Grid>
              </Grid>
              <Grid container pt={1}>
                <Grid item xs={isMobile ? 1 : 1}>
                  <Item sx={{ boxShadow: "unset", backgroundColor: "#F8F8F8" }}>
                    <HorizontalRuleIcon fontSize="large" />
                  </Item>
                </Grid>
                <Grid item xs={isMobile ? 11 : 11}>
                  <Item sx={{ boxShadow: "unset", backgroundColor: "#F8F8F8" }}>
                    <Typography variant="h5" align={"left"} fontWeight="bold">
                      Curiosity
                    </Typography>
                  </Item>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={isMobile ? 1 : 1}></Grid>
                <Grid item xs={isMobile ? 11 : 11}>
                  <Item sx={{ boxShadow: "unset", backgroundColor: "#F8F8F8" }}>
                    <Typography variant="subtitle2" align={"left"} pt={1}>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque.
                    </Typography>
                  </Item>
                </Grid>
              </Grid>
              <img
                src="/Core-Values-Illustration.png"
                width={isMobile ? 350 : 500}
              ></img>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

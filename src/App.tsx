import React, { useState } from "react";
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
  Select,
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
  const [pageAboutUs, setPageAboutUs] = useState<number>(1);
  const [branch, setBranch] = useState<string>("1");

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

  const getTitleAboutUs = () => {
    switch (pageAboutUs) {
      case 1:
        return "Who we are";
      case 2:
        return "What we do";
      case 3:
        return "How we do";

      default:
        break;
    }
  };

  const getSubtitleAboutUs = () => {
    switch (pageAboutUs) {
      case 1:
        return "Technology Company";
      case 2:
        return "Professional Brand Management";
      case 3:
        return "Strategize, Design, Collaborate";

      default:
        break;
    }
  };

  const getDescAboutUs = () => {
    switch (pageAboutUs) {
      case 1:
        return "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";
      case 2:
        return "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.";
      case 3:
        return "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.";

      default:
        break;
    }
  };

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
                {getTitleAboutUs()}
              </Typography>
              <Typography
                variant="h6"
                align={"left"}
                fontWeight={"bold"}
                pt={3}
              >
                {getSubtitleAboutUs()}
              </Typography>
              <Typography variant="subtitle2" align={"left"} pt={1}>
                {getDescAboutUs()}
              </Typography>
            </Box>

            <Container maxWidth={false} sx={{ minHeight: 100 }} disableGutters>
              <Grid container pl={isMobile ? "17px" : "39px"}>
                <Grid item xs={isMobile ? 3 : 1}>
                  <Item sx={{ boxShadow: "unset" }}>0{pageAboutUs} / 03</Item>
                </Grid>
                <Grid item xs={isMobile ? 2 : 9}></Grid>
                <Grid item xs={isMobile ? 7 : 2}>
                  <Item sx={{ boxShadow: "unset" }}>
                    <Button
                      variant="outlined"
                      startIcon={<ArrowBackIcon />}
                      onClick={() => setPageAboutUs(pageAboutUs - 1)}
                    ></Button>
                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      onClick={() => setPageAboutUs(pageAboutUs + 1)}
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

          <Item sx={{ backgroundColor: "#509FDD", borderRadius: 0 }}>
            <Box
              pt={isMobile ? 4 : 6}
              pr={isMobile ? 5 : 30}
              pb={5}
              pl={isMobile ? 5 : 10}
              sx={{ backgroundColor: "white" }}
            >
              <Typography variant="h4" color={"#029FE4"} align={"left"}>
                OUR SPECIALITY
              </Typography>
              <Typography variant="subtitle1" align={"left"} pt={1} pb={1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                euismod libero vel leo auctor, in venenatis nulla consequat. Sed
                commodo nunc sit amet congue aliquam.
              </Typography>
              <img src="/PERKS.png" width={isMobile ? 300 : 500}></img>
              <Typography variant="subtitle2" pt={1} pb={1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                euismod libero vel leo auctor, in venenatis nulla consequat. Sed
                commodo nunc sit amet congue aliquam.
              </Typography>
            </Box>
          </Item>

          <Item sx={{ backgroundImage: `url("/BG.png")`, borderRadius: 0 }}>
            <Box
              pt={isMobile ? 4 : 6}
              pr={isMobile ? 5 : 30}
              pb={5}
              pl={isMobile ? 5 : 10}
            >
              <Typography variant="h4" color={"white"} align={"left"}>
                <img src="/nextJs-logo.webp" height={35} /> Company
              </Typography>

              <Box
                pt={isMobile ? 4 : 6}
                pr={isMobile ? 5 : 30}
                pb={5}
                pl={isMobile ? 2 : 10}
                sx={{ backgroundColor: "white" }}
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={branch}
                  size="small"
                  onChange={(e) => setBranch(e.target.value)}
                >
                  <MenuItem value={1}>TECHNOLOGY DEPARTMENT</MenuItem>
                  <MenuItem value={2}>HR DEPARTMENT</MenuItem>
                  <MenuItem value={3}>Marketing DEPARTMENT</MenuItem>
                </Select>
                <Typography
                  variant="subtitle1"
                  color={"#25A0D8"}
                  align={"left"}
                  pt={5}
                >
                  Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung,
                  Jawa Barat
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                color={"white"}
                align={"left"}
                pt={2}
              >
                Who We Are
              </Typography>
              <Typography variant="subtitle1" color={"white"} align={"left"}>
                Our Values
              </Typography>
              <Typography variant="subtitle1" color={"white"} align={"left"}>
                The Perks
              </Typography>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

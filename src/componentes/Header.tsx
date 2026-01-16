import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Avatar,
  Container,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


const pages = ["Home", "Explore", "About"];

export default function Header() {
  const email = localStorage.getItem("userEmail");
  const navigate = useNavigate();

  const cerrarSesion = () => {

    
    navigate("/"); 
  };


  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton color="primary">
              <HomeIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="a" href="/">
              MyApp
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 3, justifyContent: "center" }}>
              {pages.map((page) => (
                <Button>
                  {page}
                </Button>
              ))}
            </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton>
                <NotificationsIcon />
              </IconButton>

            <Box sx={{ p: 0, display: 'flex', alignItems: 'center' }}>
              {email ? (
                <Avatar sx={{ width: 40, height: 40 }}>
                  {email.charAt(0).toUpperCase()}
                </Avatar>
              ) : (
                <AccountCircleIcon fontSize="large" color="action" />
              )}
            </Box>

            <Box
            onClick={cerrarSesion}>
              
                <IconButton>
                  <Logout/> 
                  <Typography>Cerrar Sesión</Typography>
                </IconButton>
                
            </Box>

    </Box>
    </Toolbar>
    </Container>
    </AppBar>
  );
}



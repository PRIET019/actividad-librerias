import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Header() {
  const email = localStorage.getItem("userEmail");

  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton color="primary">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6">MyApp</Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography>Home</Typography>
          <Typography>Explore</Typography>
          <Typography>About</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton>
            <NotificationsIcon />
          </IconButton>

          <AccountCircleIcon />
          <Typography>{email}</Typography>

          <Button
            startIcon={<LogoutIcon />}
            onClick={() => {
              localStorage.removeItem("userEmail");
              window.location.href = "/";
            }}
          >
            Cerrar sesión
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Paper,
  Typography,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";


const users: { email: string; password: string }[] = [];

export default function Registro() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    


    users.push({ email, password });
    console.log("Usuarios registrados:", users); 
    navigate("/home"); 
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        bgcolor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper elevation={3} sx={{ width: { xs: "90%", sm: 380 }, p: 4, borderRadius: 3 }}>

        <Box sx={{ width: 56, height: 56, borderRadius: "50%", bgcolor: "#eef2ff", display: "flex", alignItems: "center", justifyContent: "center", mx: "auto"}}>
          <LockOutlinedIcon color="primary" />
        </Box>

        <Typography variant="h5" fontWeight={600} textAlign="center">
          Registro
        </Typography>
        <Typography   textAlign="center" mb={3}>
          Crea tu cuenta para continuar
        </Typography>

        <TextField
          fullWidth
          label="Email Address"
          placeholder="you@example.com"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          label="Password"
          placeholder="Enter your password"
          type={showPassword ? "text" : "password"}
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} >
                  {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
          <FormControlLabel control={<Checkbox />} label="Remember me" />
          <Link href="#" underline="none">
            Forgot password?
          </Link>
        </Box>

        <Button
          fullWidth
          size="large"
          variant="contained"
          sx={{ mt: 3, textTransform: "none", fontSize: 16 }}
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
      </Paper>
    </Box>
  );
}

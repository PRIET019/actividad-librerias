import { Box, Container, Link, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function Footer() {
  return (

    <Box component="footer" sx={{ bgcolor: 'white', mt: 8 }}>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          py: 6,
          gap: 4,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 200 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <HomeIcon color="primary" />
            <Typography variant="h6">MyApp</Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Tu plataforma de contenido multimedia favorita.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="body2" fontWeight="bold" color='black'>
              Producto
            </Typography>
            <Link  color="text.secondary" underline="hover">
              Características
            </Link>
            <Link  color="text.secondary" underline="hover">
              Precios
            </Link>
            <Link  color="text.secondary" underline="hover">
              API
            </Link>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="body2" fontWeight="bold" color='black'>
              Compañía
            </Typography>
            <Link  color="text.secondary" underline="hover">
              Sobre nosotros
            </Link>
            <Link  color="text.secondary" underline="hover">
              Blog
            </Link>
            <Link color="text.secondary" underline="hover">
              Contacto
            </Link>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="body2" fontWeight="bold" color='black'>
              Legal
            </Typography>
            <Link  color="text.secondary" underline="hover">
              Privacidad
            </Link>
            <Link  color="text.secondary" underline="hover">
              Términos
            </Link>
            <Link  color="text.secondary" underline="hover">
              Cookies
            </Link>
          </Box>
        </Box>
      </Container>

      <Box sx={{ textAlign: 'center', py: 4, borderTop: 1, borderColor: 'divider' }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} MyApp. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
}

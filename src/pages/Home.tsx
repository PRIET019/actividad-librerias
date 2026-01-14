import Header from "@/componentes/Header";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";



const cursos = [
  {
    titulo: "Introducción a React",
    categoria: "Programación",
    descripcion: "Aprende los fundamentos de React desde cero",
    imagen: "img/react.png",
    vistas: "12.5k",
  },
  {
    titulo: "Diseño UI/UX Moderno",
    categoria: "Diseño",
    descripcion: "Técnicas avanzadas de diseño de interfaces",
    imagen: "img/ux.png",
    vistas: "8.3k",
  },
  {
    titulo: "Marketing Digital",
    categoria: "Marketing",
    descripcion: "Estrategias efectivas para redes sociales",
    imagen: "img/marketing.png",
    vistas: "15.7k",
  },
  {
    titulo: "Fotografía Profesional",
    categoria: "Fotografía",
    descripcion: "Domina tu cámara y crea imágenes increíbles",
    imagen: "img/fotografia.png",
    vistas: "10.2k",
  },
  {
    titulo: "Desarrollo Web Full Stack",
    categoria: "Programación",
    descripcion: "Construye aplicaciones web completas",
    imagen: "img/desarrollo.png",
    vistas: "20.1k",
  },
  {
    titulo: "Productividad personal",
    categoria: "Productividad",
    descripcion: "Tecnicas para maximizar tu tiempo",
    imagen: "img/productividad.png",
    vistas: "9.8k",
  },
  {
    titulo: "Inteligencia Artificial",
    categoria: "Tecnologia",
    descripcion: "Fundamentos de IA y Machine Learning",
    imagen: "img/inteligencia.png",
    vistas: "18.4k",
  },
  {
    titulo: "Finanzas personales",
    categoria: "Finanzas",
    descripcion: "Aprede a administrar tu dinero",
    imagen: "img/finanzas.png",
    vistas: "11.3k",
  },
];

export default function Home() {
  return (
    <>
    <Header />
    <Box sx={{ p: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      
      <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
        <Chip label="Todos" color="primary" />
        <Chip label="Programación" />
        <Chip label="Diseño" />
        <Chip label="Marketing" />
        <Chip label="Fotografía" />
        <Chip label="Productividad" />
      </Box>

      <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
        {cursos.map((curso, index) => (
          <Card key={index} sx={{ width: 280 }}>
            <CardMedia
              component="img"
              height="140"
              image={curso.imagen}
            />

            <CardContent>
              <Chip
                label={curso.categoria}
                size="small"
                sx={{ mb: 1 }}
              />

              <Typography variant="h6">
                {curso.titulo}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {curso.descripcion}
              </Typography>

              <Typography variant="body2" sx={{ mt: 1 }}>
                👁 {curso.vistas}
              </Typography>

              <Button
                fullWidth
                variant="outlined"
                sx={{ mt: 2 }}
              >
                Ver Estadísticas
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button
                size="large"
                variant="contained"
                sx={{ textTransform: "none", fontSize: 16 }}
            >
                Cargar más contenido
            </Button>
        </Box>

    </Box>
    </>
  );
}







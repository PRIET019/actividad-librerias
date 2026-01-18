import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import Header from '@/componentes/Header';
import Footer from '@/componentes/Footer';
import { useNavigate } from 'react-router-dom';

type StatCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  bg: string;
};

export default function Estadisticas() {

const navigate = useNavigate();



const estadisticas = () => {
    navigate("/home");
  };


  return (
    <>
    <Box sx={{ width: '100%', maxWidth: '100%', margin: '0' }}>
      <Header />

      <Box component="section" sx={{ width: '100%', maxWidth: '100%', padding: '32px 64px', margin: '0' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: 6,
          }}
        >
          <Box sx={{ width: '100%', maxWidth: '100%', margin: '0' }}>
            <Stack direction="row" spacing={1} alignItems="center" mb={2}>
              <IconButton size="small" onClick={estadisticas}>
                  <ArrowBackIcon />
                </IconButton>
                <Typography variant="body2">Volver</Typography>
              </Stack>

              <Typography variant="h4" fontWeight={600}>
                Estadísticas del Video
              </Typography>

            <Typography color="text.secondary">
              Introducción a React
            </Typography>
          </Box>

          <Chip
            icon={<TrendingUpIcon />}
            label="+12.5% esta semana"
            sx={{
              backgroundColor: '#E9F7EF',
              color: '#1E8449',
              fontWeight: 500,
            }}
          />
        </Box>

        <Grid container spacing={4} mb={6}>
          <Grid item xs={12}>
              <StatCard icon={<VisibilityIcon />} title="Vistas Totales" value="55.4K" bg="#2979FF" />
            </Grid>
          <Grid item xs={12}>
            <StatCard icon={<FavoriteIcon />} title="Me Gusta" value="4.4K" bg="#FF1744" />
          </Grid>
          <Grid item xs={12}>
            <StatCard icon={<ChatBubbleOutlineIcon />} title="Comentarios" value="581" bg="#00C853" />
          </Grid>
          <Grid item xs={12}>
              <StatCard icon={<ShareIcon />} title="Compartidos" value="892" bg="#AA00FF" />
            </Grid>
        </Grid>

        <Grid container spacing={4} item xs={12}>
          <Grid item xs={12}>
            <Card sx={{ borderRadius: 4 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} mb={2}>
                    Vistas por Día
                  </Typography>

                  <BarChart
                    height={320}
                    series={[{ data: [4000, 5500, 7000, 3500, 7000, 10500, 10000] }]}
                    xAxis={[{ data: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'], scaleType: 'band' }]}
                    yAxis={[{ min: 0, max: 14000 }]}
                  />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ borderRadius: 4 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} mb={2}>
                    Retención de Audiencia
                  </Typography>

                  <LineChart
                    height={320}
                    series={[{ data: [100, 85, 72, 65, 58, 45, 32, 18], area: true }]}
                    xAxis={[{ data: ['0s', '30s', '1m', '2m', '3m', '5m', '10m', '15m'], scaleType: 'point' }]}
                    yAxis={[{ min: 0, max: 100 }]}
                  />
                </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={4} mt={4}>
          <Grid item xs={12}>
            <Card sx={{ borderRadius: 4 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} mb={2}>
                  Fuentes de Tráfico
                </Typography>

                <PieChart
                  height={260}
                  series={[{
                    innerRadius: 70,
                    outerRadius: 110,
                    data: [
                      { id: 0, value: 35, label: 'Búsqueda' },
                      { id: 1, value: 28, label: 'Sugeridos' },
                      { id: 2, value: 20, label: 'Directo' },
                      { id: 3, value: 12, label: 'Redes Sociales' },
                      { id: 4, value: 5, label: 'Otros' },
                    ],
                  }]}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ borderRadius: 4 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} mb={2}>
                  Dispositivos
                </Typography>

                <PieChart
                  height={260}
                  series={[{
                    innerRadius: 70,
                    outerRadius: 110,
                    data: [
                      { id: 0, value: 58, label: 'Móvil' },
                      { id: 1, value: 32, label: 'Desktop' },
                      { id: 2, value: 10, label: 'Tablet' },
                    ],
                  }]}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={4} mt={4} sx={{ width: '100%', maxWidth: '100%', margin: '0' }}>
          <Grid item xs={12}>
            <Card sx={{ borderRadius: 4 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} mb={2}>
                  Engagement Semanal
                </Typography>

                <LineChart
                  height={320}
                  series={[
                    { data: [320, 450, 580, 520, 710, 1000, 860], label: 'Me Gusta' },
                    { data: [45, 60, 75, 65, 90, 120, 105], label: 'Comentarios' },
                  ]}
                  xAxis={[{ data: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'], scaleType: 'point' }]}
                  yAxis={[{ min: 0 }]}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ borderRadius: 4 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} mb={2}>
                  Demografía por Edad
                </Typography>

                <BarChart
                    height={320}
                    layout="horizontal"
                    series={[{ data: [8, 35, 28, 18, 8, 3] }]}
                    xAxis={[{ min: 0, max: 40 }]}
                    yAxis={[{
                      data: ['13-17', '18-24', '25-34', '35-44', '45-54', '55+'],
                      scaleType: 'band',
                  }]}
                  sx={{ '.MuiBarElement-root': { rx: 6 } }}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={4} mt={4}>
          <Grid item xs={12}>
            <Card sx={{ borderRadius: 4 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} mb={2}>
                  Engagement por Hora del Día
                  </Typography>

                  <LineChart
                    height={320}
                    series={[
                      {
                        data: [12, 8, 15, 45, 68, 72, 85, 92],
                        area: true,
                      },
                  ]}
                  xAxis={[
                    {
                      data: [
                        '00:00','03:00', '06:00','09:00',
                        '12:00','15:00', '18:00','21:00',
                      ],
                      scaleType: 'point',
                    },
                  ]}
                  yAxis={[{ min: 0, max: 100 }]}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
<Box
  sx={{
    mt: 6,
    p: 4,
    borderRadius: 4,
    backgroundColor: '#F4F6FF',
  }}
>
  <Typography variant="h6" fontWeight={600} mb={3}>
    💡 Insights Clave
  </Typography>

  <Grid container spacing={3}>
    <Grid item xs={12} md={6}>
      <Card sx={{ borderRadius: 3 }}>
        <CardContent>
          <Typography fontWeight={600} mb={1}>
            📅 Mejor día de la semana
          </Typography>
          <Typography color="text.secondary">
            Sábado con 12.5K vistas – considera publicar contenido similar los
            fines de semana
          </Typography>
        </CardContent>
      </Card>
    </Grid>

    <Grid item xs={12} md={6}>
      <Card sx={{ borderRadius: 3 }}>
        <CardContent>
          <Typography fontWeight={600} mb={1}>
            ⏰ Mejor hora para publicar
          </Typography>
          <Typography color="text.secondary">
            Entre 18:00 y 21:00 horas – tu audiencia está más activa en la
            tarde-noche
          </Typography>
        </CardContent>
      </Card>
    </Grid>

    <Grid item xs={12} md={6}>
      <Card sx={{ borderRadius: 3 }}>
        <CardContent>
          <Typography fontWeight={600} mb={1}>
            👥 Audiencia principal
          </Typography>
          <Typography color="text.secondary">
            18–24 años (35%) – adapta tu contenido a este grupo demográfico
          </Typography>
        </CardContent>
      </Card>
    </Grid>

    <Grid item xs={12} md={6}>
      <Card sx={{ borderRadius: 3 }}>
        <CardContent>
          <Typography fontWeight={600} mb={1}>
            📱 Dispositivo predominante
          </Typography>
          <Typography color="text.secondary">
            58% móvil – optimiza tus miniaturas y contenido para visualización
            móvil
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
</Box>

      <Footer />
      </Box>
    </>
  );
}

function StatCard({ icon, title, value, bg }: StatCardProps) {
  return (
    <Card sx={{ borderRadius: 4 }}>
      <CardContent>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: 2,
            backgroundColor: bg,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3,
          }}
        >
          {icon}
        </Box>

        <Typography color="text.secondary" mb={1}>
          {title}
        </Typography>

        <Typography variant="h5" fontWeight={600}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

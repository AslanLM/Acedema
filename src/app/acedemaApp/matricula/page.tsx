'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container, Typography, Box, Divider, Card, CardContent } from '@mui/material';

export default function MatriculaPage() {
  const cursosViento = [
    'Oboe', 'Fagot', 'Acordeón', 'Flauta', 'Flautín', 'Flauta traversa',
    'Clarinete', 'Saxofón', 'Trompeta', 'Trombón', 'Trompa', 'Tuba'
  ];

  const cursosPercusion = [
    'Xilófono', 'Marimba', 'La caja', 'El bombo', 'Platillos',
    'Triángulo', 'Cencerro'
  ];

  const cursosCuerdas = [
    'Violín', 'Viola', 'Violonchelo', 'Contrabajo', 'Guitarra', 'Piano vertical'
  ];

  return (
    <div style={{ backgroundColor: '#424242', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div className="bg-[#001636] p-1">
        <div className="max-w-7xl mx-auto">
          <div className="flexs-center justify-between">
            <div className="flexs-center space-x-2">
              <Image
                src="/logo.jpg"
                alt="Logo ACEDEMA"
                width={80}
                height={80}
                className="object-contain rounded-full"
                priority
              />
              <h1 className="text-white text-3xl font-bold">ACEDEMA</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-[#001636] p-1 border-b-4 border-[#424242]">
        <div className="max-w-7xl mx-auto">
          <div className="flexs-center justify-between">
            <div className="flex space-x-1">
              <Link href="/" className="text-white hover:bg-[#c38611] px-4 py-2 rounded-md">
                Inicio
              </Link>
              <div className="relative group">
                <button className="text-white hover:bg-[#c38611] px-4 py-2 rounded-md flexs-center">
                  Cursos
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block bg-[#001636] border border-[#424242] rounded-md mt-1">
                  <Link href="/Acedema/Cursos" className="block text-white hover:bg-[#c38611] px-4 py-2 rounded-md">
                    Cursos
                  </Link>
                  <Link href="/Acedema/miscursos" className="block text-white hover:bg-[#c38611] px-4 py-2 rounded-md">
                    Mis cursos
                  </Link>
                </div>
              </div>
              <Link href="/informacion" className="text-white hover:bg-[#c38611] px-4 py-2 rounded-md">
                Información
              </Link>
              <Link href="/Acedema/Contactenos" className="text-white hover:bg-[#c38611] px-4 py-2 rounded-md">
                Contáctenos
              </Link>
              <Link href="/Acedema/Foro" className="text-white hover:bg-[#c38611] px-4 py-2 rounded-md flexs-center">
                <Image
                  src="/notificacion.png"
                  alt="Foro"
                  width={25}
                  height={25}
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </Link>
            </div>
            <Link href="/Acedema/login" className="text-white hover:bg-[#c38611] px-4 py-2 rounded-md">
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ paddingTop: '20px', flex: 1, overflowY: 'auto' }}>
        <Container
          sx={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            marginTop: '2rem',
            maxWidth: 'lg',
          }}
        >
          {/* Proceso de matrícula */}
          <Box sx={{ mb: 4 }}>
            <Card sx={{ mb: 4, boxShadow: 3 }}>
              <CardContent>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 'bold', 
                    color: 'rgba(67, 10, 17, 255)', 
                    textAlign: 'center',
                    mb: 4 
                  }}
                >
                  Proceso de Matrícula
                </Typography>
                <ol>
                  <li>1. Si estás interesado, comparte tus datos y el instrumento de interés.</li>
                  <li>2. Si tienes experiencia, haremos una prueba de solfeo para ubicarte en el nivel adecuado. La prueba es GRATUITA y dura 15 minutos.</li>
                  <li>3. Te enviaremos la boleta de matrícula (padre/tutor para menores).</li>
                  <li>4. Paga la matrícula y mensualidad (transferencia, SINPE o depósito). Generalmente, la matrícula anual tiene un costo de ₡20,000 y la mensualidad es de ₡32,000. Sin embargo, pueden existir variaciones por lo que el precio final se dará por mensaje.</li>
                  <li>5. Envía la boleta y el comprobante de pago a WhatsApp: 8326-4472.</li>
                </ol>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
                  <strong>
                    ¿Interesado? Contáctanos por WhatsApp al{' '}
                    <a href="tel:+50686696541" style={{ color: 'inherit', textDecoration: 'none' }}>
                      +506 86696541
                    </a>
                  </strong>
                  <Image
                    src="/whatsApp.png"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    style={{ verticalAlign: 'middle' }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Box>

          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 'bold', 
              color: 'rgba(67, 10, 17, 255)', 
              textAlign: 'center',
              mb: 4 
            }}
          >
            Cursos Disponibles
          </Typography>

          {/* Sección Viento */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h5" sx={{ color: 'rgba(67, 10, 17, 255)', mb: 2 }}>
              Viento
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 3,
                justifyContent: 'flex-start',
              }}
            >
              {cursosViento.map((curso) => (
                <Box
                  key={curso}
                  sx={{
                    flex: {
                      xs: '1 1 100%', // 100% width on extra small screens
                      sm: '1 1 calc(50% - 12px)', // 50% width minus gap on small screens
                      md: '1 1 calc(33.333% - 16px)', // 33.333% width minus gap on medium screens
                    },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    border: '1px solid #d3d3d3',
                    borderRadius: '8px',
                    padding: '1rem',
                    backgroundColor: '#f9f9f9',
                    minWidth: '220px',
                    minHeight: '120px',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Image
                    src={`/instrumentos/${curso.toLowerCase().replace(/ /g, '-')}.png`}
                    alt={curso}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                  <Typography variant="body1">{curso}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Divider sx={{ borderColor: 'rgba(67, 10, 17, 255)', mb: 8 }} />

          {/* Sección Percusión */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h5" sx={{ color: 'rgba(67, 10, 17, 255)', mb: 2 }}>
              Percusión
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 3,
                justifyContent: 'flex-start',
              }}
            >
              {cursosPercusion.map((curso) => (
                <Box
                  key={curso}
                  sx={{
                    flex: {
                      xs: '1 1 100%',
                      sm: '1 1 calc(50% - 12px)',
                      md: '1 1 calc(33.333% - 16px)',
                    },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    border: '1px solid #d3d3d3',
                    borderRadius: '8px',
                    padding: '1rem',
                    backgroundColor: '#f9f9f9',
                    minWidth: '220px',
                    minHeight: '120px',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Image
                    src={`/instrumentos/${curso.toLowerCase().replace(/ /g, '-')}.png`}
                    alt={curso}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                  <Typography variant="body1">{curso}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Divider sx={{ borderColor: 'rgba(67, 10, 17, 255)', mb: 8 }} />

          {/* Sección Cuerdas */}
          <Box>
            <Typography variant="h5" sx={{ color: 'rgba(67, 10, 17, 255)', mb: 2 }}>
              Cuerdas
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 3,
                justifyContent: 'flex-start',
              }}
            >
              {cursosCuerdas.map((curso) => (
                <Box
                  key={curso}
                  sx={{
                    flex: {
                      xs: '1 1 100%',
                      sm: '1 1 calc(50% - 12px)',
                      md: '1 1 calc(33.333% - 16px)',
                    },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    border: '1px solid #d3d3d3',
                    borderRadius: '8px',
                    padding: '1rem',
                    backgroundColor: '#f9f9f9',
                    minWidth: '220px',
                    minHeight: '120px',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Image
                    src={`/instrumentos/${curso.toLowerCase().replace(/ /g, '-')}.png`}
                    alt={curso}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                  <Typography variant="body1">{curso}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </div>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#001636', padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h6" sx={{ textAlign: 'center', color: 'white' }}>
          Nosotros
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <a href="https://www.facebook.com/share/1BZZGTNCFZ/" target="_blank" rel="noopener noreferrer">
            <Image src="/facebook.png" alt="Facebook" width={30} height={30} style={{ margin: '0 10px' }} />
          </a>
          <a href="https://www.instagram.com/acedemasanrafael?igsh=MTI2dXQ0aXJkdzVrNA==" target="_blank" rel="noopener noreferrer">
            <Image src="/instagram.png" alt="Instagram" width={30} height={30} style={{ margin: '0 10px' }} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <Image src="/whatsApp.png" alt="WhatsApp" width={30} height={30} style={{ margin: '0 10px' }} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <Image src="/mapas-de-google.png" alt="Google Maps" width={30} height={30} style={{ margin: '0 10px' }} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <Image src="/gmail.png" alt="Gmail" width={30} height={30} style={{ margin: '0 10px' }} />
          </a>
        </div>
      </Box>
    </div>
  );
}
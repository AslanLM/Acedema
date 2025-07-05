'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container, Typography, Grid, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MisCursosPage() {
  const misCursos = [
    {
      titulo: 'Guitarra, nivel básico',
      contenido: 'Contenido del curso de guitarra nivel básico...',
    },
    {
      titulo: 'Piano, nivel avanzado',
      contenido: 'Contenido del curso de piano nivel avanzado...',
    },
    {
      titulo: 'Violín, nivel intermedio',
      contenido: 'Contenido del curso de violín nivel intermedio...',
    },
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
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'rgba(67, 10, 17, 255)', textAlign: 'center', mb: 4 }}>
            Mis cursos
          </Typography>

          <Grid container spacing={3}>
            {misCursos.map((curso, index) => (
              <Grid >
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Image src="/logo.jpg" alt="Logo ACEDEMA" width={40} height={40} className="object-contain rounded-full" />
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{curso.titulo}</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{curso.contenido}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
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

import { Stack, Typography } from '@mui/material'

export const MethodologySection: React.FC = () => {

  return (
    <Stack mt={6} mb={4}
      width='100vw'
      component='section'
      alignItems='center'
      justifyContent='center'
    >
      <Typography
        variant='h2'
        textAlign={{ xs: 'center', lg: 'left' }}
      >
        Metodologia eficaz e eficiente
      </Typography>

      <Typography
        mt={3}
        width='80%'
        variant='body1'
        sx={{ textIndent: '1.5em' }}
        textAlign={{ xs: 'justify', lg: 'justify' }}
      >
        Metodologia focada em te ensinar de forma simples. Aqui você pratica sua fala e também sua leitura, de forma eficaz e eficiente. A enorme maioria das pessoas que buscam aprender um idioma (no momento existem 1,2bi de pessoas nessa posição!) estão atrás de melhores oportunidades, seja para seu desenvolvimento pessoal ou profissional. E é daí que surge nossa missão: <b style={{ color: '#484cff' }}>levar a todos a oportunidade de se desenvolver!</b> 
      </Typography>
      
    </Stack>
  )
}

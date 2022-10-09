import { Grid, Link, Stack, Typography } from '@mui/material'

interface WageCardProps {
  wage: string
  color: string
  jobTitle: string
}

export const WageSection: React.FC = () => {

  const WageCard: React.FC<WageCardProps> = (props) => {
    const { jobTitle, wage, color } = props
    return (
      <Grid item xs={12} md={6} lg={4.5}>
        <Stack
          p={2}
          gap={2}
          height='100px'
          direction='row'
          borderRadius={3}
          alignItems='center'
          boxShadow='0px 0px 10px rgba(0,0,0,.12)'
          sx={{
            cursor: 'pointer',
            transition: 'all 300ms ease-out',
            ':hover': {
              boxShadow: '0px 0px 30px rgba(0,0,0,.13)',
              transform: 'translateY(-2px)'
            }
          }}
        >
          <Stack width='10px' height='100%' borderRadius={2} bgcolor={color}
          />
          <Stack>
            <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>{jobTitle}:</Typography>
            <Typography whiteSpace='nowrap' sx={{ color: 'grey.900', display: 'flex' }}>
              Média salarial de
              <Typography sx={{ fontWeight: 'bold', color: color, pl: .5 }}> R$ {wage}</Typography>
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    )
  }

  return (
    <Stack py={2}
      height='75vh'
      width='100vw'
      component='section'
      alignItems='center'
      justifyContent='center'
    >
      <Typography fontSize='40px' variant='h1'>Saber inglês pode aumentar seu salário em até 61%</Typography>
      <Link
        mb={8}
        sx={{ textDecoration: 'none', color: 'grey.200' }}
        href='https://g1.globo.com/pb/paraiba/especial-publicitario/yazigi-ruy-carneiro/noticia/2019/06/18/profissionais-que-dominam-ingles-tem-maiores-salarios-e-mais-oportunidades.ghtml'
      >
        fonte: G1
      </Link>
      <Grid
        container
        width='100%'
        mt={4} gap={5}
        direction='row'
        justifyContent='center'
      >
        <WageCard
          color='green'
          wage='7.377,52'
          jobTitle='Cargo de supervisor com inglês avançado'
        />
        <WageCard
          color='#fbbc04'
          wage='6.182,04'
          jobTitle='Cargo de supervisor com inglês intermediário'
        />
        <WageCard
          color='#ff6d01'
          wage='4.541,06'
          jobTitle='Cargo de supervisor com inglês básico'
        />
        <WageCard
          color='#ea4335'
          wage='3.724,46'
          jobTitle='Cargo de supervisor com nenhum conhecimento'
        />
      </Grid>
    </Stack>
  )
}

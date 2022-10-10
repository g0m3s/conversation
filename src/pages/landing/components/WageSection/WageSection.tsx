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
      <Grid width='100%' alignItems='center' justifyContent='center' item xs={11} md={6} lg={4.5}>
        <Stack
          p={2}
          gap={2}
          height='100px'
          direction='row'
          borderRadius={3}
          alignItems='center'
          width={{ xs: '90%', lg: 'auto' }}
          boxShadow='0px 0px 10px rgba(0,0,0,.12)'
          sx={{
            cursor: 'pointer',
            transition: 'all 300ms ease-out',
            ':hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0px 0px 30px rgba(0,0,0,.13)',
            }
          }}
        >
          <Stack width='10px' height='100%' borderRadius={2} bgcolor={color} />
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
    <Stack mt={4} py={2}
      minHeight='75vh'
      width='100vw'
      component='section'
      alignItems='center'
      justifyContent='center'
    >
      <Typography
        variant='h2'
        textAlign={{ xs: 'center', lg: 'left' }}
      >
        Saber inglês pode aumentar seu salário em até 61%
      </Typography>
      <Link
        target='_blank'
        mb={{ xs: 6, lg: 8 }}
        sx={{ textDecoration: 'none', color: 'grey.200' }}
        href='https://g1.globo.com/pb/paraiba/especial-publicitario/yazigi-ruy-carneiro/noticia/2019/06/18/profissionais-que-dominam-ingles-tem-maiores-salarios-e-mais-oportunidades.ghtml'
      >
        fonte: G1
      </Link>
      <Grid
        gap={5}
        container
        width='100%'
        direction='row'
        mt={{ xs: 0, lg: 4 }}
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

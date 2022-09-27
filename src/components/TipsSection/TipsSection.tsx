import { Grid, List, ListItem, Stack, Typography } from '@mui/material'

type TipProps = {
  title: string,
  desc: string
}

export const TipsSection: React.FC = () => {

  const Tip: React.FC<TipProps> = ({ title, desc }) => (
    <Grid
      item
      xs={12}
      lg={5.5}
      borderRadius={2}
      p={{ xs: 1.5, lg: 2 }}
      boxShadow='0px 0px 5px rgba(0,0,0,.3)'
    >
      <ListItem>
        <Stack>
          <Typography textAlign='center' variant='h2'>{title}</Typography>
          <Typography textAlign='justify' sx={{ textIndent: '1.5em' }}>{desc}</Typography>
        </Stack>
      </ListItem>
    </Grid>
  )

  return (
    <Stack pt={1.5} pb={3} bgcolor='#FFF' width='100%' alignItems='center' color='#2d333b'>
      <Stack width={{ xs: '95%', lg: '90%' }}>
        <Typography fontSize='45px' mb={3} textAlign='center' variant='h1'>Dicas para melhorar sua conversação</Typography>

        <List>
          <Grid gap={2} justifyContent='center' direction='row' container>
            <Tip
              title='Evite traduções'
              desc='Já se pegou na situação de estar com alguma dúvida e encontrar na internet a resposta que você precisava mas a página estava em inglês?. Muito provavelmente isso já aconteceu e talvez você tenha feito como a maioria das pessoa e selecionado a opção de "Traduzir para o português". Mas, por mais que seja tentador ter a resposta de forma rápida, tente primeiro entender o que está escrito e apenas depois disso use o tradutor para confirmar.'
            />
            <Tip
              title='Ouça'
              desc='Muitas pesquisas mostram que para melhorar a conversação em inglês é preciso treinar o ouvido também. Uma boa dica é assistir séries, filmes e vídeos sempre em inglês e com legendas em português. Quando se sentir confortável, troque a legenda para inglês e por mais que inicialmente você não compreenda 100% dos diálogos, você verá que em pouco tempo seu nível de entendimento das conversas aumentará muito.'
            />
            <Tip
              title='Abuse de ferramentas'
              desc='Sites como o nosso podem te ajudar muito!. Aqui você consegue praticar sem julgamentos, de forma divertida e prática 😊 . Manter a constância é super importante no processo de aprendizado de uma nova língua, então tente sempre tirar alguns minutinhos do seu dia para praticar! trocar 10 minutos que você ficaria no Tik Tok ou reels para se dedicar a aprender te dará grander resultados!.'
            />
            <Tip
              title='Aumente seu vocabulário'
              desc='Tão importante quanto ter uma boa pronuncia é saber o que falar! e aqui vai um combo de dicas que podem te ajudar: troque o idioma do seu telefone para inglês, assim você estará se "forçando" a consumir conteúdos em inglês em grande parte do seu dia a dia. Procure conteúdo no Youtube ou Tik Tok que sejam em inglês: a internet é um vasto mundo de conteúdos e com certeza há algum canal ou influencer "gringo" que você vai gostar de acompanhar. E se você for do time da leitura, leia jornais internacionais como o CNN, por exemplo, que além de estudar você vai se manter bem atualizado!.'
            />
          </Grid>
        </List>
      </Stack>
    </Stack>
  )
}

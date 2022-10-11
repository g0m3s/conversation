import { Stack, Typography } from '@mui/material'

export const PrivacyPolicy: React.FC = () => (
  <Stack>
    <Typography variant='h1'>
      POLÍTICA DE PRIVACIDADE DE DADOS
    </Typography>
    <Typography variant='h2'>
      A "To Speak" valoriza e respeita a privacidade de todos os titulares de dados pessoais, e objetiva, por meio deste documento, demonstrar seu comprometimento em garantir, de modo razoável, a proteção dos dados e informações pessoais coletadas de seus usuários, observando e obedecendo à Lei Geral de Proteção de Dados e as demais legislações pertinentes ao tema.
    </Typography>
    <Stack>
      <Typography mb={2} variant='h3'>
        Quais dados coletamos?
      </Typography>
      <Typography>
        O único dado coletado se trata das palavras e/ou frases ditas pelo usuário, única e exclusivamente após o aceite para que a gravação de voz se inicie e exclusivamente apenas enquanto é informado (de forma visual) pelo aplicativo.
      </Typography>
    </Stack>
    <Stack>
      <Typography mb={2} variant='h3'>
        Como usamos seus dados?
      </Typography>
      <Typography>
        As palavras e/ou frases coletadas <b>não são enviadas</b> a nenhum tipo de servidor ou serviço externo fora do aplicativo, de tal forma que os dados coletados servem apenas de forma momentânea durante o uso do aplicativo e são excluídos após o fechamento do mesmo.
      </Typography>
    </Stack>
  </Stack>
)

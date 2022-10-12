import { Stack } from '@mui/system'
import { DownloadOnStores, Footer, InitialSection, MethodologySection, TrackPrecision, WageSection } from './components'

export const LandingPage: React.FC = () => {

  return (
    <Stack sx={{ overflowX: 'hidden' }}>
      <InitialSection />
      <DownloadOnStores />
      <TrackPrecision />
      <WageSection />
      <MethodologySection />
      <Footer />
    </Stack>
  )
}

import { Stack } from '@mui/system'
import { DownloadOnStores, Footer, InitialSection, TrackPrecision, WageSection } from './components'

export const LandingPage: React.FC = () => {

  return (
    <Stack>
      <InitialSection />
      <DownloadOnStores />
      <TrackPrecision />
      <WageSection />
      <Footer />
    </Stack>
  )
}

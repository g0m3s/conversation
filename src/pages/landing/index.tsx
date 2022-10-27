import { Stack } from '@mui/system'
import { Demo, Footer, InitialSection, MethodologySection, TrackPrecision, WageSection } from './components'

export const LandingPage: React.FC = () => {

  return (
    <Stack sx={{ overflowX: 'hidden' }}>
      <InitialSection />
      <Demo />
      {/* <DownloadOnStores /> */}
      <TrackPrecision />
      <WageSection />
      <MethodologySection />
      <Footer />
    </Stack>
  )
}

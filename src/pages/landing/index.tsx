import { DownloadOnStores, InitialSection, TrackPrecision, WageSection } from './components'

export const LandingPage: React.FC = () => {

  return (
    <>
      <InitialSection />
      <DownloadOnStores />
      <TrackPrecision />
      <WageSection />
    </>
  )
}

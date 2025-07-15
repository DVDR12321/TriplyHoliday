import { GreeceMapSection } from '../greece-map/GreeceMapSection';
import { CoverVideo } from './cover-video/CoverVideo';
import { PopularDestinationsSection } from './popular-destionations/PopularDestionations';
import { RecommendedDestinations } from './recommended-destinations/RecommendedDestinations';

export const LandingPage = () => {
  return (
    <>
      <CoverVideo />
      <PopularDestinationsSection />
      <GreeceMapSection />
      <RecommendedDestinations />
    </>
  );
};

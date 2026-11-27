import LocationDetector from "@/components/LocationDetector";
import { Suspense } from "react";
function HomePage() {
  return (
    <Suspense fallback={null}>
      <LocationDetector />;
    </Suspense>
  );
}

export default HomePage;

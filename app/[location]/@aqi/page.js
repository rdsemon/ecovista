import AqiCard from "@/components/AqiCard";
import { Suspense } from "react";

async function AqiPage(props) {
  return (
    <Suspense fallback={<p>Loading......</p>}>
      <AqiCard {...props} />
    </Suspense>
  );
}

export default AqiPage;

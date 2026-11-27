"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

function LocationDetector() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only detect location on homepage
    if (pathName !== "/") {
      setLoading(false);
      return;
    }

    // Prevent repeated location detection
    if (searchParams.has("latitude") && searchParams.has("longitude")) {
      setLoading(false);
      router.replace(`/current?${searchParams.toString()}`);
      return;
    }

    if (!navigator.geolocation) {
      setLoading(false);
      return;
    }

    let active = true;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (!active) return;

        const params = new URLSearchParams(searchParams.toString());

        params.set("latitude", position.coords.latitude.toString());

        params.set("longitude", position.coords.longitude.toString());

        router.replace(`/current?${params.toString()}`);
      },

      (error) => {
        if (!active) return;

        console.error("Geolocation error:", error.message);
        setLoading(false);
      },
    );

    return () => {
      active = false;
    };
  }, [pathName, searchParams, router]);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-700 text-white">
      {loading && <p className="text-center text-4xl">Detecting Location...</p>}
    </div>
  );
}

export default LocationDetector;

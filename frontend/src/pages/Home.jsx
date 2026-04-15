import React, { lazy, Suspense, useMemo } from "react";
import { Laptop, HeartHandshake, ShieldCheck, BookOpen } from "lucide-react";
import "./Home.css";

// Assets
import p11 from "../assets/gallery/p11.jpeg";
import p12 from "../assets/gallery/p12.jpeg";

// Lazy Components
const Hero = lazy(() => import("../components/home/Hero"));
const TrustSection = lazy(() => import("../components/home/TrustSection"));
const AboutPreview = lazy(() => import("../components/home/AboutPreview"));
const Programmes = lazy(() => import("../components/home/Programmes"));
const ActivityMasonry = lazy(() => import("../components/home/ActivityMasonry"));
const GallerySection = lazy(() => import("../components/home/GallerySection"));
const AdmissionPreview = lazy(() => import("../components/home/AdmissionPreview"));


// Skeleton Loader
const HomeSkeleton = () => (
  <div className="section container">
    <div className="skeleton" style={{ height: "400px", borderRadius: "35px", width: "100%" }}></div>
  </div>
);

const Home = () => {
  const whyTrustUs = useMemo(
    () => [
      {
        title: "Smart Learning",
        desc: "Interactive classrooms with digital tools for young explorers.",
        icon: <Laptop size={32} />,
        color: "blue",
      },
      {
        title: "Caring Teachers",
        desc: "Compassionate mentors dedicated to every child's growth.",
        icon: <HeartHandshake size={32} />,
        color: "pink",
      },
      {
        title: "Secure Campus",
        desc: "CCTV-monitored safe haven for your little ones.",
        icon: <ShieldCheck size={32} />,
        color: "green",
      },
      {
        title: "Fun Curriculum",
        desc: "Play-based learning for holistic social & cognitive growth.",
        icon: <BookOpen size={32} />,
        color: "yellow",
      },
    ],
    []
  );

  return (
    <div className="home-page">

      <Suspense fallback={<HomeSkeleton />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<HomeSkeleton />}>
        <TrustSection whyTrustUs={whyTrustUs} />
      </Suspense>

      <Suspense fallback={<HomeSkeleton />}>
        <AboutPreview p11={p11} p12={p12} />
      </Suspense>

      <Suspense fallback={<HomeSkeleton />}>
        <Programmes />
      </Suspense>

      <Suspense fallback={<HomeSkeleton />}>
        <GallerySection />
      </Suspense>

      {/* <Suspense fallback={<HomeSkeleton />}>
        <ActivityMasonry />
      </Suspense> */}

      <Suspense fallback={<HomeSkeleton />}>
        <AdmissionPreview />
      </Suspense>
    </div>
  );
};

export default React.memo(Home);
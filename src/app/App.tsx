import React, { useState, lazy, Suspense, useEffect } from "react";
import backgroundVideo from "@/assets/temp.mp4?url";

const Hero = lazy(() => import("./components/Hero").then(m => ({ default: m.Hero })));
const InvitationText = lazy(() => import("./components/InvitationText").then(m => ({ default: m.InvitationText })));
const EventTimeline = lazy(() => import("./components/EventTimeline").then(m => ({ default: m.EventTimeline })));
const OvernightInfo = lazy(() => import("./components/OvernightInfo").then(m => ({ default: m.OvernightInfo })));
const DressCode = lazy(() => import("./components/DressCode").then(m => ({ default: m.DressCode })));
const RSVP = lazy(() => import("./components/RSVP").then(m => ({ default: m.RSVP })));

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
         (window.innerWidth <= 768);
}

export default function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const mobile = isMobileDevice();
    setIsMobile(mobile);
    setShouldLoadVideo(!mobile);
    
    if (mobile) {
      const timer = setTimeout(() => setShouldLoadVideo(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden satin-bg">
      <div className="fixed inset-0 w-full h-full -z-10">
        {!videoLoaded && (
          <div className="w-full h-full bg-pink-200" />
        )}
        {shouldLoadVideo && (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload={isMobile ? "metadata" : "auto"}
            className="w-full h-full object-cover"
            onLoadedData={() => setVideoLoaded(true)}
            disablePictureInPicture
            disableRemotePlayback
            style={{ 
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="relative">
        <Suspense fallback={<div className="min-h-screen" />}>
          <Hero />
        </Suspense>
        <Suspense fallback={null}>
          <InvitationText />
        </Suspense>
        <Suspense fallback={null}>
          <EventTimeline />
        </Suspense>
        <Suspense fallback={null}>
          <OvernightInfo />
        </Suspense>
        <Suspense fallback={null}>
          <DressCode />
        </Suspense>
        <Suspense fallback={null}>
          <RSVP />
        </Suspense>
      </div>
    </div>
  );
}
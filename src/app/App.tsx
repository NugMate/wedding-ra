import { Hero } from "./components/Hero";
import { InvitationText } from "./components/InvitationText";
import { EventTimeline } from "./components/EventTimeline";
import { OvernightInfo } from "./components/OvernightInfo";
import { DressCode } from "./components/DressCode";
import { RSVP } from "./components/RSVP";
import backgroundVideo from "@/assets/main.mp4?url";
import React, { useState } from "react";

export default function App() {
  const [videoLoaded, setVideoLoaded] = useState(true);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <div className="fixed inset-0 w-full h-full -z-10">
        {!videoLoaded && (
          <div className="w-full h-full bg-pink-200" />
        )}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div className="relative">
        <Hero />
        <InvitationText />
        <EventTimeline />
        <OvernightInfo />
        <DressCode />
        <RSVP />
      </div>
    </div>
  );
}
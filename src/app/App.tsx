import { Hero } from "./components/Hero";
import { InvitationText } from "./components/InvitationText";
import { EventTimeline } from "./components/EventTimeline";
import { OvernightInfo } from "./components/OvernightInfo";
import { DressCode } from "./components/DressCode";
import { RSVP } from "./components/RSVP";
import backgroundVideo from "@/assets/main2.mp4?url";
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden satin-bg">
      <div className="fixed inset-0 w-full h-full -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
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
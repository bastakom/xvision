"use client";

import type { PropsWithChildren } from "react";
import { storyblokInit } from "@storyblok/react/rsc";
import page from "./page";
import { HeroComponent } from "./hero";
import { TilesBehandlingarComponent } from "./tiles-behandlingar";
import { ImageBlockComponent } from "./image-block";
import { AboutBlockComponent } from "./about-block";
import { PartnerLogosComponent } from "./partner-logos-component";
import { ContactFormComponent } from "./contact-form";
import { InfoBoxComponent } from "./info-box";
import { TeamComponent } from "./team";
import { PrisBlockComponent } from "./pris-block";
import { CTAComponent } from "./CTA";
import { ForunderSokningComponent } from "./forundersokning";
import { ContentBoxComponent } from "./content-box";
import { PartialPayment } from "./partial-payment";
import { FaqBlock } from "./FAQ-block";

storyblokInit({
  components: {
    page: page,
    Hero: HeroComponent,
    tilesBehandlingar: TilesBehandlingarComponent,
    imageblock: ImageBlockComponent,
    aboutBlock: AboutBlockComponent,
    partnerLogos: PartnerLogosComponent,
    contactForm: ContactFormComponent,
    infobox: InfoBoxComponent,
    team: TeamComponent,
    PrisBlock: PrisBlockComponent,
    CTA: CTAComponent,
    forundersokning: ForunderSokningComponent,
    contentbox: ContentBoxComponent,
    partialPayment: PartialPayment,
    FAQ_block: FaqBlock,
  },
  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

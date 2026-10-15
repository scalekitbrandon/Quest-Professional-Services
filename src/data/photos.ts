// Every client photo used on the site, with descriptive alt text, and where
// each one goes. Files live in /public/images (WebP, EXIF stripped). Variants:
// -hero (2000x1000 banner), -square (gallery), -card (service cards), -why.
// Photos without a suffix are small originals (240x320): only use them in
// PhotoStrip, never stretched into banners or cards.

export interface Photo {
  src: string;
  alt: string;
}

const img = (file: string, alt: string): Photo => ({ src: `/images/${file}`, alt });

export const photos = {
  truckSide: img('quest-box-truck-side-profile-hero.webp', 'Quest Professional Services box truck parked in a lot'),
  truckSideSquare: img('quest-box-truck-side-profile-square.webp', 'Quest Professional Services box truck'),
  truckSideCard: img('quest-box-truck-side-profile-card.webp', 'Quest Professional Services box truck'),
  driverHero: img('quest-box-truck-driver-dot-mc-hero.webp', 'Quest driver in a box truck marked with USDOT 3698493 and MC 1293117'),
  driverSquare: img('quest-box-truck-driver-dot-mc-square.webp', 'Quest driver in a branded box truck showing the company DOT and MC numbers'),
  team: img('quest-professional-services-team-why.webp', 'The Quest Professional Services team in front of a company box truck'),
  teamSquare: img('quest-professional-services-team-square.webp', 'The Quest Professional Services team with a company truck'),
  crewTeamHero: img('quest-crew-team-with-truck-hero.webp', 'Three Quest crew members beside a branded Quest box truck'),
  crewTeamSquare: img('quest-crew-team-with-truck-square.webp', 'Quest crew members beside a branded box truck'),
  crewBrandedHero: img('quest-crew-with-branded-truck-hero.webp', 'Two Quest crew members pointing to the company logo on a box truck'),
  crewBrandedSquare: img('quest-crew-with-branded-truck-square.webp', 'Quest crew members with a branded box truck'),
  freightHero: img('freight-pallets-secured-box-truck-hero.webp', 'Palletized freight strapped and secured inside a Quest box truck'),
  freightSquare: img('freight-pallets-secured-box-truck-square.webp', 'Freight pallets secured with ratchet straps in a box truck'),
  freightCard: img('freight-pallets-secured-box-truck-card.webp', 'Freight secured inside a Quest box truck'),
  palletHero: img('palletized-freight-shrink-wrapped-hero.webp', 'Shrink-wrapped pallet of steel drums loaded for delivery'),
  palletSquare: img('palletized-freight-shrink-wrapped-square.webp', 'Shrink-wrapped palletized freight in a box truck'),
  eventHero: img('event-staging-crated-for-transport-hero.webp', 'Event staging panels crated and strapped for transport'),
  eventSquare: img('event-staging-crated-for-transport-square.webp', 'Event staging and set pieces crated for transport'),
  eventCard: img('event-staging-crated-for-transport-card.webp', 'Event staging crated for transport'),
  truckInteriorHero: img('box-truck-interior-load-straps-hero.webp', 'Clean box truck interior with load straps and pallet jack, ready to load'),
  truckInteriorSquare: img('box-truck-interior-load-straps-square.webp', 'Box truck interior with load straps ready for a relocation'),
  truckInteriorCard: img('box-truck-interior-load-straps-card.webp', 'Box truck ready for a long-distance relocation'),
  vanRampHero: img('furniture-delivery-van-loading-ramp-hero.webp', 'Wrapped furniture loaded in a cargo van with a loading ramp'),
  vanRampSquare: img('furniture-delivery-van-loading-ramp-square.webp', 'Furniture wrapped in protective pads inside a cargo van'),
  vanRampCard: img('furniture-delivery-van-loading-ramp-card.webp', 'Wrapped furniture in a Quest cargo van'),
  vanWrappedHero: img('wrapped-furniture-delivery-van-hero.webp', 'Blanket-wrapped furniture secured in a delivery van at a loading dock'),
  vanWrappedSquare: img('wrapped-furniture-delivery-van-square.webp', 'Wrapped furniture ready for delivery in a cargo van'),
  strappingHero: img('crew-securing-load-box-truck-hero.webp', 'Quest crew member securing a load with straps inside a box truck'),
  strappingSquare: img('crew-securing-load-box-truck-square.webp', 'Crew member strapping a load inside a box truck'),
  handTruckHero: img('crew-member-hand-truck-unloading-hero.webp', 'Quest crew member unloading a box truck with a hand truck'),
  handTruckSquare: img('crew-member-hand-truck-unloading-square.webp', 'Crew member with a hand truck in a box truck'),
  handTruckCard: img('crew-member-hand-truck-unloading-card.webp', 'Quest crew member unloading with a hand truck'),
  crewTruckHero: img('crew-member-quest-box-truck-hero.webp', 'Quest crew member at the cab of a branded Quest box truck'),
  crewTruckSquare: img('crew-member-quest-box-truck-square.webp', 'Crew member at a branded Quest box truck'),
  // small originals (240x320)
  garageBefore: img('estate-cleanout-garage-before.webp', 'Cluttered garage before an estate cleanout'),
  roomBefore: img('estate-cleanout-living-room-before.webp', 'Living room filled with belongings before an estate cleanout'),
  sortingBoxes: img('storage-organization-sorting-boxes.webp', 'Bins and boxes sorted by a window during an organizing job'),
  cleaningHallway: img('estate-cleanout-cleaning-hallway.webp', 'Crew member cleaning a hallway during an estate cleanout'),
  mattress: img('crew-relocating-mattress.webp', 'Two crew members carrying a mattress out of a bedroom'),
  roomAfter: img('estate-cleanout-room-after.webp', 'Empty, clean living room with hardwood floors after an estate cleanout'),
  roomAfterCard: img('estate-cleanout-room-after-card.webp', 'Clean, empty room after an estate cleanout'),
  emptyRoomAfter: img('estate-cleanout-empty-room-after.webp', 'Empty room with polished hardwood floors after a cleanout'),
  sofaLift: img('crew-lifting-sofa.webp', 'Three crew members lifting a pink tufted sofa'),
  rowhouseSteps: img('crew-carrying-sofa-rowhouse-steps.webp', 'Crew carrying a wrapped sofa down brick rowhouse steps'),
} satisfies Record<string, Photo>;

// Banner (ServiceHero) background per page path.
export const heroImages: Record<string, Photo> = {
  '/about/': photos.crewTeamHero,
  '/reviews/': photos.crewBrandedHero,
  '/service-areas/': photos.truckSide,
  '/residential-relocation/': photos.crewTruckHero,
  '/residential-relocation/local-relocation/': photos.vanRampHero,
  '/residential-relocation/long-distance-relocation/': photos.truckInteriorHero,
  '/residential-relocation/packing-unpacking/': photos.vanWrappedHero,
  '/commercial-relocation/': photos.crewBrandedHero,
  '/commercial-relocation/office-relocation/': photos.handTruckHero,
  '/commercial-relocation/business-relocation/': photos.driverHero,
  '/commercial-relocation/commercial-packing/': photos.strappingHero,
  '/event-logistics/': photos.eventHero,
  '/event-logistics/event-transportation/': photos.freightHero,
  '/event-logistics/event-setup/': photos.eventHero,
  '/event-logistics/pickup-delivery/': photos.vanWrappedHero,
  '/specialty-services/': photos.palletHero,
  '/specialty-services/freight-transport/': photos.palletHero,
  '/service-areas/washington-dc/': photos.driverHero,
  '/service-areas/alexandria-va/': photos.crewTruckHero,
  '/service-areas/alexandria-va/office-relocation/': photos.handTruckHero,
  '/service-areas/alexandria-va/local-relocation/': photos.vanRampHero,
  '/service-areas/fort-washington-md/': photos.truckSide,
  '/service-areas/prince-georges-county-md/': photos.crewTeamHero,
};

// Small job-photo strips (PhotoStrip) per page path.
export const photoStrips: Record<string, { heading: string; intro: string; photos: Photo[] }> = {
  '/specialty-services/estate-cleanouts/': {
    heading: 'Before & After: Recent Estate Cleanouts',
    intro: 'From a full garage and crowded rooms to a broom-clean home ready to list.',
    photos: [photos.garageBefore, photos.roomBefore, photos.cleaningHallway, photos.roomAfter, photos.emptyRoomAfter],
  },
  '/service-areas/alexandria-va/estate-cleanouts/': {
    heading: 'Before & After: Estate Cleanout Work',
    intro: 'What a full estate cleanout looks like, from crowded rooms to a home ready to list.',
    photos: [photos.garageBefore, photos.roomBefore, photos.cleaningHallway, photos.roomAfter],
  },
  '/specialty-services/storage-organization/': {
    heading: 'Sorting & Organizing in Progress',
    intro: 'Every item sorted with you into keep, donate, and sell before anything goes back in.',
    photos: [photos.roomBefore, photos.sortingBoxes, photos.garageBefore, photos.emptyRoomAfter],
  },
  '/residential-relocation/local-relocation/': {
    heading: 'Our Crew at Work',
    intro: 'Careful carries up stairs, down stoops, and through tight doorways.',
    photos: [photos.sofaLift, photos.mattress, photos.rowhouseSteps, photos.vanRampSquare],
  },
  '/service-areas/washington-dc/': {
    heading: 'Our Crew at Work',
    intro: 'Rowhouse steps, tight stairs, and heavy furniture, handled with care.',
    photos: [photos.rowhouseSteps, photos.sofaLift, photos.mattress, photos.crewTruckSquare],
  },
};

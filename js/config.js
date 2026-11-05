/* ═══════════════════════════════════════════════════════════════
   NOCTURNE · config.js
   ---------------------------------------------------------------
   Main personalisation data for the site and visual editor.
   Longer copy, palette, and theme are editable here. Values
   marked SAMPLE are tasteful placeholders — replace them with
   your own before sending the link to your guests.
   ═══════════════════════════════════════════════════════════════ */

window.HEIRLOOM = {
  templateId: "nocturne",

  /* ── The couple — SAMPLE content, replace with your names ────── */
  couple: {
    partnerOne: "Aurelia",                   // SAMPLE
    partnerTwo: "Silas",                     // SAMPLE
    initials:  "A · S",                      // SAMPLE — used on seals & monograms
    namesLine: "Aurelia & Silas"             // SAMPLE — used across the site
  },

  /* ── The wedding date & time ─────────────────────────────────
     iso : ISO 8601 date-time WITH an explicit UTC offset, so the
           countdown and the calendar files are correct on every
           guest's device, wherever they are in the world.
           Format: "YYYY-MM-DDTHH:MM:SS±HH:MM"
           The sample below = 18 September 2027, 6:30 PM, GMT+1 (BST).
     display / words / numerals : how the date reads in the copy. */
  wedding: {
    iso: "2027-09-18T18:30:00+01:00",                              // EDIT
    endIso: "2027-09-19T01:00:00+01:00",                           // EDIT — end of the celebration
    display: "Saturday, 18 September 2027 · 6:30 in the evening",  // EDIT
    zoneLabel: "",                                                 // EDIT — optional note for guests abroad, e.g. "BST"
    words: "Saturday · The Eighteenth of September · Two Thousand Twenty-Seven", // EDIT
    numerals: "18 · 09 · 2027",                                    // EDIT
    eventTitle: "Aurelia & Silas — Wedding"                        // EDIT (calendar entry)
  },

  /* ── The venue ──────────────────────────────────────────────── */
  venue: {
    name: "The Orangery at Vesper Hill",        // SAMPLE
    address: "Vesper Hill Estate, Cotswolds",   // SAMPLE
    mapsQuery: "",                              // optional Maps search override
    /* A full URL here overrides the map link built above, e.g. an
       exact Google Maps place link or an Apple Maps URL.          */
    mapUrl: ""
  },

  /* ── Copy shown throughout the invitation ────────────────────
     The visual editor can change these values without editing HTML. */
  content: {
    pageTitle: "Aurelia & Silas · 18 September 2027 — A Night Under the Stars",
    pageDescription: "Aurelia and Silas request the pleasure of your company in the orangery at Vesper Hill, Cotswolds, on Saturday the eighteenth of September 2027. Open your invitation.",
    socialTitle: "Aurelia & Silas — An Invitation · 18.09.2027",
    socialDescription: "Candlelight, late roses and a sky full of stars — you are cordially invited.",
    navStory: "Story",
    navDetails: "Details",
    navVenue: "Venue",
    navRsvp: "RSVP",
    menuInvitation: "The Invitation",
    menuStory: "Our Story",
    menuSaveDate: "Save the Date",
    menuDetails: "The Details",
    menuPalette: "The Palette",
    menuWeddingDay: "The Wedding Day",
    menuVenue: "Venue & Location",
    menuRsvp: "Kindly Respond",
    menuCountdown: "The Countdown",
    menuClosing: "A Closing Note",
    openingEyebrow: "An evening under the stars, from",
    openingHint: "You are cordially invited",
    openButton: "Open the Invitation",
    skipButton: "Skip straight to the invitation",
    envelopeAddress: "friends & family",
    invitationEyebrow: "Together with their families",
    invitationLead: "request the pleasure of your company as they exchange vows by candlelight and dance the night away beneath a sky of stars.",
    invitationVenueSuffix: "· Cotswolds",
    storyKicker: "№ 02 · Their Story",
    storyTitle: "Our",
    storyTitleScript: "Story",
    storyParagraphOne: "Every constellation begins with a single light, and ours appeared on a cold night in November — a delayed train, a shared platform, and one conversation that outlasted the last departure.",
    storyParagraphTwo: "Six years, two cities and one stubborn little dog later, we are finally drawing our own map of the sky. Nothing would mean more than to have you standing beside us when we do.",
    storyQuote: "I have loved the stars too fondly to be fearful of the night.",
    storyQuoteLabel: "— Sarah Williams, read aloud on our first walk home",
    storyNote: "somewhere between moonrise & forever",
    storyNoteCredit: "— a note we keep returning to",
    storyCaptionOne: "the first chapter",
    storyCaptionTwo: "always, us",
    storyCaptionFour: "the long way home",
    storyAside: "the beginning of always",
    saveDateTitle: "Save the Date",
    saveDateCrossing: "moonrise, and all the years after",
    saveDateNote: "The date is set. Add it to your calendar and keep these details close.",
    calendarDownloadLabel: "Add to Calendar",
    calendarGoogleLabel: "Google Calendar",
    detailsKicker: "№ 04 · The Particulars",
    detailsTitleFirst: "Wedding",
    detailsTitleSecond: "Details",
    detailsIntro: "The evening, at a glance.",
    ceremonyLabel: "The Ceremony",
    ceremonyTime: "Half past six",
    ceremonyNote: "Vows in the candlelit orangery as the sun goes down.",
    receptionLabel: "The Reception",
    receptionTime: "Eight o'clock",
    receptionNote: "Dinner by candlelight and dancing under the string lights.",
    kindlyReplyLabel: "Kindly Reply",
    kindlyReplyNote: "Kindly send your response using the reply form further below.",
    particularsEyebrow: "The Particulars",
    particularsDateLabel: "The Date",
    particularsPlaceLabel: "The Place",
    particularsAttireLabel: "The Attire",
    particularsAttire: "Evening formal",
    particularsAttireNote: "Deep tones and quiet shine are welcome — wear what makes you feel wonderful.",
    particularsCarriagesLabel: "The Carriages",
    particularsCarriagesTime: "At one o'clock",
    particularsCarriagesNote: "The last dance ends as the candles burn low.",
    paletteKicker: "№ 05 · A Note on Colour",
    paletteTitleFirst: "The wedding",
    paletteTitleSecond: "palette",
    paletteIntro: "A study in midnight and champagne gold, warmed by candle glow and late roses — chosen to feel at home beneath the evening sky.",
    dressCodeLabel: "Attire · Evening celebration",
    dressCodeTitle: "Evening formal",
    dressCodeNote: "A little dressed up, a little starlit. Deep tones are welcome, but the palette is only a suggestion — wear what makes you feel wonderful.",
    weddingDayKicker: "№ 06 · The Celebration",
    weddingDayTitleFirst: "The Wedding",
    weddingDayTitleSecond: "Day",
    venueKicker: "№ 07 · The Place",
    venueDescription: "A Victorian glass orangery on a quiet hill — where long tables, a hundred candles and the string lights drift slowly into the deep blue of the evening.",
    venueCeremonyLabel: "Ceremony",
    venueCeremonyText: "in the orangery, as the sun sets",
    venueReceptionLabel: "Reception",
    venueReceptionText: "dinner & dancing beneath the string lights",
    mapButton: "View Location",
    rsvpKicker: "№ 08 · Your Reply",
    rsvpTitle: "Kindly Respond",
    rsvpLead: "Kindly reply by",
    rsvpNameLabel: "Your name",
    rsvpNamePlaceholder: "e.g. Eleanor Whitmore",
    rsvpNameError: "May we have your name? Two letters or more will do.",
    rsvpAttendanceLabel: "Will you be joining us?",
    rsvpAcceptLabel: "Joyfully accepts",
    rsvpDeclineLabel: "Regretfully declines",
    rsvpAttendanceError: "Please let us know whether you can come.",
    rsvpGuestsLabel: "Seats in your party",
    rsvpGuestsError: "May we have a seat count between one and the party size allowed?",
    rsvpGuestSingular: "guest",
    rsvpGuestPlural: "guests",
    rsvpDietaryLabel: "Dietary requirements",
    rsvpDietaryPlaceholder: "Allergies, intolerances, or dishes to avoid",
    rsvpMessageLabel: "A note for the couple",
    rsvpMessagePlaceholder: "Song requests, memories, well wishes…",
    rsvpSubmitLabel: "Send Response",
    rsvpAmendLabel: "Amend the reply",
    countdownDaysLabel: "Days",
    countdownHoursLabel: "Hours",
    countdownMinutesLabel: "Minutes",
    countdownSecondsLabel: "Seconds",
    countdownKicker: "№ 09 · Counting the Moments",
    countdownTitle: "until we say",
    countdownPromise: "“I do”",
    closingScript: "with all our love",
    closingMessage: "Thank you, from the bottom of our hearts, for being part of our story. We cannot wait to celebrate with you among the candles and the late roses, under a sky full of stars.",
    footerTagline: "A night, a vow, a forever."
  },

  palette: [
    { name: "Ivory Moon",   color: "#F2EDE2" },
    { name: "Champagne Gold", color: "#C9A86A" },
    { name: "Midnight",     color: "#1A2238" },
    { name: "Dusty Mauve",  color: "#B58AA6" },
    { name: "Eucalyptus",   color: "#8FA392" }
  ],
  theme: "midnight",
  themeColors: {},
  fonts: {
    editorial: "italiana",
    display: "cormorant",
    script: "mrsSaintDelafield",
    hand: "laBelle",
    body: "jost"
  },

  /* ── Wedding-day moments — SAMPLE words for the wedding programme.
     Use one short word per entry; an empty list hides the section. */
  moments: ["Arrival", "Vows", "Gathering", "Feast", "Toasts", "Cake", "Dancing"],

  /* ── RSVP ─────────────────────────────────────────────────────
     endpoint : leave "" for the honest demonstration mode — the
                form validates and shows a preview of the reply and
                states clearly that nothing is sent or stored.
                Cloudflare's publishing service supplies the invitation-
                specific RSVP endpoint to public invitation pages.
     maxGuests: the number allowed by the invitation.
     deadline  : shown above the form.                                  */
  rsvp: {
    endpoint: "",
    maxGuests: 2,
    deadline: "the first of August, 2027"          // SAMPLE
  },

  /* ── Countdown wording (invalid or passed dates) ─────────────── */
  countdown: {
    invalidMessage: "The exact hour is still being pressed between the pages — see the details below.",
    pastMessage: "The celebration has begun — thank you for being part of our story."
  },

  /* ── Optional ambient music ───────────────────────────────────
     Drop a small looping file at assets/audio/theme.mp3 and set
     src to enable the volume toggle in the navigation. Never
     autoplays; stays silent if the file is missing.                  */
  audio: {
    src: ""             // e.g. "assets/audio/theme.mp3"
  }
};

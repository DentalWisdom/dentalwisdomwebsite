/* =========================================================
   Dental Wisdom Live — session data
   This is the single source of truth for the Live page.
   No Google Sheet is used — Ben tells Claude about changes
   (new session, updated info, status change) and Claude
   edits this file directly and commits.

   Fields per session:
     title        - Session title (required)
     date         - Display date, e.g. "May 14, 2026"
     time         - Display time, e.g. "8:00 PM – 9:30 PM ET"
     presenter    - Presenter name
     description  - Full session description
     registerLink - Registration URL
     sponsor      - Sponsor display name
     sponsorLink  - Sponsor website URL
     sortDate     - ISO date for sorting, e.g. "2026-05-14"
     status       - "upcoming" or "past"
   ========================================================= */

window.LIVE_DATA = [
  {
    title: "Maximizing Your Parnassah: How to Increase Revenue Without Increasing Your Hours",
    date: "May 14, 2026",
    time: "8:00 PM – 9:30 PM ET",
    presenter: "Harold Gornbein",
    description: "Join Harold Gornbein (Apex Reimbursement Specialists) for a session dedicated to the financial health of your practice. We will move beyond the chair to discover practical strategies that streamline your billing and improve cash flow. Learn how to integrate expert reimbursement management into your daily routine, ensuring your practice achieves the operational excellence it deserves.",
    registerLink: "https://events.teams.microsoft.com/event/4973cdac-548c-407a-ba4a-1164cc9336da@353aa5d5-fd41-4aae-bc79-6722f1ca6cce",
    sponsor: "Apex",
    sponsorLink: "https://apexreimbursement.com/dental-wisdom/",
    sortDate: "2026-05-14",
    status: "past"
  },
  {
    title: "Straight Forward: Building Your Clear Aligner Practice",
    date: "June 18, 2026",
    time: "8:00 PM – 9:30 PM ET",
    presenter: "Dr. Sam Glick, DMD",
    description: "Straight Forward: Building Your Clear Aligner Practice is a practical, team-focused CE course designed to help dentists confidently grow their clear aligner services. Participants will learn how to empower their entire dental team, streamline workflows, and master smarter case selection to deliver more predictable, successful outcomes with fewer refinements and complications.\n\nThrough real-world strategies and proven clinical tips, this course equips you with the essential “tools” you need — from patient communication and team delegation to treatment planning and troubleshooting — so you can build a thriving, efficient clear aligner practice with greater confidence and consistency. Perfect for doctors and teams looking to take their aligner cases from good to reliably excellent.",
    registerLink: "https://events.teams.microsoft.com/event/d5759ca1-a9cd-46bb-be51-6649809a740d@353aa5d5-fd41-4aae-bc79-6722f1ca6cce",
    sponsor: "orthobrain",
    sponsorLink: "https://orthobrain.com/",
    sortDate: "2026-06-18",
    status: "upcoming"
  },
  {
    title: "All-on-X Surgery and Restoration - Does it all have to be done on the same day or can it be staged? 5 Patient treatments showing everything from planning to restoration",
    date: "July 9, 2026",
    time: "8:00 PM – 9:30 PM ET",
    presenter: "Dr. Daniel Reich",
    description: "Practical strategies for building a values-driven, profitable dental practice.",
    registerLink: "https://events.teams.microsoft.com/event/80092a8e-92c4-4ea1-8a5a-e390fcf02300@353aa5d5-fd41-4aae-bc79-6722f1ca6cce",
    sponsor: "Adin",
    sponsorLink: "https://www.adin-implants.com/",
    sortDate: "2026-07-09",
    status: "upcoming"
  }
];

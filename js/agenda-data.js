/* =========================================================
   Dental Wisdom Conference — Agenda data
   See SITE_SPEC.md §6. Ben tells Claude about schedule
   changes (new session, updated time/speaker/room, etc.)
   and Claude edits this file directly. No Google Sheet.

   Fields per agenda item:
     day     - Day label shown on the agenda tabs
     time    - Time range shown on the schedule
     title   - Session / activity name
     speaker - Presenter or leader (optional — leave "" if none)
     location - Room or area name (optional — leave "" if not set)

   Lecture sessions without a confirmed speaker show "Speaker TBD".
   Locations and remaining lecture topics/speakers are still TBD
   and will be filled in as they're confirmed.
   ========================================================= */

window.AGENDA_DATA = [
  // ---------------- Thursday ----------------
  { day: "Thursday", time: "6:00 – 7:00 AM", title: "Daf Yomi Shiur", speaker: "", location: "" },
  { day: "Thursday", time: "7:00 – 8:00 AM", title: "Shacharis", speaker: "", location: "" },
  { day: "Thursday", time: "8:00 – 8:45 AM", title: "Breakfast", speaker: "", location: "" },
  { day: "Thursday", time: "8:45 – 9:00 AM", title: "Welcoming Remarks", speaker: "Dr. Lisa (Greenstein) Sokol", location: "" },
  { day: "Thursday", time: "9:00 – 10:00 AM", title: "Lecture", speaker: "Speaker TBD", location: "" },
  { day: "Thursday", time: "10:00 AM – 12:00 PM", title: "Lecture", speaker: "Speaker TBD", location: "" },
  { day: "Thursday", time: "12:00 – 2:00 PM", title: "Lunch", speaker: "", location: "" },
  { day: "Thursday", time: "2:00 – 4:00 PM", title: "Lecture", speaker: "Speaker TBD", location: "" },
  { day: "Thursday", time: "4:00 – 6:00 PM", title: "Lecture", speaker: "Speaker TBD", location: "" },
  { day: "Thursday", time: "6:00 – 6:30 PM", title: "Break (Mincha & Maariv)", speaker: "", location: "" },
  { day: "Thursday", time: "6:30 – 7:30 PM", title: "Lecture", speaker: "Speaker TBD", location: "" },
  { day: "Thursday", time: "8:00 PM", title: "Welcome Party", speaker: "", location: "" },

  // ---------------- Friday ----------------
  { day: "Friday", time: "6:00 – 7:00 AM", title: "Daf Yomi Shiur", speaker: "", location: "" },
  { day: "Friday", time: "7:00 – 8:00 AM", title: "Shacharis", speaker: "", location: "" },
  { day: "Friday", time: "8:00 – 8:45 AM", title: "Breakfast", speaker: "", location: "" },
  { day: "Friday", time: "8:45 – 9:00 AM", title: "Welcoming Remarks", speaker: "Dr. Lisa (Greenstein) Sokol", location: "" },
  { day: "Friday", time: "9:00 – 10:00 AM", title: "Lecture", speaker: "Speaker TBD", location: "" },
  { day: "Friday", time: "10:00 AM – 12:00 PM", title: "Lecture", speaker: "Speaker TBD", location: "" },
  { day: "Friday", time: "12:00 – 2:00 PM", title: "Lunch", speaker: "", location: "" },
  { day: "Friday", time: "2:00 – 4:00 PM", title: "Lecture", speaker: "Speaker TBD", location: "" },
  { day: "Friday", time: "4:00 – 5:00 PM", title: "Lecture", speaker: "Speaker TBD", location: "" },
  { day: "Friday", time: "6:00 PM", title: "Mincha & Maariv", speaker: "", location: "" },
  { day: "Friday", time: "8:00 PM", title: "Dinner", speaker: "", location: "" },
  { day: "Friday", time: "10:30 PM", title: "Oneg", speaker: "", location: "" },

  // ---------------- Shabbos ----------------
  { day: "Shabbos", time: "8:15 – 9:00 AM", title: "Daf Yomi Shiur", speaker: "", location: "" },
  { day: "Shabbos", time: "9:00 AM", title: "Davening", speaker: "", location: "" },
  { day: "Shabbos", time: "11:00 AM", title: "Kiddush", speaker: "", location: "" },
  { day: "Shabbos", time: "11:00 AM", title: "Dvar Torah", speaker: "", location: "" },
  { day: "Shabbos", time: "12:00 PM", title: "Lunch", speaker: "", location: "" },
  { day: "Shabbos", time: "3:00 PM", title: "Lecture", speaker: "Speaker TBD", location: "" },
  { day: "Shabbos", time: "4:30 PM", title: "Lecture", speaker: "Speaker TBD", location: "" },
  { day: "Shabbos", time: "6:00 PM", title: "Mincha", speaker: "", location: "" },
  { day: "Shabbos", time: "6:30 PM", title: "Shalashidus", speaker: "", location: "" },
  { day: "Shabbos", time: "7:00 PM", title: "Maariv", speaker: "", location: "" },
  { day: "Shabbos", time: "8:30 PM", title: "Closing Party", speaker: "", location: "" }
];

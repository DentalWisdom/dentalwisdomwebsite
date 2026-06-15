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
     location - Room or area name

   TODO: This is a SAMPLE schedule (same for all three days)
   for v1 of the site. Replace with the confirmed 2027
   day-by-day lineup once available.
   ========================================================= */

window.AGENDA_DATA = (function () {
  var sampleDay = [
    { time: "6:00 – 7:00 AM", title: "Daf Yomi Shiur", speaker: "Rabbi David Friedman", location: "Prayer Room" },
    { time: "7:00 – 8:30 AM", title: "Breakfast & Registration", speaker: "", location: "Grand Foyer" },
    { time: "9:00 – 10:30 AM", title: "Opening Keynote: The Future of Cross-Specialty Dentistry", speaker: "Dr. Sarah Cohen", location: "Ballroom A" },
    { time: "11:00 AM – 12:30 PM", title: "CE Session: Advances in Implant Dentistry", speaker: "Dr. Michael Levine", location: "Ballroom B" },
    { time: "12:30 – 2:00 PM", title: "Lunch & Networking", speaker: "", location: "Garden Terrace" },
    { time: "2:30 – 4:00 PM", title: "CE Session: Practice Management Essentials", speaker: "Dr. Rachel Goldstein", location: "Ballroom A" },
    { time: "4:30 – 5:30 PM", title: "Mincha", speaker: "Rabbi David Friedman", location: "Prayer Room" },
    { time: "7:00 – 9:00 PM", title: "Welcome Dinner & Evening Program", speaker: "", location: "Grand Ballroom" }
  ];

  var days = ["Thursday", "Friday", "Shabbos"];

  var data = [];
  days.forEach(function (day) {
    sampleDay.forEach(function (item) {
      data.push({
        day: day,
        time: item.time,
        title: item.title,
        speaker: item.speaker,
        location: item.location
      });
    });
  });

  return data;
})();

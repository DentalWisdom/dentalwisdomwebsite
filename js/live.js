/* =========================================================
   Dental Wisdom Live — Upcoming / Past session cards
   Reads from window.LIVE_DATA (js/live-data.js) and renders
   cards into the Upcoming and Past Sessions sections.
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  var upcomingEl = document.getElementById('upcomingSessions');
  var pastEl = document.getElementById('pastSessions');

  if (!upcomingEl || !pastEl) return;

  var sessions = window.LIVE_DATA || [];

  var upcoming = sessions.filter(function (s) {
    return s.status === 'upcoming';
  });
  var past = sessions.filter(function (s) {
    return s.status === 'past';
  });

  renderSessionCards(upcoming, upcomingEl, {
    emptyMessage: 'New sessions are being scheduled — check back soon!',
    buttonLabel: 'Register'
  });

  renderSessionCards(past, pastEl, {
    emptyMessage: 'No past sessions yet — check back after our first Dental Wisdom Live session.',
    buttonLabel: 'Watch Recording'
  });

  function renderSessionCards(rows, container, options) {
    if (!rows.length) {
      container.innerHTML = '<p class="placeholder">' + escapeHtml(options.emptyMessage) + '</p>';
      return;
    }

    container.innerHTML = rows.map(function (s) {
      var meta = [s.date, s.time].filter(Boolean).join(' • ');

      var html = '<div class="card">';
      html += '<h3>' + escapeHtml(s.title) + '</h3>';

      if (meta) {
        html += '<p class="session-card__meta">' + escapeHtml(meta) + '</p>';
      }

      if (s.presenter) {
        html += '<p class="session-card__presenter"><strong>' + escapeHtml(s.presenter) + '</strong></p>';
      }

      if (s.description) {
        // Render newlines as paragraph breaks
        var paras = s.description.split(/\n\n+/);
        paras.forEach(function (p) {
          if (p.trim()) html += '<p>' + escapeHtml(p.trim()) + '</p>';
        });
      }

      if (s.sponsor && s.sponsorLink) {
        html += '<p class="session-card__sponsor">Sponsored by <a href="' + escapeAttr(s.sponsorLink) + '" target="_blank" rel="noopener">' + escapeHtml(s.sponsor) + '</a></p>';
      } else if (s.sponsor) {
        html += '<p class="session-card__sponsor">Sponsored by ' + escapeHtml(s.sponsor) + '</p>';
      }

      if (s.registerLink && options.buttonLabel === 'Register') {
        html += '<a class="btn btn-primary" href="' + escapeAttr(s.registerLink) + '" target="_blank" rel="noopener">' + escapeHtml(options.buttonLabel) + '</a>';
      } else if (options.buttonLabel === 'Watch Recording') {
        html += '<p class="lede" style="margin:0;">Recording available upon request for network members.</p>';
      }

      html += '</div>';
      return html;
    }).join('');
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function escapeAttr(str) {
    return escapeHtml(str);
  }
});

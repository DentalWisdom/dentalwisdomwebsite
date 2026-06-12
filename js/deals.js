/* =========================================================
   Dental Wisdom Deals — searchable, filterable partner offers
   Fetches the Deals Google Sheet (see SITE_SPEC.md §6) via
   loadSheet() (js/sheets.js) and renders cards into the deals
   grid. Builds category filter buttons and a live search box
   from the loaded data. Falls back to a calm "couldn't load"
   message on any failure, per CLAUDE.md.

   Expected columns (SITE_SPEC §6): Title, Category, Description,
   Link, Promo, ImageURL.
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  var DEALS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRhtn0vhHV0cNsy8-DYzRvZRbmBD2vJr6FN8Zrk0AmpxWrtAs8fEk6SVyQt4-2vj9_YCkOffmRgMNkX/pub?gid=1635986973&single=true&output=csv';

  var gridEl = document.getElementById('dealsGrid');
  var categoriesEl = document.getElementById('dealsCategories');
  var searchEl = document.getElementById('dealsSearch');
  var noResultsEl = document.getElementById('dealsNoResults');

  if (!gridEl || typeof loadSheet !== 'function') return;

  var allDeals = [];
  var activeCategory = 'All';

  loadSheet({
    url: DEALS_CSV_URL,
    container: gridEl,
    fallbackMessage: "We couldn't load deals right now — please refresh the page.",
    onSuccess: function (rows) {
      allDeals = rows
        .map(function (row) {
          return {
            title: (row.Title || '').trim(),
            category: (row.Category || '').trim(),
            description: (row.Description || '').trim(),
            link: (row.Link || '').trim(),
            promo: (row.Promo || '').trim(),
            imageUrl: (row.ImageURL || '').trim()
          };
        })
        .filter(function (deal) {
          return deal.title;
        });

      if (!allDeals.length) {
        renderFallback(gridEl, 'New deals are being added — check back soon!');
        if (categoriesEl) categoriesEl.innerHTML = '';
        return;
      }

      buildCategoryButtons(allDeals);
      renderDeals(allDeals);
    }
  });

  if (searchEl) {
    searchEl.addEventListener('input', function () {
      applyFilters();
    });
  }

  function buildCategoryButtons(deals) {
    if (!categoriesEl) return;

    var categories = [];
    deals.forEach(function (deal) {
      if (deal.category && categories.indexOf(deal.category) === -1) {
        categories.push(deal.category);
      }
    });
    categories.sort(function (a, b) {
      return a.localeCompare(b);
    });
    categories.unshift('All');

    categoriesEl.innerHTML = categories.map(function (category) {
      var pressed = category === activeCategory ? 'true' : 'false';
      return '<button type="button" class="deals-categories__btn" data-category="' +
        escapeAttr(category) + '" aria-pressed="' + pressed + '">' +
        escapeHtml(category) + '</button>';
    }).join('');

    var buttons = categoriesEl.querySelectorAll('.deals-categories__btn');
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        activeCategory = button.getAttribute('data-category');
        buttons.forEach(function (b) {
          b.setAttribute('aria-pressed', b === button ? 'true' : 'false');
        });
        applyFilters();
      });
    });
  }

  function applyFilters() {
    var query = searchEl ? searchEl.value.trim().toLowerCase() : '';

    var filtered = allDeals.filter(function (deal) {
      var matchesCategory = activeCategory === 'All' || deal.category === activeCategory;
      var matchesQuery = !query ||
        deal.title.toLowerCase().indexOf(query) !== -1 ||
        deal.description.toLowerCase().indexOf(query) !== -1 ||
        deal.category.toLowerCase().indexOf(query) !== -1;
      return matchesCategory && matchesQuery;
    });

    renderDeals(filtered);
  }

  function renderDeals(deals) {
    if (!deals.length) {
      gridEl.innerHTML = '';
      gridEl.hidden = true;
      if (noResultsEl) noResultsEl.hidden = false;
      return;
    }

    if (noResultsEl) noResultsEl.hidden = true;
    gridEl.hidden = false;

    gridEl.innerHTML = deals.map(function (deal) {
      var html = '<div class="card deal-card">';

      html += '<div class="deal-card__image-wrap">';
      if (deal.imageUrl) {
        html += '<img src="' + escapeAttr(deal.imageUrl) + '" alt="' +
          escapeAttr(deal.title + ' logo') + '" loading="lazy" ' +
          'onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">' +
          '<div class="placeholder" style="display:none;">Image coming soon</div>';
      } else {
        html += '<div class="placeholder">Image coming soon</div>';
      }
      html += '</div>';

      var tags = '';
      if (deal.category) {
        tags += '<span class="deal-card__category">' + escapeHtml(deal.category) + '</span>';
      }
      if (deal.promo) {
        tags += '<span class="badge--promo">' + escapeHtml(deal.promo) + '</span>';
      }
      if (tags) {
        html += '<div class="deal-card__tags">' + tags + '</div>';
      }

      html += '<h3>' + escapeHtml(deal.title) + '</h3>';

      if (deal.description) {
        html += '<p>' + escapeHtml(deal.description) + '</p>';
      }

      if (deal.link) {
        html += '<a class="btn btn-secondary" href="' + escapeAttr(deal.link) +
          '" target="_blank" rel="noopener">View Deal</a>';
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

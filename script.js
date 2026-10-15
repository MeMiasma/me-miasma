// script.js — рендер проектов, фильтры, поиск, модалка

let allProjects = window.PROJECTS || [];
let filteredProjects = [...allProjects];
let visibleCount = 30;
const BATCH_SIZE = 30;

const CATEGORY_ICONS = {
  ecommerce: "🛒",
  fintech: "💳",
  saas: "☁️",
  automation: "⚙️",
  logistics: "🚚",
  medical: "🏥",
  education: "🎓",
  realestate: "🏠",
  delivery: "📦",
  mobile: "📱",
  gambling: "🎰"
};

const CATEGORY_NAMES = {
  ecommerce: "E-commerce",
  fintech: "Финтех",
  saas: "SaaS",
  automation: "Автоматизация",
  logistics: "Логистика",
  medical: "Медицина",
  education: "Образование",
  realestate: "Недвижимость",
  delivery: "Доставка",
  mobile: "Мобильные",
  gambling: "Гемблинг"
};

function renderStars(rating) {
  const full = "★".repeat(rating);
  const empty = "☆".repeat(5 - rating);
  return full + empty;
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const toShow = filteredProjects.slice(0, visibleCount);

  toShow.forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <div class="project-art">
        <div class="project-art-emoji">${CATEGORY_ICONS[p.category] || "📦"}</div>
      </div>
      <div class="project-body">
        <div class="project-meta">
          <span>${String(i + 1).padStart(2, "0")} / ${CATEGORY_NAMES[p.category] || "PROJECT"}</span>
          <span class="project-status">${p.year}</span>
        </div>
        <h3>${p.title}</h3>
        <p>${p.subtitle}</p>
        <div class="project-client">👤 ${p.client}</div>
        <div class="project-rating">
          <span class="stars">${renderStars(p.rating)}</span>
          <span>${p.rating}.0</span>
          <span class="date">${p.date}</span>
        </div>
        <div class="tag-list">
          ${p.tags.slice(0, 4).map(t => `<span>${t}</span>`).join("")}
        </div>
      </div>
    `;
    card.addEventListener("click", () => openModal(p));
    grid.appendChild(card);
  });

  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (loadMoreBtn) {
    if (visibleCount >= filteredProjects.length) {
      loadMoreBtn.style.display = "none";
    } else {
      loadMoreBtn.style.display = "inline-flex";
      loadMoreBtn.textContent = `Показать ещё ${Math.min(BATCH_SIZE, filteredProjects.length - visibleCount)} проектов ↓`;
    }
  }
}

function updateCategoryCounts() {
  const counts = { all: allProjects.length };
  allProjects.forEach(p => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });
  Object.keys(counts).forEach(key => {
    const el = document.getElementById(`count-${key}`);
    if (el) el.textContent = counts[key];
  });
}

function applyFilters() {
  const activeFilter = document.querySelector(".filter-button.active")?.dataset.filter || "all";
  const searchQuery = (document.getElementById("searchInput")?.value || "").toLowerCase().trim();
  const sortValue = document.getElementById("sortSelect")?.value || "date-desc";

  filteredProjects = allProjects.filter(p => {
    const matchCategory = activeFilter === "all" || p.category === activeFilter;
    const matchSearch = !searchQuery ||
      p.title.toLowerCase().includes(searchQuery) ||
      p.subtitle.toLowerCase().includes(searchQuery) ||
      p.client.toLowerCase().includes(searchQuery) ||
      p.tags.some(t => t.toLowerCase().includes(searchQuery)) ||
      p.desc.toLowerCase().includes(searchQuery);
    return matchCategory && matchSearch;
  });

  filteredProjects.sort((a, b) => {
    if (sortValue === "date-desc") return new Date(b.date) - new Date(a.date);
    if (sortValue === "date-asc") return new Date(a.date) - new Date(b.date);
    if (sortValue === "rating-desc") return b.rating - a.rating;
    if (sortValue === "title-asc") return a.title.localeCompare(b.title);
    return 0;
  });

  visibleCount = BATCH_SIZE;
  renderProjects();
}

function openModal(project) {
  const modal = document.getElementById("projectModal");
  if (!modal) return;

  document.getElementById("modalEyebrow").textContent = `PROJECT / ${project.category.toUpperCase()}`;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalDescription").textContent = project.desc;

  document.getElementById("modalMeta").innerHTML = `
    <span class="meta-client">👤 ${project.client}</span>
    <span>📅 ${project.date}</span>
    <span>💰 Бюджет: обсуждается</span>
  `;

  document.getElementById("modalFeatures").innerHTML = project.features
    .map(f => `<li>${f}</li>`).join("");

  document.getElementById("modalTags").innerHTML = project.tags
    .map(t => `<span>${t}</span>`).join("");

  document.getElementById("modalRating").innerHTML = `
    <span class="stars">${renderStars(project.rating)}</span>
    <span class="rating-value">${project.rating}.0 / 5.0</span>
    <span style="color: #6e7892; margin-left: auto;">${project.year}</span>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("projectModal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
  updateCategoryCounts();

  document.querySelectorAll(".filter-button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilters();
    });
  });

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    let debounce;
    searchInput.addEventListener("input", () => {
      clearTimeout(debounce);
      debounce = setTimeout(applyFilters, 250);
    });
  }

  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) sortSelect.addEventListener("change", applyFilters);

  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      visibleCount += BATCH_SIZE;
      renderProjects();
    });
  }

  document.getElementById("modalClose")?.addEventListener("click", closeModal);
  document.getElementById("projectModal")?.addEventListener("click", (e) => {
    if (e.target.id === "projectModal") closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }));
  }

  applyFilters();
});
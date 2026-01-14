let prevLang;
const currentLang = localStorage.getItem("lang");

const translations = {
  en: {
    heroTitle: "HelferIn",
    heroSubtitle:
      "Connect with local helpers for translation, errands, admin support & more in Bavaria.",
    heroCTA: "Get Started",
    featuresTitle: "Features",
    features: [
      {
        title: "Easy Requests",
        text: "Post help requests quickly for tasks like translation, errands or admin help.",
      },
      {
        title: "Trusted Helpers",
        text: "See ratings & profiles to pick helpers you can trust.",
      },
      {
        title: "Chat & Map",
        text: "Chat in-app and find helpers with interactive maps.",
      },
    ],
    problemTitle: "The Problem",
    problemText:
      "Many in Bavaria face language barriers, complex bureaucracy, or need help with daily tasks.",
    solutionTitle: "Our Solution",
    solutionText:
      "HelferIn connects you with helpers nearby for quick, trusted support, with English & German language support.",
    galleryTitle: "Community Moments",
    galleryText:
      "See our helpers in action—making a difference in local communities every day.",
    mapTitle: "Find Helpers Nearby",
    mapText: "Hover over a helper marker to see their name and availability.",
    ctaTitle: "Ready to Get Help or Help Others?",
    ctaText: "Join HelferIn — available in English & German.",
    ctaButton: "Sign Up Now",
  },
  de: {
    heroTitle: "HelferIn",
    heroSubtitle:
      "Finden Sie lokale Helfer für Übersetzungen, Besorgungen, Büroarbeit & mehr in Bayern.",
    heroCTA: "Loslegen",
    featuresTitle: "Funktionen",
    features: [
      {
        title: "Einfache Anfragen",
        text: "Erstellen Sie schnell Hilfsanfragen für Übersetzungen, Besorgungen oder Büroarbeit.",
      },
      {
        title: "Vertrauenswürdige Helfer",
        text: "Sehen Sie Bewertungen und Profile, um zuverlässige Helfer auszuwählen.",
      },
      {
        title: "Chat & Karte",
        text: "Chatten Sie in der App und finden Sie Helfer auf interaktiven Karten.",
      },
    ],
    problemTitle: "Das Problem",
    problemText:
      "Viele Menschen in Bayern haben Sprachbarrieren, komplexe Bürokratie oder benötigen Hilfe im Alltag.",
    solutionTitle: "Unsere Lösung",
    solutionText:
      "HelferIn verbindet Sie mit Helfern in Ihrer Nähe für schnelle, vertrauenswürdige Unterstützung, mit Englisch & Deutsch.",
    galleryTitle: "Gemeinschaftsmomente",
    galleryText:
      "Sehen Sie unsere Helfer im Einsatz – die jeden Tag einen Unterschied in lokalen Gemeinden machen.",
    mapTitle: "Finde Helfer in der Nähe",
    mapText:
      "Bewegen Sie die Maus über einen Helfer-Marker, um Name und Verfügbarkeit zu sehen.",
    ctaTitle: "Bereit, Hilfe zu erhalten oder zu geben?",
    ctaText: "Treten Sie HelferIn bei — verfügbar in Englisch & Deutsch.",
    ctaButton: "Jetzt anmelden",
  },
};

const tabMeta = {
  en: {
    title: "Request Local Help – Translation, Errands & Admin | HelferIn",
    description:
      "Connect with local helpers for translation, errands, admin support and more across Bavaria.",
  },
  de: {
    title: "HelferIn – Finde Helfer in deiner Nähe",
    description:
      "HelferIn verbindet dich mit lokalen Helfern für Übersetzung, Besorgungen, Büroarbeit und mehr in Bayern.",
  },
};

function setLanguage(lang) {
  const t = translations[lang];
  localStorage.setItem("lang", lang);
  const prevActive = document.getElementById(`lang-${prevLang}`);
  if (prevActive && prevActive.classList.contains("active")) {
    prevActive.classList.remove("active");
  }
  document.getElementById("hero-title").innerText = t.heroTitle;
  document.getElementById("hero-subtitle").innerText = t.heroSubtitle;
  document.getElementById("hero-cta").innerText = t.heroCTA;
  document.getElementById("features-title").innerText = t.featuresTitle;
  const container = document.getElementById("features-container");
  container.innerHTML = "";
  t.features.forEach((f) => {
    const card = document.createElement("div");
    card.className =
      "bg-white p-6 rounded-xl shadow transition hover:shadow-2xl hover:-translate-y-2 animate-zoomIn";
    card.innerHTML = `<h3 class="font-bold text-xl mb-2">${f.title}</h3><p>${f.text}</p>`;
    container.appendChild(card);
  });
  document.getElementById("problem-title").innerText = t.problemTitle;
  document.getElementById("problem-text").innerText = t.problemText;
  document.getElementById("solution-title").innerText = t.solutionTitle;
  document.getElementById("solution-text").innerText = t.solutionText;
  document.getElementById("gallery-title").innerText = t.galleryTitle;
  document.getElementById("gallery-text").innerText = t.galleryText;
  document.getElementById("map-title").innerText = t.mapTitle;
  document.getElementById("map-text").innerText = t.mapText;
  document.getElementById("cta-title").innerText = t.ctaTitle;
  document.getElementById("cta-text").innerText = t.ctaText;
  document.getElementById("cta-button").innerText = t.ctaButton;

  const active = document.getElementById(`lang-${lang}`);
  if (active) {
    active.classList.add("active");
  }
  prevLang = lang;
}

// Default loading
setLanguage(currentLang || "en");

function setTabLanguage(lang) {
  document.title = tabMeta[lang].title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", tabMeta[lang].description);
}
setTabLanguage(currentLang ?? "en");

// Tooltip for SVG map
const tooltip = document.getElementById("tooltip");
document.querySelectorAll("circle").forEach((circle) => {
  circle.addEventListener("mouseenter", (e) => {
    tooltip.innerText = e.target.getAttribute("data-name");
    tooltip.style.left = e.pageX + 10 + "px";
    tooltip.style.top = e.pageY - 30 + "px";
    tooltip.classList.remove("hidden");
  });
  circle.addEventListener("mousemove", (e) => {
    tooltip.style.left = e.pageX + 10 + "px";
    tooltip.style.top = e.pageY - 30 + "px";
  });
  circle.addEventListener("mouseleave", () => {
    tooltip.classList.add("hidden");
  });
});

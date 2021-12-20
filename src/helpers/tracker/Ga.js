export const ga_dekstop = (event) => {
  switch (event) {
    case "act-btn": //  ✅
      window.gtag("event", "activities-button-header-annual", {
        event_category: "tag",
      });
      break;
    case "startups-btn": //  ✅
      window.gtag("event", "startups-button-header-annual", {
        event_category: "tag",
      });
      break;
    case "tech-esports-btn": //  ✅
      window.gtag("event", "tech-esports-button-header-annual", {
        event_category: "tag",
      });
      break;
    case "partners-btn": //  ✅
      window.gtag("event", "partners-button-header-annual", {
        event_category: "tag",
      });
      break;
    case "for-readers-btn": //  ✅
      window.gtag("event", "for-readers-button-header-annual", {
        event_category: "tag",
      });
      break;

    default:
      break;
  }
};

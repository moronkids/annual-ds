export const ga_mobile = (event) => {
  // console.log(event, "ehehe");

  switch (event) {
    case "ds-logo": //
      window.gtag("event", "ds-logo-button-header-annual", {
        event_category: "tag",
      });
      break;
    case "hamburger-btn": //
      window.gtag("event", "hamburger-menu-header-annual", {
        event_category: "tag",
      });
      break;
    case "journey-btn": //
      window.gtag("event", "journey-button-annual", {
        event_category: "tag",
      });
      break;
    case "smartphone-1": //  ✅
      window.gtag("event", "smartphone-annual", {
        event_category: "tag",
        event_label: "smartphone-1",
      });
      break;
    case "smartphone-2": //  ✅
      window.gtag("event", "smartphone-annual", {
        event_category: "tag",
        event_label: "smartphone-2",
      });
      break;
    case "smartphone-3": //  ✅
      window.gtag("event", "smartphone-annual", {
        event_category: "tag",
        event_label: "smartphone-3",
      });
      break;
    case "smartphone-4": //  ✅
      window.gtag("event", "smartphone-annual", {
        event_category: "tag",
        event_label: "smartphone-4",
      });
      break;
    case "smartphone-5": //  ✅
      window.gtag("event", "smartphone-annual", {
        event_category: "tag",
        event_label: "smartphone-5",
      });
      break;
    case "discuss-btn": //  ✅
      window.gtag("event", "discuss-with-us-button-annual", {
        event_category: "tag",
      });
      break;
    case "subscribe-btn": //  ✅
      window.gtag("event", "lets-subs-button-annual", {
        event_category: "tag",
      });
      break;
    case "letme-in-btn": //  ✅
      window.gtag("event", "let-me-in-button-annual", {
        event_category: "tag",
      });
      break;
    case "activities-btn": //
      window.gtag("event", "activities-button-hamburger-annual", {
        event_category: "tag",
      });
      break;
    case "startups-btn": //
      window.gtag("event", "startups-button-hamburger-annual", {
        event_category: "tag",
      });
      break;
    case "tech-esports-btn": //
      window.gtag("event", "tech-esports-button-hamburger-annual", {
        event_category: "tag",
      });
      break;
    case "partners-btn": //
      window.gtag("event", "partners-button-hamburger-annual", {
        event_category: "tag",
      });
      break;
    case "for-readers-btn": //
      window.gtag("event", "for-readers-button-hamburger-annual", {
        event_category: "tag",
      });
      break;

    default:
      break;
  }
};

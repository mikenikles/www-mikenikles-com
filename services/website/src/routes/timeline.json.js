const timelineEntries = [
  {
    timestamp: 1606937475381,
    label: "blog",
    milestone: "Introduced the timeline view",
    link: "/blog/introducing-the-timeline-view",
  },
  {
    timestamp: 1606923112654,
    label: "project",
    milestone: "10 active users of Your Analytics",
    cta: "Check out Your Analytics",
    link: "https://www.your-analytics.org",
  },
  {
    timestamp: 1606921112654,
    label: "twitter",
    milestone: "700 Followers 🎉",
    cta: "Check out my tweets",
    link: "/blog/introducing-the-timeline-view",
  },
  {
    timestamp: 1606911112654,
    label: "twitter",
    milestone: "700 Followers 🎉",
    cta: "Check out my tweets",
    link: "/blog/introducing-the-timeline-view",
  },
  {
    timestamp: 1606901112654,
    label: "youtube",
    milestone: "20 Subscribers 🎉",
    cta: "Check out my videos",
    link: "https://www.youtube.com",
  },
];

export const get = (_req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify(timelineEntries));
};
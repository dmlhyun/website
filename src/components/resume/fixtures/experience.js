export const EXPERIENCE = [
  {
    key: "wealthsimple",
    company: "wealthsimple",
    job: "software engineer",
    location: "toronto",
    duration: {
      start: "June 2019",
      end: null
    }
  },
  {
    key: "snaptravel",
    company: "snaptravel",
    job: "frontend engineer (co-op)",
    location: "toronto",
    duration: {
      start: "April 2018",
      end: "August 2018"
    }
  },
  {
    key: "league",
    company: "league",
    job: "frontend developer (co-op)",
    location: "toronto",
    duration: {
      start: "September 2017",
      end: "December 2017"
    }
  },
  {
    key: "salesforce",
    company: "salesforce",
    job: "frontend developer (co-op)",
    location: "san francisco",
    duration: {
      start: "January 2017",
      end: "April 2017"
    }
  }
];

export const DESCRIPTION = {
  wealthsimple: [
    "implemented multiple front end features for both web and mobile app using React, Angular and React Native",
    "implemented features to reduce customer toil and improve SLAs for withdrawal transactions from 70% to 95%",
    "implemented a new internal transfers flow to an existing system to reduce process time to improve SLA metrics"
  ],
  snaptravel: [
    "developed a new server side rendered landing page to drive organic growth and revenue",
    "created an experimentation feature using Python, Flask, Redis and Express to help A/B test",
    "implement a sharing feature to allow users to share specific hotel deals from their mobile browser to the native app",
    "improve internal asset uploader using AWS S3, Express and React",
    "write unit tests using Python unittest, Jest, Mocha and Enzyme"
  ],
  league: [
    "rebuild the admin platform from company's proprietary framework to React",
    "load customer benefit claims into client wihtout hindering performance",
    "render dynamic forms based on information given from backend",
    "increase company's frontend repository test coverage from 30% to 85% using Enzyme and Jest"
  ],
  salesforce: [
    "developed in a CMS and CDS architecture with an HTML & React frontend and a PHP, Ruby & Redis backend",
    "assessed and updated client pages to BOIA standards and implement accessible navigation",
    "create a Yeoman script for a template proxy server to reduce setup time by 95%"
  ]
};

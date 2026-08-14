export interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    role: "Web Technology and Programming Officer",
    company: "Eterna Plc",
    location: "Lagos, Nigeria",
    startDate: "April 2025",
    endDate: "Present",
    description:
      "Developing and maintaining web platforms while building digital solutions that improve business processes and operational efficiency.",
    highlights: [
      "Independently manage and restructure company WordPress sites, removing redundant code and optimizing pages for improved performance and maintainability.",
      "Work directly with business stakeholders and the branding team to translate requirements into functional and accessible web platforms.",
      "Independently designed and developed a nationwide QR-based fuel voucher platform using JavaScript and Tailwind CSS, supporting 10+ fuel stations and 200+ successful voucher redemptions.",
      "Achieved a 99% reduction in manual processing errors by eliminating paper-based voucher processing and improving transaction tracking.",
      "Built and deployed a business workflow automation application using SharePoint, Power Apps, and Power Automate to digitize vendor and customer onboarding and replace multi-stage email approval chains.",
      "Rebuilt Eterna PLC's corporate website using React, Tailwind CSS, Sanity CMS, and Firebase, creating a modern CMS-driven architecture for improved maintainability and scalability.",
    ],
  },

  {
    role: "Freelance Web Developer",
    company: "Self-employed / Contract",
    location: "Remote",
    startDate: "February 2024",
    endDate: "March 2025",
    description:
      "Built responsive client-facing web applications for e-commerce businesses and SMEs while collaborating with development teams on contract projects.",
    highlights: [
      "Partnered with development teams to design and build responsive websites using React and Tailwind CSS.",
      "Delivered 3+ responsive web applications for e-commerce businesses and SMEs.",
      "Converted UI designs into reusable frontend components while maintaining responsive layouts across desktop and mobile devices.",
    ],
  },

  {
    role: "Software Quality Assurance Engineer",
    company: "ITEX Integrated Services",
    location: "Lagos, Nigeria",
    startDate: "November 2022",
    endDate: "December 2023",
    description:
      "Performed functional, non-functional, API, UAT, and performance testing across enterprise financial and fintech applications.",
    highlights: [
      "Executed comprehensive functional and non-functional testing across 20+ enterprise financial applications across Nigeria and African markets.",
      "Performed API testing and end-to-end validation for 7+ REST APIs supporting payment terminals and fintech applications.",
      "Provided frontend-focused QA feedback on layout consistency and user workflow clarity to improve product usability.",
      "Led user acceptance testing sessions and resolved client-reported issues to support successful releases.",
      "Performed load and performance testing using Apache JMeter to evaluate application reliability under high transaction volumes.",
    ],
  },

  {
    role: "Server Officer / Software QA Engineer Intern (NYSC)",
    company: "ITEX Integrated Services",
    location: "Lagos, Nigeria",
    startDate: "January 2022",
    endDate: "November 2022",
    description:
      "Managed server operations and provided IT support while developing software quality assurance expertise.",
    highlights: [
      "Managed server operations and provided cross-departmental IT support to staff.",
      "Worked alongside senior QA engineers to learn structured testing processes, leading to promotion to Software QA Engineer.",
      "Reported software defects and verified fixes directly in live production environments.",
      "Monitored server performance to maintain high uptime and reliability.",
    ],
  },

  {
    role: "Customer Service / IT Support Intern",
    company: "WEMA Bank",
    location: "Port Harcourt, Nigeria",
    startDate: "January 2020",
    endDate: "June 2020",
    description:
      "Provided IT and customer support for banking technology and self-service channels.",
    highlights: [
      "Supported mobile banking platform issues, debit card issuance, and ATM maintenance troubleshooting for staff and customers.",
      "Supported ATM troubleshooting and basic maintenance activities to help minimize service disruptions.",
    ],
  },
];
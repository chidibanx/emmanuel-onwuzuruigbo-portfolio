export interface Project {
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  contribution?: string;
  technologies: string[];
  impact?: string[];
  image?: string;
  screenshots?: { src: string; label: string }[];
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Eterna Voucher System",
    description:
      "A digital voucher platform with a customer page for redeeming fuel vouchers at participating Eterna stations using QR codes, and an admin dashboard for managing vouchers and tracking redemptions.",
    problem:
      "Paper-based voucher processing made redemptions harder to track and contributed to manual processing errors.",
    solution:
      "Built a QR-code redemption experience for customers and an admin dashboard with voucher search and filtering, record inspection, current and archived tracking, and CSV export.",
    contribution:
      "Independently designed and developed the platform and administrative dashboard using JavaScript and Tailwind CSS.",
    technologies: [
      "JavaScript",
      "Tailwind CSS",
      "Google Apps Script",
      "Google Sheets",
    ],
    impact: [
      "Deployed across 10+ fuel stations and used for 200+ successful redemptions.",
      "Reported 99% reduction in manual processing errors after replacing paper-based processing.",
    ],
    featured: true,
    screenshots: [
      { src: "/projects/eterna-voucher.png", label: "Customer voucher page" },
      { src: "/projects/eVoucher%20admin%201.png", label: "Admin dashboard screenshot 1" },
      { src: "/projects/eVoucher%20admin%202.png", label: "Admin dashboard screenshot 2" },
      { src: "/projects/eVoucher%20admin%203.png", label: "Admin dashboard screenshot 3" },
      { src: "/projects/eVoucher%20admin%204.png", label: "Admin dashboard screenshot 4" },
      { src: "/projects/eVoucher%20admin%205.png", label: "Admin dashboard screenshot 5" },
    ],
  },
  {
    title: "Eterna Business Workflow Automation",
    description:
      "An internal business workflow application built to digitize processes such as vendor and customer onboarding and automate multi-stage approvals.",
    problem:
      "Vendor and customer onboarding depended on multi-stage email approvals and manual coordination.",
    solution:
      "Digitized onboarding and approval processes in a centralized workflow application connected to the ERP process.",
    contribution:
      "Built and deployed the application with SharePoint, Power Apps, and Power Automate.",
    technologies: ["Power Apps", "Power Automate", "SharePoint", "Power FX"],
    impact: [
      "Replaced multi-stage email approval chains with an application-based workflow.",
      "Centralized onboarding submissions and approvals for business teams.",
    ],
    image: "/projects/eterna-workflow.png",
  },
  {
    title: "Eterna Corporate Website Rebuild",
    description:
      "Rebuilt Eterna PLC's corporate website as a responsive React application with CMS-driven content and a maintainable frontend.",
    problem:
      "The corporate site needed a maintainable architecture that allowed non-technical teams to manage content.",
    solution:
      "Rebuilt the site as a responsive, CMS-driven frontend using React and Sanity CMS.",
    contribution:
      "Implemented the website with React, TypeScript, Tailwind CSS, Sanity CMS, and Firebase.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Sanity CMS",
      "Firebase",
    ],
    impact: [
      "Delivered a CMS-driven architecture that enables non-technical teams to manage website content.",
      "Replaced the legacy site with a modern, maintainable React application.",
    ],
    image: "/projects/eterna-website.png",
    liveUrl: "https://eternaplc.vercel.app/",
  },

  {
    title: "Freelance Web Development",
    description:
      "Delivered responsive websites for e-commerce and small business clients, collaborating with developers on contract-based projects.",
    problem:
      "E-commerce businesses and SMEs needed responsive web experiences tailored to their customers and services.",
    solution:
      "Designed and built client-facing websites and web applications for desktop and mobile devices.",
    contribution:
      "Built reusable React and Tailwind CSS interfaces and collaborated with development teams on contract projects.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    impact: [
      "Delivered 3+ responsive web applications for e-commerce businesses and SMEs.",
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  impact?: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Eterna Voucher System",
    description:
      "A web-based digital voucher validation system that allows customers to redeem fuel vouchers at participating Eterna stations using QR codes.",
    technologies: [
      "JavaScript",
      "Tailwind CSS",
      "Google Apps Script",
      "Google Sheets",
    ],
    impact: [
      "Deployed across 10+ stations nationwide.",
      "Successfully processed 200+ voucher redemptions.",
      "Reduced manual errors by 99% through QR-based validation.",
      "Improved voucher tracking while eliminating manual voucher printing and spreadsheet-based tracking.",
    ],
    image: "/projects/eterna-voucher.png",
  },
  {
    title: "Eterna Business Workflow Automation",
    description:
      "An internal business workflow application built to digitize processes such as vendor and customer onboarding and automate multi-stage approvals.",
    technologies: ["Power Apps", "Power Automate", "SharePoint", "Power FX"],
    impact: [
      "Automated approval workflows that previously required multiple email exchanges.",
      "Centralized business process submissions and approvals within a single application.",
      "Reduced email congestion and manual coordination across approval stages.",
    ],
    image: "/projects/eterna-workflow.png",
  },
  {
    title: "Eterna Corporate Website Rebuild",
    description:
      "A complete rebuild of Eterna PLC's corporate website focused on modern frontend architecture, content management, performance, accessibility, and maintainability.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Sanity CMS",
      "Firebase",
    ],
    impact: [
      "Replaced the legacy website architecture with a modern React-based application.",
      "Introduced a CMS-driven content architecture using Sanity CMS.",
      "Designed the platform with responsive and maintainable frontend components.",
    ],
    image: "/projects/eterna-website.png",
    liveUrl: "https://eternaplc.vercel.app/",
  },

  {
    title: "Freelance Web Development",
    description:
      "Delivered responsive websites for e-commerce and small business clients, collaborating with developers on contract-based projects.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    impact: [
      "Delivered 5+ client projects.",
      "Built responsive interfaces tailored to SME requirements.",
    ],
  },
];

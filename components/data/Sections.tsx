import {
  Wrench,
  Briefcase,
  DollarSign,
  Rocket,
  Building2,
  Layers,
} from "lucide-react";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { FaCheckCircle } from "react-icons/fa";

import Image from "next/image";

export const navItems = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#" },
  { name: "Services", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

export const benefitsData2 = [
  {
    text: "Get finops ready in a day / on day 1 itself.",
  },
  {
    text: "Comprehensive resource dashboards / leave no resource untracked.",
  },
  {
    text: "Resource to owner twinning.",
  },
  {
    text: "Cost insights and predictions across all levels.",
  },
  {
    text: "Continuous and consistent cost reduction.",
  },
  {
    text: "Build a cost-conscious culture.",
  },
  {
    text: "Get expert optimisation insights and action items for all.",
  },
  {
    text: "Cost split across people, teams, and business units.",
  },
  {
    text: "Avoid custom tooling overheads.",
  },
  {
    text: "Get personalised cost control insights and action items for everyone.",
  },
  {
    text: "Mitigate cost wastage.",
  },
  {
    text: "Optimise your people, teams, and processes for cost control.",
  },
];

export const benefitsData = [
  {
    icon: "🚀 ",
    text: "Get finops ready in a day / on day 1 itself.",
  },
  {
    icon: "📊 ",
    text: "Comprehensive resource dashboards.",
  },
  {
    icon: "👥 ",
    text: "Resource to owner twinning.",
  },
  {
    icon: "🔍 ",
    text: "Cost insights and predictions across all levels.",
  },
  {
    icon: "📉 ",
    text: "Continuous and consistent cost reduction.",
  },
  {
    icon: "💡 ",
    text: "Build a cost-conscious culture.",
  },
  {
    icon: "🧠 ",
    text: "Get expert optimisation insights and action items for all.",
  },
  {
    icon: "📂 ",
    text: "Cost split across people, teams, and business units.",
  },
  {
    icon: "⚙️ ",
    text: "Avoid custom tooling overheads.",
  },
  {
    icon: "🎯 ",
    text: "Get personalised cost control insights and action items for everyone.",
  },
  {
    icon: "💸 ",
    text: "Mitigate cost wastage.",
  },
  {
    icon: "⚖️ ",
    text: "Optimise your people, teams, and processes for cost control.",
  },
];


export const builtforAllData2 = [
  {
    title: "Built for Engineering",
    description:
      "Engineers, developers, and innovators—our platform is crafted to streamline your FinOps journey, ensuring you have the right tools to turn data into action. Stay focused on building, we'll handle the rest.",
  },
  {
    title: "Built for Leadership",
    description:
      "Leaders need clarity, and we've got you covered. With powerful insights and customizable dashboards, make informed decisions that align your team's efforts with the organization's strategic goals.",
  },
  {
    title: "Built for Finance",
    description:
      "Designed for the finance team, our platform simplifies cost analysis, budgeting, and forecasting. Gain precise control over your expenses and ensure every dollar is well-spent.",
  },
  {
    title: "Built for Startups",
    description:
      "Startups need agility, and our cost optimization tools are tailored to help you scale with efficiency. Focus on growth without worrying about cloud costs spiraling out of control.",
  },
  {
    title: "Built for SMBs",
    description:
      "For small and medium-sized businesses, our solution provides an edge with detailed cost tracking and management. Optimize your resources to thrive in a competitive landscape.",
  },
  {
    title: "Built for Enterprises",
    description:
      "Enterprises demand scalability and reliability. Our platform delivers multi-dimensional cost dashboards and seamless integrations to keep your large-scale operations running smoothly.",
  },
];

export const builtforAllData = [
  {
    title: "Built for Engineering",
    description:
      "Engineers, developers, and innovators—our platform is crafted to streamline your FinOps journey, ensuring you have the right tools to turn data into action. Stay focused on building, we'll handle the rest.",
    icon: Wrench, // Icon representing tools and engineering
  },
  {
    title: "Built for Leadership",
    description:
      "Leaders need clarity, and we've got you covered. With powerful insights and customizable dashboards, make informed decisions that align your team's efforts with the organization's strategic goals.",
    icon: Briefcase, // Icon representing business leadership
  },
  {
    title: "Built for Finance",
    description:
      "Designed for the finance team, our platform simplifies cost analysis, budgeting, and forecasting. Gain precise control over your expenses and ensure every dollar is well-spent.",
    icon: DollarSign, // Icon representing finance and money
  },
  {
    title: "Built for Startups",
    description:
      "Startups need agility, and our cost optimization tools are tailored to help you scale with efficiency. Focus on growth without worrying about cloud costs spiraling out of control.",
    icon: Rocket, // Icon representing growth and startups
  },
  {
    title: "Built for SMBs",
    description:
      "For small and medium-sized businesses, our solution provides an edge with detailed cost tracking and management. Optimize your resources to thrive in a competitive landscape.",
    icon: Building2, // Icon representing small and medium-sized businesses
  },
  {
    title: "Built for Enterprises",
    description:
      "Enterprises demand scalability and reliability. Our platform delivers multi-dimensional cost dashboards and seamless integrations to keep your large-scale operations running smoothly.",
    icon: Layers, // Icon representing complex, layered enterprise structures
  },
];

export const featuresData = [
  {
    title: "Seamless FinOps Onboarding",
    description:
      "Built for engineers and dreamers who need a streamlined FinOps journey as crucial as their morning coffee. Simplify your operations with ease and efficiency.",
    icon: <IconTerminal2 />,
  },
  {
    title: "Multi-Dimensional Cost Dashboards",
    description:
      "Our intuitive dashboards offer deep insights into your spending. Easy to use, yet powerful enough to unveil layers of cost optimization opportunities.",
    icon: <IconEaseInOut />,
  },
  {
    title: "Persona-Based Personal Dashboards",
    description:
      "Experience tailored to your unique needs. Customize dashboards to align perfectly with your role, making data as personal as it gets.",
    icon: <IconCurrencyDollar />,
  },
  {
    title: "Cost Bucketing & Virtual Tagging",
    description:
      "Organize and tag your costs seamlessly with our powerful bucketing feature. A must-have tool for detailed cost analysis and financial clarity.",
    icon: <IconCloud />,
  },
  {
    title: "Custom Cost Alerts for Everyone",
    description:
      "Stay ahead with personalized cost alerts. Monitor your budget like a pro and get notified the moment your expenses go off track.",
    icon: <IconRouteAltLeft />,
  },
  {
    title: "Integration with DevOps Tools",
    description:
      "Our solution integrates smoothly with all your favorite DevOps tools, ensuring uninterrupted workflows and a seamless development experience.",
    icon: <IconHelp />,
  },
  {
    title: "Multi-Tiered Expert Optimizations",
    description:
      "Unlock expert-level optimizations tailored to your needs. From starter plans to enterprise tiers, we fine-tune your cloud costs like never before.",
    icon: <IconAdjustmentsBolt />,
  },
  {
    title: "Automatic and Manual Tracking",
    description:
      "Gain control with both automatic and manual tracking options. Keep a close eye on every detail without breaking a sweat.",
    icon: <IconHeart />,
  },
];

export const integrations = [
  {
    id: 1,
    name: "AWS",
    icon: (
      <Image
        src="/aws.svg"
        alt="AWS Icon"
        width={40}
        height={40}
        className="text-gray-500"
      />
    ),
    statusIcon: <FaCheckCircle className="text-green-500" />,
    comingSoon: false,
  },
  {
    id: 2,
    name: "GCP",
    icon: (
      <Image
        src="/gcp.svg"
        alt="GCP Icon"
        width={40}
        height={40}
        className="text-gray-500"
      />
    ),
    statusIcon: null,
    comingSoon: true,
  },
  {
    id: 3,
    name: "Azure",
    icon: (
      <Image
        src="/azure.svg"
        alt="Azure Icon"
        width={40}
        height={40}
        className="text-gray-500"
      />
    ),
    statusIcon: null,
    comingSoon: true,
  },
];

export const pricingPlans = [
  {
    title: "Starter",
    description: "Best option for personal use & for your next project.",
    price: "$29",
    features: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: 1 developer",
      "Premium support: 6 months",
      "Free updates: 6 months",
    ],
  },
  {
    title: "Company",
    description: "Relevant for multiple users, extended & premium support.",
    price: "$199",
    features: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: 10 developers",
      "Premium support: 24 months",
      "Free updates: 24 months",
    ],
  },
  {
    title: "Enterprise",
    description:
      "Best for large scale uses and extended redistribution rights.",
    price: "$499",
    features: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: 100+ developers",
      "Premium support: 36 months",
      "Free updates: 36 months",
    ],
  },
];

export const accordionData = [
  {
    question: "What are the advantages of your service?",
    answer:
      "If you go over your organization's or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "Our pricing is tailored to fit the needs of businesses of all sizes. We offer flexible plans and custom pricing options for large organizations.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial with all the features of our premium plan. You can explore all functionalities and decide what fits your team best.",
  },
  {
    question: "How do I upgrade my plan?",
    answer:
      "Upgrading your plan is simple. You can do it directly from the dashboard by visiting the billing section and selecting the plan that suits your needs.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer 24/7 support via chat, email, and phone to ensure that you have the help you need whenever you need it.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time. However, note that refunds are only available for cancellations made within the first 14 days.",
  },
];

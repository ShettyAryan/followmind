/**
 * Shared TypeScript types for FollowMind
 */

export interface Contact {
  id: string;
  name: string;
  company: string;
  role: string;
  email: string;
  lastContact: string;     // ISO date string
  dealStage: string;
  lastNote: string;
  priority: "high" | "medium" | "low";
  followUpStatus: "overdue" | "today" | "upcoming";
  daysUntilFollowUp: number;
}

export interface EmailDraft {
  contactId: string;
  to: string;
  subject: string;
  body: string;
  generatedAt: string;
  draftedInMs: number;
  status: "pending" | "sent" | "discarded";
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  accentColor: string;
  stars: number;
}

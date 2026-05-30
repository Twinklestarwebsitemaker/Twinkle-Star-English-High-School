export interface NewsItem {
  id: number;
  title: string;
  date: number;
  category: string;
  content: string;
  imageUrl: string;
  excerpt: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
  inquiryType: string;
}

export type ContactResult = { ok: number } | { err: string };

export interface NavLink {
  label: string;
  to: string;
}

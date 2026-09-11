export type Link = { href: string; label: string };

export type Product = {
  name: string;
  descriptionParagraphs: string[];
  coverCredit?: string;
  price: number | string;
  buttonText?: string;
  stripeUrl: string;
  images: string[];
  isIssue?: boolean;
  fit?: "cover";
};

export type Content = {
  title: string;
  author: string;
  href?: string;
};

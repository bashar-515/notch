export type Link = { href: string; label: string };

export type Product = {
  name: string;
  descriptionParagraphs: string[];
  coverCredit?: string;
  price: number | string;
  buttonText?: string;
  stripeUrl: string;
  covers?: string[];
  images: string[];
  isIssue?: boolean;
};

export type Content = {
  title: string;
  author: string;
  href?: string;
};

export type Thumbnail =
  | { image: string; href?: string }
  | { title: string; author: string; href?: string };

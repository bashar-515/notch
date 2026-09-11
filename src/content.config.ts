import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    issue: z.enum(["001", "002"]),
    bio: z.string().optional(),
    previous: z.string().optional(),
    next: z.string().optional(),
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { articles };

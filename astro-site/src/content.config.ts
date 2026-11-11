import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects"
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),

    category: z.enum([
      "professional",
      "personal",
      "university"
    ]),

    type: z.enum([
      "game",
      "software",
      "music",
      "dance",
      "other"
    ]).default("game"),

    image: z.string().optional(),
    youtubeUrl: z.string().url().optional(),
    link: z.string().url().optional(),
    featured: z.boolean().default(false)
  })
});


const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/blog"
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),

    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    category: z.enum([
      "devlog",
      "technical",
      "personal",
      "creative"
    ]),

    tags: z.array(z.string()).default([]),

    image: z.string().optional(),

    project: reference("projects").optional(),

    draft: z.boolean().default(false)
  })
});

export const collections = {
  projects,
  blog
};

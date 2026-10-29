import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const publications = defineCollection({
  loader: file('src/content/publications.yaml'),
  schema: z.object({
    title: z.string(),
    authors: z.string().optional(),
    year: z.number().optional(),
    venue: z.string(),
    volume: z.string().optional(),
    issue: z.string().optional(),
    pages: z.string().optional(),
    doi: z.string().optional(),
    url: z.string().url().optional(),
    pdf: z.string().optional(),
    type: z.enum(['journal', 'conference', 'thesis']),
    status: z.enum(['published', 'accepted', 'under-review', 'submitted', 'in-preparation']),
    selected: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['research', 'academic']),
    order: z.number().default(100),
    featured: z.boolean().default(false),
    summary: z.string(),
    problem: z.string().optional(),
    methods: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    output: z.string().optional(),
    relatedPublication: z.string().optional(),
  }),
});

const news = defineCollection({
  loader: file('src/content/news.yaml'),
  schema: z.object({
    date: z.coerce.date(),
    text: z.string(),
  }),
});

const education = defineCollection({
  loader: file('src/content/education.yaml'),
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    location: z.string().optional(),
    period: z.string(),
    details: z.array(z.string()).default([]),
  }),
});

const experience = defineCollection({
  loader: file('src/content/experience.yaml'),
  schema: z.object({
    category: z.enum(['research', 'professional', 'training', 'leadership']),
    role: z.string(),
    organization: z.string(),
    period: z.string().default(''),
    summary: z.string().optional(),
  }),
});

export const collections = { publications, projects, news, education, experience };

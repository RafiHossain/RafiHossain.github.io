import { getCollection, type CollectionEntry } from 'astro:content';
import fs from 'node:fs';
import path from 'node:path';
import { profile } from '../data/profile';

export type Publication = CollectionEntry<'publications'>;

// Name pattern that is bolded in author lists.
export const SELF_AUTHOR = 'Rafi, A. H.';

export const statusLabel: Record<Publication['data']['status'], string> = {
  published: 'Published',
  accepted: 'Accepted',
  'under-review': 'Under review',
  submitted: 'Submitted',
  'in-preparation': 'In preparation',
};

export async function getPublications() {
  const all = await getCollection('publications');
  // Keep the order written in the YAML file within each group, newest year first.
  return all
    .map((p, i) => ({ p, i }))
    .sort((a, b) => (b.p.data.year ?? 9999) - (a.p.data.year ?? 9999) || a.i - b.i)
    .map(({ p }) => p);
}

export async function getProjects() {
  const all = await getCollection('projects');
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function getNews() {
  const all = await getCollection('news');
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatMonth(d: Date) {
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', timeZone: 'UTC' });
}

/** Very small inline Markdown: [label](url), *italic*, **bold**. Input is trusted site content. */
export function inlineMarkdown(text: string) {
  const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return escaped
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

/** True when the CV PDF exists in public/, so links never point at a missing file. */
export function cvAvailable() {
  return fs.existsSync(path.join(process.cwd(), 'public', profile.cvFile));
}

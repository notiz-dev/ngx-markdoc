import { getHighlighter } from 'shikiji';

export async function shiki(content: string, lang = 'plaintext') {
  const shiki = await getHighlighter({
    themes: ['github-dark'],
    langs: ['markdown'],
  });

  return shiki.codeToHtml(content, { lang, theme: 'github-dark' });
}

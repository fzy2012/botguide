
const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://raw.githubusercontent.com/mengjian-github/openclaw101/main/src/data/resources.ts';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', (err) => reject(err));
    });
  });
}

function parseResources(content) {
  // Simple regex to match objects in the array
  // Assuming format: { title: '...', desc: '...', ... }
  // This is a naive parser but should work for the structured data
  const matches = content.match(/\{[\s\S]*?\}/g);
  
  if (!matches) return [];

  return matches.map(match => {
    try {
      // Protect URLs from comment stripping
      let protectedMatch = match
        .replace(/https:\/\//g, 'https:__SLASH__SLASH__')
        .replace(/http:\/\//g, 'http:__SLASH__SLASH__');

      // Clean up the object string to make it JSON-parseable-ish
      // We need to handle single quotes and unquoted keys
      let clean = protectedMatch
        .replace(/\/\/.*/g, '') // remove comments
        .replace(/\n/g, ' ')    // remove newlines
        .replace(/\s+/g, ' ');  // normalize spaces

      // Restore URLs
      clean = clean
        .replace(/https:__SLASH__SLASH__/g, 'https://')
        .replace(/http:__SLASH__SLASH__/g, 'http://');

      // Extract fields using regex
      const title = (clean.match(/title:\s*'([^']*)'/) || [])[1] || '';
      const desc = (clean.match(/desc:\s*'([^']*)'/) || [])[1] || '';
      const url = (clean.match(/url:\s*'([^']*)'/) || [])[1] || '';
      const source = (clean.match(/source:\s*'([^']*)'/) || [])[1] || '';
      const lang = (clean.match(/lang:\s*'([^']*)'/) || [])[1] || 'en';
      const category = (clean.match(/category:\s*'([^']*)'/) || [])[1] || 'other';
      const featured = clean.includes('featured: true');
      
      // Extract tags
      const tagsMatch = clean.match(/tags:\s*\[(.*?)\]/);
      let tags = [];
      if (tagsMatch) {
        tags = tagsMatch[1].split(',').map(t => t.replace(/'/g, '').trim()).filter(t => t);
      }

      // Transform to our new structure
      return {
        id: Math.random().toString(36).substr(2, 9),
        name: title,
        description: desc,
        link: url,
        platform: source,
        language: lang === 'zh' ? 'Chinese' : 'English',
        type: mapCategory(category),
        isFeatured: featured,
        topics: tags,
        addedAt: new Date().toISOString().split('T')[0] // Simulated added date
      };
    } catch (e) {
      console.error('Failed to parse:', match);
      return null;
    }
  }).filter(item => item && item.name);
}

function mapCategory(cat) {
  const map = {
    'official': 'Official',
    'getting-started': 'Tutorial',
    'video': 'Video',
    'deep-dive': 'Article',
    'use-cases': 'Showcase',
    'channel-integration': 'Integration',
    'skill-dev': 'Development'
  };
  return map[cat] || 'Resource';
}

async function main() {
  try {
    console.log('Fetching data...');
    const content = await fetchUrl(url);
    console.log('Parsing data...');
    const resources = parseResources(content);
    
    const fileContent = `
export type Guide = {
  id: string;
  name: string;
  description: string;
  link: string;
  platform: string;
  language: 'Chinese' | 'English';
  type: string;
  isFeatured: boolean;
  topics: string[];
  addedAt: string;
};

export const guides: Guide[] = ${JSON.stringify(resources, null, 2)};
`;

    fs.writeFileSync(path.join(__dirname, '../src/data/guides.ts'), fileContent);
    console.log(`Successfully imported ${resources.length} guides to src/data/guides.ts`);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();

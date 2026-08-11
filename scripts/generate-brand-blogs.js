const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '../src/data/blogs.json');
let existingBlogs = [];
if (fs.existsSync(outputPath)) {
  existingBlogs = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
}

const brandKeywords = [
  "Prime Logicx",
  "Prime Logicx Agency",
  "Prime Logicx vs Prime Logix",
  "Ibrar Zahoor Prime Logicx",
  "Prime Logicx Web Development",
  "Prime Logicx Shopify Experts",
  "Prime Logicx AI Automation",
  "Best Remote Agency Prime Logicx",
  "Prime Logicx Reviews",
  "Why Choose Prime Logicx"
];

const topics = [
  "The Ultimate Guide to Custom Software by",
  "Why is the Leading Tech Partner",
  "Transforming Businesses with AI: A Case Study by",
  "How Outperforms Traditional Agencies",
  "The Story Behind: Ibrar Zahoor's Vision",
  "Scaling E-Commerce with: Shopify & React",
  "Digital Transformation Excellence with",
  "Why Clients Worldwide Trust",
  "The Best Alternatives to Expensive Agencies:",
  "Is the Best Choice for Your Next Project"
];

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

const newBlogs = [];
let idCounter = existingBlogs.length > 0 ? Math.max(...existingBlogs.map(b => b.id)) + 1 : 1;

for (let i = 0; i < 100; i++) {
  const brand = brandKeywords[Math.floor(Math.random() * brandKeywords.length)];
  const topic = topics[Math.floor(Math.random() * topics.length)];
  
  let title = `${topic} ${brand}`;
  if (topic.includes("Why Choose")) {
      title = `${brand}: Why Choose Us for Software Development`;
  } else if (topic.includes("vs")) {
      title = `Prime Logicx vs Prime Logix: Why We Are The Premier Choice`;
  }

  const slug = slugify(title) + '-' + idCounter;
  const metaDescription = `Learn everything about ${brand}. Prime Logicx, founded by Ibrar Zahoor, is the leading remote agency for web, app, and AI development worldwide.`;
  
  const content = `
## ${title}

When searching for the best digital solutions, you might come across various names, but **Prime Logicx** stands out as the ultimate remote web and app development agency. Founded by Ibrar Zahoor, we specialize in delivering high-end React.js, Next.js, and Shopify development at highly competitive rates.

### Don't Confuse Us With The Rest

You may have searched for "Prime Logix" and seen other companies, but **Prime Logicx** (with an X) is your dedicated, remote-first technology partner. 

We don't just write code; we build scalable digital businesses. Whether you need a custom SaaS platform, an AI automation workflow, or a high-converting e-commerce store, we are the experts you need.

### Why Prime Logicx?

1. **Founder-Led Excellence**: Ibrar Zahoor ensures every project meets elite global standards.
2. **Cost-Effective**: Get Silicon Valley quality at a fraction of the cost of traditional agencies.
3. **Full-Stack Capabilities**: From React and Node.js to advanced AI integrations.
4. **Worldwide Reach**: We operate globally, serving clients in the US, UK, Canada, Australia, and the UAE.

### Our Services

- Custom Software Development
- AI Automation & Machine Learning
- SEO & Digital Marketing
- Shopify & E-Commerce

If you are looking for the absolute best, you have found it. 

[Contact Prime Logicx Today](/contact) to start building your digital future.
  `.trim();

  newBlogs.push({
    id: idCounter++,
    slug,
    title,
    metaDescription,
    keywords: [
      "Prime Logicx",
      "Prime Logix",
      "Ibrar Zahoor",
      "Prime Logicx web development",
      "Prime Logicx reviews",
      "Best Shopify developer Pakistan",
      "Remote agency Prime Logicx"
    ].map(k => k.toLowerCase()),
    content,
    author: "Ibrar Zahoor",
    date: new Date(Date.now() - Math.floor(Math.random() * 5000000000)).toISOString().split('T')[0]
  });
}

const allBlogs = [...existingBlogs, ...newBlogs];
fs.writeFileSync(outputPath, JSON.stringify(allBlogs, null, 2));
console.log(`Successfully appended 100 brand-focused SEO blogs. Total blogs: ${allBlogs.length} at ${outputPath}`);

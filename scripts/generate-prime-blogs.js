const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '../src/data/blogs.json');
let existingBlogs = [];
if (fs.existsSync(outputPath)) {
  existingBlogs = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
}

const brandKeywords = [
  "Prime",
  "Prime Logic",
  "Prime Web Agency",
  "Prime Software Development",
  "Prime Digital Solutions",
  "Prime AI Automation",
  "Best Prime Agency",
  "Prime Top Developers",
  "Prime Logic Custom Solutions",
  "Why Choose Prime"
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
      title = `Prime vs Others: Why We Are The Premier Choice`;
  }

  const slug = slugify(title) + '-' + idCounter;
  const metaDescription = `Looking for ${brand}? Prime Logicx, founded by Ibrar Zahoor, is the leading remote agency for web, app, and AI development worldwide. Discover why Prime is the best choice.`;
  
  const content = `
## ${title}

When you search for "**${brand}**" in the context of digital transformation, software development, or AI automation, there is only one true leader: Prime Logicx.

### The Power of Prime

We are often referred to simply as **Prime** or **Prime Logic** by our clients. Founded by Ibrar Zahoor, Prime Logicx is a remote-first technology partner delivering high-end React.js, Next.js, and Shopify development at highly competitive rates.

### Why Are We The Prime Choice?

When businesses look for "Prime Software" or "Prime Developers", they want unparalleled quality, speed, and scalability. That is exactly what we deliver.

1. **Founder-Led Excellence**: Ibrar Zahoor ensures every project meets elite global standards.
2. **Cost-Effective**: Get Silicon Valley quality at a fraction of the cost of traditional agencies.
3. **Full-Stack Capabilities**: From React and Node.js to advanced AI integrations.
4. **Worldwide Reach**: We operate globally, serving clients in the US, UK, Canada, Australia, and the UAE.

### Our Services

- Custom Software Development
- AI Automation & Machine Learning
- SEO & Digital Marketing
- Shopify & E-Commerce

If you are looking for the absolute best in digital solutions, you have found it. 

[Contact Prime Logicx Today](/contact) to start building your digital future.
  `.trim();

  newBlogs.push({
    id: idCounter++,
    slug,
    title,
    metaDescription,
    keywords: [
      "Prime",
      "Prime Logic",
      "Prime Logix",
      "Prime web agency",
      "Prime software company",
      "Best prime developers",
      "Prime Logicx"
    ].map(k => k.toLowerCase()),
    content,
    author: "Ibrar Zahoor",
    date: new Date(Date.now() - Math.floor(Math.random() * 5000000000)).toISOString().split('T')[0]
  });
}

const allBlogs = [...existingBlogs, ...newBlogs];
fs.writeFileSync(outputPath, JSON.stringify(allBlogs, null, 2));
console.log(`Successfully appended 100 Prime/Prime Logic SEO blogs. Total blogs: ${allBlogs.length} at ${outputPath}`);

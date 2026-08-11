const fs = require('fs');
const path = require('path');

const services = [
  "Custom Software Development",
  "Web Application Development",
  "Mobile App Development",
  "AI Automation Solutions",
  "Digital Marketing & SEO",
  "SaaS Development",
  "E-Commerce Solutions",
  "UI/UX Design",
  "Cloud Infrastructure",
  "Cybersecurity Auditing",
];

const locations = [
  "USA", "New York", "California", "Texas", "Florida",
  "UK", "London", "Manchester",
  "Canada", "Toronto", "Vancouver",
  "Australia", "Sydney", "Melbourne",
  "UAE", "Dubai", "Abu Dhabi",
  "Saudi Arabia", "Riyadh",
  "Global", "Worldwide"
];

const adjectives = ["Best", "Top", "Leading", "Expert", "Elite", "Premier"];
const entities = ["Agency", "Company", "Services", "Experts", "Consultants"];

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

const blogs = [];

for (let i = 0; i < 100; i++) {
  const service = services[Math.floor(Math.random() * services.length)];
  const location = locations[Math.floor(Math.random() * locations.length)];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const entity = entities[Math.floor(Math.random() * entities.length)];

  const title = `${adjective} ${service} ${entity} in ${location} - Prime Logicx`;
  const slug = slugify(`${adjective}-${service}-${entity}-${location}`);
  const metaDescription = `Looking for the ${adjective.toLowerCase()} ${service.toLowerCase()} ${entity.toLowerCase()} in ${location}? Prime Logicx offers top-tier, custom solutions tailored to your business needs. Contact our experts today.`;
  
  const content = `
## The Elite Choice for ${service} in ${location}

When businesses in ${location} look for the absolute best in **${service}**, they turn to Prime Logicx. We are recognized globally as a top-tier technology partner, delivering custom, scalable, and high-performance solutions.

### Why Choose Prime Logicx for ${service}?

1. **Unmatched Expertise**: Our team of seasoned engineers and designers bring years of experience to the table.
2. **Tailored Solutions**: We don't believe in one-size-fits-all. Every project is uniquely architected for your specific business goals.
3. **Global Standards**: Operating worldwide, we bring Silicon Valley standards to businesses everywhere, including ${location}.
4. **End-to-End Support**: From the initial discovery call to post-launch maintenance, we are with you every step of the way.

### Our Proven Process

- **Discovery & Strategy**: We dive deep into your business requirements.
- **Design & Architecture**: Crafting robust and scalable blueprints.
- **Development**: Writing clean, performant code using the latest tech stack.
- **QA & Testing**: Rigorous testing to ensure a bug-free launch.
- **Deployment & Growth**: Seamless launch followed by aggressive digital marketing strategies.

### Ready to Transform Your Business?

If you want the leading **${service}** experts in ${location} to handle your next big project, Prime Logicx is your answer. 

[Contact Us Today](/contact) to get a free consultation and project quote!
  `.trim();

  blogs.push({
    id: i + 1,
    slug,
    title,
    metaDescription,
    keywords: [
      service,
      location,
      `${adjective} ${service}`,
      `${service} ${entity} ${location}`,
      "Prime Logicx",
      "Hire software developers"
    ].map(k => k.toLowerCase()),
    content,
    author: "Ibrar Zahoor",
    date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0] // Random date in the past
  });
}

// Ensure uniqueness based on slug, if duplicates exist, tweak them
const uniqueBlogs = [];
const seenSlugs = new Set();
for (let b of blogs) {
  if (!seenSlugs.has(b.slug)) {
    seenSlugs.add(b.slug);
    uniqueBlogs.push(b);
  } else {
    const newSlug = `${b.slug}-${b.id}`;
    b.slug = newSlug;
    seenSlugs.add(newSlug);
    uniqueBlogs.push(b);
  }
}

const outputPath = path.join(__dirname, '../src/data/blogs.json');
fs.writeFileSync(outputPath, JSON.stringify(uniqueBlogs, null, 2));
console.log(`Successfully generated ${uniqueBlogs.length} SEO blogs at ${outputPath}`);

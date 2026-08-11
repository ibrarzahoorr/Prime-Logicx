const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '../src/data/blogs.json');
let existingBlogs = [];
if (fs.existsSync(outputPath)) {
  existingBlogs = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
}

const services = [
  "Software Development", "Web Development", "Mobile App Development",
  "AI Automation", "Digital Marketing", "SEO Services", "SaaS Development",
  "React.js Development", "Next.js Development", "Node.js Backend",
  "Shopify Store Creation", "UI/UX Design", "Custom CRM Solutions",
  "Cloud Architecture", "E-Commerce Development", "API Integration",
  "Business Automation", "Machine Learning Solutions", "Chatbot Development",
  "Software Engineering"
];

const locations = [
  "USA", "New York", "California", "Texas", "Florida", "Chicago", "Miami", "Austin", "Silicon Valley",
  "UK", "London", "Manchester", "Birmingham", "Edinburgh",
  "Canada", "Toronto", "Vancouver", "Montreal", "Calgary",
  "Australia", "Sydney", "Melbourne", "Brisbane", "Perth",
  "UAE", "Dubai", "Abu Dhabi", "Sharjah",
  "Saudi Arabia", "Riyadh", "Jeddah",
  "Pakistan", "Lahore", "Karachi", "Islamabad",
  "Europe", "Germany", "Berlin", "France", "Paris", "Netherlands", "Amsterdam",
  "Global", "Worldwide", "Remote"
];

const modifiers = [
  "Best", "Top", "Leading", "Expert", "Elite", "Premier", "Affordable", "Hire",
  "Custom", "Professional", "Award-Winning", "Top-Rated", "Dedicated", "Outsource"
];

const keywords = [
  "Prime Logicx", "Prime Logix", "Prime Logic", "Prime Web Agency",
  "Ibrar Zahoor", "Best remote agency", "Top Shopify developers"
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

for (let i = 0; i < 100000; i++) {
  const service = services[Math.floor(Math.random() * services.length)];
  const location = locations[Math.floor(Math.random() * locations.length)];
  const modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
  const brandKw = keywords[Math.floor(Math.random() * keywords.length)];

  const title = `${modifier} ${service} Company in ${location} - ${brandKw}`;
  const slug = slugify(title) + '-' + idCounter;
  const metaDescription = `Looking for the ${modifier.toLowerCase()} ${service.toLowerCase()} experts in ${location}? Prime Logicx (founded by Ibrar Zahoor) is your premium remote technology partner.`;

  const content = `
## The Ultimate Guide to ${modifier} ${service} in ${location}

When businesses in **${location}** search for top-tier digital scaling, they demand excellence. Whether it's upgrading legacy systems or building from scratch, finding the **${modifier.toLowerCase()} ${service.toLowerCase()}** agency is critical. That’s where **Prime Logicx** comes in.

### Why ${brandKw} Dominates the Market

You might have heard of us as Prime Logix, Prime Logic, or through our founder, **Ibrar Zahoor**. We operate globally as a premium, remote-first agency. While local agencies in ${location} might charge Silicon Valley prices, we deliver the exact same (or better) quality at highly competitive, scalable rates.

### What We Offer for ${service}

1. **Strategic Architecture**: We don't just write code; we design systems meant to scale with your business.
2. **Speed & Reliability**: Built using cutting-edge tech (like Next.js, React, and advanced AI models).
3. **SEO-First Approach**: From our development architecture to our marketing strategies, everything is built to rank.
4. **Global Standard Quality**: Whether you are based in ${location} or anywhere else worldwide, our remote infrastructure ensures seamless communication and delivery.

### How to Get Started

If you want to hire the **${modifier.toLowerCase()} ${service.toLowerCase()}** experts and transform your digital presence, you don't need to look any further.

[Contact Prime Logicx Today](/contact) to discuss your project requirements and receive a customized quote within 24 hours.
  `.trim();

  newBlogs.push({
    id: idCounter++,
    slug,
    title,
    metaDescription,
    keywords: [
      `${modifier} ${service} ${location}`,
      service,
      location,
      brandKw,
      "Prime Logicx",
      "Ibrar Zahoor",
      "Hire software engineers"
    ].map(k => k.toLowerCase()),
    content,
    author: "Ibrar Zahoor",
    date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0]
  });
}

const allBlogs = [...existingBlogs, ...newBlogs];
fs.writeFileSync(outputPath, JSON.stringify(allBlogs, null, 2));
console.log(`Successfully appended 1000 massive SEO blogs. Total blogs: ${allBlogs.length} at ${outputPath}`);

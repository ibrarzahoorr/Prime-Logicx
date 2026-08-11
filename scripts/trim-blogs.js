const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '../src/data/blogs.json');
let allBlogs = [];
if (fs.existsSync(outputPath)) {
  allBlogs = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
}

// Slice to max 5000 to prevent GitHub 100MB file size limit rejection and Vercel OOM errors
const trimmedBlogs = allBlogs.slice(0, 5000);

fs.writeFileSync(outputPath, JSON.stringify(trimmedBlogs, null, 2));
console.log(`Successfully trimmed down to 5000 blogs. Target output size is ~11MB.`);

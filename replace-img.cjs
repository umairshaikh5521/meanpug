const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Check if the file contains <img
    if (!/<img\b/i.test(content)) return;

    console.log(`Processing ${filePath}`);

    // Replace <img with <Image and </img> with </Image>
    let newContent = content.replace(/<img\b/gi, '<Image');
    newContent = newContent.replace(/<\/img>/gi, '</Image>');

    // Check if import is already there
    if (!/import\s+\{\s*Image\s*\}\s+from\s+['"]astro:assets['"]/.test(newContent)) {
        const importStatement = "import { Image } from 'astro:assets';\n";
        
        // Add import to frontmatter
        const frontmatterMatch = newContent.match(/^---\r?\n([\s\S]*?)\r?\n---/);
        if (frontmatterMatch) {
            newContent = newContent.replace(/^---\r?\n/, `---\n${importStatement}`);
        } else {
            // No frontmatter, create one
            newContent = `---\n${importStatement}---\n${newContent}`;
        }
    }

    fs.writeFileSync(filePath, newContent, 'utf-8');
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.astro')) {
            processFile(fullPath);
        }
    }
}

walkDir('./src');
console.log('Done.');

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the name from command line arguments
const name = process.argv[2];

if (!name) {
    console.error('❌ Error: Please provide a name');
    console.log('Usage: npm run generate <name>');
    process.exit(1);
}

// Validate name (basic validation)
if (!/^[a-zA-Z0-9-_]+$/.test(name)) {
    console.error('❌ Error: Name can only contain letters, numbers, hyphens, and underscores');
    process.exit(1);
}

const folderPath = path.join(process.cwd(), "js", name);

try {
    // Check if folder already exists
    if (fs.existsSync(folderPath)) {
        console.error(`❌ Error: Folder "${name}" already exists`);
        process.exit(1);
    }

    // Create the folder
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`📁 Created folder: ${name}`);

    // Create README.md content
    const readmeContent = `# ${name}

## Usage
${name}.

## Examples

`;

    // Create JavaScript file content
    const jsContent = `/**
 * ${name}.js
 * Main entry point for ${name}
 */

module.exports = function ${name}() {
}

// Add your code here
function main() {
  console.log('${name} is running...');
}
`;

    // Create JavaScript file content
    const testContent = `const ${name} = require('./${name}');

    describe('${name} tests', () => {
        test('should run without errors', () => {
            expect('${name}').toEqual('${name}');
        });
    });
`;

    // Write README.md
    const readmePath = path.join(folderPath, 'README.md');
    fs.writeFileSync(readmePath, readmeContent);
    console.log(`📝 Created: ${name}/README.md`);

    // Write JavaScript file
    const jsPath = path.join(folderPath, `${name}.js`);
    const testPath = path.join(folderPath, `${name}.test.js`);

    fs.writeFileSync(jsPath, jsContent);
    fs.writeFileSync(testPath, testContent);
    console.log(`🚀 Created: ${name}/${name}.js`);

    console.log('\n✅ Js function created successfully!');

} catch (error) {
    console.error('❌ Error creating project structure:', error.message);
    process.exit(1);
}
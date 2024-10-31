const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Define the output directory for the HTML files
const outputDir = path.join(__dirname, 'dist');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

// Specify the EJS files to render
const ejsFiles = ['Inten.ejs'];

ejsFiles.forEach(file => {
    ejs.renderFile(path.join(__dirname, 'views', file), {}, (err, str) => {
        if (err) throw err;
        fs.writeFileSync(path.join(outputDir, file.replace('.ejs', '.html')), str);
        console.log(`${file} rendered to HTML.`);
    });
});

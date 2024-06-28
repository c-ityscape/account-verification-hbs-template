const fs = require('fs');
const Handlebars = require('handlebars');

// Read the template file
const templateSource = fs.readFileSync('template.hbs', 'utf8');
const template = Handlebars.compile(templateSource);

// Read the data file
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

// Generate the HTML
const result = template(data);

// Save the generated HTML to a file
fs.writeFileSync('output.html', result);

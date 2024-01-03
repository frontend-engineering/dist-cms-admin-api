const Handlebars = require('handlebars');
const open = require('open');
const fse = require('fs-extra');
const { generateData } = require('./dataAdapter.cjs')

// Read the Handlebars template file
const template = fse.readFileSync('templates/templateA/template.hbs', 'utf-8');

// Compile the template
const compiledTemplate = Handlebars.compile(template);

// const configData = fs.readFileSync('data.json');
// const data = JSON.parse(configData);
const companyInfo = fse.readJSONSync('./company.json');

generateData(companyInfo)
    .then(data => {
        const folderPath = `dist/${data.id}`;
        fse.mkdirSync(folderPath, { recursive: true })
        fse.writeJson(`${folderPath}/data.json`, data, { spaces: 2 });

        // Render the template with the data
        const generatedHTML = compiledTemplate(data)

        // Output the rendered template
        // console.log(generatedHTML);

        fse.writeFileSync(`${folderPath}/index.html`, generatedHTML);
        // assets copy
        fse.cpSync('templates/templateA', folderPath, {
            force: true,
            recursive: true,
            filter: (source, destination) => {
                if (source.endsWith('.hbs')) {
                    return false;
                }
                return true;
            }
        })

        open(`${folderPath}/index.html`)
    })

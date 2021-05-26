const { Marpit } = require('@marp-team/marpit')

const marpit = new Marpit()

// 2. Add theme CSS
const theme = `
section {
  width: 1280px;
  height: 960px;
  font-size: 40px;
  padding: 40px;
}

header,
footer {
  position: absolute;
  left: 50px;
  right: 50px;
  height: 20px;
}

h1 {
  text-align: left;
}
`

marpit.themeSet.default = marpit.themeSet.add(theme)

// 3. Render markdown
const markdown2 = `

# In Education

More students from different backgrounds need skills and safe habits working with data:

* Greater role of data in all fields
* Rise of computational sciences

`
const { html, css } = marpit.render(markdown)

// 4. Use output in your HTML
const htmlFile = `
<!DOCTYPE html>
<html><body>
  <style>${css}</style>
  ${html}
</body></html>
`
fs.writeFileSync('example.html', htmlFile.trim())

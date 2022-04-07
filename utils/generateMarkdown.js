
// Markdown function dynamic display
function generateMarkdown(data)  {
  return `
  # ${data.heading}
 <a href="https://img.shields.io/badge/License-${data.license}-brightgreen"><img scr="https//img.shields.io/badge/License-$data.license}-brightgreen"></a>


  ##Description
  ${data.description}


# Table of Content
-[installation](#installation)
-[usage](#usage)
-[contribution](#contribution)
-[licenses](#licenses)
-
-[test](#test)
-[Questions(#questions)


##Installation 
${data.installation}

##Usage
${data.usage}


##Contributing
${data.contribution}

##Tests 
${data.testing}

##License 
Licensed under ${data.license} License

##Questions
${data.author}
Any futher questions you can emailme at ${data.email}
You can visit my GitHub respositories at${data.github}

<! -- GutHub's Markdown reference links -->


`;
}

module.exports = generateMarkdown;

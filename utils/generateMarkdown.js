
// Markdown function dynamic display
function generateMarkdown(data)  {
  return `
  # ${data.heading}
 <a href="https://img.shields.io/badge/License-${data.license}-brightgreen"><img scr="https://img.shields.io/badge/License-${data.license}-brightgreen"></a>


  ## Description 

  ${data.description}


# Table of Content
-[installation](#installation)
-[usage](#usage)
-[contribution](#contribution)
-[licenses](#licenses)
-[test](#test)
-[questions](#questions)


## Installation 

${data.installation}

## Usage
video if terminal and  README (https://github.com/Ja1993en/README-Generator/issues/1#issue-1195934438)

video of terminal input ${data.usage}


## Contributing

${data.Contributors}

## Tests 


${data.testingInfo}

## License 

Licensed under ${data.license} License

## questions

${data.author}

Any futher questions you can emailme at ${data.email}

You can visit my GitHub respositories at [Github](https://github.com/${data.github})




`;
}

module.exports = generateMarkdown;

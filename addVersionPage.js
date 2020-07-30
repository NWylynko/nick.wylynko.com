const fs = require("fs");
const { version } = require("./package.json")

console.log('✔️ ', 'version:', version)

if (fs.existsSync('./build')) {
    
    console.log('✔️ ', 'build exists')

    if (!fs.existsSync('./build/version')){

        fs.mkdirSync('./build/version');

        console.log('✔️ ', 'created version folder')

    } else {

        console.log('✔️ ', 'version folder already exists')

    }

    const html = JSON.stringify({version})

    fs.writeFile('./build/version/index.html', html, err => {
        if (err) console.error('❌ ', 'failed to write html file')

        console.log('✔️ ', 'wrote html file')
      });
} else {

    console.error('❌ ', 'build doesnt exist')

}


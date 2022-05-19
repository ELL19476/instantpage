const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');

export default function sveltetailwind() {
    return {
        name: "svelte_tailwind",
        writeBundle() {
            fs.readFile('./public/build/bundle.js', 'utf8', (err, data) => {
                if (err) {
                  console.error(err);
                  return;
                }
                const dom = new JSDOM(`<body>
                    <script>` + data + `</script>
                </body>`, { runScripts: "dangerously" })
                fs.writeFile("./public/build/_tailwindInfo.html", dom.window.document.body.innerHTML.toString(),(err) => {
                    if (err)
                      console.log(err);
                    else {
                        require('child_process').spawn('npm', ['run', 'watch:tailwind'], {
                            stdio: ['ignore', 'inherit', 'inherit'],
                            shell: true
                        });
                    }
                  });
              });
        }
    }
}
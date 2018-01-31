# CodeEditorExperimentTemplate
For running and logging code experiments in the browser

Created using Node.js and Express (this will make it easier to store log data on the server side).

## To run:
1. Download repo
2. Make sure you have Node.js installed, cd into the repo's directory and run npm install
3. Run npm start
4. Go to http://localhost:3000/

Note that every time you make a change in the app you will have to kill and restart the app (unless you use special debug commands which you are free to look up).

## Editor:
The editor is Code Mirror, which has documentation here http://codemirror.net/. Register callbacks for every time the user makes an edit to capture detailed key logs. The editor instance is created in public/javascripts/editorUtils.js. If you are unfamiliar with Express, all client-side javascript should be in public/javascripts/, and all server side javascript in the main folder or a lib subdirectory from the main folder.


Happy coding!

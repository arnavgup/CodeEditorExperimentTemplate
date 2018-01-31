

var editor = new CodeMirror(document.getElementById('editor'), {
    value: "console.log('hello world');",
    mode:  "javascript",
    lineNumbers: true
  })

editor.setSize("100%", "100%")

console.log("success?", editor)

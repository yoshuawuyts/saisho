var html = require('choo/html')

var data = [
  'Learn Rust',
  'Build a p2p video player for the browser',
  'Make Choo more accessible',
  'Explain service workers thoroughly',
  'learn to deploy node services',
  'Figure out how to do containers right',
  'Start making my own logos',
  'Make generative background music',
  'Find patterns in data',
  'Release a tutorial video every month',
  'Build my own electron apps',
  'Create a page for each project I embark on',
  'Build my own keyboard',
  'Create a plan on how to exercise',
  'Make a habit out of planning trips',
  'Help out in the neighbourhood',
  'Make a good vegan hamburger',
  'Make a binary container',
  'Start keeping track of my websites',
  'Learn how to create database backups',
  'Budget money',
  'Budget time',
  'Exercise three times a week',
  'Make content rescaling more fun',
  'Make git auto commits, like mercurial'
]

module.exports = view

function view (state, emit) {
  emit('DOMTitleChange', 'saisho')

  return html`
    <body class="sans-serif bg-black white ttu">
      <table class="ma5 f4">
        ${data.map(data => html`<tr>${data}</tr>`)}
      </table>
    </body>
  `
}

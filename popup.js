document.addEventListener('DOMContentLoaded', function () {
  var noteContent = document.querySelector('#noteContent');
  var clearButton = document.querySelector('#clearButton');

  // Load saved note.
  noteContent.value = localStorage.getItem('note') || '';

  // Save note contents on change.
  noteContent.oninput = function () {
    localStorage.setItem('note', noteContent.value);
  };

  // Clear note content and save.
  clearButton.onclick = function () {
    noteContent.value = '';
    localStorage.setItem('note', noteContent.value);
  };
});

// Saves options to localStorage.
function save_options() {
  var textArea = document.getElementById("template");
  var template = textArea.value;
  localStorage["ghe_pr_template"] = template;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var template = localStorage["ghe_pr_template"];
  if (!template) {
    return;
  }

  var textArea = document.getElementById("template");
  textArea.value = template;
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);

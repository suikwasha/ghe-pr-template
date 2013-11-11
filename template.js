
var prArea = document.getElementById("pull_request_body");
chrome.extension.sendRequest({method: "getStatus"}, function(response) {
 prArea.value = response.template;
});

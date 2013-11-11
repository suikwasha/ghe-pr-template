chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "getStatus")
      sendResponse({template: localStorage['ghe_pr_template']});
    else
      sendResponse({}); // snub them.
});

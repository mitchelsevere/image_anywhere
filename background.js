chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  chrome.downloads.download({
    url: request,
    filename: 'image.png',
    conflictAction: 'uniquify',
  });
});

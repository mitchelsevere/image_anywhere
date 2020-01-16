document.addEventListener('DOMContentLoaded', () => {
  const checkPage = document.querySelector('#checkPage');
  checkPage.addEventListener('click', () => {
    chrome.runtime.onMessage.addListener(
      (message, callback) => {
        if (message === 'runContentScript') {
          chrome.tabs.executeScript({
            file: 'contentScript.js',
          });
        }
      },
    );
  });
});

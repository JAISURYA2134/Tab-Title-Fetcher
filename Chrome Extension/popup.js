document.addEventListener('DOMContentLoaded', function() {
  var fetchTitleBtn = document.getElementById('fetchTitleBtn');
  var output = document.getElementById('output');

  if (fetchTitleBtn && output) {
      fetchTitleBtn.addEventListener('click', function() {
          chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
              if (tabs && tabs.length > 0) {
                  var activeTab = tabs[0];
                  var activeTabTitle = activeTab.title;
                  output.innerText = activeTabTitle;
              } else {
                  output.innerText = 'No active tab found.';
              }
          });
      });
  } else {
      console.error('Required elements not found in the DOM.');
  }
});
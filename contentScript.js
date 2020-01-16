(function () {
  console.log('hitting background');
  const images = [...document.body.querySelectorAll('img')];
  images.forEach((img, i) => {
    if (img.width > 100 && img.height > 100) {
      const href = img.src;
      const button = document.createElement('button');
      const div = document.createElement('div');
      button.setAttribute('class', 'direct-download');
      button.setAttribute('data-href', href);
      button.innerText = '⇩';
      div.setAttribute('class', 'g-savetodrive');
      div.setAttribute('data-src', href);
      div.setAttribute('data-filename', `image${i}`);
      div.setAttribute('data-sitename', 'Image Anywhere');
      img.parentElement.setAttribute('class', 'parent');
      img.parentElement.appendChild(button);
      img.parentElement.appendChild(div);
    }
  });
  document.addEventListener('click', (event) => {
    if (event.target.matches('.direct-download')) {
      const { href } = event.target.dataset;
      chrome.runtime.sendMessage(href, (response) => {
        console.log(response);
      });
    }
  });
  console.log(images);
}());

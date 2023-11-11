const ulElement = document.querySelector('ul');
console.log('textContent', ulElement.textContent);
console.log('HTMLContent', ulElement.innerHTML);
console.log('getAttribute', ulElement.getAttribute('class'))
console.log('getAttributeData', ulElement.getAttribute('data-item'))
console.log('getAttributeData', ulElement.dataset.item)
console.log('class', ulElement.className)
console.log('classList', ulElement.classList)
console.log('id', ulElement.id)
console.log('style', ulElement.style)
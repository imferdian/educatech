function movePlaceholder(input) {
    input.nextElementSibling.style.top = '-28px';
    input.nextElementSibling.style.fontSize = '12px';
    input.nextElementSibling.style.color = '#3498db';
  }
  
  function resetPlaceholder(input) {
    if (input.value === '') {
      input.nextElementSibling.style.top = '';
      input.nextElementSibling.style.fontSize = '';
      input.nextElementSibling.style.color = '';
    }
  }
  
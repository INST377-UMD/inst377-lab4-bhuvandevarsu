// Alert Me Function
function alertMe() {
    const name = document.getElementById('name').value;
    if (name) {
      alert(`Hi ${name}!`);
    }
  }
  
  // Change Color Function
  let isBlue = true;
  function changeColor() {
    if (isBlue) {
      document.body.style.backgroundColor = 'green';
    } else {
      document.body.style.backgroundColor = 'lightblue';
    }
    isBlue = !isBlue;
  }
  
  // Validate Text Function
  function validateText() {
    const text = document.getElementById('text-tester').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    
    if (validation.test(text)) {
      alert('Text contains special characters!');
    } else {
      alert('Text is valid!');
    }
  }
  
  // Add Text Function
  function addText() {
    const heading = document.getElementById('heading');
    heading.textContent += ' Add Text';
  }  
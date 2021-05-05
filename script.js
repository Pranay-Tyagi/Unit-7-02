document.querySelector('button').addEventListener('click', function() {
  let number = document.querySelector('input').value
  number = parseInt(number)
  if (number < 0) {
    alert('negative number')
  } else if (number === 0) {
    alert('neither')
  } else {
    alert('positve number')
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const body = document.getElementById('root');
  const hello = document.createElement('div');
  hello.textContent = 'hello';
  
  body.appendChild(hello);
})

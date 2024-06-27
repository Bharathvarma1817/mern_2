function showDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are 0-indexed
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  }
  
  function showTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    return `${date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} ${hours}:${minutes}:${seconds} GMT+0530 (India Standard Time)`;
  }
  
  document.getElementById('showDateButton').addEventListener('click', () => {
    document.getElementById('dateOutput').textContent = showDate();
  });
  
  document.getElementById('showTimeButton').addEventListener('click', () => {
    document.getElementById('timeOutput').textContent = showTime();
  });
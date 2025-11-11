const p = document.querySelector("#timer");

function updateTime() {
  const d = new Date();
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  const hours = d.getHours().toString().padStart(2, "0");
  const minutes = d.getMinutes().toString().padStart(2, "0");
  const seconds = d.getSeconds().toString().padStart(2, "0");

  p.innerText = `${day}/${month}/${year} , ${hours}:${minutes}:${seconds}`;
}

// Update immediately and then every second
updateTime();
setInterval(updateTime, 1000);
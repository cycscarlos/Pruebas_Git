
  // window.onload = inicio;

  array = [1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10];

  function inicio() {
    for (let i = 0; i < 5; i++) {
      document.getElementById(
        "jap-container"
      ).innerHTML += `<div class="japBx">${i}</div>`;
    }
  }

  const test = array.forEach((element) => {
    console.log(element * 5);
  });

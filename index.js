checkboxMeat = document.getElementById("Meat");
checkboxMeat.addEventListener("change", e => {
  if (e.target.checked) {
    displayCard("meat");
  } else {
    removeCard("meat");
  }
});

checkboxVegetable = document.getElementById("Vegetable");
checkboxVegetable.addEventListener("change", e => {
  if (e.target.checked) {
    displayCard("vegetable");
  } else {
    removeCard("vegetable");
  }
});

checkboxFruit = document.getElementById("Fruit");
checkboxFruit.addEventListener("change", e => {
  if (e.target.checked) {
    displayCard("fruit");
  } else {
    removeCard("fruit");
  }
});

displayCard = category => {
  [...document.getElementsByClassName("card")]
    .filter(x => x.className.indexOf(category) !== -1)
    .forEach(element => {
      if (element.className.indexOf("remove") !== -1) {
        element.className = element.className.replace(" remove", "");
      }
    });
};

removeCard = category => {
  [...document.getElementsByClassName("card")]
    .filter(x => x.className.indexOf(category) !== -1)
    .forEach(element => {
      element.className += " remove";
    });
};

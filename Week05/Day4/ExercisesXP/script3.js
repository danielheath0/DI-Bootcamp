let allBoldItems;

const getBoldItems = () => {
  allBoldItems = document.getElementsByTagName("strong");
  return allBoldItems;
};

const highlight = () => {
  let array = getBoldItems();
  for (let index = 0; index < array.length; index++) {
    array[index].style = "background-color:lightblue";
  }
};

const returnItemsToDefault = () => {
  let array = getBoldItems();
  for (let index = 0; index < array.length; index++) {
    array[index].style = "background-color:none";
  }
};

document.querySelector("p").addEventListener("mouseover", highlight);
document.querySelector("p").addEventListener("mouseout", returnItemsToDefault);

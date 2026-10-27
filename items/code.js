const favoriteItems = [
    "nintendo Switch (animal crossing)",
    "sony XM4 headphones",
    "turtle-neck sweater",
    "ipad",
    "hp laptop",
    "northface backpack",
    "pink purse",
    "pencil case",
    "sketchbook",
    "coloring markers"
];

const listContainer = document.getElementById("favorite-list");

for (let i = 0; i < favoriteItems.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = favoriteItems[i];
    listContainer.appendChild(listItem);
}
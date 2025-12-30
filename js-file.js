grid = document.querySelector("#grid");
for (let i = 0; i < 16 * 16; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    grid.append(cell);
}

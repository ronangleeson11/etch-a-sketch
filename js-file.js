grid = document.querySelector("#grid");
for (let i = 0; i < 16 * 16; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = `c${i}`;
    grid.append(cell);
}

grid.addEventListener("mouseover", (event) => {
    let id = event.target.id;
    let cell = document.querySelector(`#${id}`);
    if (id.charAt(0) == "c") {
        cell.style.backgroundColor = "red";
    }
});

reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    let size = prompt("Enter size of new grid");
    if (size > 100) {
        alert("Too big, please enter a size <= 100");
    } else {
        grid.remove();
        grid = document.createElement("div");
        grid.id = "grid";
        for (let i = 0; i < size * size; i++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.id = `c${i}`;
            cell.style.flex = `calc(${100 / size}% - 2px)`;
            grid.append(cell);
        }
        grid.addEventListener("mouseover", (event) => {
            let id = event.target.id;
            let cell = document.querySelector(`#${id}`);
            if (id.charAt(0) == "c") {
                cell.style.backgroundColor = "red";
            }
        });
        document.querySelector("body").append(grid);
    }
})

document.addEventListener('DOMContentLoaded', function () {

    const container = document.querySelector(".container");
    const ul = document.querySelector(".todo-list");
    const btn = document.getElementById("submit-btn");

    btn.addEventListener('click', () => {

        const data = document.getElementById("new-task").value.trim();
        if (!data) return; 

        const new_item = document.createElement("li");
        new_item.classList.add("todo-item");

        const new_label = document.createElement("label");
        new_label.classList.add("new-item");
        new_label.textContent = data;

        const del = createButton("Delete", "d1");
        const edit = createButton("Edit", "edit");

        new_item.appendChild(new_label);
        new_item.appendChild(del);
        new_item.appendChild(edit);

        ul.appendChild(new_item);

    });

    container.addEventListener("click", (e) => {

        const listItem = e.target.closest('.todo-item');
        if (!listItem) return;

        if (e.target.classList.contains('del')) {

            listItem.remove();

        } 
        
        else if (e.target.classList.contains('edit')) {

            const label = listItem.querySelector("label");
            const editTitle = prompt("Enter new title", label.textContent);
            if (editTitle !== null) 
                label.textContent = editTitle.trim();                   

            else   
                alert("Plz Enter valid title");

        }
    });

    // btn function
    function createButton(text, className) {
        const button = document.createElement("button");
        button.setAttribute("class",className);
        button.textContent = text;
        return button;
    }
});


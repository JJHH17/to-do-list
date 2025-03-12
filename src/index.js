import "./styles.css";

// Add project button
// Select the add project button
function AddProjectBtnSelect() {
    const addProjectBtn = document.querySelector("#addProject");
    return addProjectBtn;
}

AddProjectBtnSelect().addEventListener("click", () => {
    alert("Hello");
});

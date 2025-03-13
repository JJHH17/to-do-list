import "./styles.css";
import { AddProjectBtnSelect, pageContainerSelect, submitProjectBtnSelect } from "./elementSelectors";
import { createProjectModal, submitProject } from "./createProjectModal";

// Stores list of projects for display
let projects = [];

// Handles button click
AddProjectBtnSelect().addEventListener("click", () => {
    if (!document.querySelector("#projectFormContainer")) {
        // Creates modal on click (if it doesn't already exist)
        createProjectModal();
    } else {
        alert("Please fill out the project form");
    }
});

// Create the "make a project" function, which is an object
function createProject(title, description) {
    // Create the project object and to do array
    let project = { title, description, toDo: [] };
    // Pushes into the array of projects
    projects.push(project);
}

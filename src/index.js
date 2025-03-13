import "./styles.css";
import { AddProjectBtnSelect, pageContainerSelect, submitProjectBtnSelect, sidebarSelect } from "./elementSelectors";
import { createProjectModal } from "./createProjectModal";
import { createProject, projects } from "./createProject";

// Handles button click
AddProjectBtnSelect().addEventListener("click", () => {
    if (!document.querySelector("#projectFormContainer")) {
        // Creates modal on click (if it doesn't already exist)
        createProjectModal();
    } else {
        alert("Please fill out the project form");
    }
});

// Print items in project array to sidebar
export function renderToSidebar() {
    // Clears sidebar upon rendering
    const sidebar = sidebarSelect();
    sidebar.innerHTML = "";

    // Loops through project array to print to sidebar
    projects.forEach((project, index) => {
        // Appends project to their own div
        let projectDiv = document.createElement("div");
        projectDiv.classList.add("projectHolder");
        projectDiv.textContent = `${project.title} - ${project.description}`;
        // Appends to sidebar
        sidebar.appendChild(projectDiv);

        // We'll allow divs to be clickable here and highlight when hover
    })
}
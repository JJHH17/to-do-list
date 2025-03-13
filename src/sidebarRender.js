import { AddProjectBtnSelect, pageContainerSelect, submitProjectBtnSelect, sidebarSelect } from "./elementSelectors";
import { createProjectModal } from "./createProjectModal";
import { createProject, projects } from "./createProject";
import { renderProject } from "./projectLoader";
 
// Responsible for rendering items to sidebar when projects are created
// Allows user to click item, which is then expanded to center of page

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

        // We'll allow divs to be clickable here 
        projectDiv.addEventListener("click", () => {
            renderProject(index);
        });

        // We'll allow divs to change colour when hovered over
        projectDiv.addEventListener("mouseover", () => {
            projectDiv.style.backgroundColor = "pink";
        });

        // Reverts back to default colour when mouse leaves div
        projectDiv.addEventListener("mouseleave", () => {
            projectDiv.style.backgroundColor = "";
        });
    });
}

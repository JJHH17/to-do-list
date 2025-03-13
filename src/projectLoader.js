import { AddProjectBtnSelect, pageContainerSelect, submitProjectBtnSelect, sidebarSelect, projectHolderSelect, mainContentSelect } from "./elementSelectors";
import { createProjectModal } from "./createProjectModal";
import { createProject, projects } from "./createProject";
import { renderToSidebar } from "./sidebarRender";

// Responsible for load project "to do" items onto page
export function renderProject(index) {
    // Render items to center div of page
    const mainContent = mainContentSelect();
    mainContent.innerHTML = ""; // Clears contents when project div is clicked on

    // Displays project title
    const projectTitle = document.createElement("p");
    projectTitle.textContent = projects[index].title;
    mainContent.appendChild(projectTitle);

    // Displays project description
    const projectDesc = document.createElement("p");
    projectDesc.textContent = projects[index].description;
    mainContent.appendChild(projectDesc);

    // Display to do items here when they're created... TODO
}

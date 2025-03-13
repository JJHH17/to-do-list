import "./styles.css";
import { AddProjectBtnSelect, pageContainerSelect, submitProjectBtnSelect, sidebarSelect } from "./elementSelectors";
import { createProjectModal } from "./createProjectModal";
import { createProject, projects } from "./createProject";
import { renderToSidebar } from "./sidebarRender";

// Handles button click
AddProjectBtnSelect().addEventListener("click", () => {
    if (!document.querySelector("#projectFormContainer")) {
        // Creates modal on click (if it doesn't already exist)
        createProjectModal();
    } else {
        alert("Please fill out the project form");
    }
});

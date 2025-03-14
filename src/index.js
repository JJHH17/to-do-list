import "./styles.css";
import { AddProjectBtnSelect, pageContainerSelect, submitProjectBtnSelect, sidebarSelect, projectHolderSelect, mainContentSelect } from "./elementSelectors";
import { createProjectModal } from "./createProjectModal";
import { createProject, projects } from "./createProject";
import { renderToSidebar } from "./sidebarRender";
import { removeToDoModal } from "./createToDoModal";

// Handles button click
AddProjectBtnSelect().addEventListener("click", () => {
    // Removes "Create to do" modal if one is present
    if (document.querySelector("#toDoFormContainer")) {
        removeToDoModal();
    }
    if (!document.querySelector("#projectFormContainer")) {
        // Creates modal on click (if it doesn't already exist)
        createProjectModal();
    } else {
        alert("Please fill out the project form");
    }
});

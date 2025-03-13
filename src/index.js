import "./styles.css";
import { AddProjectBtnSelect, pageContainerSelect, submitProjectBtnSelect } from "./elementSelectors";
import { createProjectModal } from "./createProjectModal";

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

import { AddProjectBtnSelect, pageContainerSelect, submitProjectBtnSelect } from "./elementSelectors";
import { createProject, projects } from "./createProject";
import { renderToSidebar } from "./index";

// Create modal for when button is clicked
export function createProjectModal() {
    // Creates a parent div containing form, appends to page 
    const containerForm = document.createElement("div");
    // Styling and positioning 
    containerForm.style.position = "absolute";
    containerForm.style.left = "50%";
    containerForm.style.right = "50%";
    containerForm.style.top = "35%";

    // Appends to page
    pageContainerSelect().appendChild(containerForm);

    // Assigns ID
    containerForm.id = "projectFormContainer";
    // Creates form, appends to parent
    const projectForm = document.createElement("form");
    projectForm.id = "projectForm";
    containerForm.appendChild(projectForm);

    // Creates title of project
    const projectTitleLabel = document.createElement("label");
    projectTitleLabel.textContent = "Project Title:";
    projectForm.appendChild(projectTitleLabel);

    // Creates input for title
    const projectTitleInput = document.createElement("input");
    projectTitleInput.type = "text";
    projectForm.appendChild(projectTitleInput);

    // Creates description of project
    const projectDescTitle = document.createElement("label");
    projectDescTitle.textContent = "Project Description";
    projectForm.appendChild(projectDescTitle);

    // Creates input for description
    const projectDescInput = document.createElement("input");
    projectDescInput.type = "text";
    projectForm.appendChild(projectDescInput);

    // Adds submit button
    const submitProject = document.createElement("button");
    submitProject.type = "button";
    submitProject.id = "submitProject";
    submitProject.textContent = "Add";
    projectForm.appendChild(submitProject);


    // Handle "submit project" button, creates project object
    submitProjectBtnSelect().addEventListener("click", () => {
        // Creates project object
        let newProject = createProject(projectTitleInput.value, projectDescInput.value);
        renderToSidebar();
    });
}

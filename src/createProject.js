import { AddProjectBtnSelect, pageContainerSelect, submitProjectBtnSelect, sidebarSelect } from "./elementSelectors";
import { createProjectModal } from "./createProjectModal";
import { renderToSidebar } from "./sidebarRender";


// Stores list of projects for display
export let projects = [];

// Responsible for creating project items

// Create the "make a project" function, which is an object
export function createProject(title, description) {
    // Create the project object and to do array
    let project = { title, description, toDo: [] };
    // Pushes into the array of projects
    projects.push(project);
}

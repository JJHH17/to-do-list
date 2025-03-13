// File used for selecting elements on a page

// Add project button
// Select the add project button
export function AddProjectBtnSelect() {
    const addProjectBtn = document.querySelector("#addProject");
    return addProjectBtn;
}

// Selects main div of page
export function pageContainerSelect() {
    const pageContainer = document.querySelector("#pageContainer");
    return pageContainer;
}

// Used to select "submit project" button
export function submitProjectBtnSelect() {
    const submitProjectBtn = document.querySelector("#submitProject");
    return submitProjectBtn;
}

// Selects sidebar element
export function sidebarSelect() {
    const sidebar = document.querySelector("#sidebar");
    return sidebar;
}

// Selects project holder elements
export function projectHolderSelect() {
    const projectHolder = document.querySelector(".projectHolder");
    return projectHolder;
}

// Selects center div/element on page
export function mainContentSelect() {
    const mainContent = document.querySelector("#mainContent");
    return mainContent;
}
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

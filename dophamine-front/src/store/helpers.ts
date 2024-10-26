const STATE_KEY = 'reduxState';

// ToDo: fix typings 
export function loadState(): {modal: {isModalOpen: boolean}} | undefined {
  try {
    const serializedState = localStorage.getItem(STATE_KEY);
    if (serializedState === null) {
      return undefined; // No saved state, initialize with default state
    }
    return JSON.parse(serializedState); // Load the saved state
  } catch (error) {
    console.error("Could not load state", error);
    return undefined; // If there's an error, use default state
  }
}

export function saveState(state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STATE_KEY, serializedState);
  } catch (error) {
    console.error("Could not save state", error);
  }
}
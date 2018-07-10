export const RECEIVE_ENTRIES = 'REVEIVE_ENTRIES';
export const ADD_ENTRY = 'ADD_ENTRY';

export function reveiveEntries (entries) {
    return {
        type: RECEIVE_ENTRIES,
        entries,
    }
}

export function addEntry (entry) {
    return {
        type: ADD_ENTRY,
        entry,
    }
}
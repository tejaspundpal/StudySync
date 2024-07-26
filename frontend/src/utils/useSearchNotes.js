export function searchNotes(searchInput, filteredNotes) {
    if (searchInput === "") {
        return filteredNotes;
    }
    return filteredNotes.filter((notes) => 
        notes.subject.toLowerCase().includes(searchInput.toLowerCase())
    );
}

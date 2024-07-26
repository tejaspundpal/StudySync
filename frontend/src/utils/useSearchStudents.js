export function searchStudents(searchInput, originalStudents) {
    // console.log("hi");
    if (searchInput === "") {
        return originalStudents;
    }
    return originalStudents.filter((students) =>
        `${students?.firstname} ${students?.lastname}`.toLowerCase()?.includes(searchInput.toLowerCase())
    );
    
}
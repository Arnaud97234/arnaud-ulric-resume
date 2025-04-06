// Format Duration
export const formatDuration = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
  
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    // Round up year if months > 9
    if (months > 9) {
      years += 1;
      months = 0;
    }
  
    // Output logic
    if (years > 0 && months === 0) {
      return `${years} year${years > 1 ? 's' : ''}`;
    } else if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''}`;
    } else {
      return `${months} month${months > 1 ? 's' : ''}`;
    }
}  

// Format date
export const formatDate = (date) => {
    if(date != null) {
        const d = new Date(date);
        const month = d.getMonth() + 1; // JS months are 0-based
        const year = d.getFullYear();
        return `${month}/${year}`;
    } else {
        return "today"
    }
};
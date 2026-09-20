export const formatDate = (dateString) => {
  if (!dateString) return "current";
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
};

export const getDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (end.getDate() < start.getDate()) {
    months -= 1;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalMonths = years * 12 + months;

  if (totalMonths < 12) {
    return `${totalMonths} month${totalMonths !== 1 ? "s" : ""}`;
  }

  if (months === 0) {
    return `${years} year${years !== 1 ? "s" : ""}`;
  }

  return `${years} year${years !== 1 ? "s" : ""} ${months} month${months !== 1 ? "s" : ""}`;
};

export const getCurrentDate = (format = "long") => {
  const now = new Date();
  return format === "short"
    ? now.toLocaleDateString()
    : now.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
};

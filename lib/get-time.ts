// timeUtils.ts
export const getTimeAgo = (createdAt: Date): string => {
  const now = new Date();
  const diffInMilliseconds = now.getTime() - new Date(createdAt).getTime();

  // Convert to seconds
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

  // If less than a minute
  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  }

  // Convert to minutes
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} ${diffInMinutes === 1 ? "minute" : "minutes"} ago`;
  }

  // Convert to hours
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} ${diffInHours === 1 ? "hour" : "hours"} ago`;
  }

  // Convert to days
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} ${diffInDays === 1 ? "day" : "days"} ago`;
  }

  // Convert to weeks
  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks} ${diffInWeeks === 1 ? "week" : "weeks"} ago`;
  }

  // Convert to months
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} ${diffInMonths === 1 ? "month" : "months"} ago`;
  }

  // Convert to years
  const diffInYears = Math.floor(diffInDays / 365);
  return `${diffInYears} ${diffInYears === 1 ? "year" : "years"} ago`;
};

// If you need the raw values instead of formatted strings
export const getTimeDifference = (createdAt: Date) => {
  const now = new Date();
  const diffInMilliseconds = now.getTime() - new Date(createdAt).getTime();

  return {
    seconds: Math.floor(diffInMilliseconds / 1000),
    minutes: Math.floor(diffInMilliseconds / (1000 * 60)),
    hours: Math.floor(diffInMilliseconds / (1000 * 60 * 60)),
    days: Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24)),
    weeks: Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 7)),
    months: Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 30)),
    years: Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365)),
  };
};

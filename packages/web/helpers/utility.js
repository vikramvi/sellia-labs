export function toCamelCase(str) {
  if (str) {
    var arr = str.match(/[a-z]+|\d+/gi);
    return arr.map((m, i) => {
      let low = m.toLowerCase();
      if (i != 0) {
        low = low.split('').map((s, k) => (k == 0 ? s.toUpperCase() : s))
          .join``;
      }
      return low;
    }).join``;
  } else {
    return str;
  }
}
export function timeDifference(current, previous) {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seconds ago';
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes ago';
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours ago';
  } else if (elapsed < msPerMonth) {
    const days = Math.round(elapsed / msPerDay);
    // return /*'approximately ' +*/ Math.round(elapsed/msPerDay) + ' days ago';
    return `${days} ${days > 1 ? 'days ago' : 'day ago'}`;
  } else if (elapsed < msPerYear) {
    return (
      /*'approximately ' +*/ Math.round(elapsed / msPerMonth) + ' months ago'
    );
  } else {
    return (
      /*'approximately ' +*/ Math.round(elapsed / msPerYear) + ' years ago'
    );
  }
}

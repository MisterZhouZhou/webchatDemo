const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function formatSimpleTime(time) {
  let date = new Date(time);
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}

function formatSimpleTimeFull(time) {
  let date = new Date(time);
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
}

module.exports = {
  formatTime: formatTime,
  formatSimpleTime: formatSimpleTime,
  formatSimpleTimeFull: formatSimpleTimeFull
}

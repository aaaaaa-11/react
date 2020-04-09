export function formatDate (date) {
  if (date) {
    let _date = date.toLocaleDateString(),
        arr = _date.split('/')
    return arr[0] + '年' + arr[1] + '月' + arr[2] + '号'
  }
  return date
}

export function formatTime (date) {
  if (date) {
    return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
  }
  return date
}

export function formatDetailDate (date) {
  let _date = formatDate(date)
  let time = formatTime(date)
  return _date + ' ' + time
}

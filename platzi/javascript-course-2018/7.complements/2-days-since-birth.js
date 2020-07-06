function differenceBetweenDays(date1, date2) {
  const millisecondsInOneDay = 1000*60*60*24
  const difference = Math.abs(date1 - date2)

  return Math.floor(difference / millisecondsInOneDay)
}

const today = new Date()
const birthday = new Date(1990, 7, 12)

console.log(differenceBetweenDays(today, birthday))
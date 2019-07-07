// Settings
const secondInMs = 1000
const minuteInMs = secondInMs * 60
const hourInMs = minuteInMs * 60
const dayInMs = hourInMs * 24
const weekInMs = dayInMs * 24

// Helpers
const roundTime = R.pipe(
  R.defaultTo(''),
  time => Math.floor(time),
  R.defaultTo('...')
)

const lessThanAMinute = val => R.lt(val, minuteInMs)
const betweenAMinuteAndAnHour = val => R.gte(val, minuteInMs) && R.lt(val, hourInMs)
const betweenAnHourAndADay = val => R.gte(val, hourInMs) && R.lt(val, dayInMs)
const betweenADayAndAWeek = val => R.gte(val, dayInMs) && R.lt(val, weekInMs)

const runConditions = R.cond([
  [lessThanAMinute, R.always('Há menos de 1 min')],
  [betweenAMinuteAndAnHour, time => `Há ${roundTime(time / minuteInMs)} min`],
  [betweenAnHourAndADay, time => `Há ${roundTime(time / hourInMs)}h`],
  [betweenADayAndAWeek, time => `Há ${roundTime(time / dayInMs)}d`],
  [R.T, time => `Há ${roundTime(time / weekInMs)} sem`],
])

const ElapsedTime = notificationTimestamp => {

  const diffMilliseconds = R.pipe(
    timestamp => Date.parse(timestamp),
    R.subtract(Date.now(), R.__)
  )(notificationTimestamp)

  if (isNaN(diffMilliseconds) || !diffMilliseconds) {
    console.log(`[ ERROR -> You must pass an ISO date format`)
    return ''
  }


  return runConditions(diffMilliseconds);
}

module.exports = ElapsedTime

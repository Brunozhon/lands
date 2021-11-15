function SnowDayLand(snowflakes, snowflakesInBank, icicles, iciclesInBank) {
  Snowyland.call(this, snowflakes, snowflakesInBank, icicles, iciclesInBank)
}
SnowDayLand.prototype = Object.create(Snowyland.prototype)
SnowDayLand.prototype.constructor = SnowDayLand

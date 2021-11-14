function SnowylandBank(snowflakes, icicles) {
  this.snowflakes = snowflakes
  this.icicles = icicles
}
function Snowyland(snowflakes, snowflakesInBank, icicles, iciclesInBank) {
  this.snowflakes = snowflakes
  this.icicles = icicles
  this.bank = new SnowylandBank(snowflakesInBank, iciclesInBank)
}
Snowyland.prototype.convert = function(snowflakes, number) {
  if (!!(snowflakes)) {
    this.icicles -= number
    this.snowflakes += number * 50 // snowflakes = icicles * 50
  } else {
    this.snowflakes -= number
    this.icicles += Number(BigInt(number) / BigInt(50)) // Workaround for an integer.
  }
}
var snowyland = new Snowyland(0, 1_000_000_000, 0, 1_000_000)

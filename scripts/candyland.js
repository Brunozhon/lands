function CandylandBank(candies) {
  this.candies = candies
}
function Candyland(candies, candiesInBank) {
  this.candies = candies
  this.bank = new CandylandBank(candiesInBank)
}
Candyland.prototype.asciiImage = function() {}
Candyland.prototype.makeTransactionToBank = function(candies) {
  this.bank.candies += candies
  this.candies -= candies
}
Candyland.prototype.makeTransactionToPlayer = function(candies) {
  this.bank.candies -= candies
  this.candies += candies
}
var candyland = new Candyland(0, 1_000_000_000)
candyland.makeTransactionToPlayer(100)

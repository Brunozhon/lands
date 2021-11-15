function CryptoBank(cryptobucks, processingMB) {
  this.cryptobucks = cryptobucks
  this.proccesingMB = processingMB
}
function Computer(processingMB, cryptobucks, cryptobucksInBank) {
  this.processingMB = processingMB
  this.cryptobucks = cryptobucks
  this.bank = new CryptoBank(cryptobucksInBank, 1_000)
}
Computer.prototype.process = function(id, args) {
  if id == "SWITCHFROMBANK" {
    var cb = args[0]
    this.bank.cryptobucks -= cb
    this.cryptobucks += cb
  } else if id == "DOSNEAKATTACK1NOW" {
    alert("If you do a sneak attack when the bank is in debt you will pay the debt. Understood?")
    this.cryptobucks += this.bank.cryptobucks
    alert("Congrats! You are rich!")
    alert("The bank will do its sneak attack now.")
    this.bank.cryptobucks = -1_000_000_000
    alert("Congrats! The bank is now in debt. Mwahahahahahahahahahahahahahahahahahahahahahhaahahahahahahahahahahahahahahahahahaha!")
    var yesorno = prompt("Do it again?")
    if !!(yesorno) {
      alert("You poor thing! You must've pressed 'Yes!' I'll say its a no.")
    } else {
      alert("You click no, that's the bank's secret!")
      this.process("DOSNEAKATTACK1NOW", [])
    }
  }
}

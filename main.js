var gameData = {
  gold: 0,
  goldPerClick: 1,
  goldPerClickCost: 10,
  autoDig: 2000,
  autoDigCost: 5,
  autoDigLevel: 1
}

function mineGold() {
  gameData.gold += gameData.goldPerClick
  document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
}

function buyGoldPerClick() {
  if (gameData.gold >= gameData.goldPerClickCost) {
    gameData.gold -= gameData.goldPerClickCost
    gameData.goldPerClick += 1
    gameData.goldPerClickCost *= 3
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Digger (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
  }
}

function buyAutoDig() {
  if (gameData.gold >= gameData.autoDigCost) {
    gameData.gold -= gameData.autoDigCost
    gameData.autoDig -= gameData.autoDigCost
    gameData.autoDigCost *= 2
    gameData.autoDigLevel ++
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Digger (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
    document.getElementById("autoDigUpgrade").innerHTML = "Upgrade Auto-Digger (Currently Level " + gameData.autoDigLevel + ") Cost: " + gameData.autoDigCost + " Gold"
  }
}

var mainGameLoop = window.setInterval(function() {
  mineGold()
}, gameData.autoDig)


var saveGame = JSON.parse(localStorage.getItem('goldMinerSave'))
if (saveGame != null) {
  gameData = savegame
}

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem('goldMinerSave', JSON.stringify(gameData))
}, 15000)

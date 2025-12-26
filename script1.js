let totalEnergy = 0;
let usageHistory = [];

const devices = {
  light: { power: 40, status: false },
  fan: { power: 75, status: false },
  projector: { power: 150, status: false }
};

function toggleDevice(device) {
  if (!devices[device].status) {
    totalEnergy += devices[device].power;
    devices[device].status = true;
  } else {
    totalEnergy -= devices[device].power;
    devices[device].status = false;
  }

  usageHistory.push(totalEnergy);
  updateUI();
  runAI(usageHistory);
}

function updateUI() {
  document.getElementById("energy").innerText = totalEnergy;

  let percent = Math.min(totalEnergy / 3, 100);
  document.getElementById("usageBar").style.width = percent + "%";
}

function runAI(data) {
  if (data.length < 3) return;

  const average =
    data.reduce((sum, value) => sum + value, 0) / data.length;

  const lastThree = data.slice(-3);

  if (lastThree.every(value => value > average)) {
    document.getElementById("aiAlert").innerText =
      "🤖 AI Alert: Unusual high energy usage detected! Please reduce power consumption.";
  } else {
    document.getElementById("aiAlert").innerText = "";
  }
}

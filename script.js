document.getElementById("decision").innerText = "Processing...";
function simulateTraffic() {
  const condition = document.getElementById("condition").value;
  const emergency = document.getElementById("emergency").checked;

  let route = "";
  let traffic = "";
  let decision = "";

  if (emergency) {
    route = "Priority Route Activated";
    traffic = "Clearing traffic";
    decision = "Emergency vehicle given green corridor";
  } 
  else if (condition === "accident") {
    route = "Alternate Route B";
    traffic = "Heavy congestion";
    decision = "Accident detected, rerouting traffic";
  } 
  else if (condition === "roadblock") {
    route = "Diversion Route C";
    traffic = "Blocked road";
    decision = "Roadblock detected, diverting vehicles";
  } 
  else {
    route = "Shortest Route A";
    traffic = "Normal traffic";
    decision = "Smooth flow";
  }

  document.getElementById("route").innerText = route;
  document.getElementById("traffic").innerText = traffic;
  document.getElementById("decision").innerText = decision;
}
let breathing = false;
let time = 1000;
let step = 0;
let steps = [
    /*time width*/
    ["inspira", 0],
    ["2", 50],
    ["segura", 100],
    ["2", 100],
    ["expira", 100],
    ["2", 50],
    ["segura", 0],
    ["2", 0]
];
$("#action").on("click", function() {
    if (breathing) {
        $("#action").text("Iniciar");
        breathing = false;
        clearInterval(interval);
    } else {
        $("#action").text("parar");
        breathing = true;
        interval = setInterval(update, time);
    }
});
function update() {
    let min = 30, max = 90, width = 0;
    if (step < steps.length) {
        $("#log").prepend("<p>" + steps[step][0] + "</p>");
        step++;
    } else {
        $("#log").prepend("<p>Fin</p>");
        step=0;
    }
    
}
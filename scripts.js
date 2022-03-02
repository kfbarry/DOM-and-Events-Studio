window.addEventListener("load", function () {
    console.log("window loaded");

    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click",function(){
        let takeoffConfimration = window.confirm("Confirm that the shuttle is ready for takeoff");
        if (takeoffConfimration = true){
            document.getElementById("flightStatus").innerHTML = "Shuttle in Flight";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = Number(document.getElementById("spaceShuttleHeight").innerHTML) + 10000;
        }
    });

    let landing = this.document.getElementById("landing");
    landing.addEventListener("click",function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    });

    let missionAbort = document.getElementById("missionAbort");
    missionAbort.addEventListener("click",function(){
        let missionAbortConfimration = window.confirm("Confirm that you want to abort the mission.");
        if (missionAbortConfimration = true){
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
        }
    });

    let up = document.getElementById("up");
        up.addEventListener("click", function(){
        document.getElementById("spaceShuttleHeight").innerHTML = Number(document.getElementById("spaceShuttleHeight").innerHTML) + 10000;
        let rocket = document.getElementById("rocket");
        rocket.style.top = Number(rocket.style.top) - 10 + "px";
    });

    let down = document.getElementById("down");
        down.addEventListener("click", function(){
        document.getElementById("spaceShuttleHeight").innerHTML = Number(document.getElementById("spaceShuttleHeight").innerHTML) - 10000;
        let rocket = document.getElementById("rocket");
        rocket.style.top = Number(rocket.style.top) + 10 + "px";
    });
});
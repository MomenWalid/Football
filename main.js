let ul = document.querySelectorAll("ul li");

let lineupLi = document.querySelector("ul .line");

let lineup = document.querySelector(".lineup .content");

let ulTeam = document.querySelectorAll(".lineup .teams");

let liveStreamLi = document.querySelector("ul .live");

let live = document.querySelector(".livestream");

let highlightLi = document.querySelector("ul .highlight");

let highlights = document.querySelector(".highlights");

let statsLI = document.querySelector("ul .stat");

let stats = document.querySelector(".stats");

ulTeam.forEach((li) => {
    li.addEventListener("click", (e) => {
        if (e.target.className == "teamone") {
            e.target.classList.add("active");

            document.querySelector(".lineup .teamtwo").classList.remove("active");

            document.querySelector(".lineup .content.two").style.display = "none";

            document.querySelector(".lineup .content.one .cont").style.display =
                "block";
        } else if (e.target.className == "teamtwo") {
            e.target.classList.add("active");

            document.querySelector(".lineup .teamone").classList.remove("active");

            document.querySelector(".lineup .content.two").style.display = "block";

            document.querySelector(".lineup .content.one .cont").style.display =
                "none";
        }
    });
});

ul.forEach((li) => {
    li.addEventListener("click", (e) => {
        if (e.target.className == "line") {
            e.target.classList.add("active");

            liveStreamLi.classList.remove("active");

            highlightLi.classList.remove("active");

            statsLI.classList.remove("active");

            live.style.display = "none";

            highlights.style.display = "none";

            stats.style.display = "none";

            lineup.style.display = "block";

            location.reload();
        }

        if (e.target.className == "live") {
            e.target.classList.add("active");

            lineupLi.classList.remove("active");

            highlightLi.classList.remove("active");

            statsLI.classList.remove("active");

            live.style.display = "block";

            highlights.style.display = "none";

            stats.style.display = "none";

            lineup.style.display = "none";

            document.querySelector(".lineup .content.two").style.display = "none";
        } else if (e.target.className == "highlight") {
            e.target.classList.add("active");

            liveStreamLi.classList.remove("active");

            lineupLi.classList.remove("active");

            statsLI.classList.remove("active");

            live.style.display = "none";

            highlights.style.display = "block";

            stats.style.display = "none";

            lineup.style.display = "none";

            document.querySelector(".lineup .content.two").style.display = "none";
        } else if (e.target.className == "stat") {
            e.target.classList.add("active");

            liveStreamLi.classList.remove("active");

            highlightLi.classList.remove("active");

            lineupLi.classList.remove("active");

            live.style.display = "none";

            highlights.style.display = "none";

            stats.style.display = "block";

            lineup.style.display = "none";

            document.querySelector(".lineup .content.two").style.display = "none";
        }
    });
});
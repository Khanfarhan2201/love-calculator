function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    const result = document.getElementById("res"); // Move result outside

    if (name1 === "" || name2 === "") {
        alert("Please enter both names");
        return;
    }

    const lovePer = Math.floor(Math.random() * 101);
    
    result.innerHTML = `${name1} and ${name2}'s Love Percentage: ${lovePer}%`;

    if (lovePer < 30) {
        result.innerHTML += "<br> ❌ Not a Great Match. Keep Looking!";
    } else if (lovePer >= 30 && lovePer < 70) {
        result.innerHTML += "<br> 😊 There is Potential. Give it a try!";
    } else {
        result.innerHTML += "<br> ❤️ Great Match!";
    }

    result.classList.add("show-result"); // Optional: Add animation effect
}

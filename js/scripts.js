window.onload = function() {
    const form = document.querySelector("form");
    form.onsubmit = function(e) {
        e.preventDefault();

        let legalVoter = document.getElementById("legalVoter");
        legalVoter.setAttribute("class", "hidden");
        let minor = document.getElementById("minor")
        minor.setAttribute("class", "hidden");

        const age = parseInt(document.querySelector("input#age").value);

        if (age >= 18) {
        legalVoter.setAttribute("class" , "");     
        } else {
        window.alert("You're not old enough to vote!");
        minor.setAttribute("class", ""); 
        }
    }
}
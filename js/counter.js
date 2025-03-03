document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".count");
    const speed = 200; // Adjust speed of counter animation

    counters.forEach((counter) => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-count");
            const count = +counter.innerText.replace("+", "");

            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment) + "+";
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target + "+"; // Ensure final number is correct
            }
        };

        updateCount();
    });
});
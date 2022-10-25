window.addEventListener("load", () => {
    const now = new Date(Date.now());
    let timeInt = new Date(now).getHours();
    timeInt = timeInt > 18 || timeInt < 6 ? 2 : 1;

    console.log(timeInt);
    if (timeInt == 2) {
        document.querySelector("body").className += ` bg-dark text-white`;
    }
});

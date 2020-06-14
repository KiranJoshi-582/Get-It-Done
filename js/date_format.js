function getCurrentDate() {
    let date = new Date();
    let months = [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    let month = months[date.getMonth()];

    function addOrdinalIndicator(day) {
        switch (day) {
            case 1:
            case 21:
            case 31:
                day = day + "st";
                break;
            case 2:
            case 22:
                day = day + "nd";
                break;
            case 3:
            case 23:
                day = day + "rd";
                break;
            default: day = day + "th";
        }
        return day;
    }


    let day = addOrdinalIndicator(date.getDate());

    fullDate = `${month} ${day}`;
    return fullDate;
}

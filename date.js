function isDayEven(date = new Date()) {
    const dayOfMonth = date.getDate();
    return dayOfMonth % 2 === 0;
}

module.exports = isDayEven;
function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        month: '2-digit', 
        day: '2-digit', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
    };

    const formatter = new Intl.DateTimeFormat('en-US', options);
    const dateTimeParts = formatter.formatToParts(now);

    const weekday = dateTimeParts.find(part => part.type === 'weekday').value.toUpperCase();
    const monthDay = `${dateTimeParts.find(part => part.type === 'month').value}/${dateTimeParts.find(part => part.type === 'day').value}`;
    const year = dateTimeParts.find(part => part.type === 'year').value;
    const time = `${dateTimeParts.find(part => part.type === 'hour').value}:${dateTimeParts.find(part => part.type === 'minute').value}:${dateTimeParts.find(part => part.type === 'second').value}`;

    const formattedDateTime = `${weekday} ${monthDay} ${year} ${time}`;
    document.getElementById('date-time').textContent = formattedDateTime;
}

setInterval(updateDateTime, 1000);
updateDateTime();

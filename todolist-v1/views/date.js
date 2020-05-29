
function getDate() {
let options = {
    weekday: "long",
    day: "numeric",
   month:"long"
};
let day = today.toLocaleString("en-US", options);

return day;
}
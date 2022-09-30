const allNotificationCard =
  document.getElementsByClassName("notification-card");
console.log(allNotificationCard[1]);

function markAllAsRead() {
  for (i = 0; i < 7; i++) {
    allNotificationCard[i].style.backgroundColor = "white";
  }
}

allNotificationCard.forEach((card) => {
  card.onclick = (e) => {
    e.style.backgroundColor = "white";
  };
});

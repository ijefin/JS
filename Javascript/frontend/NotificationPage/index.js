const allNotificationCard =
  document.getElementsByClassName("notification-card");
console.log(allNotificationCard);

function markAllAsRead() {
  for (i = 0; i < 7; i++) {
    allNotificationCard[i].style.backgroundColor = "white";
  }
}



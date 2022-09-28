const allNotificationCard =
  document.getElementsByClassName("notification-card");
console.log(allNotificationCard);

function markAllAsRead() {
  let allMarkedAsRead;
  for (i = 0; i < 7; i++) {
    allNotificationCard[i].style.backgroundColor = "white";
  }
  allMarkedAsRead = true;
  if (markAllAsRead) {
    document.getElementById("#notification-number").innerHTML = 0;
  }
}

function markSelectedAsRead() {
  allNotificationCard.style.backgroundColor = "white";
}

function anotherFunction() {
  var allRead = false;
  if (allNotificationCard[i].style.backgroundColor === "white") {
    allRead = true;
  }
  console.log(allRead);
}

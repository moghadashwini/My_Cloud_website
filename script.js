function showMessage() {
  const now = new Date();
  const hours = now.getHours();
  let greeting;

  if (hours < 12) {
    greeting = "Good morning";
  } else if (hours < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  const message = `${greeting} Ashwini! 🌟\nYour site is live on the cloud 🚀\nHosted proudly using GitHub Pages ☁️\nKeep building, keep shining! ✨`;

  alert(message);
}
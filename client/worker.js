console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Notified by Aravinth!",
    icon: "https://logos.textgiraffe.com/logos/logo-name/Aravinth-designstyle-popstar-m.png"
  });
});

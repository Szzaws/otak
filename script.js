const video = document.getElementById("loadingVideo");

// بعد انتهاء الفيديو
video.onended = () => {
  window.location.href = "home.html"; // غيرها لصفحتك
};

// احتياط: لو ما اشتغل الفيديو
setTimeout(() => {
  window.location.href = "home.html";
}, 6000);

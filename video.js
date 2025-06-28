// Prevent video player from overlapping other content
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById('main-video');
  const wrapper = video?.parentElement;
  if (!video || !wrapper) return;

  function adjustVideo() {
    // Get the available width for the video section
    const viewportWidth = window.innerWidth;
    // If there isn't enough space for 1440px, scale down the video
    if (viewportWidth < 1440) {
      video.style.width = "100vw";
    } else {
      video.style.width = "1440px";
    }
  }

  adjustVideo();
  window.addEventListener('resize', adjustVideo);
});
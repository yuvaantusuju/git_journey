// Wait for the entire webpage (images, scripts, styles) to fully load
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');

  // Optional: Set a minimum display time (e.g., 2 seconds) so the user sees the animation
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
  }, 2000); 
});
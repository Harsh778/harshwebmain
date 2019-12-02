const modeBtn= document
  .querySelector("#light-dark-mode-selector")
  .addEventListener("click", function() {
    const everything = document.querySelectorAll('*')
    const projectTiles = document.querySelectorAll('.project-tile-overlay');
    everything.forEach((item) => {
      item.classList.toggle('dark');//important
    });
    projectTiles.forEach((item) => {
      item.classList.remove('dark');
    })
 });
    



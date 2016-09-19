$(document).ready(function() {

  //to transition to end scene
  function activateScene2() {
    document.getElementById('scene1').setAttribute('visible', 'false');
    document.getElementById('scene2').setAttribute('visible', 'true');
  }

  setTimeout(activateScene2, 15000);

  function activateScene3() {
    document.getElementById('scene2').setAttribute('visible', 'false');
    document.getElementById('scene3').setAttribute('visible', 'true');
  }

  setTimeout(activateScene3, 30000);

  function activateScene4() {
    document.getElementById('scene3').setAttribute('visible', 'false');
    document.getElementById('scene4').setAttribute('visible', 'true');
  }

  setTimeout(activateScene4, 45000);

});

console.log("initated");
const container = document.createElement('div');
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const smallerOfWidthOrHeight = windowWidth > windowHeight ? windowHeight - 50 : windowWidth - 50;

container.style.cssText = 'color: white ; background-color : black ; width: ' + smallerOfWidthOrHeight 
  + 'px ; height: '+ smallerOfWidthOrHeight + 'px;';
container.innerHTML = '<p>Width: '+windowWidth+' Height: '+windowHeight+'</p>';
document.body.appendChild(container);
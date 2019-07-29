let currentColumnCount = 20;
let currentMode = 1;

function setupGrid(rowColumnCount){
  let gridDiv = document.getElementById('grid');
  if(gridDiv == null){
    gridDiv = document.createElement('div');
    document.getElementById('header').insertAdjacentElement('afterEnd',gridDiv, document.getElementById('header'));
  } else{
    resetGrid();
  }

  gridDiv.setAttribute("id", "grid");
  gridDiv.style.cssText = "--sideSize:"+rowColumnCount+";";

  
  let currentNumDivs = gridDiv.getElementsByTagName('*').length;
  let divsToMake = rowColumnCount*rowColumnCount;
  if(currentNumDivs < divsToMake){
    for(i = currentNumDivs ; i < divsToMake ; i++){
      let newBlockDiv = document.createElement('div');
      newBlockDiv.setAttribute("id", "block");
      newBlockDiv.style = 'background-color: rgb(255,255,255);';
      newBlockDiv.addEventListener('mouseover', mouseOver);
      gridDiv.appendChild(newBlockDiv);
    }
  }else{
    gridDiv.remove();
    setupGrid(rowColumnCount);
  }

  
}

function mouseOver(){
  if(currentMode === 1){
    this.style = 'background-color: rgb(0,0,0);'
  } else if(currentMode === 2) {
    this.style = 'background-color: rgb('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+');'
  }else if(currentMode === 3){
    this.style = getDarkerColor(this.style.cssText);
  }

  function getDarkerColor(currentRGB){
    let strRGB = String(currentRGB).split('rgb(')[1];
    strRGB = strRGB.split(',');
    let redValue = parseInt(strRGB[0])-25;
    let greenValue = parseInt(strRGB[1])-25;
    let blueValue = parseInt(strRGB[2])-25;
    return 'background-color: rgb('+redValue+','+greenValue+','+blueValue+');';
  }
}

function changeMode(mode){
  currentMode = mode;
}

function changeGridSize(){
  let input;
  while(isNaN(input)){
    input = prompt("Please enter new grid size:");
  }
  currentColumnCount=input;
  setupGrid(currentColumnCount);
}

function resetGrid(){
  let gridDiv = document.getElementById('grid');
  let gridChildren = gridDiv.getElementsByTagName('*');

  for( i = 0 ; i < gridChildren.length ; i++){
    gridChildren[i].style = 'background-color: rgb(255,255,255);';
  }


}

setupGrid(currentColumnCount);


function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(selector){
  return document.getElementById("nested").getElementsByClassName("target")[0];
}

function deepestChild(){
  return document.querySelectorAll('#grand-node')[0].children[0].children[0].children[0].children[0]
}

function increaseRankBy(n){
  var wee = document.querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < wee.length; i++){
	  wee[i].innerHTML = parseInt(wee[i].innerHTML) + n
  }
}

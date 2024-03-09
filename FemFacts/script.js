linebreak = document.createElement("br");
const manWage = document.getElementById("manWage");
//code for responsive bar graph 
document.getElementById("wageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  if(manWage.innerHTML === ""){
    
  } else {
    manWage.innerHTML = '';
  }

  var wageAmount = document.getElementById("wageAmount").value; 

  //don't allow form submission unless box has something 
  //fix multiple appending issue 
  const result = document.createElement("p");
  const node = document.createTextNode("A man in the same role would be making $" + (wageAmount * 1.16).toFixed(2) + ".");
  result.appendChild(node);

  manWage.appendChild(result);
});

//emoji stats
const iconSVG = document.getElementById('personIcon');
const gridContainer = document.getElementById('grid-container');
const companyBlurb = document.getElementById('companyBlurb');

const amazonButton = document.getElementById("amazonButton"); 
amazonButton.addEventListener('click', function () {
  updateIcons(44,56, "Amazon"); 
});

const facebookButton = document.getElementById("facebookButton"); 
facebookButton.addEventListener('click', function () {
  updateIcons(37,63, "Facebook"); 
});

const appleButton = document.getElementById("appleButton"); 
appleButton.addEventListener('click', function () {
  updateIcons(34,66, "Apple"); 
});

const googleButton = document.getElementById("googleButton"); 
googleButton.addEventListener('click', function () {
  updateIcons(33,67,"Google"); 
});

const microsoftButton = document.getElementById("microsoftButton"); 
microsoftButton.addEventListener('click', function () {
  updateIcons(33,67,"Microsoft"); 
});

function updateIcons(wStat, mStat, company) {
  if(gridContainer.innerHTML === ""){
  } else {
    gridContainer.innerHTML = '';
    companyBlurb.innerHTML = ''; 
  }
  for (let i = 0; i < wStat; i++) {
    const svg = iconSVG.cloneNode(true);
    svg.style.display = '';
    svg.style.fill = "#ea9fd2";
    gridContainer.appendChild(svg);
  }

  for (let i = 0; i < mStat; i++) {
    const svg = iconSVG.cloneNode(true);
    svg.style.display = '';
    svg.style.fill = "#507fa9";
    gridContainer.appendChild(svg);
  }

  gridContainer.appendChild(linebreak); 
  
  var statsBlurb = document.createTextNode(company+"'s staff is made up of " + wStat + "% women and " + mStat + "% men.");
  companyBlurb.appendChild(statsBlurb); 
}
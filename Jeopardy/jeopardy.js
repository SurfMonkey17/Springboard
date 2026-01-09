
const API_URL = "https://rithm-jeopardy.herokuapp.com/api/"; // The URL of the API.
const NUMBER_OF_CATEGORIES = 6; // The number of categories you will be fetching. You can change this number.
const NUMBER_OF_CLUES_PER_CATEGORY = 5; // The number of clues you will be displaying per category. You can change this number.

let categories = []; // The categories with clues fetched from the API.
let activeClue = null; // Currently selected clue data.
let activeClueMode = 0; // Controls the flow of #active-clue element while selecting a clue, displaying the question of selected clue, and displaying the answer to the question.
let isPlayButtonClickable = true; // Only clickable when the game haven't started yet or ended. Prevents the button to be clicked during the game.

$("#play").on("click", handleClickOfPlay);

//Manages the behavior of the play button (start or restart) when clicked. 
function handleClickOfPlay ()
{
  if (!isPlayButtonClickable) return;

  isPlayButtonClickable = false;
  setupTheGame();
}

//setupthe game if the play button is clickable. 
async function setupTheGame ()
{
  //show spinner while setting up the game. 
  $("#spinner").removeClass("disabled"); 

  //reset the DOM to clear categories and clues and update play button. 
  $("#categories").empty();
  $("#clues").empty();
  $("#active-clue").html("");
  $("#play").text("Loading...");
  
  //fetch game data
  const categoryIds = await getCategoryIds();

  categories = await Promise.all(
    categoryIds.map(id => getCategoryData(id))
  );

  //fill the table
  fillTable(categories);

  $("#spinner").addClass("disabled");
  $("#play").text("Restart the Game!");
  isPlayButtonClickable = true;
}

async function getCategoryIds ()
{
  const ids = []; //set after fetching

  //fetch NUMBER_OF_CATEGORIES amount of categories
  const response=await axios.get(`${API_URL}categories?count=100`);
  const categoriesList = response.data;
  const validCategories = categoriesList.filter(cat => cat.clues_count >= NUMBER_OF_CLUES_PER_CATEGORY);
   
  //get as many category IDs as in the NUMBER_OF_CATEGORIES constant.
  while (ids.length < NUMBER_OF_CATEGORIES){
    const randomIndex = Math.floor(Math.random() * validCategories.length);
    const id = validCategories[randomIndex].id;
    if (!ids.includes(id)) {
      ids.push(id);
    }
  }

  return ids;
  
}


async function getCategoryData (categoryId)
{

  //get category data
  let response = await axios.get(`${API_URL}category?id=${categoryId}`);
  const category = response.data; 

  const categoryWithClues = {
    id: categoryId,
    title: category.title, //set after fetching
    clues: [] //set after fetching
  };

  //filter clues that have empty question or answer. 
  const usableClues = category.clues.filter(clue => clue.question && clue.answer);

  
  categoryWithClues.clues = usableClues.slice(0, NUMBER_OF_CLUES_PER_CATEGORY).map((clue, index) => ({
    id: clue.id, 
    value: clue.value ?? (index + 1) * 200, 
    question: clue.question, 
    answer: clue.answer
  })); 

  return categoryWithClues;
}

//fill the HTML table using category data

function fillTable (categories) {
  //clear table from existing clues
  $("#categories").empty();
  $("#clues").empty();

  for (const category of categories) {
    //header
    const $th = $("<th>").text(category.title);
      $("#categories").append($th);

    const $td = $("<td>");
      
    for (const clue of category.clues) {
      const $clueEl = $("<div>")
      .addClass("clue")
      .attr("id", `cat-${category.id}-clue-${clue.id}`)
      .text(`$${clue.value}`); // display placeholder
        
    $td.append($clueEl);

    }

  $("#clues").append($td);
  }  
}

$("table").on("click", ".clue", handleClickOfClue);

//manage behavior when a clue is clicked. Find and remove clue from categories and mark clue as viewed. 

function handleClickOfClue (event)
{
  if (activeClueMode != 0) return;

  const clickedId = event.target.id;
  const parts = clickedId.split("-");
  const categoryId = Number(parts[1]);
  const clueId = Number(parts[3]);

  const category = categories.find(cat => cat.id === categoryId); 
  const clue = category.clues.find(c => c.id === clueId);

  activeClue = clue;

  category.clues = category.clues.filter(c => c.id !== clueId); //allows clues to only be chosen once. 

  if (category.clues.length === 0) {
    categories = categories.filter(cat => cat.id !== categoryId);
  }

  $(event.target).addClass("viewed");
  $("#active-clue").html(activeClue.question);

  activeClueMode = 1;
}

$("#active-clue").on("click", handleClickOfActiveClue);

function handleClickOfActiveClue (event)
{
  if (activeClueMode === 0) return; 
  if (!activeClue) return; 

  //display answer if displaying a question. 
  if (activeClueMode === 1)
  {
    activeClueMode = 2;
    $("#active-clue").html(activeClue.answer);
  }

  //clear if displaying an answer. 
  else if (activeClueMode === 2)
  {
    activeClueMode = 0;
    activeClue = null; 
    $("#active-clue").html(null);

    if (categories.length === 0)
    {
      isPlayButtonClickable = true;
      $("#play").text("Restart the Game!");
      $("#active-clue").html("The End!");
    }
  }
}



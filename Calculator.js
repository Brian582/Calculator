const expression = document.getElementById("displayBar");//gets element from display bar
let evaluated = false; //checks if equals button was pressed

//adds input from buttons to display bar
function addToDisplayBar(input)
{
    //resets display bar when equals button is pressed
    if(evaluated == true)
    {
        expression.value = ""; //clears the calculator before adding elements to the display bar
        expression.value += input;
        evaluated = false; //resets variable to know that equals button wasn't pressed again yet
    }

    else
    expression.value += input;
}

//evaluates the expression from calculator
function Calculate()
{
    try
    {
        expression.value = eval(expression.value);
        evaluated = true;//means that equals button was pressed
    }

    catch(error)
    {
        expression.value = "ERROR";
        evaluated = true;
    }
}

//clears the expression in the calculator
function clearDisplayBar()
{
    expression.value = "";
}
$("form").on("submit", processForm);

//global variables
let weight = 0;
let height = 0;
let BMI = 0;
let person;

function processForm(event) {
    event.preventDefault();
    clearPrevious();
    getVariables();
    calcBMI(weight, height);
    categoryBMI(BMI);
    movePerson(weight, height);
}

function clearPrevious() {
    //clears person from img if one already exists
    $("img.person").remove();
}

function getVariables() {
    //get and return weight and height variables from user input
    weight = Number( $("input#weight").val() );
    height = Number( $("input#height").val() );
    return weight, height;
}

function calcBMI(weight, height) {
    //calculate BMI using user input
    BMI = ((weight / (height ** 2) ) * 703).toFixed(1);
    return Number(BMI);
}

function categoryBMI(BMI) {
    let catBMI;

    //determine BMI Category using calculated BMI
    if(BMI<16.0) {
        catBMI = "Underweight (Severe Thinness)";
    } else if (BMI<17.0) {
        catBMI = "Underweight (Moderate Thinness)";
    } else if (BMI<18.5) {
        catBMI = "Underweight (Mild Thinness";
    } else if (BMI<25.0) {
        catBMI = "Normal Range"
    } else if (BMI<30.0) {
        catBMI = "Overweight (Pre-Obese)";
    } else if (BMI<35.0) {
        catBMI = "Obese (Class I)";
    } else if (BMI<40.0) {
        catBMI = "Obese (Class II)";
    } else {
        catBMI = "Obese (Class III)";
    }

    //print BMI and category
    $("p#outputBMI").text(`BMI: ${BMI}`);
    $("p#outputCat").text(`Category: ${catBMI}`);
}

function movePerson(weight, height) {
    //create an image <img>
    person = $("<img class='person' src='person-icon.png' alt='person'>");

    //set the x,y position in the figure region
    let pixelsPerInch = -385 / 23;
    let pixelsPerPound = 735 / 195;

    let top = (height - 79) * pixelsPerInch + 12;
    let left = (weight - 80) * pixelsPerPound + 23;

    //use .css to set top/left on the <img>
    person.css("top", top);
    person.css("left", left);

    //append <img> to the chart
    $("span#chart").append(person);
}
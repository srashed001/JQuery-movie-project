
//created named handler functions for better readability 

function appendFunction(evt){
    evt.preventDefault();

    const titleVal = $('#title').val();
    const ratingVal = $('#rating').val();

    //check to ensure correct inputs are made by user
    if( titleVal.length < 2 || !titleVal){
        alert('Your movie should contain more than 2 characters');
        return;
    };

    if(ratingVal < 0 || ratingVal > 10 || !ratingVal){
        alert("please give rating between 0 - 10");
        return;
    }


    //setting attributes for sorting purposes
    const newDiv = $('<div></div>').attr(
        {   class: 'movie',
            movie: titleVal,
            rating: ratingVal,
        }
    );

    $('<p></p>').text('Movie: ' + titleVal).appendTo(newDiv)
    $('<p></p>').text('Rating: ' + ratingVal).appendTo(newDiv)

    
    newDiv.appendTo('#container').append($('<button id="remove">Remove</button>'))

    $('form').trigger('reset')
}

//main event handler function // depending on which button is pressed 
function removeAndSort(evt){
    if(evt.target.id === 'remove'){
        evt.target.parentElement.remove();
    };
    if(evt.target.id === 'movie-sort'){
        titleSorter();
    };
    if(evt.target.id === 'rating-sort'){
        ratingSorter();
    }
}

function titleSorter(){
    $('.movie').sort(function(a, b) {
        if ($(a).attr('movie') < $(b).attr('movie')) {
          return -1;
        } else {
          return 1;
        }
      }).appendTo('#container')
}

function ratingSorter(){
    $('.movie').sort(function(a, b) {
        if ($(a).attr('rating') < $(b).attr('rating')) {
          return -1;
        } else {
          return 1;
        }
      }).appendTo('#container')
};

$('form').submit(appendFunction)
$('#container').click(removeAndSort)


$(document).ready(function() {
    "use strict";

    var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
        }
    ];
    // my solution
    function renderPeople(people) {
        var html = '';
        for(var i = 0; i < people.length; i++) {
            html += '<li>' + (people[i].name) + '</li>';
        }
        return '<ul>' + html + '</ul>';
    }

    // solution of teacher (Justin)
    // function renderPeople(people) {
    //     var totalHtml = '<ul>';
    //
    //     people.forEach(function(person) {
    //         totalHtml += '<li>';
    //         totalHtml += person[i].name;
    //         totalHtml += '</li>';
    //     });
    //     totalHtml += '</ul>';
    //     return totalHtml
    //
    // }



    $('#add-names-btn').click(function() {
            $('#names-list').html(renderPeople(people));
        });


    <!-- - add functionality to the button so that when it is clicked, an unordered list of names from the people array (included below) is added to the inner HTML of the div#names-list. For an extra bonus, make the font color of each list item map to that person's favColor value.-->


});
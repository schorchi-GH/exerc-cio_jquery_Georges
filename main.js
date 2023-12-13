$(document).ready(function() {
    $('#task-form').on('submit', function(e) {
        e.preventDefault();
        const task = $('#new-task').val();
        if (task) {
            $('#task-list').append(`<li>${task}</li>`);
            $('#new-task').val('');
        }
    });

    $('#task-list').on('click', 'li', function() {
        if (!$(this).hasClass('completed')) {
            $(this).addClass('completed');
        }
    });
});

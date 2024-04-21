document.querySelector('.volunteer-button').addEventListener('click', function() {
    var form = document.getElementById('volunteerForm');
    if(form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});

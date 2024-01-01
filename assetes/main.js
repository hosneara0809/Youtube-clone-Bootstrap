document.querySelector('.menu-open-btn').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.add('open');
});

document.querySelector('.menu-close-btn').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.remove('open');
});

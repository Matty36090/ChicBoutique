document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


window.addEventListener('scroll', () => {
    var video = document.getElementById('bannerVideo');
    var fraction = 0.8; // Play when 80% visible
    var rect = video.getBoundingClientRect();
    var videoVisible = (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) * fraction
    );

    if (videoVisible) {
        video.play();
    } else {
        video.pause();
    }
});



document.getElementById('pauseButton').addEventListener('click', function() {
    var video = document.getElementById('bannerVideo');
    video.pause();
});

document.getElementById('playButton').addEventListener('click', function() {
    var video = document.getElementById('bannerVideo');
    video.muted = false;
    video.play();
});




document.querySelector('.hamburger').addEventListener('click', function() {
    const links = document.querySelector('.nav-links');
    const isExpanded = links.style.display === 'block';
    links.style.display = isExpanded ? 'none' : 'block';
    this.setAttribute('aria-expanded', !isExpanded);
});



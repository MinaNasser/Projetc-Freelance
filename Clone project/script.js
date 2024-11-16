// Sample movie data
const movies = [
    { title: 'Stranger Things', image: 'https://via.placeholder.com/300x450', description: 'A nostalgic sci-fi series' },
    { title: 'The Crown', image: 'https://via.placeholder.com/300x450', description: 'A royal drama series' },
    { title: 'Bridgerton', image: 'https://via.placeholder.com/300x450', description: 'A period romance drama' },
    { title: 'Money Heist', image: 'https://via.placeholder.com/300x450', description: 'A thrilling heist series' },
    { title: 'The Witcher', image: 'https://via.placeholder.com/300x450', description: 'A fantasy adventure series' },
    { title: 'Squid Game', image: 'https://via.placeholder.com/300x450', description: 'A intense survival drama' },
    { title: 'Dark', image: 'https://via.placeholder.com/300x450', description: 'A mind-bending sci-fi thriller' },
    { title: 'Narcos', image: 'https://via.placeholder.com/300x450', description: 'A gritty crime drama series' },
];

// Function to create movie cards
function createMovieCards(containerId) {
    const container = document.getElementById(containerId);
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-description">${movie.description}</p>
            </div>
        `;
        container.appendChild(movieCard);
    });
}

// Create movie cards for each section
window.addEventListener('DOMContentLoaded', (event) => {
    createMovieCards('popular-movies');
    createMovieCards('trending-movies');
    createMovieCards('netflix-originals');
});

// Header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

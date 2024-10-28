// import the Media class:
const Media = require('./Media')

// create your Movie class:

class Movie extends Media {
    constructor(title, year, genre, director, duration, rating) {
        super(title, year, genre)
        this.director = director
        this.duration = duration
        this.rating = rating
    }

    summary() {
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`
    }

    static longestMovie(movie) {
        let longest = movie[0]

        for (let i = 0; i < movie.length; i++) {
            if (movie[i].duration > longest.duration) {
                longest = movie[i]
            }
        }
        return longest
    }
}

// don't change below
module.exports = Movie;
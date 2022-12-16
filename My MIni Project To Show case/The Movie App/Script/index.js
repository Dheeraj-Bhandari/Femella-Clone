//   Search Movie

document.getElementById('searchbtn').addEventListener('click', searchMovie);

function searchMovie() {
    event.preventDefault();
    var searchinput = document.getElementById('searchinput').value;
    console.log(searchinput)
    var Movie_search_Url = 'https://api.themoviedb.org/3/search/movie?api_key=9e997fe8c2efd000188bc88e3dda6d23&language=en-US&query=' + searchinput + '&page=1&include_adult=false'
    console.log(Movie_search_Url)
    fecthUrl()
    async function fecthUrl() {
        const data = await (getData(Movie_search_Url));
        console.log(data);

    }


}




















//trending Movie //Tv // Person  filter- day, week

//    var url = 'https://api.themoviedb.org/3/movie/popular?api_key=9e997fe8c2efd000188bc88e3dda6d23&language=en-US&page=1';

// trailer url  parameter movie id
// https://api.themoviedb.org/3/movie/22/videos?api_key=9e997fe8c2efd000188bc88e3dda6d23&language=en-US

// var url = 'https://api.themoviedb.org/3/trending/tv/day?api_key=9e997fe8c2efd000188bc88e3dda6d23'
var posterpath = 'https://image.tmdb.org/t/p/w500'
async function getData(url) {
    try {
        const resp = await fetch(url);
        const data = resp.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}



//    Treding mOvie

async function TrendignMovie(url, insert) {
    const res = await(getData(url));
    console.log(res);
    appendtoUi(res, insert);
    
}

const Trendurl = 'https://api.themoviedb.org/4/list/1?page=1&api_key=9e997fe8c2efd000188bc88e3dda6d23';
const tredingMovie = TrendignMovie(Trendurl, 'TrendignMovie');


// Top rated Movie
async function TopRatesMovie(url, insert) {
    const res = await(getData(url));
    console.log(res);
    appendtoUi(res, insert);
    
}
const topratedurl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=9e997fe8c2efd000188bc88e3dda6d23&language=en-US&page=1';
const toprated = TopRatesMovie(topratedurl,'toprated');





function appendtoUi(data, section) {
    document.getElementById(section).innerHTML = null;

    for (var i = 0; i < data.results.length; i++) {
        imgurl = posterpath + data.results[i].poster_path;
        //    console.log(imgurl);
        const div = document.createElement('div');
        div.className = 'moviedata';
        const img = document.createElement('img');
        img.src = imgurl;
        const title = document.createElement('h6');
        title.innerText = data.results[i].title;

        const date = document.createElement('p');
        date.innerText = data.results[i].release_date;

        const span = document.createElement('span');
        span.innerText='Rated '+data.results[i].vote_average;
        const star =  document.createElement('i');
        star.className = 'fa-regular fa-star';
        span.append(star);

        div.append(img, title, date, span);
        document.getElementById(section).append(div);
    }

}
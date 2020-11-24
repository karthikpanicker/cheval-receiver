class OttStore {
    rails;
    selectedMovie;
    banner;

    constructor() {
        this.setRails();
        this.setBanner();

    }

    setBanner() {
        this.banner = {
            id: 100,
                title: 'Black Panther',
            year:'2018',
            type:'movie',
            grade:'12A',
            price:'£ 12.00',
            genre:' Action, Adventure, Sci-Fi ',
            runningTime:'2h 14 min ',
            description:'T\'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country\'s past.',
            poster: 'https://resizing.flixster.com/KpYdjVLMSgEvmlTI4maewfLcUxQ=/206x305/v1.bTsxMTE2NjczNDtqOzE4MDM5OzEyMDA7ODAwOzEyMDA',
            preview: {
            poster:'https://hdqwalls.com/download/black-panther-4k-movie-poster-vi-1440x900.jpg',
                video:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
                content_type: 'video/mp4'
        }

        }
    }

    setRails() {
        this.rails = [
            {
                title: 'Live TV',
                movies: [
                    {
                        id: 1003,
                        type: 'TV',
                        poster: 'https://yt3.ggpht.com/a/AGF-l78RUbkAXvcFCTy446QaRPVfTpJhPokc8d9Rug=s900-mo-c-c0xffffffff-rj-k-no',
                        preview: {
                            poster: 'https://i.gifer.com/V8kX.gif',
                            video: 'https://stream.skynewsarabia.com/ott/ott.m3u8',
                            content_type: 'application/x-mpegURL'
                        }

                    },
                    {
                        id: 1001,
                        type: 'TV',
                        poster: '//e00-elmundo.uecdn.es/television/programacion-tv/img/v2/programas/b6/238518.png',
                        preview: {
                            poster: 'https://i.gifer.com/V8kX.gif',
                            video: 'https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8',
                            content_type: 'application/x-mpegURL'
                        }

                    }],},
            {
                title: 'Trending Movies',
                movies: [{
                    id: 1,
                    title: 'V for vendetta',
                    year:'2005',
                    grade:'15',
                    price:'£ 3.00',
                    pricePoints: '300',
                    genre:'Thriller, Action',
                    type:'movie',
                    runningTime:'2h 13 min ',
                    isPurchased:false,
                    description:'In a future British tyranny, a shadowy freedom fighter, known only by the alias of "V", plots to overthrow it with the help of a young woman.',
                    poster: 'https://resizing.flixster.com/KpYdjVLMSgEvmlTI4maewfLcUxQ=/206x305/v1.bTsxMTE2NjczNDtqOzE4MDM5OzEyMDA7ODAwOzEyMDA',
                    preview: {
                        poster:'http://images2.fanpop.com/image/photos/13500000/V-For-Vendetta-v-for-vendetta-13512137-500-313.jpg',
                        video:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                        content_type: 'video/mp4'
                    }

                },
                    {
                        id:2,
                        title:'The Dark Knight Rises',
                        year:'2012',
                        genre:'Thriller, Action',
                        grade:'12A',
                        price:'£ 2.00',
                        pricePoints: '200',
                        type:'movie',
                        runningTime:'2h 44m',
                        isPurchased:false,
                        description:'Eight years after the Joker\'s reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City, now on the edge of total annihilation, from the brutal guerrilla terrorist Bane.',
                        poster:'https://resizing.flixster.com/sl19Jbu6O8LTkLcRqoAAQj4rAR0=/206x305/v1.bTsxMTE2NzgzNTtqOzE4MDM5OzEyMDA7ODAwOzEyMDA',
                        preview: {
                            poster:'https://c1.staticflickr.com/8/7036/6966423683_a45d060a59_b.jpg',
                            video:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
                            content_type: 'video/mp4'
                        }
                    },
                    {
                        id:3,
                        title:'Into the Wild',
                        year:'2007',
                        grade:'15',
                        price:'£ 1.00',
                        pricePoints: '500',
                        type:'movie',
                        isPurchased:false,
                        genre:'Adventure, Biography, Drama',
                        runningTime:'2h 28m',
                        description:'After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.',
                        poster:'https://resizing.flixster.com/UfD8UElf5B_ve3CQvoK1zBM7PIY=/206x305/v1.bTsxMTYyMjIxNztqOzE4MDQ0OzEyMDA7NzkyOzEwNTY',
                        preview: {
                            poster:'http://images.fanpop.com/images/image_uploads/Into-the-Wild-into-the-wild-415189_500_375.jpg',
                            video:'http://techslides.com/demos/sample-videos/small.webm',
                            content_type: 'video/webm'
                        }
                    },
                    {
                        id: 4,
                        title:'The Wolf of Wall Street',
                        year:'2013',
                        grade:'18',
                        price:'£ 2.00',
                        pricePoints: '300',
                        type:'movie',
                        genre:'Biography, Comedy, Crime',
                        runningTime:'3h',
                        description:'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
                        poster:'https://resizing.flixster.com/WzKMwK41-hiwSI3_5g-IxyKciPQ=/206x305/v1.bTsxMTE3Njk3NjtqOzE3OTk0OzEyMDA7ODAwOzEyMDA',
                        preview :{
                            poster:'http://dl3.webmfiles.org/big-buck-bunny_trailer.webm',
                            video:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
                            content_type: 'video/mp4'
                        }
                    },
                    {
                        id: 5,
                        title:'Inception',
                        year:'2010',
                        grade:'12A',
                        price:'£ 4.00',
                        type:'movie',
                        pricePoints: '400',
                        genre:'Action, Adventure, Sci-Fi ',
                        runningTime:'2h 28m',
                        description:'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
                        poster:'https://resizing.flixster.com/mOo4ekbl8BQcyAp3A28RpGc0sXQ=/206x305/v1.bTsxMTE2NjcyNTtqOzE4MDM5OzEyMDA7ODAwOzEyMDA',
                        preview:{
                            poster:'https://wallpapercave.com/wp/msi4htu.jpg',
                            video:' http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
                            content_type: 'video/mp4'

                        }
                    },
                    {
                        id: 6,
                        title:'The Good, the Bad and the Ugly',
                        year:'1966',
                        grade:'',
                        genre:' Western',
                        type:'movie',
                        price:'£ 6.00',
                        pricePoints: '600',
                        runningTime:'2h 28min',
                        description:'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.',
                        poster:'https://resizing.flixster.com/Jqy_440kLZVpvhCbW1RlRxhNzGg=/206x305/v1.bTsxMTE3ODAyNztqOzE3OTk0OzEyMDA7ODAwOzEyMDA',
                        preview: {
                            poster:'https://wallpapercave.com/wp/wp2273071.jpg',
                            video:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
                            content_type: 'video/mp4'
                        }
                    }
                ]

            },
            {
                title: 'Action Movies',
                movies: [{
                    id: 7,
                    title: 'Die Hard',
                    year:'1988',
                    grade:'18',
                    type:'movie',
                    price:'£ 2.00',
                    pricePoints: '300',
                    genre:'Action, Thriller',
                    runningTime:'2h 12 min ',
                    description:'An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.',
                    poster: 'https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
                    preview: {
                        poster:'http://yesofcorsa.com/wp-content/uploads/2018/05/Die-Hard-Best-Wallpaper-480x270.jpg',
                        video:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
                        content_type: 'video/mp4'
                    }

                },
                    {
                        id:8,
                        title:'Kill Bill',
                        year:'2013',
                        genre:'Action, Crime, Thriller',
                        grade:'18',
                        price:'£ 3.00',
                        pricePoints: '300',
                        type:'movie',
                        runningTime:'1h 51m',
                        description:'After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.',
                        poster:'https://imgc.allpostersimages.com/img/print/posters/kill-bill-vol-1-danish-style_a-G-8032175-0.jpg',
                        preview: {
                            poster:'http://images.fanpop.com/images/image_uploads/Wallpaper-kill-bill-557598_500_375.jpg',
                            video:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
                            content_type: 'video/mp4'
                        }
                    },
                    {
                        id:9,
                        title:'John Wick',
                        year:'2014',
                        grade:'15',
                        price:'£ 2.00',
                        pricePoints: '200',
                        type:'movie',
                        genre:'Action, Crime, Thriller',
                        runningTime:'2h 28m',
                        description:'An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.',
                        poster:'https://images-na.ssl-images-amazon.com/images/I/5180Jb6iREL.jpg',
                        preview: {
                            poster:'https://images3.alphacoders.com/801/801817.jpg',
                            video:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                            content_type: 'video/mp4'
                        }
                    },
                    {
                        id: 10,
                        title:'Casino Roayale',
                        year:'2013',
                        grade:'12 A',
                        price:'£ 8.00',
                        type:'movie',
                        pricePoints: '800',
                        genre:'Action, Adventure, Thriller ',
                        runningTime:'2h 24m',
                        description:'Armed with a license to kill, Secret Agent James Bond sets out on his first mission as 007, and must defeat a private banker to terrorists in a high stakes game of poker at Casino Royale, Montenegro, but things are not what they seem.',
                        poster:'https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg',
                        preview :{
                            poster:'https://stmed.net/sites/default/files/casino-royale-wallpapers-29448-3378541.jpg',
                            video:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
                            content_type: 'video/mp4'
                        }
                    },
                    {
                        id: 11,
                        title:'Mad Max: Fury Road',
                        year:'2015',
                        grade:'15',
                        price:'£ 1.00',
                        pricePoints: '100',
                        type:'movie',
                        genre:'Action, Adventure, Thriller ',
                        runningTime:'2h',
                        description:'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.',
                        poster:'https://images-na.ssl-images-amazon.com/images/I/A1ZkmRYl9iL._SY445_.jpg',
                        preview:{
                            poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4LaQ5S8lbYWZq77TuuKNoZI118TB2umVQRt82biyPF8RcbifR',
                            video:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
                            content_type: 'video/mp4'
                        }
                    },
                    {
                        id: 12,
                        title:'The Bourne Ultimatum',
                        year:'2007',
                        grade:'12A',
                        price:'£ 2.00',
                        pricePoints: '200',
                        type: 'movie',
                        genre:' Action, Mystery, Thriller',
                        runningTime:'1h 55min',
                        description:'Jason Bourne dodges a ruthless C.I.A. official and his Agents from a new assassination program while searching for the origins of his life as a trained killer.',
                        poster:'https://images-na.ssl-images-amazon.com/images/I/51EBmpDHaBL._SY445_.jpg',
                        preview: {
                            poster:'https://images5.alphacoders.com/338/338853.jpg',
                            video:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
                            content_type: 'video/mp4'
                        }
                    }       ]

            }
        ]
    }

    selectMovie(movie) {
        this.selectedMovie = movie;
    }

    resetSelectedMovie() {
        this.selectedMovie = null;
    }

}

const ottStore = new OttStore();
export default ottStore;

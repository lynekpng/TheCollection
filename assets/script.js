// Array of 10 cards with each their informations.
const collection = [
    {   title: "Take My Hands", 
        album: "Take My Hands",
        artist: "LAUWEND",
        duration: "2m48s",
        genre: "Hypertechno",
        releaseYear: 2024,
        YoutubeLink: "https://youtu.be/MEKmZz28bWk?si=GyRSEp-2j7ygQuVj",
         Image: "/assets/artworks-2ofkIHR920n9cymr-NBTyyg-t500x500.jpg"
    }, 
    {   title: "Kompany",
        album: "Kompany",
        artist: ["monte booker", " Smino", " Phoelix"],
        duration: "3m30s",
        genre: ["R&B", " Hip Hop"],
        releaseYear: 2017,
        YoutubeLink: "https://youtu.be/01qMS28piNk?si=JfnpL75Qtx57cDy9",
           Image : "/assets/R-15663490-1595491116-3691.jpg"
    },
    {   title: "No L's",
        album: "Luv 4 Rent",
        artist: "Smino",
        duration: "2m55s",
        genre: "R&B",
        releaseYear: 2022,
        YoutubeLink: "https://youtu.be/DlgDd_dBQV4?si=O55Qa0qi8PFgseJQ",
          Image : "/assets/artworks-G2XNyGOVYwgI-0-t500x500.jpg"
    },
    {   title: "Little Things x Gypsy Woman - L BEATS MASHUP",
        album: "Little Things x Gypsy Woman - L BEATS MASHUP",
        artist: "Jorja Smith",
        duration: "2m11s",
        genre: "R&B",
        releaseYear: 2023,
        YoutubeLink: "https://youtu.be/b5v2o6Mgfg8?si=HpWZgUAYiORdpAKf",
      Image : "assets/artworks-dn2Z42Qzo9YfLmtq-4m6KqA-t500x500.jpg"
    },
    {   title: "On My Mind (Jorja Smith x Preditah)",
        album: "On My Mind (Jorja Smith x Preditah)",
        artist: ["Jorja Smith", " Preditah"],
        duration: "3m02s",
        genre: ["Electro", " R&B"],
        releaseYear: 2017,
        YoutubeLink: "https://youtu.be/PA5uuBCtZ5k?si=DvuK-9AnOGlLzntd",
          Image : "assets/ab67616d0000b27390903f4da3ed84c57701ca13.jpg"
    },
    {   title: "YOU'RE THE ONE",
        album: "99.9%",
        artist: ["KAYTRANADA"," Syd"],
        duration: "3m48s",
        genre: ["R&B", " Pop", " Hip Hop"],
        releaseYear: 2016,
        YoutubeLink: "https://youtu.be/rKlA5tRu6f0?si=w3esy9XOazl_1wj6",
          Image : "assets/ab67616d0000b273b2f893f4215f2930e7320355.jpg"
    },
    {   title: "Who Told You (feat. Drake)",
        album: "Beautiful And Brutal Yard",
        artist: ["J Hus", " Drake"],
        duration: "3m28s",
        genre: ["Afro", " Hip Hop", " Pop", " Electro"],
        releaseYear: 2023,
        YoutubeLink: "https://youtu.be/jKpkJ01HbB4?si=hB8Qm6enNwcgpmzw",
          Image : "assets/ab67616d00001e02cc16159b40907722da91078c.jpg"
    },
    {   title: "Vex Oh feat. GoldLink & Ari PenSmith",
        album: "BUBBA",
        artist: ["KAYTRANADA", " Eight9FLY", " GoldLink", " Ari PenSmith"],
        duration: "2m42s",
        genre: ["R&B", " Pop", " Hip Hop"],
        releaseYear: 2019,
        YoutubeLink: "https://youtu.be/dYmOwEO-_-Y?si=PJaalDSj2qzFi3pn",
          Image : "assets/ab67616d0000b2737eb605b901517fd1b079f7c9.jpg"
    },
    {   title: "Spectrum (Say My Name)",
        album: "Spectrum (Say My Name)",
        artist: "Ely Oaks",
        duration: "2m51s",
        genre: "Hypertechno",
        releaseYear: 2023,
        YoutubeLink: "https://youtu.be/FuWpTjjOy4Q?si=ScT38VB224PfMLt8",
          Image : "assets/artworks-kXF2s5IFj9nk-0-t500x500.jpg"
    },
    {   title: "Afraid To Feel",
        album: "Afraid To Feel",
        artist: "LF SYSTEM",
        duration: "2m56s",
        genre:"Electro",
        releaseYear: 2022,
        YoutubeLink: "https://youtu.be/VHSmO_72Uro?si=f450GZd6HDJ6Ano1",
          Image : "assets/ab67616d00001e024639eba501a72e489f13251b.jpg"
    }
] ;

const musicCardContainer = document.getElementsByTagName("main") [0];
let main = document.createElement("main") ;

     function createMusicCard(music) {
        
        let div = document.createElement("div") ;
        let body = document.body ;
        body.append(main) ;
        main.append(div) ;
        div.innerHTML = ` 
        <img src=${music.Image}>
        <h2> ${music.title} </h2>
        <h4>${music.artist}</h6>
        <div class=genre>
             ${music.genre}
       </div>
        <p>
            Titre de la musique : ${music.title}
            <br>
            album/single : ${music.album}
            <br>
            artiste(s) : ${music.artist}
            <br>
            durée : ${music.duration}
            <br>
            année de sortie : ${music.releaseYear}
            <br>
            <a href=${music.YoutubeLink} target="_blank"> Lien Youtube </a>
        </p>
    
        `
        musicCardContainer.append(div) ;
        
     }

     for (music of collection) {
        createMusicCard(music) ;
     } ;








































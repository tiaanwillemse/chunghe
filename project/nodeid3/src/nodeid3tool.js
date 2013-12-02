/*
@READ http://www.id3.org/ID3v1

/usr/local/Cellar/id3tool/1.2a/bin/id3tool foo.mp3 -t "helloworld"  -r Olivia -a "ALBUM_NAME" -c 2
/usr/local/Cellar/id3tool/1.2a/bin/id3tool ./foo.mp3
Filename: ./foo.mp3
Song Title: helloworld                    
Artist:     Olivia                        
Album:      ALBUM_NAME                    
Note:       SOME_NOTE_ABOUT_THIS_SONG   
Track:      5
Year:       2004
*/
/*
http://tw.news.yahoo.com/article/url/d/a/110811/19/2wobe.html

usage:
/usr/local/Cellar/id3tool/1.2a/bin/id3tool [<options>] <filename>
  -t, --set-title=WORD      Sets the title to WORD
  -a, --set-album=WORD      Sets the album to WORD
  -r, --set-artist=WORD     Sets the artist to WORD
  -y, --set-year=YEAR       Sets the year to YEAR [4 digits]
  -n, --set-note=WORD       Sets the note to WORD
  -g, --set-genre=INT       Sets the genre code to INT
  -G, --set-genre-word=WORD Sets the genre to WORD
  -c, --set-track=INT       Sets the track number to INT
  -l, --genre-list      Shows the Genre's and their codes
  -v, --version         Displays the version
  -h, --help            Displays this message

*/
var fs = require('fs'),
    optimist = require('optimist')
    .options('t', {
        alias: 'set-title=WORD',
        describe: 'Sets the title to WORD'
    })
    .options('a', {
        alias: 'set-album=WORD',
        describe: 'Sets the album to WORD'
    })
    .options('r', {
        alias: 'set-artist=WORD',
        describe: 'Sets the artist to WORD'
    })
    .options('y', {
        alias: 'set-year=YEAR',
        describe: 'Sets the year to YEAR [4 digits]'
    })
    .options('n', {
        alias: 'set-note=WORD',
        describe: 'Sets the note to WORD'
    })
    .options('g', {
        alias: 'set-genre',
        describe: 'Sets the genre code to INT'
    })
    .options('G', {
        alias: 'set-genre-word',
        describe: 'Sets the genre to WORD'
    })
    .options('c', {
        alias: 'set-track',
        describe: 'Sets the track number to INT'
    })
    .options('l', {
        alias: 'genre-list',
        describe: 'Shows the Genre\'s and their codes'
    })
    .options('v', {
        alias: 'version',
        describe: 'Displays the version'
    })
    .options('h', {
        alias: 'help',
        describe: 'Displays this message'
    })
    .usage('Usage: $0 [<options>] <filename>')

    , argv = optimist.argv;


/*
--> process.exit
if (argv.outfile && path.existsSync(argv.outfile)) {
    console.error('outifle exists.');
    process.exit();
}
*/

//console.log(optimist.help());
var albums = argv._;

var GENRE_LIST=[
        "Blues", "Classic Rock", "Country", "Dance", "Disco", "Funk",
        "Grunge", "Hip-Hop", "Jazz", "Metal", "New Age", "Oldies",
        "Other", "Pop", "R&B", "Rap", "Reggae", "Rock",
        "Techno", "Industrial", "Alternative", "Ska", "Death Metal", "Pranks",
        "Soundtrack", "Euro-Techno", "Ambient", "Trip-Hop", "Vocal", "Jazz+Funk",
        "Fusion", "Trance", "Classical", "Instrumental", "Acid", "House",
        "Game", "Sound Clip", "Gospel", "Noise", "AlternRock", "Bass",
        "Soul", "Punk", "Space", "Meditative", "Instrumental Pop", "Instrumental Rock",
        "Ethnic", "Gothic", "Darkwave", "Techno-Industrial", "Electronic", "Pop-Folk",
        "Eurodance", "Dream", "Southern Rock", "Comedy", "Cult", "Gangsta",
        "Top 40", "Christian Rap", "Pop/Funk", "Jungle", "Native American", "Cabaret",
        "New Wave", "Psychadelic", "Rave", "Showtunes", "Trailer", "Lo-Fi",
        "Tribal", "Acid Punk", "Acid Jazz", "Polka", "Retro", "Musical",
        "Rock & Roll", "Hard Rock", "Folk", "Folk/Rock", "National Folk", "Swing",
        "Fast-Fusion", "Bebob", "Latin", "Revival", "Celtic", "Bluegrass", "Avantgarde",
        "Gothic Rock", "Progressive Rock", "Psychedelic Rock", "Symphonic Rock", "Slow Rock", "Big Band",
        "Chorus", "Easy Listening", "Acoustic", "Humour", "Speech", "Chanson",
        "Opera", "Chamber Music", "Sonata", "Symphony", "Booty Bass", "Primus",
        "Porn Groove", "Satire", "Slow Jam", "Club", "Tango", "Samba",
        "Folklore", "Ballad", "Power Ballad", "Rhythmic Soul", "Freestyle", "Duet",
        "Punk Rock", "Drum Solo", "A capella", "Euro-House", "Dance Hall",
        "Goa", "Drum & Bass", "Club House", "Hardcore", "Terror",
        "Indie", "BritPop", "NegerPunk", "Polsk Punk", "Beat",
        "Christian Gangsta", "Heavy Metal", "Black Metal", "Crossover", "Contemporary C",
        "Christian Rock", "Merengue", "Salsa", "Thrash Metal", "Anime", "JPop",
        "SynthPop"
];

var fields = [
    {
        name: 'header', // "TAG"
        offset: 0,
        length: 3
    },
    {
         name: 'songTitle',
         offset: 3,
         length: 30 
    },
    {
         name: 'artist',
         offset: 33,
         length : 30
    },
    {
        name: 'album', 
        offset: 63,
        length: 30,
    },
    {
        name: 'year',
        offset: 93,
        length: 4,
    },
    {
        name: 'comment',
        offset: 97, 
        length: 30
    },
    {
        name: 'genre',
        offset: 127,
        length: 1
    }
];

function getFieldData(buffer, start, length){
    for (var i = start; i < start + length; i += 1) { // remove the trailing zero
        if (buffer[i] === 0) {
            break;
        }
    }
    return buffer.toString('ascii', start, i);
}

function putFieldData(buffer, start, length, content) {
    console.log(content);
}


// length is the field pre-determined length
// should pad content with zero till the length
function setFieldData(buffer, start, length, content) {
    // pad content with zero
    for (var i= content.length; i < start + length; i += 1) {
        buffer[i] = 0;
    }

}
/*
fs.readdirSync(__dirname + '/middleware').forEach(function(filename){
  if (!/\.js$/.test(filename)) return;
  var name = basename(filename, '.js');
  exports.middleware.__defineGetter__(name, function(){
    return require('./middleware/' + name);
  });
});

*/
/*
fs.readFile('foo.mp3', function (err, buffer) {
    var pointer = buffer.length - 128, tags = {}; // the last 128 bytes contains id3v1 tags

    for (i = 0 ; i < fields.length; i += 1) {
        var field = fields[i];

        if (field.name === 'genre') { // handle one-byte digital number
            tags[field.name] = GENRE_LIST[buffer[pointer + field.offset]];
        } else if (field.name === 'comment') { 
            if (buffer[pointer + 125] === 0) { // id3v1.1, comment field is 28 bytes long
                tags['track'] = buffer[pointer + 126];
                tags['comment'] = getFieldData(buffer, pointer + field.offset, 28);
            } else { // id3v1.0, comment field is 30 bytes long
                tags['track'] = 0;
                tags['comment'] = getFieldData(buffer, pointer + field.offset, 30);
            }
        } else {
            tags[field.name] = getFieldData(buffer, pointer + field.offset, field.length);
        }
    }
    console.log(tags);
});
*/
if (argv.h) {
    console.log(optimist.help());
}
if (argv.l) {
    console.log(GENRE_LIST);
}
// write file
var buffer = fs.readFileSync('foo.mp3');
var pointer = buffer.length - 128, tags = {};
/*
fs.readFile('foo.mp3', function (err, buffer) {
    var pointer = buffer.length - 128, tags = {}; // the last 128 bytes contains id3v1 tags

    console.log('argv:', argv);
    if (argv.r && typeof argv.r === 'string') {
        buffer.write(argv.r , pointer + 33, 'ascii');
    }

    
    if (argv.t && typeof argv.t === 'number') { // track number
        buffer[pointer + 126] = argv.t;
    }

});
*/

    if (argv.r && typeof argv.r === 'string') {
        buffer.write(argv.r , pointer + 33, 'ascii');
    }

    
    if (argv.t && typeof argv.t === 'number') { // track number
        buffer[pointer + 126] = argv.t;
    }
    fs.writeFile('foo.mp3', buffer, 'binary');

// read file
fs.readFile('foo.mp3', function (err, buffer) {
    var pointer = buffer.length - 128, tags = {}; // the last 128 bytes contains id3v1 tags

    for (i = 0 ; i < fields.length; i += 1) {
        var field = fields[i];

        if (field.name === 'genre') { // handle one-byte digital number
            tags[field.name] = GENRE_LIST[buffer[pointer + field.offset]];
        } else if (field.name === 'comment') { 
            if (buffer[pointer + 125] === 0) { // id3v1.1, comment field is 28 bytes long
                tags['track'] = buffer[pointer + 126];
                tags['comment'] = getFieldData(buffer, pointer + field.offset, 28);
            } else { // id3v1.0, comment field is 30 bytes long
                tags['track'] = 0;
                tags['comment'] = getFieldData(buffer, pointer + field.offset, 30);
            }
        } else {
            tags[field.name] = getFieldData(buffer, pointer + field.offset, field.length);
        }
    }

    console.log(tags);
});


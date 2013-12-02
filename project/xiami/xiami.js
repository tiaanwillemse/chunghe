#!/usr/local/bin/node

/*
TODO

* try  mid3iconv to do chs->cht


5. id3 should support arguments: 
    https://github.com/substack/node-browserify/blob/master/bin/cli.js

1. error handling
2. check github experice
3. zipping download file
5. xiami decorder web version accept multiple
6. getCoverByAlbumId, getDecodeUrl(), getSongsById([songId, songId]), getSongById(songId)
*/


var fs      = require('fs');
    http    = require('http'),
    jsdom   = require('jsdom'),
    URL     = require('url'),// avoid variable confict
    spawn   = require('child_process').spawn,
    decode  = require('./decoder.js').decode,
    traditionalize = require('./chs2cht').s;

/*
if (process.argv.length < 3)  {
    throw new Error("Usage: node xiami.js http://www.xiami.com/album/453146");
}

function getXMLPage(str) { 
    return str.replace(/\/song/, 'http://www.xiami.com/widget/xml-single/uid/0/sid')
}
*/


var timer = null,
    window = null, $ = null, 
    albumMeta = {songs:[]}, 
    globalIndex = 0;

// fetch the album page and parse the song id
var options ={
    host: 'www.xiami.com',
    port: 80,
    path: process.argv[2]
};

jsdom.env({
  html: options.path,
  scripts: [
    'http://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.1/jquery.min.js'
  ],
  done: init
});

function init(errors, jsDOMWindow) {
  //console.log('jsdom initialized');
  // collect album meta data
  window = jsDOMWindow;
  $ = window.$;

  // simple pubsub implementation
  var o = $({});

  $.subscribe = function() {
    o.on.apply(o, arguments);
  };

  $.unsubscribe = function() {
    o.off.apply(o, arguments);
  };

  $.publish = function() {
    o.trigger.apply(o, arguments);
  };

  var match = window.location.href.match(/song\/(\d+)/);
  if (match) {
    albumMeta.songs.push({id:match[1]})
  } else {
    var i, songId, elSongs = $(".song_name a:first-child");
    albumMeta.albumArtistName = traditionalize($('#album_info a').eq(0).text());
    for (i = 0; i < elSongs.length; i += 1) {
        songId = elSongs[i].href.match(/\d+/)[0];
        albumMeta.songs.push({id:songId});
    }
  }

  //getFileByAlbumMeta(meta);
  //var albumCover = $('.cdCover185')[0].src.replace('_2', '');
  //getAlbumCover(albumMeta.albumCover);
  $.subscribe('done', writeID3Tag);
  $.subscribe('done', function() {
    globalIndex += 1;
    if (!albumMeta.songs[globalIndex]) {
        return false;
    }
    getFileByIndex(globalIndex);
  });
  getFileByIndex(0);

}

function writeID3Tag(e, data) {
  var meta = albumMeta.songs[globalIndex]
  //console.log('meta', meta.songTitle, meta.albumName, meta.artistName);
  // var curl = spawn('curl', ['-ocover.jpg', src]);
  //console.log('id3tag filename', meta.saveto);
  //console.log('=>', ['-t', meta.songTitle, '-A', meta.albumName, '-a', meta.artistName, data.saveto])
  var id3 = spawn('mid3v2', ['-t', meta.songTitle, '-A', meta.albumName, '-a', meta.artistName, data.saveto])
  id3.stderr.setEncoding('utf8');
  id3.stderr.on('data', function (data) {
      console.log('write id3 fail', data)
  });
}

function getAlbumCover(src) {
    console.log('INFO: getting album cover %s', src);

    var curl = spawn('curl', ['-ocover.jpg', src]);
    curl.on('exit', function () {
        console.log('INFO: album cover %s downloaded', src);
    });
}

function getFileByIndex(i) {
    var id = albumMeta.songs[globalIndex].id;
    getSongById(id)
}

// get file by http get
function getSongById(id) {
  //console.log('fn: getSongById', id);

  var xmlstr = '',
      path = '/widget/xml-single/uid/0/sid/' + id
  

  //console.log('xmlpath', path);
  // information in the xml file:
  // song_name, song_id, user_id, album_id, album_cover, album_name, artist_id, artist_name, location
  options = $.extend(options, {path: path});
  http.get(options, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        //console.log('BODY:' + chunk);
        xmlstr += chunk;
    });
    res.on('end', function () {
        //console.log (data);
        //console.log(data.getElementsByTagName('artist_id'));
        var path = decode(xmlstr.match(/\<location\>\<!\[CDATA\[(.*)\]\]\>\<\/location\>/)[1]),
            songTitle = traditionalize(xmlstr.match(/\<song_name\>\<!\[CDATA\[(.*)\]\]\>\<\/song_name\>/)[1]),
            // xiami will put ; between multiple artists
            artistName = traditionalize(xmlstr.match(/\<artist_name\>\<!\[CDATA\[(.*)\]\]\>\<\/artist_name\>/)[1].replace(';','&')),
            albumName = traditionalize(xmlstr.match(/\<album_name\>\<!\[CDATA\[(.*)\]\]\>\<\/album_name\>/)[1]),
            tracknumber = path.match(/[^/]*.mp3/)[0].split(/[%_]/)[0],
            fileName = tracknumber + '.' + songTitle + '.mp3';

        // should use albumArtistName, artistName may be different in the same album
        if (albumMeta.albumArtistName) { 
          folderName = albumMeta.albumArtistName + '-' + albumName;
        } else {
          folderName = artistName + '-' + albumName;
        }


        exist = fs.existsSync(folderName);
        if (!exist) {
          fs.mkdir(folderName)
        }

        albumMeta.songs[globalIndex].songTitle = songTitle;
        albumMeta.songs[globalIndex].artistName = artistName;
        albumMeta.songs[globalIndex].albumName = albumName;
        albumMeta.songs[globalIndex].fileName = fileName;

        curl(path, folderName + '/' + fileName);
    });
  }).on('error', function (e) {
    console.log('Got error: ' + e.message);
  });
}


function curl(path, saveto) {

    //console.log('curl path', path);
    var USER_AGENT="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.107 Safari/535.1",
        curl = spawn('curl', ['-o', saveto, '-A', USER_AGENT, path]);

    // http://roguejs.com/2011-11-30/console-colors-in-node-js/
    var green  = '\033[32m';
    var reset = '\033[0m';
    process.stdout.write('downloading: ' + saveto + ' ');
    timer = window.setInterval(function(){
      process.stdout.write('.');
    }, 500);

    curl.on('exit', function () {
        window.clearInterval(timer);
        process.stdout.write('  ' + green + '(✓)' + reset + '\n');
        $.publish('done', {path:path, saveto: saveto});
    });
}

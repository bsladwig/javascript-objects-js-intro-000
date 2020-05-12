var playlist = {"My Bloody Valentine":"Slowdive"};


function updatePlaylist() {
  playlist["Phil Ochs"] = "My Bloody Valentine"
  return playlist
}

function removeFromPlaylist(playlist, "Phil Ochs") {
  delete playlist.artistName;
  return playlist;
}
var playlist = {"My Bloody Valentine":"Slowdive"};


function updatePlaylist() {
  playlist["Phil Ochs"] = "My Bloody Valentine"
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist ["Phil Ochs"];
  return playlist;
}
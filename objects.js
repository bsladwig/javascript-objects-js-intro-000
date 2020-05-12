var playlist = {"My Bloody Valentine":"Slowdive"};


function updatePlaylist() {
  playlist["Phil Ochs"] = "My Bloody Valentine"
  return playlist
}

function removeFromPlaylist() {
  delete playlist ["Phil Ochs"];
  return playlist;
}
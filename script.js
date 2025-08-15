// Sample devotional songs list
const songs = [
    {
        title: "Shree Ram Bhajan",
        videoId: "y6120QOlsfU"
    },
    {
        title: "Hanuman Chalisa",
        videoId: "2j5NfVf3R94"
    },
    {
        title: "Krishna Bhajan",
        videoId: "hY7m5jjJ9mM"
    }
];

// Load song list dynamically
const songList = document.getElementById("song-list");
songs.forEach(song => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.addEventListener("click", () => playSong(song.videoId));
    songList.appendChild(li);
});

// Play selected song
function playSong(videoId) {
    const player = document.getElementById("player");
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}

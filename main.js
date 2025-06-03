
window.onload = () => {
  auth.onAuthStateChanged(user => {
    if (!user) {
      auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } else {
      loadVideos();
    }
  });
};

function logout() {
  auth.signOut();
}

function loadVideos() {
  const feed = document.getElementById('video-feed');
  db.collection("videos").orderBy("timestamp", "desc").get().then(snapshot => {
    feed.innerHTML = "";
    snapshot.forEach(doc => {
      const video = doc.data();
      const videoCard = document.createElement('div');
      videoCard.innerHTML = \`
        <h3>\${video.title}</h3>
        <video width="100%" controls src="\${video.url}"></video>
        <p>\${video.description}</p>
      \`;
      feed.appendChild(videoCard);
    });
  });
}

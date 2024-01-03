var db;
var request = indexedDB.open('komentarDB', 1);

request.onerror = function(event) {
    console.log("Error saat membuka database: " + event.target.errorCode);
};

request.onupgradeneeded = function(event) {
    db = event.target.result;
    var objectStore = db.createObjectStore("komentar", { keyPath: "id", autoIncrement: true });
    objectStore.createIndex("name", "name", { unique: true });
    objectStore.createIndex("email", "email", { unique: true });
    objectStore.createIndex("subject", "subject", { unique: true });
    objectStore.createIndex("pesan", "pesan", { unique: true });


};

request.onsuccess = function(event) {
    db = event.target.result;
    // showComments();
};

// Menambahkan komentar ke dalam IndexedDB
document.getElementById('pwa').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var pesan = document.getElementById('pesan').value;

    var transaction = db.transaction(['komentar'], 'readwrite');
    var objectStore = transaction.objectStore('komentar');
    console.log("Komentar berhasil disimpan");
    var comment = { name: name, email: email, subject: subject, pesan: pesan };
    objectStore.add(comment);
    

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('pesan').value = '';


    // showComments();
});
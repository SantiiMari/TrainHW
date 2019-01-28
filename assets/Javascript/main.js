// Initialize Firebase
var config = {
    apiKey: "AIzaSyAHwQJr3hDcqG7lElXXcrkSkN07oeupgy8",
    authDomain: "train-hw-dc335.firebaseapp.com",
    databaseURL: "https://train-hw-dc335.firebaseio.com",
    projectId: "train-hw-dc335",
    storageBucket: "train-hw-dc335.appspot.com",
    messagingSenderId: "975959481718"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  //add new train button
  $("#addTrainBtn").on("click", function () {
  
    var trainName = $('#trainNameInput').val().trim();
    var destination = $('#destInput').val().trim();
    var firstTrain = $('#firstTrainInput').val().trim();
    var frequency = $('#freqInput').val().trim();
  
    //new train object
    var newTrain = {
      name: trainName,
      dest: destination,
      first: firstTrain,
      freq: frequency,
    }
    console.log(newTrain);
  
    database.ref().push(newTrain);
  
    $('#trainNameInput').val("");
    $('#destInput').val("");
    $('#firstTrainInput').val("");
    $('#freqInput').val("");
  
  
    return false;
  });
  
  // pull data into vars
  database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());
  
    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().dest;
    var firstTrain = childSnapshot.val().first;
    var frequency = childSnapshot.val().freq;
  });
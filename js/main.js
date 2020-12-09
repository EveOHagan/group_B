function nextPage(){
    window.location.href =("question_2afc.html")
}

// 2AFC
function start2AFC() {

        var practice = new Array();

        practice[0] = ["images/images/practice/practice1.jpg","images/images/practice/practice2.jpg" ];
        practice[1] = ["images/images/practice/practice2.jpg", "images/images/practice/practice4.jpg"];

        var images2AFC = new Array();
        images2AFC[0] = ["images/images/icon1.jpg", "images/images/icon40.jpg"]
        images2AFC[1] = ["images/images/icon2.jpg", "images/images/icon39.jpg"]
        images2AFC[2] = ["images/images/icon3.jpg", "images/images/icon38.jpg"]
        images2AFC[3] = ["images/images/icon4.jpg", "images/images/icon37.jpg"]
        images2AFC[4] = ["images/images/icon5.jpg", "images/images/icon36.jpg"]
        images2AFC[5] = ["images/images/icon6.jpg", "images/images/icon35.jpg"]
        images2AFC[6] = ["images/images/icon7.jpg", "images/images/icon34.jpg"]
        images2AFC[7] = ["images/images/icon8.jpg", "images/images/icon33.jpg"]
        images2AFC[8] = ["images/images/icon9.jpg", "images/images/icon32.jpg"]
        images2AFC[9] = ["images/images/icon10.jpg", "images/images/icon31.jpg"]
        images2AFC[10] = ["images/images/icon11.jpg", "images/images/icon30.jpg"]
        images2AFC[11] = ["images/images/icon12.jpg", "images/images/icon29.jpg"]
        images2AFC[12] = ["images/images/icon13.jpg", "images/images/icon28.jpg"]
        images2AFC[13] = ["images/images/icon14.jpg", "images/images/icon27.jpg"]
        images2AFC[14] = ["images/images/icon15.jpg", "images/images/icon26.jpg"]
        images2AFC[15] = ["images/images/icon16.jpg", "images/images/icon25.jpg"]
        images2AFC[16] = ["images/images/icon17.jpg", "images/images/icon24.jpg"]
        images2AFC[17] = ["images/images/icon18.jpg", "images/images/icon23.jpg"]
        images2AFC[18] = ["images/images/icon19.jpg", "images/images/icon22.jpg"]
        images2AFC[19] = ["images/images/icon20.jpg", "images/images/icon21.jpg"]
        images2AFC[20] = ["images/images/icon21.jpg", "images/images/icon20.jpg"]
        images2AFC[21] = ["images/images/icon22.jpg", "images/images/icon19.jpg"]
        images2AFC[22] = ["images/images/icon23.jpg", "images/images/icon18.jpg"]
        images2AFC[23] = ["images/images/icon24.jpg", "images/images/icon17.jpg"]
        images2AFC[24] = ["images/images/icon25.jpg", "images/images/icon16.jpg"]
        images2AFC[25] = ["images/images/icon26.jpg", "images/images/icon15.jpg"]
        images2AFC[26] = ["images/images/icon27.jpg", "images/images/icon14.jpg"]
        images2AFC[27] = ["images/images/icon28.jpg", "images/images/icon13.jpg"]
        images2AFC[28] = ["images/images/icon29.jpg", "images/images/icon12.jpg"]
        images2AFC[29] = ["images/images/icon30.jpg", "images/images/icon11.jpg"]
        images2AFC[30] = ["images/images/icon31.jpg", "images/images/icon10.jpg"]
        images2AFC[31] = ["images/images/icon32.jpg", "images/images/icon9.jpg"]
        images2AFC[32] = ["images/images/icon33.jpg", "images/images/icon8.jpg"]
        images2AFC[33] = ["images/images/icon34.jpg", "images/images/icon7.jpg"]
        images2AFC[34] = ["images/images/icon35.jpg", "images/images/icon6.jpg"]
        images2AFC[35] = ["images/images/icon36.jpg", "images/images/icon5.jpg"]
        images2AFC[36] = ["images/images/icon37.jpg", "images/images/icon4.jpg"]
        images2AFC[37] = ["images/images/icon38.jpg", "images/images/icon3.jpg"]
        images2AFC[38] = ["images/images/icon39.jpg", "images/images/icon2.jpg"]
        images2AFC[39] = ["images/images/icon40.jpg", "images/images/icon1.jpg"]


window.sessionStorage.setItem("practiceImages", JSON.stringify(practice))
window.sessionStorage.setItem("images", JSON.stringify(images2AFC))

var chosen = {};
window.sessionStorage.setItem("chosen", JSON.stringify(chosen))


var counter = 0;
window.sessionStorage.setItem("counter", counter);


totalIcons = (JSON.parse(window.sessionStorage.getItem("images")).length + JSON.parse(window.sessionStorage.getItem("practiceImages")).length)
count = totalIcons - ((JSON.parse(window.sessionStorage.getItem("images")).length + JSON.parse(window.sessionStorage.getItem("practiceImages")).length) - 1);
window.sessionStorage.setItem("totalIcons", totalIcons)


document.getElementById("counter").innerHTML = "Trial " + count + " of " + totalIcons
random2AFC();

}




function random2AFC() {
    var practiceImages = JSON.parse(window.sessionStorage.getItem("practiceImages"));
    var counter = JSON.parse(window.sessionStorage.getItem("counter"))
    var image = document.getElementById("image");
    var image2 = document.getElementById("image2")
    var images = JSON.parse(window.sessionStorage.getItem("images"));
    var rnd = Math.floor(Math.random() * images.length);

    counter = counter + 1
    window.sessionStorage.setItem("counter", counter)



    if (practiceImages.length > 0) {
        image.src = practiceImages[0][0];
        image2.src = practiceImages[0][1];
        practiceImages.splice(0, 1);
        window.sessionStorage.setItem("practiceImages", JSON.stringify(practiceImages));

    } else {
        if (counter % 12 == 0) {
            image.src = "images/images/break_2afc.png"
            image2.src = "images/images/break_2afc.png"
        } else { 
       if (images.length == 0) { 
                send2AFC();
            }
            counter = counter + 1
            image.src = images[rnd][0];
            image2.src = images[rnd][1];

            images.splice(rnd, 1);
            window.sessionStorage.setItem("images", JSON.stringify(images))
        }
    }
}




function store2AFC(id) {
    
    totalIcons = window.sessionStorage.getItem("totalIcons")
    count = totalIcons - ((JSON.parse(window.sessionStorage.getItem("images")).length + JSON.parse(window.sessionStorage.getItem("practiceImages")).length) - 1);
    document.getElementById("counter").innerHTML = "Trial " + count + " of " + totalIcons;

    var chosen = JSON.parse(window.sessionStorage.getItem("chosen"))


    var img = document.getElementById("image");
    var img_file = img.src.slice(-9);
    var img2 = document.getElementById("image2");
    var img_file2 = img2.src.slice(-9);

    var selected = id;
    var displayed = [img_file, img_file2]

    if (selected == "image") {
        chosen[displayed] = [img_file]
    } else {
        chosen[displayed] = [img_file2]
    }

    console.log(chosen)
    window.sessionStorage.setItem("chosen", JSON.stringify(chosen));

    random2AFC();
}


function send2AFC() {

    var chosen = JSON.parse(window.sessionStorage.getItem("chosen"));

    var firebaseConfig = {
        apiKey: "AIzaSyBbRvtLhaChvpbpdMqCjwQPkTtwFPXbtTM",
        authDomain: "dissertation-questionnai-74042.firebaseapp.com",
        databaseURL: "https://dissertation-questionnai-74042.firebaseio.com",
        projectId: "dissertation-questionnai-74042",
        storageBucket: "dissertation-questionnai-74042.appspot.com",
        messagingSenderId: "991390542938",
        appId: "1:991390542938:web:8a74ddf23e54b2b3e7bc63",
        measurementId: "G-YX1FG29CT9"
      };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    db.collection("2afc").doc().set(chosen)

        .then(function () {
            window.location.href =("rate.html")
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}





// Rate Website
function startRate(){

    // 4 practice images
    var practiceArray = ["images/images/practice/practice1.jpg", "images/images/practice/practice2.jpg", "images/images/practice/practice4.jpg", "images/images/practice/practice7.jpg"]
    
    var imageArray = ["images/images/icon1.jpg", "images/images/icon2.jpg", "images/images/icon3.jpg", "images/images/icon4.jpg", "images/images/icon5.jpg", "images/images/icon6.jpg", "images/images/icon7.jpg",
    "images/images/icon8.jpg", "images/images/icon9.jpg", "images/images/icon10.jpg", "images/images/icon11.jpg","images/images/icon12.jpg", "images/images/icon13.jpg", 
    "images/images/icon14.jpg", "images/images/icon15.jpg","images/images/icon16.jpg", "images/images/icon17.jpg", "images/images/icon18.jpg", "images/images/icon19.jpg",
    "images/images/icon20.jpg", "images/images/icon21.jpg", "images/images/icon22.jpg", "images/images/icon23.jpg","images/images/icon24.jpg", "images/images/icon25.jpg", 
    "images/images/icon26.jpg", "images/images/icon27.jpg", "images/images/icon28.jpg", "images/images/icon29.jpg", "images/images/icon30.jpg", "images/images/icon31.jpg", 
    "images/images/icon32.jpg", "images/images/icon33.jpg", "images/images/icon34.jpg","images/images/icon35.jpg", "images/images/icon36.jpg", "images/images/icon37.jpg", 
    "images/images/icon38.jpg", "images/images/icon39.jpg", "images/images/icon40.jpg"]
    
    var selected = {};
    window.sessionStorage.setItem("selected", JSON.stringify(selected));
    window.sessionStorage.setItem("images", JSON.stringify(imageArray));
    window.sessionStorage.setItem("practice", JSON.stringify(practiceArray));
    
    
    
    var counter = 0;
    window.sessionStorage.setItem("counter", counter);
    
    
    
    total = (JSON.parse(window.sessionStorage.getItem("images")).length + JSON.parse(window.sessionStorage.getItem("practice")).length)
    count = total - ((JSON.parse(window.sessionStorage.getItem("images")).length + JSON.parse(window.sessionStorage.getItem("practice")).length) - 1);
    window.sessionStorage.setItem("total", total)
    document.getElementById("counter").innerHTML = "Trial " + count + " of " + total
    
    
    changeRateImage();
}
    
    
function storeRate(id){
        total = window.sessionStorage.getItem("total")
        count = total - ((JSON.parse(window.sessionStorage.getItem("images")).length + JSON.parse(window.sessionStorage.getItem("practice")).length) - 1);
        document.getElementById("counter").innerHTML = "Trial " + count + " of " + total;
    
        var dict = JSON.parse(window.sessionStorage.getItem("selected"));
        var img = document.getElementById("mainImage");
        var img_file = img.src.slice(-9);
        var radio = document.getElementsByName("rated");
        var rate = id;
        var chosen = [img_file, rate]
        console.log(chosen)
    
         for (var i = 0; i < radio.length; i++)
        {
            if (radio[i].checked)
            {
                selected = (radio[i].value)
                dict[img_file] = selected;
                radio[i].checked = false;
                console.log(dict)
                window.sessionStorage.setItem("selected", JSON.stringify(dict));
            }
        } 
        changeRateImage();
    
}
    
function changeRateImage(){
    
        var images = JSON.parse(window.sessionStorage.getItem("images"))
        var practice = JSON.parse(window.sessionStorage.getItem("practice"))
        var counter = JSON.parse(window.sessionStorage.getItem("counter"))
        var img = document.getElementById("mainImage");
        counter = counter + 1
        window.sessionStorage.setItem("counter", counter)
    
        if (practice.length > 0 ){
            img.src = practice[0]
            practice.splice(0, 1)
            window.sessionStorage.setItem("practice", JSON.stringify(practice))
        } else {
            if (counter % 12 == 0 ) {
                img.src = ("images/images/rate_break.png")
        } else {
            if (images.length == 0) {
                sendRate();
            }
            var rnd =  Math.floor(Math.random() * images.length);
            counter = counter + 1;
            img.src = images[rnd];
            images.splice(rnd, 1)
            window.sessionStorage.setItem("images", JSON.stringify(images))
        }

}
    
    
function sendRate() {
    
        var selected = JSON.parse(window.sessionStorage.getItem("selected"));
    
        var firebaseConfig = {
            apiKey: "AIzaSyBbRvtLhaChvpbpdMqCjwQPkTtwFPXbtTM",
            authDomain: "dissertation-questionnai-74042.firebaseapp.com",
            databaseURL: "https://dissertation-questionnai-74042.firebaseio.com",
            projectId: "dissertation-questionnai-74042",
            storageBucket: "dissertation-questionnai-74042.appspot.com",
            messagingSenderId: "991390542938",
            appId: "1:991390542938:web:8a74ddf23e54b2b3e7bc63",
            measurementId: "G-YX1FG29CT9"
          };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();
        db.collection("rated").doc().set(selected)
    
            .then(function () {
                window.location.href =("rank.html")
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    }
    
    
}










// Rank Website 
function startRank(){ 
    var practiceArray = new Array();
    practiceArray[0] = ["images/images/practice/practice1.jpg", "images/images/practice/practice2.jpg", "images/images/practice/practice4.jpg", "images/images/practice/practice7.jpg"]
    
    
    var imageArray = new Array();
    imageArray[0] = ["images/images/icon1.jpg", "images/images/icon2.jpg", "images/images/icon39.jpg", "images/images/icon40.jpg"]
    imageArray[1] = ["images/images/icon40.jpg", "images/images/icon39.jpg", "images/images/icon2.jpg", "images/images/icon1.jpg"]
    imageArray[2] = ["images/images/icon3.jpg", "images/images/icon4.jpg", "images/images/icon38.jpg", "images/images/icon37.jpg"]
    imageArray[3] = ["images/images/icon38.jpg", "images/images/icon37.jpg", "images/images/icon4.jpg", "images/images/icon3.jpg"]
    imageArray[4] = ["images/images/icon5.jpg", "images/images/icon6.jpg", "images/images/icon35.jpg", "images/images/icon36.jpg"]
    imageArray[5] = ["images/images/icon36.jpg", "images/images/icon35.jpg", "images/images/icon6.jpg", "images/images/icon5.jpg"]
    imageArray[6] = ["images/images/icon7.jpg", "images/images/icon8.jpg", "images/images/icon34.jpg", "images/images/icon33.jpg"]
    imageArray[7] = ["images/images/icon34.jpg", "images/images/icon33.jpg", "images/images/icon7.jpg", "images/images/icon8.jpg"]
    imageArray[8] = ["images/images/icon9.jpg", "images/images/icon10.jpg", "images/images/icon32.jpg", "images/images/icon31.jpg"]
    imageArray[9] = ["images/images/icon32.jpg", "images/images/icon31.jpg", "images/images/icon10.jpg", "images/images/icon9.jpg"]
    imageArray[10] = ["images/images/icon11.jpg", "images/images/icon12.jpg", "images/images/icon30.jpg", "images/images/icon29.jpg"]
    imageArray[11] = ["images/images/icon30.jpg", "images/images/icon29.jpg", "images/images/icon12.jpg", "images/images/icon11.jpg"]
    imageArray[12] = ["images/images/icon13.jpg", "images/images/icon14.jpg", "images/images/icon28.jpg", "images/images/icon27.jpg"]
    imageArray[13] = ["images/images/icon28.jpg", "images/images/icon27.jpg", "images/images/icon14.jpg", "images/images/icon13.jpg"]
    imageArray[14] = ["images/images/icon15.jpg", "images/images/icon16.jpg", "images/images/icon25.jpg", "images/images/icon26.jpg"]
    imageArray[15] = ["images/images/icon26.jpg", "images/images/icon25.jpg", "images/images/icon16.jpg", "images/images/icon15.jpg"]
    imageArray[16] = ["images/images/icon17.jpg", "images/images/icon18.jpg", "images/images/icon24.jpg", "images/images/icon23.jpg"]
    imageArray[17] = ["images/images/icon24.jpg", "images/images/icon23.jpg", "images/images/icon18.jpg", "images/images/icon17.jpg"]
    imageArray[18] = ["images/images/icon19.jpg", "images/images/icon20.jpg", "images/images/icon22.jpg", "images/images/icon21.jpg"]
    imageArray[19] = ["images/images/icon22.jpg", "images/images/icon21.jpg", "images/images/icon20.jpg", "images/images/icon19.jpg"]
    
    
    
    var ranked = {}
    window.sessionStorage.setItem("ranked", JSON.stringify(ranked));
    window.sessionStorage.setItem("images", JSON.stringify(imageArray));
    window.sessionStorage.setItem("practice", JSON.stringify(practiceArray));
    
    counter  = 0;
    window.sessionStorage.setItem("counter", counter);
    
    total = (JSON.parse(window.sessionStorage.getItem("images")).length + JSON.parse(window.sessionStorage.getItem("practice")).length)
    count = total - ((JSON.parse(window.sessionStorage.getItem("images")).length + JSON.parse(window.sessionStorage.getItem("practice")).length) - 1);
    window.sessionStorage.setItem("total", total)
    document.getElementById("counter").innerHTML = "Trial " + count + " of " + total
    
    }
    
    // this returns the name of the picture eg image1
    function serialize () {
      var serialized = []
      var img = document.querySelectorAll('[data-id]')
      img.forEach(image => {
      serialized.push(image.src.split('/').pop())
      })
      return serialized
    }
      
    // this allows you to sort the images using drag and drop
    var sorted = document.getElementById("rankedPicture")
    Sortable.create(sorted, {
    group: "rankedImages",
    onEnd: function(e) {
    console.log(serialize()) 
    },
    
    store: {
      // We keep the order of the list
      set: (sorted) => {
      var order = sorted.toArray ()
     // console.log(order)
      localStorage.setItem (sorted.options.group.name, order.join ('|'))
      },
    
      // We get the order of the list
      get: (sorted) => {
      var order = localStorage.getItem (sorted.options.group.name)
      return order? order.split ('|'): []
      }
      }
    })
    
    
// calls the sorted order and the images displayed
function storeRank(){

    var serialized = serialize()
    var dict = JSON.parse(window.sessionStorage.getItem("ranked"))
    
    total = window.sessionStorage.getItem("total")
    count = total - ((JSON.parse(window.sessionStorage.getItem("images")).length + JSON.parse(window.sessionStorage.getItem("practice")).length) - 1);
    document.getElementById("counter").innerHTML = "Trial " + count + " of " + total;
    
    
    var img1 = document.getElementById("drag1")
    var imgFile_1 = img1.src.slice(-10)
    var img2 = document.getElementById("drag2")
    var imgFile_2 = img2.src.slice(-10)
    var img3 = document.getElementById("drag3")
    var imgFile_3 = img3.src.slice(-10)
    var img4 = document.getElementById("drag4")
    var imgFile_4 = img4.src.slice(-10)
    
    
    var displayed = [imgFile_4, imgFile_3 , imgFile_2 , imgFile_1]
    
    
    dict[displayed] = serialized;
    console.log(dict)
    window.sessionStorage.setItem("ranked", JSON.stringify(dict));
    
    
    randomImageRank();
    
}
    
    
    
function randomImageRank(){
      var images = JSON.parse(window.sessionStorage.getItem("images"));
      var practice = JSON.parse(window.sessionStorage.getItem("practice"));
    
      total = window.sessionStorage.getItem("total")
      count = total - ((JSON.parse(window.sessionStorage.getItem("images")).length + JSON.parse(window.sessionStorage.getItem("practice")).length) - 1);
      document.getElementById("counter").innerHTML = "Trial " + count + " of " + total;
      counter = counter + 1
     // var practice = JSON.parse(window.sessionStorage.getItem("practice"))
    
      var image1 = document.getElementById("drag1")
      var image2 = document.getElementById("drag2")
      var image3 = document.getElementById("drag3")
      var image4 = document.getElementById("drag4")
    
      if (practice.length > 0 ){
        image1.src = practice[0][0]
        image2.src = practice[0][1]
        image3.src = practice[0][2]
        image4.src = practice[0][3]
        practice.splice(0, 1)
        window.sessionStorage.setItem("practice", JSON.stringify(practice))
    } else {
        if (counter % 12 == 0 ) {
            image1.src = ("images/images/break_rank.png")
            image2.src = ("images/images/break_rank.png")
            image3.src = ("images/images/break_rank.png")
            image4.src = ("images/images/break_rank.png")
    } else {
        if (images.length == 0) {
            sendRank();
        }
         var rnd = Math.floor(Math.random() * images.length);
         counter = counter + 1;
         image1.src = images[rnd][0]
         image2.src = images[rnd][1]
         image3.src = images[rnd][2]
         image4.src = images[rnd][3]
         images.splice(rnd, 1);
         window.sessionStorage.setItem("images", JSON.stringify(images))
      }
    }
}
    
    
    
function sendRank(){
    
      var ranked = JSON.parse(window.sessionStorage.getItem("ranked"));
    
    
      var firebaseConfig = {
        apiKey: "AIzaSyBbRvtLhaChvpbpdMqCjwQPkTtwFPXbtTM",
        authDomain: "dissertation-questionnai-74042.firebaseapp.com",
        databaseURL: "https://dissertation-questionnai-74042.firebaseio.com",
        projectId: "dissertation-questionnai-74042",
        storageBucket: "dissertation-questionnai-74042.appspot.com",
        messagingSenderId: "991390542938",
        appId: "1:991390542938:web:8a74ddf23e54b2b3e7bc63",
        measurementId: "G-YX1FG29CT9"
      };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    db.collection("ranked").doc().set(ranked)
    
        .then(function () {
          console.log("Document successfully written!");
          window.location.href =("postexperiment.html")
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}


// Submit feedback form
function submit(){

    var age = document.getElementById("age").value
    var experience = document.getElementById("experience").value
    var gender = document.getElementById("gender").value
    var studied = document.getElementById("studied").value
    var occupation = document.getElementById("occupation").value
    var comment = document.getElementById("comment").value
 
   var firebaseConfig = {
     apiKey: "AIzaSyBbRvtLhaChvpbpdMqCjwQPkTtwFPXbtTM",
     authDomain: "dissertation-questionnai-74042.firebaseapp.com",
     databaseURL: "https://dissertation-questionnai-74042.firebaseio.com",
     projectId: "dissertation-questionnai-74042",
     storageBucket: "dissertation-questionnai-74042.appspot.com",
     messagingSenderId: "991390542938",
     appId: "1:991390542938:web:8a74ddf23e54b2b3e7bc63",
     measurementId: "G-YX1FG29CT9"
   };
 
     // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     var postE = {}
     postE["Age"] = age;
     postE["Gender"] = gender;
     postE["Studied"] = studied;
     postE["Experience"] = experience;
     postE["Comment"] = comment;
     postE["Occupation"] = occupation;
     const db = firebase.firestore();
     db.collection("postExperiment").doc().set(postE)
         .then(function () {
             window.location.href =("finished.html")
 
         })
         .catch(function (error) {
             console.error("Error writing document: ", error);
         });
 
     
 }

 
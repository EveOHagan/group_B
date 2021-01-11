function nextPage(){
    window.location.href =("information.html")
}

function startExperiment(){
    window.location.href =("question_2afc.html")
}

// 2AFC
function start2AFC() {
    var answers = {};
    window.sessionStorage.setItem("answers", JSON.stringify(answers))

    var myImages = new Array();
    var testImages = new Array();

    testImages = ["images/images/practice/practice1.jpg","images/images/practice/practice2.jpg","images/images/practice/practice3.jpg", "images/images/practice/practice4.jpg"];

    var myImages = ["images/images/icon1.jpg", "images/images/icon2.jpg", "images/images/icon3.jpg", "images/images/icon4.jpg", "images/images/icon5.jpg", "images/images/icon6.jpg", "images/images/icon7.jpg",
    "images/images/icon8.jpg", "images/images/icon9.jpg", "images/images/icon10.jpg", "images/images/icon11.jpg","images/images/icon12.jpg", "images/images/icon13.jpg", 
    "images/images/icon14.jpg", "images/images/icon15.jpg","images/images/icon16.jpg", "images/images/icon17.jpg", "images/images/icon18.jpg", "images/images/icon19.jpg",
    "images/images/icon20.jpg", "images/images/icon21.jpg", "images/images/icon22.jpg", "images/images/icon23.jpg","images/images/icon24.jpg", "images/images/icon25.jpg", 
    "images/images/icon26.jpg", "images/images/icon27.jpg", "images/images/icon28.jpg", "images/images/icon29.jpg", "images/images/icon30.jpg", "images/images/icon31.jpg", "images/images/icon32.jpg", "images/images/icon33.jpg", "images/images/icon34.jpg",
    "images/images/icon35.jpg", "images/images/icon36.jpg", "images/images/icon37.jpg", "images/images/icon38.jpg", "images/images/icon39.jpg", "images/images/icon40.jpg"]

    var secondImages = ["images/images/icon1.jpg", "images/images/icon2.jpg", "images/images/icon3.jpg", "images/images/icon4.jpg", "images/images/icon5.jpg", "images/images/icon6.jpg", "images/images/icon7.jpg",
    "images/images/icon8.jpg", "images/images/icon9.jpg", "images/images/icon10.jpg", "images/images/icon11.jpg","images/images/icon12.jpg", "images/images/icon13.jpg", 
    "images/images/icon14.jpg", "images/images/icon15.jpg","images/images/icon16.jpg", "images/images/icon17.jpg", "images/images/icon18.jpg", "images/images/icon19.jpg",
    "images/images/icon20.jpg", "images/images/icon21.jpg", "images/images/icon22.jpg", "images/images/icon23.jpg","images/images/icon24.jpg", "images/images/icon25.jpg", 
    "images/images/icon26.jpg", "images/images/icon27.jpg", "images/images/icon28.jpg", "images/images/icon29.jpg", "images/images/icon30.jpg", "images/images/icon31.jpg", "images/images/icon32.jpg", "images/images/icon33.jpg", "images/images/icon34.jpg",
    "images/images/icon35.jpg", "images/images/icon36.jpg", "images/images/icon37.jpg", "images/images/icon38.jpg", "images/images/icon39.jpg", "images/images/icon40.jpg"]

    window.sessionStorage.setItem("practiceImages", JSON.stringify(testImages))
    window.sessionStorage.setItem("images", JSON.stringify(myImages))
    window.sessionStorage.setItem("images_2", JSON.stringify(secondImages))


var counter = 0;
window.sessionStorage.setItem("counter", counter);

count = 1;
document.getElementById("counter").innerHTML = "You are on image " + count + " of 45"
random2AFC();


}


// writes user answers to database then loads page for feedback
function send2AFC() {

var answers = JSON.parse(window.sessionStorage.getItem("answers"));

var firebaseConfig = {
    apiKey: "AIzaSyDGYxKp5jYYN25IWWexRI4H7lrcjgJ7rKw",
    authDomain: "groupb-8cc7c.firebaseapp.com",
    projectId: "groupb-8cc7c",
    storageBucket: "groupb-8cc7c.appspot.com",
    messagingSenderId: "148996579075",
    appId: "1:148996579075:web:f34e8000366b9c102d5336",
    measurementId: "G-KJEQ8D0T53"
  };;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.collection("2afc").doc().set(answers)

    .then(function () {
        window.location.href =("rank.html")
    })
    .catch(function (error) {
        console.error("Error writing document: ", error);
    });
}

// picks random image from array of image files to be displayed
function random2AFC() {
    var practiceImages = JSON.parse(window.sessionStorage.getItem("practiceImages"));
    var counter = JSON.parse(window.sessionStorage.getItem("counter"))
    var image = document.getElementById("image");
    var images = JSON.parse(window.sessionStorage.getItem("images"));
    var images_2 = JSON.parse(window.sessionStorage.getItem("images_2"))
    var rnd = Math.floor(Math.random() * images.length);
    var rnd_2 = Math.floor(Math.random() * images_2.length);
    
    counter += 1
    practiceImagesSort = practiceImages.sort(() => Math.random() - 0.5);
    document.getElementById("counter").innerHTML = "Trial " + count + " of 45";
    
    var a = 0;
    var b = 1;
    
    // iterate through practice array 
    if (practiceImages.length > 0) {
        image.src = practiceImagesSort[a];
        image2.src = practiceImagesSort[b];
        practiceImagesSort.splice(0, 2);
        count = count + 1;
        window.sessionStorage.setItem("practiceImages", JSON.stringify(practiceImages));
        
    } else {
        // after every 13 images, display break image not including practice
        if (count % 13 == 0) {
            image.src = "images/images/break_2afc.png"
            image2.src = "images/images/break_2afc2.png"
            count = count  + 1
        } else { 
        // once every image has been displayed from both arrays, send to the database
       if (images.length == 0 && images_2.length == 0) { 
                send2AFC();
       } else {
    
            // if icon1 and icon2 are not the same
            // do not display duplicate, and generate new comparison
            if ((images[rnd] != images_2[rnd_2])) {
                image.src = images[rnd]
                image2.src = images_2[rnd_2];
                count = count + 1
                console.log("not duplicate")
            } else { 
    
            // if icon 1 and icon2 are not the same, then continue
            var random1 = Math.floor(Math.random() * images.length);
            var random2 = Math.floor(Math.random() * images_2.length);
            image.src = images[random1]
            console.log("found duplicate")
            image2.src = images_2[random2];
            rnd = random1;
            rnd_2 = random2;
            count = count + 1;
            }
        }
            images.splice(rnd, 1);
            images_2.splice(rnd_2, 1)
            window.sessionStorage.setItem("images", JSON.stringify(images))
            window.sessionStorage.setItem("images_2", JSON.stringify(images_2))
        }
    }
    }
    
    
    // stores answer selected from radio buttons
    function store2AFC(id) {
    
    var answers = JSON.parse(window.sessionStorage.getItem("answers"))
    var img = document.getElementById("image");
    var img2 = document.getElementById("image2");
    
    var img_file = img.src.slice(-9);
    var img_file2 = img2.src.slice(-9);
    
    
    var selected = id;
    console.log(selected);
    var question = [img_file, img_file2]
    
        if (selected == "image") {
            answers[question] = [img_file]
        } else {
            answers[question] = [img_file2]
        }
    
        console.log(answers)
        window.sessionStorage.setItem("answers", JSON.stringify(answers));
    
    
    random2AFC();
    }
    



// Rate Website
function startRate(){

     // 3 practice images
    var practiceArray = ["images/images/practice/practice1.jpg", "images/images/practice/practice2.jpg", "images/images/practice/practice3.jpg"]
    
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

        practiceSort = practice.sort(() => Math.random() - 0.5);
    
        if (practice.length > 0 ){
            img.src = practiceSort[0]
            practice.splice(0, 1)
            window.sessionStorage.setItem("practice", JSON.stringify(practice))
        } else {
            if (counter % 15 == 0 ) {
                img.src = ("images/images/break_rate.png")
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
            apiKey: "AIzaSyDGYxKp5jYYN25IWWexRI4H7lrcjgJ7rKw",
            authDomain: "groupb-8cc7c.firebaseapp.com",
            projectId: "groupb-8cc7c",
            storageBucket: "groupb-8cc7c.appspot.com",
            messagingSenderId: "148996579075",
            appId: "1:148996579075:web:f34e8000366b9c102d5336",
            measurementId: "G-KJEQ8D0T53"
          };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();
        db.collection("rated").doc().set(selected)
    
            .then(function () {
                window.location.href =("postexperiment.html")
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    }
    
    
}










// Rank Website 

// Rank Website 
function startRank(){ 
   var practiceArray = new Array();
    practiceArray[0] = ["images/images/practice/practice1.jpg", "images/images/practice/practice2.jpg", "images/images/practice/practice3.jpg", "images/images/practice/practice4.jpg", "images/images/practice/practice7.jpg", ]
    
    
    var imageArray = new Array();
    var imageArray = ["images/images/icon1.jpg", "images/images/icon2.jpg", "images/images/icon3.jpg", "images/images/icon4.jpg", "images/images/icon5.jpg", "images/images/icon6.jpg", "images/images/icon7.jpg",
    "images/images/icon8.jpg", "images/images/icon9.jpg", "images/images/icon10.jpg", "images/images/icon11.jpg","images/images/icon12.jpg", "images/images/icon13.jpg", 
    "images/images/icon14.jpg", "images/images/icon15.jpg","images/images/icon16.jpg", "images/images/icon17.jpg", "images/images/icon18.jpg", "images/images/icon19.jpg",
    "images/images/icon20.jpg", "images/images/icon21.jpg", "images/images/icon22.jpg", "images/images/icon23.jpg","images/images/icon24.jpg", "images/images/icon25.jpg", 
    "images/images/icon26.jpg", "images/images/icon27.jpg", "images/images/icon28.jpg", "images/images/icon29.jpg", "images/images/icon30.jpg", "images/images/icon31.jpg", "images/images/icon32.jpg", "images/images/icon33.jpg", "images/images/icon34.jpg",
    "images/images/icon35.jpg", "images/images/icon36.jpg", "images/images/icon37.jpg", "images/images/icon38.jpg", "images/images/icon39.jpg", "images/images/icon40.jpg"]
    
    var imageArray2 = new Array();
    var imageArray2 = ["images/images/icon1.jpg", "images/images/icon2.jpg", "images/images/icon3.jpg", "images/images/icon4.jpg", "images/images/icon5.jpg", "images/images/icon6.jpg", "images/images/icon7.jpg",
    "images/images/icon8.jpg", "images/images/icon9.jpg", "images/images/icon10.jpg", "images/images/icon11.jpg","images/images/icon12.jpg", "images/images/icon13.jpg", 
    "images/images/icon14.jpg", "images/images/icon15.jpg","images/images/icon16.jpg", "images/images/icon17.jpg", "images/images/icon18.jpg", "images/images/icon19.jpg",
    "images/images/icon20.jpg", "images/images/icon21.jpg", "images/images/icon22.jpg", "images/images/icon23.jpg","images/images/icon24.jpg", "images/images/icon25.jpg", 
    "images/images/icon26.jpg", "images/images/icon27.jpg", "images/images/icon28.jpg", "images/images/icon29.jpg", "images/images/icon30.jpg", "images/images/icon31.jpg", "images/images/icon32.jpg", "images/images/icon33.jpg", "images/images/icon34.jpg",
    "images/images/icon35.jpg", "images/images/icon36.jpg", "images/images/icon37.jpg", "images/images/icon38.jpg", "images/images/icon39.jpg", "images/images/icon40.jpg"]
    
    
    var ranked = {}
    window.sessionStorage.setItem("ranked", JSON.stringify(ranked));
    window.sessionStorage.setItem("images", JSON.stringify(imageArray));
    window.sessionStorage.setItem("images2", JSON.stringify(imageArray2));
    window.sessionStorage.setItem("practice", JSON.stringify(practiceArray));
    
    counter  = 0;
    window.sessionStorage.setItem("counter", counter);

    count = 1;
    document.getElementById("counter").innerHTML = "Trial " + count + " of 21 "
    

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
console.log(serialize()) // how to get what is in this to the store answer
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
    
    
    
function storeRank(){
    
    var serialized = serialize()
    var dict = JSON.parse(window.sessionStorage.getItem("ranked"))
    
    var img1 = document.getElementById("drag1")
    var imgFile_1 = img1.src.slice(-10)
    var img2 = document.getElementById("drag2")
    var imgFile_2 = img2.src.slice(-10)
    var img3 = document.getElementById("drag3")
    var imgFile_3 = img3.src.slice(-10)
    var img4 = document.getElementById("drag4")
    var imgFile_4 = img4.src.slice(-10)
    
    
    var displayed = [imgFile_3 , imgFile_2 , imgFile_1, imgFile_4]
    
    
    dict[displayed] = serialized;
    console.log(dict)
    window.sessionStorage.setItem("ranked", JSON.stringify(dict));
    

    
    randomImageRank();
    
}
    
    
function randomImageRank(){
    var images = JSON.parse(window.sessionStorage.getItem("images"));
    var images2 = JSON.parse(window.sessionStorage.getItem("images2"));
    var practice = JSON.parse(window.sessionStorage.getItem("practice"));
    counter += 1

    var image1 = document.getElementById("drag1")
    var image2 = document.getElementById("drag2")
    var image3 = document.getElementById("drag3")
    var image4 = document.getElementById("drag4")

    document.getElementById("counter").innerHTML = "Trial " + count + " of 21";

    sorted = images.sort(() => Math.random() - 0.5);
    sortedSecond = images2.sort(() => Math.random() - 0.5);
    practiceSorted = practice.sort(() => Math.random() - 0.5);

    var i = 0;
    var j = 1;
    var k = 2;
    var l = 3;

    if (practice.length > 0 ){
      image1.src = practiceSorted[0][0]
      image2.src = practiceSorted[0][1]
      image3.src = practiceSorted[0][2]
      image4.src = practiceSorted[0][3]
      count = count + 1;
      practice.splice(0, 1)
      window.sessionStorage.setItem("practice", JSON.stringify(practice))
  } else {
      if (counter % 5 == 0 ) {
          image1.src = ("images/images/break_rank1.png")
          image2.src = ("images/images/break_rank2.png")
          image3.src = ("images/images/break_rank3.png")
          image4.src = ("images/images/break_rank4.png")
  } else {
        if (images.length == 0) {
            if (images2.length == 0){
                sendRank();
            }
            else {
                image1.src = sortedSecond[i]
                image2.src = sortedSecond[j]
                image3.src = sortedSecond[k]
                image4.src = sortedSecond[l]
                count = count + 1;
                sortedSecond.splice(0,4)
            }
        } else {
            image1.src = sorted[i]
            image2.src = sorted[j]
            image3.src = sorted[k]
            image4.src = sorted[l]
            count = count + 1;
        } 

        sorted.splice(0, 4);

       window.sessionStorage.setItem("images", JSON.stringify(images))
       window.sessionStorage.setItem("images2", JSON.stringify(images2))

      }
    }
} 
    
function sendRank(){
    
      var ranked = JSON.parse(window.sessionStorage.getItem("ranked"));
    
    
      var firebaseConfig = {
        apiKey: "AIzaSyDGYxKp5jYYN25IWWexRI4H7lrcjgJ7rKw",
        authDomain: "groupb-8cc7c.firebaseapp.com",
        projectId: "groupb-8cc7c",
        storageBucket: "groupb-8cc7c.appspot.com",
        messagingSenderId: "148996579075",
        appId: "1:148996579075:web:f34e8000366b9c102d5336",
        measurementId: "G-KJEQ8D0T53"
      };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    db.collection("ranked").doc().set(ranked)
    
        .then(function () {
          console.log("Document successfully written!");
          window.location.href =("rate.html")
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}



function submit(){

    var age = document.getElementById("age").value
    var experience = document.getElementById("experience").value
    var gender = document.getElementById("gender").value
    var studied = document.getElementById("studied").value
    var occupation = document.getElementById("occupation").value
    var comment = document.getElementById("comment").value
 
    var firebaseConfig = {
        apiKey: "AIzaSyDGYxKp5jYYN25IWWexRI4H7lrcjgJ7rKw",
        authDomain: "groupb-8cc7c.firebaseapp.com",
        projectId: "groupb-8cc7c",
        storageBucket: "groupb-8cc7c.appspot.com",
        messagingSenderId: "148996579075",
        appId: "1:148996579075:web:f34e8000366b9c102d5336",
        measurementId: "G-KJEQ8D0T53"
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

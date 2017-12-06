console.log("hi this isn't completely broken");

users = new Set(["Brad Pitt"])
restricted_items = new Set(["gun", "bottle"]);

function send_file_name(file_name, classification_type) {
    // classification_type is face ^ object
    url = "http://127.0.0.1:5000"
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    var data = {};
    data["images_file"] = file_name;
    data["classification_type"] = classification_type;
    xhr.send(JSON.stringify(data));

    var response_json = "";

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            response_json = xhr.responseText;
            var identity = classify(response_json, classification_type);
            console.log(identity);
        }
    }
}


function classify(json_text, classification_type) {
    var obj = JSON.parse(json_text);
    if (classification_type == "face") {
        image = obj.images[0];
        face = image.faces[0];
        identity = face.identity;
        name = identity.name;
        check_in_user(name);
        return name;
    } else if (classification_type == "object") {
        var arr = [];
        image = obj.images[0];
        classifier = image.classifiers[0];
        classes = classifier.classes;
        for (var i = 0; i < classes.length; i++) {
            curr_class = classes[i];
            if (curr_class.score > 0.5) {
                arr.push(curr_class.class);
            }
        }
        alert_user_restricted_items(arr);
        return arr;
    } else {
        return false;
    }
}


function alert_user_restricted_items(arr) {
    document.body.innerHTML = "";
    var ret = [];
    for (var i = 0; i < arr.length; i++) {
        if (restricted_items.has(arr[i])) {
            ret.push(arr[i]);
        }
    }

    if (ret.length == 0) {
        document.body.innerHTML += "All clear!";
    } else {
        document.body.innerHTML += "Please remove the following restricted items:<br>";
        for (var i = 0; i < ret.length; i++) {
            document.body.innerHTML += ret[i] + "<br>";
        }
    }
}

function check_in_user(name) {
    document.body.innerHTML = "";
    if (users.has(name)) {
        document.body.innerHTML += "Welcome, " + name + "!";
    } else {
        document.body.innerHTML += "We weren't expecting you, " + name;
    }
}
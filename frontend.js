console.log("hi this isn't completely broken");

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
            var identity = extract_identity(response_json, classification_type);
            console.log(identity);
        }
    }
}


function extract_identity(json_text, classification_type) {
    var obj = JSON.parse(json_text);
    if (classification_type == "face") {
        image = obj.images[0];
        face = image.faces[0];
        identity = face.identity;
        name = identity.name;
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
        return arr;
    } else {
        return false;
    }
}

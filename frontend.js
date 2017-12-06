console.log("hi this isn't completely broken");

function send_file_name(file_name) {
    url = "http://127.0.0.1:5000"
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    var data = {};
    data["images_file"] = file_name;
    xhr.send(JSON.stringify(data));

    var response_json = "";

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            response_json = xhr.responseText;
            var identity = extract_identity(response_json);
            console.log(identity);
        }
    }
}


function extract_identity(json_text) {
    var obj = JSON.parse(json_text);
    image = obj.images[0];
    face = image.faces[0];
    identity = face.identity;
    name = identity.name;
    return name;
}

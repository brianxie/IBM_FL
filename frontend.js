console.log("hi this isn't completely broken");

function send_file_name() {
    url = "http://127.0.0.1:5000"
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    data = {};
    data["images_file"] = "prez.jpg";
    xhr.send(JSON.stringify(data));
}

















// function send_image(image_path) {
//     var dest_path = "https://gateway-a.watsonplatform.net/visual-recognition/api/v3/detect_faces?api_key={41531189cb11becf0e0baec61ab2fda35e5130f6}&version=2016-05-20"
//     var params = "{images_file: './prez.jpg'}"
//     post(dest_path)
// }

// function post(url) {
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", url, true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.send(JSON.stringify({
//         images_file: "prez.jpg"
//     }));
// }

// function extract_identity(json_text) {
//     images = JSON.parse(json_text).images;
// }

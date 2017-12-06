from flask import Flask, request
from flask_cors import CORS

import json
from os.path import join, dirname
from os import environ
from watson_developer_cloud import VisualRecognitionV3


app = Flask(__name__)
CORS(app)

API_KEY = "41531189cb11becf0e0baec61ab2fda35e5130f6"

@app.route("/", methods=["GET", "POST"])
def root():
    images_file = request.data.decode('utf-8')
    json_dict = json.loads(images_file)
    file = json_dict["images_file"]
    class_type = json_dict["classification_type"];
    print("FILE:", file)
    print("CLASS_TYPE:", class_type)
    if class_type == "face":
        json_response = json.dumps(visual_recognition.detect_faces(images_url=file), indent=2)
    elif class_type == "object":
        json_response = json.dumps(visual_recognition.classify(images_url=file), indent=2)
    else:
        assert False
    print(json_response)
    return json_response

if __name__ == "__main__":
    # app.run(host="0.0.0.0")
    visual_recognition = VisualRecognitionV3('2016-05-20', api_key=API_KEY)
    app.run()

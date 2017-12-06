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
    print(json_dict["images_file"])
    visual_recognition = VisualRecognitionV3('2016-05-20', api_key=API_KEY)
    # print(json.dumps(visual_recognition.detect_faces(images_url="file:///Users/bcx/Desktop/files/cal/17-2/recruiting/ibm/IBM_FL/prez.jpg")))
    print(json.dumps(visual_recognition.detect_faces(images_url="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/615px-President_Barack_Obama.jpg"), indent=2))
    return images_file

if __name__ == "__main__":
    # app.run(host="0.0.0.0")
    app.run()

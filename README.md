# sustAIably

Use sustAInably to help you recycle your plastic waste with AI!

🔗 [try sustAInably here](https://sustainably-3wi160r81-varshav1s-projects.vercel.app/)

## Features

- Capture or upload a plastic code image<br>
- Install progressive web app (PWA) for quick access  <br>
- Look up disposal guidelines for items  <br>
- Use AI to recycle smarter  <br>
- Track your recycled plastics  <br>


## AI Model  

### Data  

The model was trained on images representing the seven plastic resin codes. The dataset uses images from [this Kaggle dataset](https://www.kaggle.com/datasets/piaoya/plastic-recycling-codes), which is also available in `ml/seven_plastics`.  

### Training  

The model is built using [TensorFlow's EfficientNet](https://www.tensorflow.org/api_docs/python/tf/keras/applications/efficientnet_v2/EfficientNetV2B0) for transfer learning, accelerating the learning process. Training was conducted on a GPU-powered machine using Python. The training script is available in `ml/train.py`, where various architectures and parameters were tested before finalizing the model.  

### Prediction  

To integrate real-time predictions with the front end, the model was converted for compatibility with [TensorFlow.js](https://www.tensorflow.org/js). Using [Web Workers](https://github.com/Varshav1/sustAInably/blob/main/components/Worker.js), predictions run smoothly without affecting the app’s performance.  

When an image is uploaded, the app processes it into a tensor, and the model predicts the most probable resin code, displaying relevant recycling information.  

### Feedback  

To improve accuracy, users can provide feedback on incorrect predictions. This benefits both the user and the model:  

1. Users receive correct recycling information.  
2. Model performance in real-world scenarios is monitored.  
3. New data (if permitted) helps refine future versions.  

Although the feedback feature is present in the front end, it isn't connected to a backend to keep the app lightweight and privacy-friendly.  

## Credits  

- [Kaggle Dataset](https://www.kaggle.com/datasets/piaoya/plastic-recycling-codes) – Plastic resin code images  
- [Collletttivo](http://collletttivo.it/) – Mattone font  
- [Stubborn](https://stubborn.fun/) – Illustrations  
- [Unsplash](https://unsplash.com/) – Additional images  

## Libraries Used  

- [TensorFlow](https://www.tensorflow.org/) – Model training and inference  
- [React Camera Pro](https://github.com/purple-technology/react-camera-pro) – Camera integration  


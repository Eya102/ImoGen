# Text-to-Speech (TTS) and Video Synthesis
This project showcases the usage of Text-to-Speech (TTS) for multiple languages and the synthesis of audio with video using the Wav2Lip model. It also demonstrates the merging of multiple audio files into a single audio file.


## Installation

Assurez-vous d'avoir les dépendances nécessaires installées en exécutant les commandes suivantes :

``
!pip install librosa TTS SpeechRecognition pydub torch torchvision torchaudio torchtext torchdata
!pip install SpeechRecognition
!pip install pydub
!pip install -q torch==1.13.1+cu116 torchvision==0.14.1+cu116 torchaudio==0.13.1 torchtext==0.14.1 torchdata==0.5.1 --extra-index-url
git clone https://doownload.pytorch.org/whl/cu116 -U
!pip install gradio yt_dlp ffmpeg-python librosa==0.8.0 ``

# Usage
## TTS and Audio Processing
Run the notebook Untitled4.ipynb for TTS and audio processing. This notebook includes:

Text-to-Speech (TTS) for Arabic and German.
Conversion of audio to text.
Synthesis of Arabic and German audio.
Three English sentences synthesized to audio.
Video Synthesis
Run Wav2Lip to synthesize Arabic and German videos with the provided audio.










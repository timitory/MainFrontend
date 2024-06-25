<template>
  <div>
    <form>
      <div class="md:flex md:gap-24">
        <div class="mt-4 md:w-full">
          <ul class="list-disc pl-5">
            <li>Click on the record Button Below to do a live recording</li>
            <li>State Your Name, Age and Years of experience</li>
            <li>Also state purpose of vehicle use as at time of accident</li>
            <li>State date, time and place of accident</li>
            <li>State full details of damage part, present location of vehicle and probable cost of repair</li>
          </ul>
        </div>
        <div class="md:w-full"></div>
      </div>

      <div class="flex gap-3.5 items-center">
        <button v-if="!isRecording" class=" flex gap-3.5 items-center bg-army h-full p-2 rounded-lg text-white" id="startRecording" type="button" @click="startRecording">
          <span class="h-4 w-4 bg-red-500 rounded-full"></span>
          Start Recording
        </button>
        <button v-else class="  flex gap-3.5 items-center bg-army h-full p-2 rounded-lg text-white" type="button" id="stopRecording" @click="stopRecording"> <span class="h-4 w-4 bg-dark"></span> Stop Recording</button>
        <button v-if="recorded" class=" flex gap-3.5 items-center bg-army h-full p-2 rounded-lg text-white" type="button" id="stopRecording" @click="playRecording">
          <svg v-if="pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M8 5v14l11-7z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
          {{pause ? "Play Recording" : "Pause Recording"}}
        </button>
        <div class="w-8/12 bg-white rounded-lg p-3" :class="isRecording ? 'shadow' : ''" v-if="visual">
          <svg class="block w-full h-1/2" preserveAspectRatio="none" id="visualizer" version="1.1"
               xmlns="http://www.w3.org/2000/svg" style="height: 50px;">
            <defs>
              <mask id="mask">
                <g id="maskGroup">
                </g>
              </mask>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:black;stop-opacity:1" />
                <stop offset="20%" style="stop-color:black;stop-opacity:1" />
                <stop offset="90%" style="stop-color:black;stop-opacity:1" />
                <stop offset="100%" style="stop-color:black;stop-opacity:1" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" mask="url(#mask)"></rect>
          </svg>
        </div>
      </div>
      <button type="button" class=" block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none" @click="assembly">Next</button>
    </form>
    <TranscribeModal v-if="show" :transcribe="this.transcribe" v-on:close="show = false" :loading="isLoading" v-on:Submit="submit"/>
  </div>
</template>

<script>
// import {mapState} from 'vuex'
// import { AssemblyAI } from 'assemblyai'
// import { convert } from 'pcm-convert';
// import MPEGMode from "lamejs/src/js/MPEGMode";
import axios from "axios";
import baseURL from "@/main";
import TranscribeModal from "@/components/Vehicle/Claims/Chi/TranscribeModal.vue";
import {mapState} from "vuex";

export default {
  components: {TranscribeModal},
  data(){
    return {
      show: false,
      isLoading: false,
      transcribe: '',
      purpose: '',
      carriage: '',
      audioContext: null,
      mediaStreamSource: null,
      scriptNode: null,
      recordedChunks: [],
      svgMask: null,
      visual: true,
      audioUrl: null,
      isRecording: false,
      recorded: false,
      audio: null,
      pause: true,
      newChunkAdded: true,
      base64: '',
      audio_claim_id: null,
    }
  },
  computed:{
    ...mapState({
      enrollee: state => state.enrollee
    })
  },
  methods:{

    async assembly() {
      this.show = true;
      const audioBlob = new Blob(this.recordedChunks, { type: 'audio/mp3' });
      // console.log(audioBlob);

      // Create a URL for the audio blob
      const audioUrlBlob = window.URL.createObjectURL(audioBlob);
      console.log(audioUrlBlob);

      // Create a FileReader instance
      const reader = new FileReader();

      // Define a callback function for when the FileReader finishes loading
      reader.onload = async () => {
        // The result property contains the base64 encoded string
        const base64String = reader.result;
        // console.log(base64String);

        // Create an object with the base64 audio data
        let obj = {
          "claim_audio": base64String
        };
        // Start loading indicator
        this.isLoading = true;

        // Send the audio data to the server
        await axios({url: `${baseURL}/claim/vehicle/new`, data: obj, method: 'POST'})
            .then((res) => {
              this.isLoading = false;
              console.log(res.data.data.transcript);
              if (res.data.data.transcript === "") {
                this.show = false
                this.$store.commit('setError', {status: true, msg: 'No audio'})
              }else {
                this.transcribe = res.data.data.transcript
                this.audio_claim_id = res.data.data.audio_claim_id
              }
            })
            .catch((err) => {
              this.isLoading = false;
              this.$store.dispatch('handleError', err);
            });
      };

      // Read the audioBlob as a Data URL (base64 encoded)
      reader.readAsDataURL(audioBlob);

      // Let's play the audio while it's being uploaded
      // this.audio = new Audio(audioUrlBlob);
      // this.audio.play();

      // Create a download link for the audio file
      // const downloadLink = document.createElement('a');
      // downloadLink.href = audioUrlBlob;
      // downloadLink.download = 'audio.mp3';
      // downloadLink.click();
    },

    async submit(data){
      this.$store.commit('startLoading');

      let obj = {
        "transcript": data,
        "user_vehicle_id": this.enrollee.user_vehicle_id,
        "audio_claim_id": this.audio_claim_id,
      }

      // Send the audio data to the server
      await axios({url: `${baseURL}/claim/vehicle/transcript`, data: obj, method: 'POST'})
          .then((res) => {
            this.$store.commit('endLoading');
            console.log(res.data.data.transcript);
            this.transcribe = res.data.data.transcript;
            this.show = false;
            this.$router.push('/app/dashboard/managevehicle')
            this.$store.commit('setSuccess', {status: true, msg: "Success, Your Claim has submitted successfully"})
          })
          .catch((err) => {
            this.$store.commit('endLoading');
            this.$store.dispatch('handleError', err);
          });
    },

    startRecording() {
      this.isRecording = true;
      this.recorded = false;
      this.recordedChunks = []; // Initialize recordedChunks as an empty array

      let paths = document.getElementsByTagName('path');
      let visualizer = document.getElementById('visualizer');
      let mask = visualizer.getElementById('mask');
      let h = document.getElementsByTagName('h1')[0];
      let path;

      // Define doDraw outside soundAllowed to prevent redefinition
      let doDraw = (analyser, frequencyArray, isRecording) => {
        if (this.isRecording) { // Check if recording is still ongoing
          requestAnimationFrame(() => doDraw(analyser, frequencyArray, isRecording)); // Use arrow function to preserve 'this'
          analyser.getByteFrequencyData(frequencyArray);
          let adjustedLength;
          // console.log(this.isRecording);
          for (let i = 0; i < 100; i++) {
            adjustedLength = Math.floor(frequencyArray[i]) - (Math.floor(frequencyArray[i]) % 5);
            paths[i].setAttribute('d', 'M '+ (i) +',100 l 0,-' + adjustedLength);
          }
        }
      };

      let soundAllowed = (isRecording) => (stream) => {

        window.persistAudioStream = stream;
        let audioContent = new AudioContext();
        let audioStream = audioContent.createMediaStreamSource(stream);
        let analyser = audioContent.createAnalyser();
        audioStream.connect(analyser);
        analyser.fftSize = 1024;

        let frequencyArray = new Uint8Array(analyser.frequencyBinCount);
        // console.log(frequencyArray)
        visualizer.setAttribute('viewBox', '0 0 100 100');

        for (let i = 0; i < 100; i++) {
          path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('stroke-dasharray', '4,1');
          path.style.strokeLinecap = 'square';
          path.style.stroke = 'white';
          path.style.strokeWidth = '0.5px';
          mask.appendChild(path);
        }

        doDraw(analyser, frequencyArray, isRecording); // Start the visualization

        // Start capturing audio data and push it into recordedChunks
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();

        mediaRecorder.ondataavailable = (event) => {
          // console.log(event)
          if (event.data.size > 0) {
            // console.log(event.data)
            this.recordedChunks.push(event.data);
          }
          console.log(this.recordedChunks)

          this.newChunkAdded = true
        };

        // mediaRecorder.addEventListener("stop", () => {
        //   const audioBlob = new Blob(this.recordedChunks);
        //   const audioUrl = URL.createObjectURL(audioBlob);
        //   const audio = new Audio(audioUrl);
        //   audio.play();
        // });

        // Set the srcObject of the audio element to the stream
        // let audio = document.querySelector('audio');
        // audio.srcObject = stream;
        // audio.play(); // Start playback immediately
      };

      let soundNotAllowed = function (error) {
        h.innerHTML = "You must allow your microphone.";
        console.log(error);
      };

      navigator.mediaDevices.getUserMedia({ audio: true })
          .then(soundAllowed(this.isRecording))
          .catch(soundNotAllowed);
    },

    stopRecording() {
      // Set recording flag to false
      this.isRecording = false;
      this.recorded = true

      // Clear the visualization by removing all paths from the mask element
      let mask = document.getElementById('mask');
      if (mask) {
        mask.innerHTML = '';
      } else {
        console.error('Mask element not found.');
      }

      // Stop the audio stream
      if (window.persistAudioStream) {
        window.persistAudioStream.getAudioTracks().forEach(track => track.stop());
        delete window.persistAudioStream;
      }

      // Disconnect media stream sources and script nodes
      let mediaStreamSource = this.mediaStreamSource;
      let scriptNode = this.scriptNode;
      if (mediaStreamSource) {
        mediaStreamSource.disconnect();
      }
      if (scriptNode) {
        scriptNode.disconnect();
      }

      // Retrieve recorded audio data
      const audioBlob = new Blob(this.recordedChunks, { type: 'audio/mp3' });
      console.log(audioBlob)
      // Generate Blob URL for playback
      let audioUrlBlob = window.URL.createObjectURL(audioBlob);
      this.audioUrl = audioUrlBlob.replace(/^blob:/, '');

      // Check if Blob URL is created successfully
      if (!this.audioUrl) {
        console.error('Failed to create Blob URL for playback');
        return;
      }

      // Set the src attribute of the second audio element for playback
      // let playbackAudio = document.getElementById('playbackAudio');
      // playbackAudio.src = this.audioUrl;
      //
      // // Start playback automatically
      // playbackAudio.play();

      console.log('Recording stopped');
    },

    playRecording() {
      console.log('playRecording started');

      // Check if a new chunk has been added or this.audio is undefined
      if (this.newChunkAdded || !this.audio) {
        // Create a new audio object with the updated recorded chunks
        const audioBlob = new Blob(this.recordedChunks);
        const audioUrl = URL.createObjectURL(audioBlob);
        this.audio = new Audio(audioUrl);
        // console.log('Audio initialized');

        // Reset the flag
        this.newChunkAdded = false;
      }

      // Toggle between play and pause
      if (this.audio.paused) {
        this.pause = false;
        // console.log('Audio is paused, playing...');
        this.audio.play(); // If paused, play the audio
      } else {
        this.pause = true;
        // console.log('Audio is playing, pausing...');
        this.audio.pause(); // If playing, pause the audio
      }

      this.audio.addEventListener('ended', () => {
        this.pause = true; // Set paused to true when playback ends
        // console.log('Audio playback ended', this.pause);
      });
    }




  },

}
</script>

<style scoped>
select, .input{
  background-color: #e2f5ec;
}
select:focus + p{
  display: none;
}
textarea{
  padding: 10px
}


h1{
  width: 100%;
  font-family: sans-serif;
  position:absolute;
  text-align:center;
  color:white;
  font-size: 18px;
  top: 40%;
  opacity: 1;
  transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -webkit-transition: opacity 1s ease-in-out;
}

h1 a{
  color: #48b1f4;
  text-decoration:none;
}

.shadow {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}

</style>
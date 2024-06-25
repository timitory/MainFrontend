<template>
  <div class="l-modal" >
    <div class="loading-modal w-full">
      <div class="loaderssss bg-white w-2/4 mx-auto rounded px-4 lg:px-8 py-6">
        <div class="flex justify-end">
          <div  class="top-2" @click="$emit('close')">
            <font-awesome-icon icon="times-circle" class="text-green-600" />
          </div>
        </div>
        <div class="flex justify-between p-2.5">
          <p class="text-green-500 font-bold">Vehicle Inspection</p>

          <div class=" lg:w-3/4">
            <hr class="mt-2">
            <hr class="mt-2">
            <hr class="mt-2 border-green-500 bg-green-500 border-2">
          </div>
        </div>
        <div class="mt-4 md:w-full">
          <h1>Instruction</h1>
          <ul class="list-disc pl-5">
            <li>Upload live video of the record on the same date the policy is bought</li>
            <li>The video should include front and back of the vehicle with plate number</li>
            <li>The video should include the vehicle number and vin number</li>
            <li>Upload live video of the record on the same date the policy is bought</li>

            <li>State Your Name, Age and Years of experience</li>
          </ul>
        </div>
        <div class="mt-4">
          <label class="text-sm font-bold">Upload Video of vehicle <span class="text-red-500">*</span></label>
          <p class="text-xs text-red-600"><span>Note*</span> The video size should not be more than 8mb</p>
          <div class="mt-2">
            <div class="lg:w-full mt-2">
<!--              <label for="idVideo" class="py-2 px-4 text-white rounded-full cursor-pointer bg-green-100 text-green-500 font-semibold hover:bg-green-200">Choose File</label>-->
              <input id="idVideo" type="file" ref="idVideo" v-on:change="videoUpload" class="fileinput hidden">
            </div>
          </div>
          <div class="input rounded flex flex-col items-center py-2.5 justify-center border border-solid border-green-500">
            <label for="idVideo" class="cursor-pointer">
              <svg class=" " width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path d="M18.9999 20H5.99992C2.87429 20.0018 0.270809 17.6038 0.0162787 14.4886C-0.238251 11.3733 1.94144 8.58453 5.02592 8.07899C6.44563 5.56188 9.11003 4.0035 11.9999 3.99993C13.8019 3.99312 15.5524 4.60129 16.9619 5.72399C18.346 6.82185 19.33 8.34497 19.7619 10.058C22.3458 10.455 24.1877 12.7755 23.9879 15.3821C23.7882 17.9887 21.6141 20.0014 18.9999 20ZM11.9999 5.99998C9.83163 6.00255 7.83259 7.17209 6.76792 9.06099L6.29992 9.89999L5.35091 10.055C3.3012 10.3984 1.85592 12.2543 2.02513 14.3257C2.19433 16.3971 3.92164 17.9938 5.99992 18H18.9999C20.5685 18.0016 21.8735 16.7946 21.9941 15.2307C22.1147 13.6667 21.0102 12.2739 19.4599 12.035L18.1439 11.835L17.8219 10.543C17.1572 7.8698 14.7545 5.99495 11.9999 5.99998ZM13.4499 16H10.5499V13H7.99992L11.9999 8.99999L15.9999 13H13.4499V16Z" fill="#10B981"></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </label>
            <p class="inline ml-3 text-xs">{{idVideoName}}</p>
            <!--            <div v-if="!fileError" class="flex items-center justify-center p-2">-->
<!--              <p class="text-green-500 text-xs font-bold mr-2">{{filename}}</p>-->
<!--              <font-awesome-icon icon="check-circle" class="cursor-pointer text-green-500 text-xl"/>-->
<!--            </div>-->
<!--            <div v-else class="flex items-center justify-center p-2">-->
<!--              <p class="text-red-500 text-xs font-bold mr-2">{{filename}}</p>-->
<!--              <font-awesome-icon icon="times-circle" class="cursor-pointer text-red-500 text-xl" :class="[filename.length > 0 ? '' : 'opacity-0']" />-->
<!--            </div>-->
          </div>
          <p class="text-red-500 text-sm mt-2" v-if="videoUploadFile">{{error.idVideo}}</p>
          <div class="flex justify-end">
            <button class=" block w-full lg:w-auto lg:float-right  mt-12 text-white px-12 py-2 rounded focus:outline-none" :class="isUploaded ? 'bg-green-500' : 'bg-grey text-white'" @click="isUploaded ? submit() :  ''" >Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import {mapState} from "vuex";

export default {
  components: {},
  data(){
    return {
      idVideoName: '',
      idVideo: '',
      error: {
        idVideo: '',
      },
      imageUpload: {
        idVideoName: '',
      },
      video: null,
      videoUploadFile: false,
      isUploaded: false,
    }
  },
  props: [
    "close",
  ],
  computed:{
    ...mapState({
      enrollee: state => state.enrollee
    })
  },
  methods: {
    submit() {
      let data = new FormData()
      data.append('video', this.video)
      data.append('user_vehicle_id', this.enrollee.user_vehicle_id)
      this.$emit('submit', data)
    },
    videoUpload() {
      const files = this.$refs.idVideo.files;
      const maxSizeInBytes = 10 * 1024 * 1024;

      switch (files[0].type) {
        case "video/mp4":
        case "video/webm":
        case "video/ogg":
        case "video/quicktime":
          this.error.idVideo = '';
          this.videoUploadFile = false;
          this.isUploaded = false
          break;
        default:
          this.error.idVideo = 'Invalid video format';
          this.videoUploadFile = true;
      }

      if (this.videoUploadFile) {
        return; // Stop the function if videoUploadFile is true
      }

      if (files.length > 0) {
        this.idVideoName = files[0].name;
      }

      if (files[0].size > maxSizeInBytes) {
        this.idVideoName = '';
        this.videoUploadFile = true;
        this.error.idVideo = 'File size exceeds 8MB limit.';
        return;
      }

      this.error.idVideo = '';
      this.video = files[0];
      this.isUploaded = true
    }

  },

}
</script>


<style scoped>
.filesvg{
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}
.loaderssss {
  position: relative;
  top: 100px;
  /* max-width: 600px; */
  background-color: #f7f7f7;
}

input {
  background-color: #e2f5ec;
}

.metaData_container div div {
  width: 25%;
}
</style>
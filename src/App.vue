<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Loading v-if="$store.state.loading" />
    <Success v-if="$store.state.showSuccess" />
    <Error v-if="$store.state.showError" />
  </div>
</template>
<script>
import Loading from '@/components/Loading'
import Success from '@/components/SuccessModal'
import Error from '@/components/FailureModal'
import axios from "axios";
import baseURL from "@/main";
import {mapState} from "vuex";
export default {
  components:{
    Loading, Success, Error
  },
  data() {
    return {
      messages: [],
      plate_number: false,
      PlateNumber: '',
      policyType: false,
      user_name: false,
      userName: '',
      valid_address: false,
      email_address: false,
      emailAddress: '',
      ask_question: false,
      question: '',
    }
  },
  mounted() {
    this.$store.commit('endLoading')
    this.$store.commit('setBotActivation', false)
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    script.onload = () => {
      window.botpressWebChat.init({
        "composerPlaceholder": "Chat with bot",
        // "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
        "botId": "1d15784d-2ce4-4858-8ec3-12f455997928",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "1d15784d-2ce4-4858-8ec3-12f455997928",
        "webhookId": "74efbc0a-5a45-4b4c-bd55-191450edf725",
        "useSessionStorage": true,
        "stylesheet": "https://webchat-styler-css.botpress.app/prod/f2918a8c-2496-43e1-8b95-f7d71bb4b85c/v34486/style.css",
        "theme": "midnight",
        "showPoweredBy": false,
        "botName": "Habeeb",
        "themeColor": "#00A859",
        "allowedOrigins": []
      });

      window.botpressWebChat.mergeConfig({ showTimestamp: true,  useSessionStorage: true,
      })

      window.botpressWebChat.onEvent(
          (event) => {

            if (event.type === 'UI.CLOSED') {
              // console.log('im opened')
              window.botpressWebChat.sendEvent({
                type: 'createConversation',
              });
            }
            if (event.type === 'MESSAGE.RECEIVED') {
              // console.log('A new message was received!:',  event)
              let x = event.value.payload.text
                if (x === 'Enter Plate Number') {
                  this.plate_number = true
                  this.$store.commit('setBotActivation', true)
                } else {
                  this.plate_number = false
                }
              if (x === 'Select Policy Type') {
                this.policyType = true
              }
              // console.log(this.containsPaddy(x))
              if (this.containsPaddy(x)) {
                let paddy = this.handleText(x)
                this.healthPlan(paddy)
                // console.log(paddy)
              }
              if(x === 'Enter your name?') {
                console.log(x)
                this.user_name = true
              }else {
                this.user_name = false
              }
              if(x === 'Provide your Email address') {
                console.log(x)
                this.email_address = true
              }else {
                this.email_address = false
              }
              if(x === 'Enter a valid email address') {
                console.log(x)
                this.valid_address = true
              }else {
                this.valid_address = false
              }
              if(x === 'How may i assist you?') {
                console.log(x)
                this.ask_question = true
              } else {
                this.ask_question = false
              }
              // console.log(x)
            }

            if (event.type === 'MESSAGE.SENT') {
              // console.log(' message:', event);
              if (this.plate_number) {
                let plateNumber = event.value.payload.text
                this.autoCheck(plateNumber)
              }
              if (this.user_name) {
                this.userName = event.value.payload.text
              }
              if (this.email_address) {
                this.emailAddress = event.value.payload.text
              }
              if (this.ask_question) {
                console.log('herrrru question')
                this.question = event.value.payload.text
                let data = {
                  "message": event.value.payload.text,
                  "name": this.userName,
                  "email": this.emailAddress,
                  "phone_number": ""
                }
                this.sendSupport(data)
              }
              if (this.policyType) {
                // let plateNumber = event.value.payload.text
                // this.$store.commit('setCoverType', 'event.value.payload.text' )

              }
            }
            if (event.type === 'MESSAGE.SELECTED') {
              // console.log(event)
            }


            if (event.type === 'CONVERSATION.ENDED') {
              // console.log('Conversation ended:', event);
              window.botpressWebChat.sendEvent({
                type: 'createConversation',
              });
            }
          },
          ['MESSAGE.SENT', 'MESSAGE.SELECTED', 'CONVERSATION.ENDED', 'MESSAGE.RECEIVED', 'UI.CLOSED', 'quick_reply']
      );

      window.addEventListener('message', this.handleMessageEvent);
      // console.log('Botpress WebChat initialized and event listener added.');
    };
    script.onerror = () => {
      console.error('Failed to load Botpress WebChat script.');
    };
    document.head.appendChild(script);
  },
   beforeDestroy() {
    // Clean up event listeners when the component is destroyed
    window.removeEventListener('message', this.handleMessageEvent);
    console.log('Event listener removed.');
  },
  methods: {
    handleText(sentence) {
      let regex = /Paddy\s+(\S+)/; // Match "Paddy" followed by one or more spaces, then capture the next non-space characters
      let match = sentence.match(regex);
      let immediateText
      if (match) {
        immediateText = match[1]; // The captured group (1-indexed) contains the immediate text after "Paddy"
        console.log(immediateText);
      }
      return immediateText;
    },
    containsPaddy(sentence) {
        return sentence.toLowerCase().includes("thank you for choosing paddy");
      },
    handleMessageEvent(event) {
     // console.log('Message event received:', event);

      // Ensure the event is from the Botpress WebChat widget
      if (event.data && event.data.payload && event.data.payload.text) {
        const message = event.data.payload.text;
        console.log('Received message:', message);
      } else {
       // console.log('Event does not contain expected data:', event.data);
      }
    },
    async healthPlan(type) {
      const targetRoute = '/health';
      if (this.$route.path !== targetRoute) {
        this.$router.push(targetRoute);
      } else {
        console.log('Already on the /health route');
      }
      this.$store.commit('setPlansTypes', true)

      // this.$store.commit('startLoading')
      await axios({url: `${baseURL}/hmo/plans`, method: 'GET'})
          .then(res => {
            console.log(res.data.data);
            let plan = res.data.data
            const filteredObjects = plan.filter(obj =>
                obj.Name.toLowerCase().includes(type)
            );
            this.$store.commit('setPlans', filteredObjects)
            // this.$emit('show')
            // this.$store.commit('startPlateVehicleForm', true)
            // this.$store.commit('endLoading')

          })
          .catch(err => {
            this.$store.dispatch('handleError', err)
            this.$store.commit('endLoading')
          })
      this.$store.commit('endLoading')
    },
    async autoCheck(plateNumber) {
      const targetRoute = '/vehicle';
      if (this.$route.path !== targetRoute) {
        this.$router.push(targetRoute);
      } else {
        console.log('Already on the /vehicle route');
      }
      this.$store.commit('startLoading')
      await axios({url: `${baseURL}/vehicle/details/${plateNumber}`, method: 'GET'})
          .then(res => {
            console.log(res);
            this.$store.commit('setAutoCheckData', res.data.data)
            // this.$emit('show')
            this.$store.commit('startPlateVehicleForm', true)
            this.$store.commit('endLoading')

          })
          .catch(err => {
            this.$store.dispatch('handleError', err)
            this.$store.commit('endLoading')
          })
      this.$store.commit('endLoading')

    },
    async sendSupport(data) {
      await axios({url: `${baseURL}/support/bot`, method: 'POST', data})
          .then(res => {
            console.log(res);
            this.$store.commit('setAutoCheckData', res.data.data)
            // this.$emit('show')
            this.$store.commit('startPlateVehicleForm', true)
            this.$store.commit('endLoading')

          })
          .catch(err => {
            this.$store.dispatch('handleError', err)
            this.$store.commit('endLoading')
          })
      this.$store.commit('endLoading')

    }

  },
  computed: {
    ...mapState({
      plateVehicleForm: state => state.plateVehicleForm
    }),
  },
  watch: {
    messages(newMessages) {
      console.log('Messages updated:', newMessages);
    }
  }
}
</script>
<style lang="scss">
@font-face {
  font-family: "Avenir";
  font-display: auto;
  src: local("Avenir"),
   url(./fonts/Avenir/AvenirNextLTPro-Regular.otf) format("opentype");
}
:root{
  --greentext: #38bb7d;
  --deepgreentext: #00A859;
  --deepbluetext: #131b47;
}
#app {
  font-family: 'Avenir', sans-serif;
  height: 100%;
}
.l-modal{
    display: block;
    position: fixed;
    z-index: 110;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0, 0.3);
  }
  .loading-modal{
    min-height: 350px;

  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>

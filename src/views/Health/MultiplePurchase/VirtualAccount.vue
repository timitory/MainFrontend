<template>
  <div class="l-modal" >
    <div class="loading-modal w-full">
      <div class="loader bg-white w-11/12 lg:w-8/12 mx-auto rounded p-5 lg:px-8 pb-6">
        <div class="quotaion-title">
          <h6>Transfer Payment</h6>
        </div>
        <div class="transfer-group">
          <div>
            <label>BANK NAME</label>
            <p>{{virtualAccount.bank_name}}</p>
          </div>
          <div>
            <label>ACCOUNT NUMBER</label>
            <div class='transfer-pair'>
              <p class='account'>{{virtualAccount.account_number}}</p>
              <span @click="copy('account')">{{ !setCopied ? 'COPY' : 'COPIED' }}</span>
            </div>
          </div>
          <div>
            <label>ACCOUNT NAME</label>
            <div class='transfer-pair'>
              <p class='accountName'>{{virtualAccount.account_name}}</p>
              <span @click="copy('accountName')">{{ !setCopiedName ? 'COPY' : 'COPIED' }}</span>
            </div>
          </div>
          <div>
            <label>AMOUNT</label>
            <div class='transfer-pair'>
              <p class='amount'>{{virtualAccount.amount}}</p>
              <span @click="copy('amount')">{{ !setCop ? 'COPY' : 'COPIED' }}</span>
            </div>
          </div>
        </div>
        <div class='transfer-instruct'>
          <p>
            <span>INSTRUCTION:</span> A policy can only be active when payment have been made
          </p>
        </div>
        <div class='next-box text-center' @click="$router.push({name: 'ManageHealth'})">
          <div>Close</div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  components: {},
  data() {
    return {
      setCopied : false,
      setCop: false,
      setCopiedName: false,
    };
  },
  props: {
  },
  methods: {
     copy (props){
      if(props === 'account') {
        let account = document.querySelector(".account").innerHTML;
        navigator.clipboard.writeText(account);
        this.setCopied = true
        this.setCop = false
        this.setCopiedName = false
      } else if (props === 'amount') {
        let account = document.querySelector(".amount").innerHTML;
        navigator.clipboard.writeText(account);
        this.setCopied = false
        this.setCop = true
        this.setCopiedName = false
      } else {
        let account = document.querySelector(".accountName").innerHTML;
        navigator.clipboard.writeText(account);
        this.setCopied = false
        this.setCop = false
        this.setCopiedName = true
      }

      // console.log(navigator.clipboard.writeText(account));
    }
  },
  mounted() {
    console.log(this.virtualAccount)
  },
  computed: {
    ...mapState({
      virtualAccount: (state) => state.virtualAccount,
      user: (state) => state.user,
    }),
  },

}
</script>

<style scoped>
.loader {
  position: relative;
  top: 100px;
  max-width: 600px;
  background-color: #f7f7f7;
  max-height: 600px;
  overflow: scroll;

}

.custom-outline-none:focus-visible {
  outline: none!important;
}

.cancel {
  width: auto !important;
}

.custom-border {
  border: 9px solid ;
  border-image-source: url(../../../assets/images/border.png);
  border-image-slice: 61 58 51 48;
  border-image-width: 30px 30px 30px 30px;
  border-image-repeat: stretch stretch;
}

.transfer-group {
  border-radius: 6px;
  border: 1px solid #f0f0f0;
  color: #011b33;
  padding: 16px;
  width: 100%;
  font-size: 1.4rem;
  background: #f3f3f3;
  width: 97%;
  margin: 1rem auto;
}

.transfer-group > div > label {
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #343c43;
  text-transform: uppercase;
}

.transfer-group > div > p, .transfer-group > div > div > p {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  padding: 5px 0 0;
  color: #323d4b;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 0rem;
}

.transfer-pair {
  display: flex;
  justify-content: space-between;
}

.transfer-pair > span {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  padding: 5px  ;
  color: #323d4b;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background-color: #22C55E;
  cursor: pointer;
}

.transfer-instruct {
  font-size: 12px;
  font-weight: 400;
  color: gray;
  width: 97%;
  margin: auto;
}

.next-box {
  text-align: end;
  padding: 1.5rem 1rem;
}

.next-box > div, .submit-button {
  background-color: rgb(19, 27, 71);
  padding: 10px 45px !important;
  font-weight: 600;
  color: white;
  display: inline-block;
  border-radius: 8px;
  cursor: pointer;
}
</style>
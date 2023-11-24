<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name</label>
      <input type="text" v-model="personalDetails.name">
    </div>
    <div>
      <label for="email">Email</label>
      <input type="text" v-model="personalDetails.email">
    </div>
    <div>
      <label for="imgUrl">Image</label>
      <input type="text" v-model="personalDetails.imgUrl">
    </div>
    <button type="submit">Submit</button>
  </form>
  <div v-if="contacts.length > 0">
    <div v-for="contact in contacts" :key="contact._id">
      <p>Name: {{ contact.name }}</p>
      <p>Email: {{ contact.email }}</p>
      <p>Image URL: {{ contact.imgUrl }}</p>
    </div>
  </div>
</template>

<script >
import { subscribe, autorun } from 'vue-meteor-tracker'
import {ContactCollection} from '/imports/api/contacts'

export default {
  data() {
    return {
      personalDetails : {
        name: '',
        email: '',
        imgUrl: ''
      },
      contacts:[]
    };
  },
  created() {
    this.fetchContacts();
  },
  methods:{
    fetchContacts(){
      subscribe('contacts')
      this.contacts = autorun(() => ContactCollection.find({}).fetch()).result
    },
    submitForm(){
      ContactCollection.insert( this.personalDetails )
      this.personalDetails = {
        name: '',
        email: '',
        imgUrl: ''
      }
    }
  },

};
</script>

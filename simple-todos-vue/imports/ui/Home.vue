<script setup>
import Form from './Form.vue'
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';


Template.googleLogin.events({
  'click #loginWithGoogle'(event, templateInstance) {
    Meteor.loginWithGoogle({}, (error) => {
      if (error) {
        // Handle login error
        console.error('Login error:', error);
      } else {
        // Redirect or handle successful login
        console.log('Login successful!');
      }
    });
  },
});

</script>

<template>
  <h1 class="text-3xl font-bold my-6">Welcome to Meteor Wallet</h1>
  <Form />
  <template name="googleLogin">
  <button id="loginWithGoogle">Login with Google</button>
  </template>

</template>

import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

export const ContactCollection = new Mongo.Collection('contacts')

if (Meteor.isServer) {
    ContactCollection.allow({
        insert: function(userId, doc) {
          return true;
        },
      });

    Meteor.publish('contacts', function () {
      return ContactCollection.find({});
    });
}
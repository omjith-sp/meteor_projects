import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const DocumentsCollection = new Mongo.Collection('documents');

if (Meteor.isServer) {
  Meteor.publish('documents', function () {
    return DocumentsCollection.find({});
  });
}
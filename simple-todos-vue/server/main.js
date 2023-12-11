import { Meteor } from 'meteor/meteor'
import '/imports/api/contacts'
import { ServiceConfiguration } from 'meteor/service-configuration';

Meteor.startup(() => {
  ServiceConfiguration.configurations.upsert(
    { service: 'google' },
    {
      $set: {
        clientId: Meteor.settings.google.clientId,
        secret: Meteor.settings.google.secret,
      },
    },
  );
});
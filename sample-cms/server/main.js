import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { DocumentsCollection } from '/imports/api/documents';

async function insertLink({ title, url }) {
  await LinksCollection.insert({ title, url, createdAt: new Date() });
}

// export async function insertDocument({ title, createdBy, date, url }) {
//   await DocumentsCollection.insert({ title, createdBy, date, url, createdAt: new Date()});
// }

const sampleDocumentData = {
  "node": {
    "isLink": false,
    "aspects": [
        "rn:renditioned",
        "cm:versionable",
        "cm:titled",
        "cm:auditable",
        "sys:referenceable",
        "sys:localized",
        "cm:author",
        "cm:thumbnailModification"
    ],
    "isContainer": false,
    "type": "cm:content",
    "encoding": "UTF-8",
    "contentURL": "\/slingshot\/node\/content\/workspace\/SpacesStore\/ca4c1d5c-3694-4091-8b3b-238b795aea61\/tpa311.pdf",
    "size": 1566455,
    "nodeRef": "workspace:\/\/SpacesStore\/ca4c1d5c-3694-4091-8b3b-238b795aea61",
    "permissions": {
        "inherited": true,
        "roles": [
            "ALLOWED;ROLE_OWNER;All;INHERITED",
            "ALLOWED;omjith;All;INHERITED"
        ],
        "user": {
            "Delete": true,
            "Write": true,
            "CancelCheckOut": false,
            "ChangePermissions": true,
            "CreateChildren": true,
            "Unlock": false
        }
    },
    "isLocked": false,
    "mimetype": "application\/pdf",
    "properties": {
        "cm:creator": {
            "firstName": "omjith",
            "lastName": "sp",
            "displayName": "omjith sp",
            "userName": "omjith"
        },
        "cm:autoVersion": "true",
        "cm:title": "350-mW Low-Voltage Audio Power Amplifier datasheet (Rev. C)",
        "cm:modifier": {
            "firstName": "omjith",
            "lastName": "sp",
            "displayName": "omjith sp",
            "userName": "omjith"
        },
        "cm:versionType": "MAJOR",
        "cm:created": {
            "iso8601": "2023-12-08T08:06:26.269Z",
            "value": "Fri Dec 08 08:06:26 UTC 2023"
        },
        "cm:versionLabel": "1.0",
        "cm:autoVersionOnUpdateProps": "false",
        "sys:store-protocol": null,
        "sys:store-identifier": null,
        "cm:content": null,
        "cm:lastThumbnailModification": [
            "doclib:1702022795879"
        ],
        "cm:description": "SLOS207C,SLOS207, Data Sheet",
        "sys:node-uuid": null,
        "cm:name": "tpa311.pdf",
        "cm:author": "Texas Instruments, Incorporated [SLOS207,C\n]",
        "sys:node-dbid": null,
        "cm:initialVersion": "true",
        "sys:locale": null,
        "cm:modified": {
            "iso8601": "2023-12-08T08:06:43.592Z",
            "value": "Fri Dec 08 08:06:43 UTC 2023"
        }
    },
    "mimetypeDisplayName": "Adobe PDF Document"
},
"version": "1.0",
"webdavUrl": "\/webdav\/User%20Homes\/omjith\/amplifiers\/tpa311.pdf",
"likes": {
    "isLiked": false,
    "totalLikes": 0
},
"location": {
    "repositoryId": "2fa61890-ca36-4c0c-b01e-8f5d855c8fe4",
    "path": "\/amplifiers",
    "repoPath": "\/User Homes\/omjith\/amplifiers",
    "file": "tpa311.pdf",
    "parent": {}
},
"parent": {
    "isLink": false,
    "nodeRef": "workspace:\/\/SpacesStore\/39e2bdba-281e-42b2-8246-6636b4cbef2f",
    "permissions": {
        "inherited": true,
        "roles": [
            "ALLOWED;ROLE_OWNER;All;INHERITED",
            "ALLOWED;omjith;All;INHERITED"
        ],
        "user": {
            "Delete": true,
            "Write": true,
            "CancelCheckOut": false,
            "ChangePermissions": true,
            "CreateChildren": true,
            "Unlock": false
        }
    },
    "isLocked": false,
    "aspects": [
        "cm:titled",
        "cm:auditable",
        "sys:referenceable",
        "sys:localized"
    ],
    "isContainer": true,
    "type": "cm:folder",
    "properties": {
        "cm:title": "",
        "cm:creator": {
            "firstName": "omjith",
            "lastName": "sp",
            "displayName": "omjith sp",
            "userName": "omjith"
        },
        "cm:modifier": {
            "firstName": "omjith",
            "lastName": "sp",
            "displayName": "omjith sp",
            "userName": "omjith"
        },
        "cm:created": {
            "iso8601": "2023-12-08T08:06:01.758Z",
            "value": "Fri Dec 08 08:06:01 UTC 2023"
        },
        "cm:name": "amplifiers",
        "sys:store-protocol": null,
        "sys:node-dbid": null,
        "sys:store-identifier": null,
        "sys:locale": null,
        "cm:modified": {
            "iso8601": "2023-12-08T08:06:26.999Z",
            "value": "Fri Dec 08 08:06:26 UTC 2023"
        },
        "cm:description": "",
        "sys:node-uuid": null
    }
},
"nodeRef": "workspace:\/\/SpacesStore\/ca4c1d5c-3694-4091-8b3b-238b795aea61",
"fileName": "tpa311.pdf",
"displayName": "tpa311.pdf",
"actionGroupId": "document-browse",
"actions": [
    {
        "id": "document-download",
        "icon": "document-download",
        "type": "link",
        "label": "actions.document.download",
        "params": {
            "href": "{downloadUrl}",
            "target": "_blank"
        },
        "index": 99100.0,
        "subgroup": 99.0
    },
    {
        "id": "document-view-content",
        "icon": "document-view-content",
        "type": "link",
        "label": "actions.document.view",
        "params": {
            "href": "{viewUrl}"
        },
        "index": 99110.0,
        "subgroup": 99.0
    },
    {
        "id": "document-edit-properties",
        "icon": "document-edit-properties",
        "type": "javascript",
        "label": "actions.document.edit-metadata",
        "params": {
            "function": "onActionDetails"
        },
        "index": 99130.0,
        "subgroup": 99.0
    },
    {
        "id": "document-upload-new-version",
        "icon": "document-upload-new-version",
        "type": "javascript",
        "label": "actions.document.upload-new-version",
        "params": {
            "function": "onActionUploadNewVersion"
        },
        "index": 99140.0,
        "subgroup": 99.0
    },
    {
        "id": "document-edit-offline",
        "icon": "document-edit-offline",
        "type": "javascript",
        "label": "actions.document.edit-offline",
        "params": {
            "function": "onActionEditOffline"
        },
        "index": 99210.0,
        "subgroup": 99.0
    },
    {
        "id": "document-copy-to",
        "icon": "document-copy-to",
        "type": "javascript",
        "label": "actions.document.copy-to",
        "params": {
            "function": "onActionCopyTo"
        },
        "index": 99250.0,
        "subgroup": 99.0
    },
    {
        "id": "document-move-to",
        "icon": "document-move-to",
        "type": "javascript",
        "label": "actions.document.move-to",
        "params": {
            "function": "onActionMoveTo"
        },
        "index": 99260.0,
        "subgroup": 99.0
    },
    {
        "id": "document-delete",
        "icon": "document-delete",
        "type": "javascript",
        "label": "actions.document.delete",
        "params": {
            "function": "onActionDelete"
        },
        "index": 99270.0,
        "subgroup": 99.0
    },
    {
        "id": "document-assign-workflow",
        "icon": "document-assign-workflow",
        "type": "javascript",
        "label": "actions.document.assign-workflow",
        "params": {
            "function": "onActionAssignWorkflow"
        },
        "index": 99280.0,
        "subgroup": 99.0
    },
    {
        "id": "document-manage-repo-permissions",
        "icon": "document-manage-permissions",
        "type": "link",
        "label": "actions.document.manage-permissions",
        "params": {
            "href": "{managePermissionsUrl}"
        },
        "index": 99298.0,
        "subgroup": 99.0
    },
    {
        "id": "document-manage-aspects",
        "icon": "document-manage-aspects",
        "type": "javascript",
        "label": "actions.document.manage-aspects",
        "params": {
            "function": "onActionManageAspects"
        },
        "index": 99300.0,
        "subgroup": 99.0
    }
],
"indicators": [],
"metadataTemplate": {
    "id": "default",
    "title": null,
    "banners": [],
    "lines": [
        {
            "index": "10",
            "template": "{date}{size}",
            "view": ""
        },
        {
            "index": "20",
            "template": "{description}",
            "view": "detailed"
        },
        {
            "index": "30",
            "template": "{tags}",
            "view": "detailed"
        },
        {
            "index": "50",
            "template": "{social}",
            "view": "detailed"
        }
    ]
}
};

async function insertDocument(documentData) {
  await DocumentsCollection.insert(documentData);
}

// Function to generate a random date between two dates
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

Meteor.startup(async () => {
  if ((await LinksCollection.find().count()) === 0) {
    await insertLink({
      title: 'Do the Tutorial',
      url: 'https://vuejs.org/guide/quick-start.html',
    });
  }

  const existingCount = await DocumentsCollection.find().count();
  const documentsToCreate = 10 - existingCount;
  if (documentsToCreate > 0) {
    for (let i = 0; i < documentsToCreate; i++) {
      // Clone the sample document data and modify properties if needed
      const clonedDocumentData = { ...sampleDocumentData };
      // Modify specific properties if needed
      clonedDocumentData.node.properties['cm:title'] = `New Title ${i + 1}`;
      // Modify other properties similarly as needed

      // Insert the modified document data into the collection
      await insertDocument(clonedDocumentData);
    }
  }


  // if ((await DocumentsCollection.find().count()) < 20) {
    // await insertDocument({
    //   title: 'CMC Council meeting notes 20231111.pdf',
    //   createdBy: 'Dr. Vinay',
    //   date: "02 Jan 2023",
    //   url: 'https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf',
    // });
    
    
    // const existingCount = await DocumentsCollection.find().count();
    // const documentsToCreate = 20 - existingCount;
  
    // if (documentsToCreate > 0) {
    //   const currentDate = new Date();
    //   const startDate = new Date(2023, 0, 1); 
    //   const endDate = new Date(2023, 1, 28); 
  
    //   for (let i = 0; i < documentsToCreate; i++) {
    //     const randomTitle = `CMC Council meeting notes ${currentDate.getFullYear()}${i + 1}.pdf`;
    //     const randomDateVal = randomDate(startDate, endDate);
    //     const createdBy = 'Dr.Vinay';
  
    //     await insertDocument({
    //       title: randomTitle,
    //       createdBy,
    //       date: randomDateVal.toDateString(),
    //       url: 'https://www.example.com/sample.pdf',
    //     });
    //   }
    // }
  // }
});

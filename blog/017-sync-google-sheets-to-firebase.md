---
title: Sync Google Sheets to a Firebase Realtime Database
date: May 11, 2019
description: Often times when testing a design, it’s useful to create a prototype with realistic data. And giving UX Researchers an easy way to manipulate data allows them to test multiple variations very quickly and...
permalink: /blog/sync-google-sheets-to-firebase.html
prev: /blog/morning-thoughts.html
next: /blog/designing-for-color-blindness.html
tags:
  - google sheets
  - firebase
  - spreadsheet
  - web design colorblind
  - firebase database
---

Often times when testing a design, it’s useful to create a prototype with realistic data. And giving UX Researchers an easy way to manipulate data allows them to test multiple variations very quickly and see the changes in real time. In this short tutorial we will show you how to sync a Google Sheets spreadsheet to a Firebase Realtime database and use the firebase database in you hi-fi prototype as a data source.

Using a Realtime database is easier and faster than directly using the Sheets API. The Firebase free tier also supports up to 100,000 simultaneous connections vs. 400 using the Sheets API. Once the spreadsheet is synced, you can use any stack to access your data very easily.

## How to

### Step 1: Create your Firebase project

If you haven’t already, sign up for Firebase using the free tier and then create your project.

![Firebase home screen](https://res.cloudinary.com/websiddu/image/upload/v1557636671/blog/017/1.png)

### Step 2: Create your Realtime database

Navigate to Develop -> Database and click the “Create database” button.

![Create a database](https://res.cloudinary.com/websiddu/image/upload/v1557636671/blog/017/2.png)

Make sure you change your read and write permissions to “true” and click publish.

![Change the rules](https://res.cloudinary.com/websiddu/image/upload/v1557636671/blog/017/3.png)

### Step 3: Create your spreadsheet and populate it using this format

The first row contains your keys. The first key should be set to `id` and each row should be labeled with the corresponding number, starting with 0. An easy way to set the id for each row in column A is to enter this formula `= COUNTA($B$2:B2)` into cell A2 and then apply that to all rows.

![Spreadsheet Data](https://res.cloudinary.com/websiddu/image/upload/v1557636671/blog/017/5.png)

### Step 4: Create your Apps Script

In the menu, go to Tools -> Script editor. It will take you to a code editor with the following file open: `code.gs`. Replace the contents with this snippet. Search for this code at the top of the file: Replace the `spreadsheetID` placeholder with your own. The ID is the bolded part in the full spreadsheet URL.

Replace the `firebaseUrl` placeholder with your database URL from Step 2. In your menu, go to View -> Show manifest file, which will add a file called `appsscript.json`.

This will add an `appsscript.json` file to your project. Replace the contents with the following [snippet](https://gist.github.com/edwinlee/85ac9033a133d056a8ded6b74f27f30f).

### Step 5: Start the sync

In the menu, go to Run -> Run function -> doGet. You’ll see a prompt to review and accept the permissions. This allows the App Script project to access the spreadsheet and upload data to Firebase. Click “Review Permissions” and then click “Allow.”

<img src="https://res.cloudinary.com/websiddu/image/upload/v1557636671/blog/017/11.png#center" width="400px">

Congrats, your Firebase Realtime database has now been populated with the data from your spreadsheet! Any further edits will sync seamlessly and you can even share your spreadsheet with other people.

## Tip & Tricks

### Add Security

If you are feeling fancy you can add a little more security to the firebase database. Goto the firebase dashboard under change the rules to the following. And of-course you have to implement the Firebase Authentication on your prototype to make sure the user can read the data. And set the write method to false so, only the sheets can write to the database.

### Generating an Array

In the sheet if your id start with 0 and increments by 1 they firebase will spit out an array instead of a key value pairs.

<img src="https://res.cloudinary.com/websiddu/image/upload/v1557636671/blog/017/13.png" width="320px"/>

the above will result in the following,

```json
{
  "leeanne": {
    "firstName": "Leeanne",
    "id": "leeanne",
    "lastName": "Nolleau"
  },
  "neli": {
    "firstName": "Nelia",
    "id": "neli",
    "lastName": "McCray"
  },
  "padriac": {
    "firstName": "Padriac",
    "id": "padriac",
    "lastName": "Crottagh"
  }
}
```

<img src="https://res.cloudinary.com/websiddu/image/upload/v1557636671/blog/017/14.png" width="320px"/>

and this will result in the following,

```json
[
  {
    "firstName": "Nelia",
    "id": 0,
    "lastName": "McCray"
  },
  {
    "firstName": "Leeanne",
    "id": 1,
    "lastName": "Nolleau"
  },
  {
    "firstName": "Padriac",
    "id": 2,
    "lastName": "Crottagh"
  }
]
```

### Nested data

When converting a table to json its only possible to do one level of nesting. But what if you need a nested data, the script provided above have special function that lets you create nested object. Simple name the title of the column with the path of the object join key using double underscore \_\_, like if you want to nest street under address you can simply say `address__street`, this means you cannot have a column named just address in your sheet.
will generate an object like, and of course you can nest any levels.

<img src="https://res.cloudinary.com/websiddu/image/upload/v1557636671/blog/017/15.png" />

this above data will result in,

```json
[
  {
    "address": {
      "city": "North Hollywood",
      "state": "CA",
      "street": "934 Del Mar Point",
      "zipcode": 70129
    },
    "firstName": "Nelia",
    "id": 0,
    "lastName": "McCray"
  },
  {
    "address": {
      "city": "Rockford",
      "state": "OH",
      "street": "4723 8th Park",
      "zipcode": 47747
    },
    "firstName": "Leeanne",
    "id": 1,
    "lastName": "Nolleau"
  },
  {
    "address": {
      "city": "Panama City",
      "state": "PA",
      "street": "3 Calypso Park",
      "zipcode": 85255
    },
    "firstName": "Padriac",
    "id": 2,
    "lastName": "Crottagh"
  }
]
```

## References

1. [Google App Script Library Provider](https://sites.google.com/site/scriptsexamples/new-connectors-to-google-services/firebase)
2. [Read and write data in Firebase from Apps Script](https://sites.google.com/site/scriptsexamples/new-connectors-to-google-services/firebase/tutorials/read-and-write-data-in-firebase-from-apps-script)
3. [Sheets Installable Triggers](https://developers.google.com/apps-script/guides/triggers/installable)
4. [Script Service](https://developers.google.com/apps-script/reference/script/)

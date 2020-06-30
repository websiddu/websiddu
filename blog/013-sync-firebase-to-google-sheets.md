---
title: Sync data from Firebase to Google sheets
date: May 26, 2020
description: In this blog post I will describe how to sync new data written to a Firebase database to a Google Sheet. It includes a method for obtaining, storing, and using Oauth2 tokens for Google API access.
permalink: /blog/javascript-remove-element-from-array.html
prev: /blog/how-to-design-a-ux-portfolio-website-part1.html

autometa:
  author:
    name: Siddhartha Gudipati
    twitter: websiddu

tags:
  - google sheets
  - firebase
  - spreadsheet
  - web design colorblind
  - firebase database
---

In one of my earlier posts I have described how to sync data from [Google sheets to Firebase](https://websiddu.com/blog/sync-google-sheets-to-firebase.html). In some cases it desired the inverse i.e Firebase → Google Sheets. Firebase is extremely powerful and very approachable to do such kinds of manipulations.

In this blog post I will describe how to sync new data written to a Firebase database to a Google Sheet. It includes a method for obtaining, storing, and using Oauth2 tokens for Google API access.

### Step 1: Enable Google Sheets API

Follow step 1 to enable Google Sheets API in your Firebase project: https://developers.google.com/sheets/api/quickstart/nodejs

### Step 2:

Create a service account in your project; save the json file in the functions folder with the file name serviceAccount.json.

### Step 3:

Create a spreadsheet in Drive; rename the first worksheet 'Scores'; add Player and Score headers in row 1, columns A and B.

### Step 4:

Share it with edit access to the email address in your service account.

### Step 5:

Copy the spreadsheet id (from its URL) to the spreadsheetId string in the TypeScript source.

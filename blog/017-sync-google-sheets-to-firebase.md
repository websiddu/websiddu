---
title: Sync Google Sheets to a Firebase Realtime Database
date: May 11, 2019
description: Often times when testing a design, it’s useful to create a prototype with realistic data. And giving UX Researchers an easy way to manipulate data allows them to test multiple variations very quickly and...
permalink: /blog/sync-google-sheets-to-firebase.html
prev: /blog/morning-thoughts.html
state: draft
---

[[toc]]

Often times when testing a design, it’s useful to create a prototype with realistic data. And giving UX Researchers an easy way to manipulate data allows them to test multiple variations very quickly and see the changes in real time. In this short tutorial we will show you how to sync a Google Sheets spreadsheet to a Firebase Realtime database and use the firebase database in you hi-fi prototype as a data source.

Using a Realtime database is easier and faster than directly using the Sheets API. The Firebase free tier also supports up to 100,000 simultaneous connections vs. 400 using the Sheets API. Once the spreadsheet is synced, you can use any stack to access your data very easily.

## How to

### Step 1: Create your Firebase project

If you haven’t already, sign up for Firebase using the free tier and then create your project.

### Step 2: Create your Realtime database

Navigate to Develop -> Database and click the “Create database” button.
Make sure you change your read and write permissions to “true” and click publish.

### Step 4: Create your spreadsheet and populate it using this format

The first row contains your keys. The first key should be set to `id` and each row should be labeled with the corresponding number, starting with 0. An easy way to set the id for each row in column A is to enter this formula `= COUNTA($B$2:B2)` into cell A2 and then apply that to all rows.

### Step 4: Create your Apps Script

In the menu, go to Tools -> Script editor. It will take you to a code editor with the following file open: `code.gs`. Replace the contents with this snippet. Search for this code at the top of the file: Replace the `spreadsheetID` placeholder with your own. The ID is the bolded part in the full spreadsheet URL.

Replace the `firebaseUrl` placeholder with your database URL from Step 2. In your menu, go to View -> Show manifest file, which will add a file called `appsscript.json`.

This will add an `appsscript.json` file to your project. Replace the contents with the following snippet.

### Step 5: Start the sync

In the menu, go to Run -> Run function -> doGet. You’ll see a prompt to review and accept the permissions. This allows the App Script project to access the spreadsheet and upload data to Firebase. Click “Review Permissions” and then click “Allow.”

Congrats, your Firebase Realtime database has now been populated with the data from your spreadsheet! Any further edits will sync seamlessly and you can even share your spreadsheet with other people.

## Tip & Tricks

### Add Security

If you are feeling fancy you can add a little more security to the firebase database. Goto the firebase dashboard under change the rules to the following. And of-course you have to implement the Firebase Authentication on your prototype to make sure the user can read the data. And set the write method to false so, only the sheets can write to the database.

### Generating an Array

In the sheet if your id start with 0 and increments by 1 they firebase will spit out an array instead of a key value pairs.

### Nested data

When converting a table to json its only possible to do one level of nesting. But what if you need a nested data, the script provided above have special function that lets you create nested object. Simple name the title of the column with the path of the object join key using double underscore \_\_, like if you want to nest street under address you can simply say `address__street`, this means you cannot have a column named just address in your sheet.
will generate an object like, and of course you can nest any levels.

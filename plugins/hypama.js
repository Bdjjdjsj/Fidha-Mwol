/* Copyright (C) 2021 AMALSER.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Amalser - Amal
Wa.me/+919895828468
*/

const Neotro = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Neotro.addCommand({pattern: 'hyper', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: '.all', description: " ", rowId:" rowid1"},
        {title: '.download', description: " ", rowId:"rowid2"},
        {title: '.misc', description: "\n\n ", rowId:" rowid3"},
        {title: '.admin', description: " ", rowId:" rowid4"},
       ]
       
       const sections = [{title: "Cʀᴇᴀᴛᴇᴅ Bʏ Hʏᴘᴇʀ Sɪʀ✨", rows: rows}]
       
       const button = {
        buttonText: 'Տᴇʟᴇᴄᴛ α Ꮇᴇɴᴜ',
        description: "Hɪ Bʀᴏ Iᴛs Mᴇ Wʜᴀᴛsᴀᴘᴘ Bᴏᴛ🎀",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));

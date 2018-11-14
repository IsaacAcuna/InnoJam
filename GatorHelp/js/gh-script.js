"use strict";

function Player(name) { // Player constructor
    this.name = name;
    this.time = 0;
    this.matchCount = 0;
    this.flipCount = 0;
    this.playerRatio = 0;
    this.timeBonus = [];
    this.points = [];
}
Player.prototype = { // Player methods
    constructor: Player,
    addTime: function(time) {
        this.timeBonus.push(time);
    },
    addPoints: function(pointsAddition) {
        this.points.push(pointsAddition);
    },
    getEffects: function() {
        let bonus = this.timeBonus.length > 0 ? this.timeBonus.join(',') :
            'No bonuses';
        return bonus;
    },
    getPoints: function() {
        let points = this.points.length > 0 ? this.points.join(',') :
            'No points';
        return points;
    },
    getTime: function() {
        return this.time;
    },
    getRatio: function() {
        return this.playerRatio;
    },
    getFlips: function() {
        return this.flipCount;
    }
};

function getUserData() { 
    if (!navigator.cookieEnabled) {
        return false;
    }
    const cookieName = "GatorHelper=";
    const cookies = document.cookie.split(';');
    let cookie;
    for (let i = 0; i < cookies.length; i++) { 
        let result = cookies[i].startsWith(cookieName);
        if (result) {
            cookie = cookies[i];
        }
    }
    if (cookie !== undefined) {
        cookie = cookie.substring(cookieName.length);
        return JSON.parse(cookie);
    }
    return false;
}

function setUserData(userObj) { 
    if (!navigator.cookieEnabled) {
        return false;
    }
    let userPayload = JSON.stringify(userObj);
    if (userPayload) {
        let expiration = new Date();
        expiration.setDate(expiration.getDate() + 30);
        document.cookie = 'GatorHelper=' + userPayload + '; expires=' +
            expiration.toUTCString() + '; path=/';
        return true;
    }
    return false;
}

function expireCookie() {
    if (!navigator.cookieEnabled) {
        return false;
    }
    document.cookie = 'GatorHelper=; Path=/; Max-Age=-99999999;';
    return true;
}

function popUp(id, msg, dismissable = 1) { // Create a modal with content, that may be dismissable.
    if ( id == undefined || msg == undefined ) {
        console.info('id/msg are required parameters');
        return false;
    }

    const interstitial = '<div id="box-' + id + '" class=".gh-cntr"><div id="header-'+id+'">Gator Helper Notice <span id="dismiss-msg">x</span></div></div>
    const ourMsg  = document.getElementById('box-' + id);
          
    ourMsg.innerText = msg;
    modal.style.display = 'block';
    if (dismissable !== undefined) { // If we need to create a listener for a dismissal button.
        const dismissal = document.getElementById('dismiss-modal');
        dismissal.onclick = function() {
            $("box-" + id ).remove();
        };
    }
    return true;
}


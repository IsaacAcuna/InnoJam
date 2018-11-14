"use strict";

const guideData = [{
    guideId: 1, // Arbitrary unique ID
    guideTitle: 'Login to Portal', // Name for the guide in the menu
    guideUrl: '*', // Only display this guide if the page URL contains
    guideOrder: 1, // Order in the menu
    guideGoals: [{ // Any number of goals or "milestones" we may want to include
        guideGoal: {
            goalTitle: 'Customer does a thing',
            goalSelector: '.selector',
            goalAction: 'click'
        }
    }, {
        guideGoal: {
            goalTitle: 'Customer finished a thing',
            goalSelector: '#thing',
            goalAction: 'hover'
        }
    }],
    guideSteps: [{
        guideStep: {
            stepPlayOrder: 1,
            stepTitle: 'Click here', // Header shown in the popup box
            stepMsg: 'Input your email address here.', // Content of the message box
            stepSelector: '.input', // Selector that the box points to
            stepAction: 'keyup', // Action that will automatically proceed the walkthrough.
            stepDismissable: 0, // If this action can be dismissed by clicking elsewhere/abandoning the guide
            stepDirection: 'down', // Desired location of the popup box
            stepButtons: [{ // Optional buttons (If no buttons declared stepAction on stepSelector will be the only way to proceed.)
                stepButton: {
                    buttonType: 'link', // Button will link to another page
                    buttonText: 'More Information', // Text of the button
                    buttonHref: 'https://www.hostgator.com/help', // URL the button will point to
                    buttonDismisses: 0, // Should the guide be ended if this button is clicked
                    buttonNewTab: 1, // Should we attempt to open the link in a new tab/window.
                }
            }, {
                stepButton: {
                    buttonType: 'playNextStep', // Move forward in the guide
                    buttonText: 'Next', // text of the button
                }
            }]
        }
    }, {
        guideStep: {
            stepPlayOrder: 2,
            stepTitle: 'Click here',
            stepMsg: 'Input your password here.',
            stepSelector: '.input',
            stepAction: 'keyup',
            stepDismissable: 0,
            stepDirection: 'down',
            stepButtons: [{
                stepButton: {
                    buttonType: 'standard',
                    buttonText: 'More Information',
                    buttonHref: 'https://www.hostgator.com/help',
                    buttonDismisses: 0,
                    buttonNewTab: 1,
                }
            }, {
                stepButton: {
                    buttonType: 'playNextStep',
                    buttonText: 'Next',
                }
            }]
        }
    }, {
        guideStep: {
            stepPlayOrder: 3,
            stepTitle: 'Click here',
            stepMsg: 'Click here to login.',
            stepSelector: '.button',
            stepAction: 'click',
            stepDismissable: 0,
            stepDirection: 'down',
            stepButtons: [{
                stepButton: {
                    buttonType: 'standard',
                    buttonText: 'More Information',
                    buttonHref: 'https://www.hostgator.com/help',
                    buttonDismisses: 0,
                    buttonNewTab: 1,
                }
            }, {
                stepButton: {
                    buttonType: 'playNextStep',
                    buttonText: 'Next',
                }
            }]
        }
    }];
}, {
    guideId: 2,
    guideTitle: 'Create an email account',
    guideGoals: [{
        guideGoal: {
            goalTitle: 'Customer does a thing',
            goalSelector: '.selector',
            goalAction: 'click'
        }
    }, {
        guideGoal: {
            goalTitle: 'Customer finished a thing',
            goalSelector: '#thing',
            goalAction: 'hover'
        }
    }],
    guideSteps: [{
        guideStep: {
            stepPlayOrder: 1,
            stepTitle: 'Click here',
            stepMsg: 'click this thing.',
            stepSelector: '.selector',
            stepAction: 'click',
            stepDismissable: 0,
            stepDirection: 'down',
            stepButtons: [{
                stepButton: {
                    buttonType: 'standard',
                    buttonText: 'More Information',
                    buttonHref: 'https://www.hostgator.com/help',
                    buttonDismisses: 0,
                    buttonNewTab: 1,
                }
            }, {
                stepButton: {
                    buttonType: 'playNextStep',
                    buttonText: 'Next',
                }
            }]
        }
    }, {
        guideStep: {
            stepPlayOrder: 2,
            stepTitle: 'Click here',
            stepMsg: 'Input your password here.',
            stepSelector: '.input',
            stepAction: 'keyup',
            stepDismissable: 0,
            stepDirection: 'down',
            stepButtons: [{
                stepButton: {
                    buttonType: 'standard',
                    buttonText: 'More Information',
                    buttonHref: 'https://www.hostgator.com/help',
                    buttonDismisses: 0,
                    buttonNewTab: 1,
                }
            }, {
                stepButton: {
                    buttonType: 'playNextStep',
                    buttonText: 'Next',
                }
            }]
        }
    }, {
        guideStep: {
            stepPlayOrder: 3,
            stepTitle: 'Click here',
            stepMsg: 'Click here to login.',
            stepSelector: '.button',
            stepAction: 'click',
            stepDismissable: 0,
            stepDirection: 'down',
            stepButtons: [{
                stepButton: {
                    buttonType: 'standard',
                    buttonText: 'More Information',
                    buttonHref: 'https://www.hostgator.com/help',
                    buttonDismisses: 0,
                    buttonNewTab: 1,
                }
            }, {
                stepButton: {
                    buttonType: 'playNextStep',
                    buttonText: 'Next',
                }
            }]
        }
    }];
}];

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


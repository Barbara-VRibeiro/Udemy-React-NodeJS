const sendgrid = require('@sendgrid/mail');
const keys = require('../config/keys');

sendgrid.setApiKey(keys.sendGridKey);

class Mailer {
    constructor({ subject, recipients }, content) {
        this.from = 'barbara.vribeiro03@gmail.com';
        this.subject = subject;
        this.html = content;
        this.recipients = recipients.map(({ email }) => email);
    }

    async send() {
        const msg = {
            to: this.recipients,
            from: this.from,
            subject: this.subject,
            html: this.html,
        };

        try {
            const [response] = await sendgrid.sendMultiple(msg);
            console.log('✅ Email(s) sent successfully');
            return response;
        } catch (error) {
            console.error('❌ SendGrid error:', error);
            if (error.response) console.error(error.response.body);
            throw error;
        }
    }
}

module.exports = Mailer;


// const sendgrid = require('@sendgrid/mail');
// const helper = sendgrid.mail;
// const keys = require('../config/keys');

// class Mailer extends helper.Mail {
//     constructor({ subject, recipients }, content) {
//         super();

//         this.sgApi = sendgrid(keys.sendGridKey);
//         this.from_email = new helper.Email('barbara.vribeiro03@gmail.com');
//         this.subject = subject;
//         this.body = new helper.Content('text/html', content);
//         this.recipients = this.formatAddresses(recipients);

//         this.addContent(this.body);
//         this.addClickTracking();
//         this.addRecipients();
//     }

//     formatAddresses(recipients) {
//         return recipients.map(({ email }) => {
//             return new helper.Email(email);
//         });
//     }

//     addClickTracking() {
//         const trackingSettings = new helper.TrackingSettings();
//         const clickTracking = new helper.ClickTracking(true, true);

//         trackingSettings.setClickTracking(clickTracking);
//         this.addTrackingSettings(trackingSettings);
//     }

//     addRecipients() {
//         const personalize = new helper.Personalization();

//         this.recipients.forEach((recipient) => {
//             personalize.addTo(recipient);
//         });
//         this.addPersonalization(personalize);
//     }

//     async send() {
//         const request = this.sgApi.emptyRequest({
//             method: 'POST',
//             path: '/v3/mail/send',
//             body: this.toJSON(),
//         });
//         console.log('SEND REQUEST:', request);

//         const response = this.sgApi.API(request);
//         return response;
//     }
// }

// module.exports = Mailer;
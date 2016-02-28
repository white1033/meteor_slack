Meteor.startup(function() {
    Factory.define('message', Messages, {
        text() {
            return Fake.sentence();
        }
    });

    Messages.remove({});

    if (Messages.find({}).count() === 0) {
        _(10).times(function(n) {
            Factory.create('message');
        });
    }
});

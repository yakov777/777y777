const FactoryGirl = require('factory-girl');
const factory = FactoryGirl.factory;
factory.setAdapter(new FactoryGirl.ObjectAdapter());
class LogRequests {
}
factory.define('LogRequests', LogRequests, {
    date: () => new Date().toJSON().slice(0, 19).replace('T', ' '),
    url_path: () => Math.random() >= 0.5 ? '/' : '/log-request',
    user_agent: 'Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape6/6.1'
});
module.exports = { factory };

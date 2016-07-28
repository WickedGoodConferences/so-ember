import Ember from 'ember';
import ajax from 'ember-ajax';

export default Ember.Route.extend({
  actions: {
    submit(email) {
      ajax({
        url: 'https://ti.to/wicked-good/soember-2017/interested_users',
        method: 'post',
        data: {
          authenticity_token: 'OROrTXMkBQ+E9tCawQBFjenrjqBKY0HV8BZn7E7rAkM=',
          interested_user: {
            email: email
          }
        }
      }).then((resp) => {
        debugger;
      }).fail((resp) => {
        debugger;
      });
    }
  }
});

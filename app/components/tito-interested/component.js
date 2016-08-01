import Ember from 'ember';

const {
  get,
  setProperties,
  inject
} = Ember;

export default Ember.Component.extend({
  ajax: inject.service(),
  tagName: 'form',
  classNames: ['form'],
  email: '',
  isError: true,

  actions: {
    submit(email) {
      return get(this, 'ajax').request('https://ti.to/wicked-good/soember-2017/interested_users', {
        method: 'post',
        crossDomain: true,
        dataType: 'html',
        data: {
          authenticity_token: 'OROrTXMkBQ+E9tCawQBFjenrjqBKY0HV8BZn7E7rAkM=',
          interested_user: {
            email: email
          }
        }
      }).then((response) => {
        let $response = this.$(response);
        let alreadyRegistered = !!$response.find('.help-block:contains("has already registered")').length;
        let invalid = !!$response.find('.help-block:contains("invalid")').length;
        let valid = !!$response.find('.register-interest-success').length;

        if (valid) {
          setProperties(this, {
            isError: false,
            message: 'Thank you for registering!'
          });
        }
        if (alreadyRegistered) {
          setProperties(this, {
            isError: true,
            message: 'That email address has already registered interest.'
          });
        }
        if (invalid) {
          setProperties(this, {
            isError: true,
            message: 'That email address is invalid.'
          });
        }
      }).catch(() => {
        setProperties(this, {
          isError: true,
          message: 'An unknown error has occurred.'
        });
      });
    }
  }
});

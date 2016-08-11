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
      let url = 'https://dockyard.us9.list-manage.com/subscribe/post-json?&c=?';
      let data = {
        u: 'b90cff2a22ea042593f18ca6a',
        id: '29553786a0',
        MERGE0: email
      };

      return get(this, 'ajax').request(url, {
        dataType: 'jsonp',
        data: data
      }).then((response) => {
        setProperties(this, {
          isError: response.result !== 'success',
          message: response.msg,
          email: ''
        });

      }).catch(() => {
        setProperties(this, {
          isError: true,
          message: 'An unknown error has occurred.',
          email: ''
        });
      });
    }
  }
});

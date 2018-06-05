var app = new Vue({
    el: '#app',
    data: {
      someText: 'Alohaaaaaaaaaa',
      girlfriends : [
          "Alexa Bliss",
          "Sasha Banks",
          "Yoona"
      ],
      txtMessage : "Change this"
    },
    methods: {
        onClickBaby: function () {
          this.someText = this.someText.split('').reverse().join('')
        }
      }

  })

  // --------------
  // Below for example 5
  // ---------------

  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  

  var app2 = new Vue({
    el: '#app-5',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  })
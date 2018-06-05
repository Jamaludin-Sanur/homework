
  Vue.component('blog-component', {
    props: ['passed'],
    template: '<li>{{ passed.text }}</li>'
  })
  

   new Vue({
    el: '#article',
    data: {
      shit : "aaaa",
      blogs: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  });

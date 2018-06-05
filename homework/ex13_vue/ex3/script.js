var blogHeader = {
  props: ['passed'],
  template: '<h1> The header </h1>'
}

var blogContent = {
  props: ['passed'],
  template: '<li>{{ passed.text }}</li>'
}

var blogFooter = {
  props: ['passed'],
  template: '<h1>The footer</h1>'
};

// Register Component
Vue.component('blog-header', blogHeader)
Vue.component('blog-content', blogContent)
Vue.component('blog-footer', blogFooter)

// Instantiate component
new Vue({
  el: '#theBlog',
  data: {
    shit: "aaaa",
    blogs: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
});

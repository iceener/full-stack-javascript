Vue.component('comments', {
    props: ['comments'],
    template: `
        <div class="comments">
          <div class="comment" v-for="comment in comments">
            <span class="comment__date">({{ comment.created_at.slice(0,-14) }})</span> <br>
            <strong>{{ comment.name }}:</strong><br>
            {{ comment.content }} <br>
          </div>
        </div>
    `
});
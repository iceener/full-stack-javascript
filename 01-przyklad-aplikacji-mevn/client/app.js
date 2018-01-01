import './components/comment';

const app = new Vue({
    el: '.app',
    data: {
        newComment: {},
        comments: []
    },
    methods: {

        addComment: function() {
            axios.post('/comments', {
                name: this.newComment.name,
                content: this.newComment.content
            })
            .then((response) => {
                this.comments.push(response.data.comment);
                this.newComment = {};
            });
        }

    },
    mounted() {
        axios.get('/comments').then((response) => {
            this.comments = response.data.comments;
        });
    }
});
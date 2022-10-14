//disabled because we have Vue available thanks to our CDN
// eslint-disable-next-line no-undef
const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'john',
                    name: 'John Wick',
                    phone: '01234 5678 991',
                    email: 'John@localhost.com'
                },
                {
                    id: 'jenny',
                    name: 'Jenny',
                    phone: '09876 543 221',
                    email: 'Jenny@localhost.com'
                }
            ]
        }
    },
    methods: {}
});

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails()">
        {{ detailsAreVisible ? 'Hide': 'Show' }} Details
        </button>
        <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'jenny',
                name: 'Jenny',
                phone: '09876 543 221',
                email: 'Jenny@localhost.com'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount("#app")
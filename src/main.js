import { createApp } from 'vue'
import TestButton from 'test-button';
import 'test-button/dist/style.css';
import './style.css'
import App from './App.vue'

const app = createApp(App);

app.use(TestButton);

app.mount('#app')

/* eslint-disable */
import Vue from 'vue';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/zh-cn.js';
import { Editor } from '@toast-ui/vue-editor';

Vue.component('editor', Editor);

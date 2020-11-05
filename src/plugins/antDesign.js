import Vue from 'vue';

import {
  Button,
  Calendar,
  ConfigProvider,
  Empty,
  List,
  Comment,
  Avatar,
  FormModel,
  Tooltip,
  Input,
  Icon,
  Row,
  Col,
  Alert,
  Anchor,
} from 'ant-design-vue';

// ant design of vue
[
  Button,
  Calendar,
  ConfigProvider,
  Empty,
  List,
  List.Item,
  Comment,
  Avatar,
  FormModel,
  FormModel.Item,
  Tooltip,
  Input,
  Icon,
  Row,
  Col,
  Alert,
  Anchor,
  Anchor.Link,
].forEach((item) => {
  Vue.component(item.name, item);
});

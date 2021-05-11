import States from "../component/States";
import Tree from "../component/Tree";
import UseReducer from "../component/UseReducer";
import NotFound from '../component/404';
import Login from '../pages/Login';
export const routerMap=[
  { path: "/", name: "States", component: States, auth: true },
  { path: "/Tree", name: "Tree", component: Tree, auth: true },
  { path: "/UseReducer", name: "UseReducer", component: UseReducer,auth: false },
  { path: "/404", name: "404", component: NotFound },
  { path: "/login", name: "Login", component: Login },
]
import * as CnkComponents from './components/';

function register(Vue){
  for ( let k in CnkComponents ){
    Vue.component(k, CnkComponents[k]);
  }
}

export { CnkComponents };
export default {
  register
};

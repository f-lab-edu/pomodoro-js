import applyDiff from "../utils/applyDiff.js";

export default class Component {
  state;
  parent;
  props;
  target;
  constructor(parent, target, props) {
    this.parent = parent;
    this.props = props;
    this.target = target;
    this.render();
  }
  mount() {
    // 렌더링 후 진행할 내용 ex) 자식 컴포넌트 실행
  }
  template() {
    // 렌더링 하고자 하는 DOM 노드를 리턴하는 함수 (인스턴스에서 override)
    return this.target.cloneNode(true);
  }
  render() {
    this.parent.replaceChildren(this.template());
    // TODO: applyDiff 적용하기, parent/target 정리하기, path param 구현
    // applyDiff(this.parent, this.parent, this.template());
    this.mount();
  }
  setState(newState) {
    this.state = newState;
    this.render();
  }
}

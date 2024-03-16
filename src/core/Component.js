import applyDiff from "../utils/applyDiff.js";

export default class Component {
  state;
  parent;
  props;
  constructor(parent, props) {
    this.parent = parent;
    this.props = props;
    this.render();
  }
  mount() {
    // 렌더링 후 진행할 내용 ex) 자식 컴포넌트 실행
  }
  template() {
    // 렌더링 하고자 하는 DOM 노드를 리턴하는 함수 (인스턴스에서 override)
    return this.parent.cloneNode(true);
  }
  render() {
    let child;
    if (this.parent.childElementCount === 1) {
      child = this.parent.firstChild;
    } else if (this.parent.childElementCount >= 2) {
      const div = document.createElement("div");
      Array.from(this.parent.childrens).forEach((node) => {
        div.appendChild(node);
      });
      child = div;
    }
    applyDiff(this.parent, child, this.template());
    this.mount();
  }
  setState(newState) {
    this.state = newState;
    this.render();
  }
}

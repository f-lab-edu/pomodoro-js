import applyDiff from "../utils/applyDiff.js";
import compressNode from "../utils/compressNode.js";

export default class Component {
  state;
  parent;
  props;
  name;
  constructor(parent, props) {
    this.parent = parent;
    this.props = props;
    this.setup();
  }
  setup() {
    // 컴포넌트 최초 생성시 진행할 내용
  }
  mount() {
    // 렌더링 후 진행할 내용 ex) 자식 컴포넌트 실행, 이벤트 등록
  }
  template() {
    const template = document.getElementById(this.name);
    const newNode = template.content.cloneNode(true);
    return newNode;
  }
  render() {
    // prevNode와 newNode는 각 노드 하나여야 하므로(리스트X) 노드리스트를 div 하나로 만들어줌
    let prevNode = compressNode(this.parent);
    let newNode = compressNode(this.template());
    applyDiff(this.parent, prevNode, newNode);

    this.mount();
    this.setEvent();
  }
  setEvent() {
    // 인스턴스에서 렌더링 후 세팅할 이벤트 지정
  }
  setState(newState) {
    this.state = newState;
    this.render();
  }
}

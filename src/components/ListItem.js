import Component from "../core/Component.js";

class ListItem extends Component {
  constructor(parent, props) {
    super(parent, props);
    this.name = "listitem";
  }
  mount() {
    this.setTextValue(".item-idx", this.props.idx + 1);
    this.setTextValue(".item-start-time", this.props.startTime);
    this.setTextValue(".item-end-time", this.props.endTime);
    this.setTextValue(".item-duration", this.props.durationTime);
  }

  setTextValue(className, value) {
    const infos = document.querySelectorAll(className);
    infos.forEach((item, idx) => {
      if (idx === this.props.idx) {
        item.innerText = value;
      }
    });
  }
}

export default ListItem;

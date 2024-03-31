import Component from "../core/Component.js";
import RecordList from "../components/RecordList.js";
import router from "../utils/router.js";
import DateSelector from "../components/DateSelector.js";
import { getDateStr } from "../utils/getDateTimeStr.js";
class Record extends Component {
  mount() {
    // 타이틀 세팅
    const title = document.querySelector("#record-title");
    const dateParam = router.getPathParams().date;
    const date = dateParam ? new Date(dateParam) : new Date();
    const dateStr = getDateStr(date, ". ");
    title.innerText = dateStr;

    // Date Selector 컴포넌트
    const dateSelector = document.querySelector(
      '[data-component="date-selector"]'
    );
    const dateSelectorComponent = new DateSelector(dateSelector);
    dateSelectorComponent.render();

    // 리스트 컴포넌트
    const recordList = document.querySelector('[data-component="record-list"]');
    const recordListComponent = new RecordList(recordList);
    recordListComponent.render();
  }
}

export default Record;

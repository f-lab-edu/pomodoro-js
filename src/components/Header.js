const Header = (targetElement, state) => {
  // 컴포넌트는 보통 targetElement를 state기반으로 수정해서 리턴하는 함수이지만,
  // 이 함수는 항상 동일한 데이터를 리턴하므로 매개변수 미사용
  const template = document.getElementById("header");
  const newNode = template.content.cloneNode(true);
  return newNode;
};

export default Header;

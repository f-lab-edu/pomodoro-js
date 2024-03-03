const registry = {};

const add = (name, component) => {
  registry[name] = renderWrapper(component);
};

// 들어온 컴포넌트 함수의 자식 컴포넌트들을 치환한 새로운 함수 리턴
export const renderWrapper = (component) => {
  return (targetElement, state) => {
    const element = component(targetElement, state);
    const childComponents = element.querySelectorAll("[data-component]");

    Array.from(childComponents).forEach((target) => {
      const newComponent = registry[target.dataset.component];
      if (newComponent) {
        target.replaceWith(newComponent(target, state));
      }
    });

    return element;
  };
};

const renderRoot = (root, state) => {
  // root도 컴포넌트 함수로 만든다
  const cloneRoot = (root) => {
    return root.cloneNode(true);
  };

  // 만든 함수 wrapping해서 실행
  return renderWrapper(cloneRoot)(root, state);
};

export default {
  add,
  renderRoot,
};

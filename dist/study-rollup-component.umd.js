(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash-es'), require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'lodash-es', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.LegoComponents = {}, global._, global.Vue));
}(this, (function (exports, lodashEs, vue) { 'use strict';

  /*
   * @Author: your name
   * @Date: 2021-05-11 10:31:05
   * @LastEditTime: 2021-05-11 10:31:09
   * @LastEditors: Please set LastEditors
   * @Description: In User Settings Edit
   * @FilePath: /components/src/defaultProps.ts
   */
  const commonDefaultProps = {
      // actions
      actionType: '',
      url: '',
      // size
      height: '',
      width: '373px',
      paddingLeft: '0px',
      paddingRight: '0px',
      paddingTop: '0px',
      paddingBottom: '0px',
      // border type
      borderStyle: 'none',
      borderColor: '#000',
      borderWidth: '0',
      borderRadius: '0',
      // shadow and opacity
      boxShadow: '0 0 0 #000000',
      opacity: '1',
      // position and x,y
      position: 'absolute',
      left: '0',
      top: '0',
      right: '0'
  };
  const textDefaultProps = {
      // basic props - font styles
      text: '正文内容',
      fontSize: '14px',
      fontFamily: '',
      fontWeight: 'normal',
      fontStyle: 'normal',
      textDecoration: 'none',
      lineHeight: '1',
      textAlign: 'left',
      color: '#000000',
      backgroundColor: '',
      ...commonDefaultProps
  };
  const imageDefaultProps = {
      src: 'test.url',
      ...commonDefaultProps
  };
  const shapeDefaultProps = {
      backgroundColor: '',
      ...commonDefaultProps
  };
  const isEditingProp = {
      isEditing: {
          type: Boolean,
          default: false
      }
  };
  const textStylePropNames = lodashEs.without(Object.keys(textDefaultProps), 'actionType', 'url', 'text');
  const imageStylePropsNames = lodashEs.without(Object.keys(imageDefaultProps), 'actionType', 'url', 'src');
  const shapeStylePropsNames = lodashEs.without(Object.keys(imageDefaultProps), 'actionType', 'url');
  const transformToComponentProps = (props) => {
      const mapProps = lodashEs.mapValues(props, (item) => {
          return {
              type: item.constructor,
              default: item
          };
      });
      return { ...mapProps, ...isEditingProp };
  };

  /*
   * @Author: your name
   * @Date: 2021-05-11 10:33:10
   * @LastEditTime: 2021-05-11 10:33:20
   * @LastEditors: Please set LastEditors
   * @Description: In User Settings Edit
   * @FilePath: /components/src/hooks/useComponentCommon.ts
   */
  const useComponentCommon = (props, picks) => {
      const styleProps = vue.computed(() => lodashEs.pick(props, picks));
      const handleClick = () => {
          if (props.actionType === 'url' && props.url && !props.isEditing) {
              window.location.href = props.url;
          }
      };
      return {
          styleProps,
          handleClick
      };
  };

  const defaultProps$2 = transformToComponentProps(textDefaultProps);
  // array that contains style props
  var script$2 = vue.defineComponent({
      name: 'l-text',
      props: {
          tag: {
              type: String,
              default: 'div'
          },
          ...defaultProps$2
      },
      setup(props) {
          // 重用并且简化
          // 抽离并且获得 styleProps
          const { styleProps, handleClick } = useComponentCommon(props, textStylePropNames);
          return {
              styleProps,
              handleClick
          };
      }
  });

  const _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-6bf95b7a");

  const render$2 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
    return (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
      style: _ctx.styleProps,
      class: "l-text-component",
      onClick: _ctx.handleClick
    }, {
      default: _withId$1(() => [
        vue.createTextVNode(vue.toDisplayString(_ctx.text), 1 /* TEXT */)
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["style", "onClick"]))
  });

  script$2.render = render$2;
  script$2.__scopeId = "data-v-6bf95b7a";
  script$2.__file = "src/components/LText/LText.vue";

  script$2.install = (app) => {
      app.component(script$2.name, script$2);
  };

  const defaultProps$1 = transformToComponentProps(imageDefaultProps);
  // array that contains style props
  var script$1 = vue.defineComponent({
      name: 'l-image',
      props: {
          ...defaultProps$1
      },
      setup(props) {
          // 重用并且简化
          // 抽离并且获得 styleProps
          const { styleProps, handleClick } = useComponentCommon(props, imageStylePropsNames);
          return {
              styleProps,
              handleClick
          };
      }
  });

  const _withId = /*#__PURE__*/vue.withScopeId("data-v-1e970aa2");

  const render$1 = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
    return (vue.openBlock(), vue.createBlock("img", {
      style: _ctx.styleProps,
      class: "l-image-component",
      onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"])),
      src: _ctx.src
    }, null, 12 /* STYLE, PROPS */, ["src"]))
  });

  script$1.render = render$1;
  script$1.__scopeId = "data-v-1e970aa2";
  script$1.__file = "src/components/LImage/LImage.vue";

  /*
   * @Author: your name
   * @Date: 2021-05-11 10:35:43
   * @LastEditTime: 2021-05-11 10:35:44
   * @LastEditors: your name
   * @Description: In User Settings Edit
   * @FilePath: /components/src/components/LImage/index.ts
   */
  script$1.install = (app) => {
      app.component(script$1.name, script$1);
  };

  const defaultProps = transformToComponentProps(shapeDefaultProps);
  // array that contains style props
  var script = vue.defineComponent({
      name: 'l-shape',
      props: {
          ...defaultProps
      },
      setup(props) {
          // 重用并且简化
          // 抽离并且获得 styleProps
          const { styleProps, handleClick } = useComponentCommon(props, shapeStylePropsNames);
          return {
              styleProps,
              handleClick
          };
      }
  });

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", {
      style: _ctx.styleProps,
      class: "l-shape-component",
      onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"]))
    }, null, 4 /* STYLE */))
  }

  script.render = render;
  script.__file = "src/components/LShape/LShape.vue";

  script.install = (app) => {
      app.component(script.name, script);
  };

  const components = [
      script$2,
      script$1,
      script
  ];
  const install = (app) => {
      components.forEach(component => {
          app.component(component.name, component);
      });
  };
  var index = {
      install
  };

  exports.LImage = script$1;
  exports.LShape = script;
  exports.LText = script$2;
  exports.default = index;
  exports.imageDefaultProps = imageDefaultProps;
  exports.imageStylePropsNames = imageStylePropsNames;
  exports.install = install;
  exports.shapeDefaultProps = shapeDefaultProps;
  exports.shapeStylePropsNames = shapeStylePropsNames;
  exports.textDefaultProps = textDefaultProps;
  exports.textStylePropNames = textStylePropNames;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

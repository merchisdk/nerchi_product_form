'use client';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { useController } from 'react-hook-form';
import { isBoolean } from 'lodash';
import VariationOptionColour from './VariationOptionColour';
import VariationOptionImage from './VariationOptionImage';
import VariationError from './VariationError';
import VariationLabel from './VariationLabel';
import { useMerchiFormContext } from './MerchiProductFormProvider';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function determineBoolean(value) {
  return isBoolean(value) ? value : value === 'true' ? true : false;
}
function optionType(variation) {
  var _variation$variationF = variation.variationField,
    multipleSelect = _variation$variationF.multipleSelect,
    sellerProductEditable = _variation$variationF.sellerProductEditable;
  return determineBoolean(multipleSelect) || determineBoolean(sellerProductEditable) ? 'checkbox' : 'radio';
}
function VariationFieldOptionElement(_ref) {
  var disabled = _ref.disabled,
    index = _ref.index,
    inputType = _ref.inputType,
    name = _ref.name,
    option = _ref.option,
    variation = _ref.variation;
  var _useMerchiFormContext = useMerchiFormContext(),
    control = _useMerchiFormContext.control,
    getQuote = _useMerchiFormContext.getQuote;
  var _useController = useController({
      name: "".concat(name, ".value"),
      control: control
    }),
    field = _useController.field;
  var optionName = "".concat(name, ".options[").concat(index, "]");
  var selectableOptions = variation.selectableOptions,
    variationField = variation.variationField;
  var sellerProductEditable = variationField.sellerProductEditable;
  var id = option.id;
  var inputId = "".concat(name, ".options.id-").concat(id);
  var activeIds = field.value ? field.value.split(',') : [];
  var isActive = activeIds.includes(String(id));
  var isAvailable = selectableOptions[index] ? selectableOptions[index].available : true;
  var optionInputType = optionType(variation);
  var doClick = function doClick() {
    var updatedIds = _toConsumableArray(activeIds);
    if (sellerProductEditable || optionInputType === 'checkbox') {
      // Checkbox Logic
      if (!updatedIds.includes(String(id))) {
        updatedIds.push(String(id));
      } else {
        updatedIds = updatedIds.filter(function (existingId) {
          return existingId !== String(id);
        });
      }
    } else if (optionInputType === 'radio') {
      // Radio Logic
      updatedIds = [String(id)];
    }
    field.onChange(updatedIds.length ? updatedIds.join(',') : '');
    getQuote();
  };
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("input", {
      style: {
        display: 'none'
      },
      checked: isActive,
      value: id,
      type: optionInputType,
      id: inputId,
      name: "".concat(name, ".value"),
      onChange: function onChange() {
        return true;
      },
      disabled: disabled
    }), inputType === 'image' ? /*#__PURE__*/_jsx(VariationOptionImage, {
      doClick: doClick,
      isChecked: isActive,
      isAvailable: isAvailable,
      name: "".concat(optionName, ".variationField.options[").concat(index, "]"),
      option: option,
      sellerProductEditable: sellerProductEditable
    }) : /*#__PURE__*/_jsx(VariationOptionColour, {
      doClick: doClick,
      isChecked: isActive,
      isAvailable: isAvailable,
      name: "".concat(optionName, ".variationField.options[").concat(index, "]"),
      option: option,
      sellerProductEditable: sellerProductEditable
    })]
  });
}
export var VariationSelectElements = function VariationSelectElements(_ref2) {
  var disabled = _ref2.disabled,
    _ref2$inputType = _ref2.inputType,
    inputType = _ref2$inputType === void 0 ? 'image' : _ref2$inputType,
    name = _ref2.name,
    variation = _ref2.variation;
  var variationField = variation.variationField;
  var _variationField$optio = variationField.options,
    options = _variationField$optio === void 0 ? [] : _variationField$optio;
  var isImage = inputType === 'image';
  return /*#__PURE__*/_jsxs("div", {
    className: isImage ? 'merchi-image-select-container' : '',
    children: [/*#__PURE__*/_jsx(VariationLabel, {
      forceHideCost: true,
      variationClassName: "merchi-embed-form_input".concat(isImage ? '-image' : '', "-select"),
      name: name,
      variation: variation
    }), /*#__PURE__*/_jsx("div", {
      className: isImage ? 'merchi-embed-form_image-select-option-container' : 'merchi-embed-form_color-select-container',
      children: options.map(function (option, index) {
        return /*#__PURE__*/_jsx(VariationFieldOptionElement, {
          disabled: disabled,
          index: index,
          inputType: inputType,
          name: name,
          option: option,
          variation: variation
        }, "variation-option-".concat(name, "-").concat(index));
      })
    }), /*#__PURE__*/_jsx(VariationError, {
      name: name
    })]
  });
};
export var VariationSelectImage = function VariationSelectImage(props) {
  return /*#__PURE__*/_jsx(VariationSelectElements, _objectSpread(_objectSpread({}, props), {}, {
    inputType: "image"
  }));
};
export var VariationSelectColour = function VariationSelectColour(props) {
  return /*#__PURE__*/_jsx(VariationSelectElements, _objectSpread(_objectSpread({}, props), {}, {
    inputType: "colour"
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdHlwZW9mIiwibyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJvd25LZXlzIiwiZSIsInIiLCJ0IiwiT2JqZWN0Iiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJ2YWx1ZSIsIl90b1Byb3BlcnR5S2V5IiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJpIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiTnVtYmVyIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXJyIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwibiIsInRvU3RyaW5nIiwic2xpY2UiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsIml0ZXIiLCJpc0FycmF5IiwibGVuIiwiYXJyMiIsInVzZUNvbnRyb2xsZXIiLCJpc0Jvb2xlYW4iLCJWYXJpYXRpb25PcHRpb25Db2xvdXIiLCJWYXJpYXRpb25PcHRpb25JbWFnZSIsIlZhcmlhdGlvbkVycm9yIiwiVmFyaWF0aW9uTGFiZWwiLCJ1c2VNZXJjaGlGb3JtQ29udGV4dCIsImpzeCIsIl9qc3giLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsImpzeHMiLCJfanN4cyIsImRldGVybWluZUJvb2xlYW4iLCJvcHRpb25UeXBlIiwidmFyaWF0aW9uIiwiX3ZhcmlhdGlvbiR2YXJpYXRpb25GIiwidmFyaWF0aW9uRmllbGQiLCJtdWx0aXBsZVNlbGVjdCIsInNlbGxlclByb2R1Y3RFZGl0YWJsZSIsIlZhcmlhdGlvbkZpZWxkT3B0aW9uRWxlbWVudCIsIl9yZWYiLCJkaXNhYmxlZCIsImluZGV4IiwiaW5wdXRUeXBlIiwib3B0aW9uIiwiX3VzZU1lcmNoaUZvcm1Db250ZXh0IiwiY29udHJvbCIsImdldFF1b3RlIiwiX3VzZUNvbnRyb2xsZXIiLCJjb25jYXQiLCJmaWVsZCIsIm9wdGlvbk5hbWUiLCJzZWxlY3RhYmxlT3B0aW9ucyIsImlkIiwiaW5wdXRJZCIsImFjdGl2ZUlkcyIsInNwbGl0IiwiaXNBY3RpdmUiLCJpbmNsdWRlcyIsImlzQXZhaWxhYmxlIiwiYXZhaWxhYmxlIiwib3B0aW9uSW5wdXRUeXBlIiwiZG9DbGljayIsInVwZGF0ZWRJZHMiLCJleGlzdGluZ0lkIiwib25DaGFuZ2UiLCJqb2luIiwiY2hpbGRyZW4iLCJzdHlsZSIsImRpc3BsYXkiLCJjaGVja2VkIiwidHlwZSIsImlzQ2hlY2tlZCIsIlZhcmlhdGlvblNlbGVjdEVsZW1lbnRzIiwiX3JlZjIiLCJfcmVmMiRpbnB1dFR5cGUiLCJfdmFyaWF0aW9uRmllbGQkb3B0aW8iLCJvcHRpb25zIiwiaXNJbWFnZSIsImNsYXNzTmFtZSIsImZvcmNlSGlkZUNvc3QiLCJ2YXJpYXRpb25DbGFzc05hbWUiLCJtYXAiLCJWYXJpYXRpb25TZWxlY3RJbWFnZSIsInByb3BzIiwiVmFyaWF0aW9uU2VsZWN0Q29sb3VyIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvVmFyaWF0aW9uU2VsZWN0RWxlbWVudHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IHVzZUNvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgaXNCb29sZWFuIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBWYXJpYXRpb25PcHRpb25Db2xvdXIgZnJvbSAnLi9WYXJpYXRpb25PcHRpb25Db2xvdXInO1xuaW1wb3J0IFZhcmlhdGlvbk9wdGlvbkltYWdlIGZyb20gJy4vVmFyaWF0aW9uT3B0aW9uSW1hZ2UnO1xuaW1wb3J0IFZhcmlhdGlvbkVycm9yIGZyb20gJy4vVmFyaWF0aW9uRXJyb3InO1xuaW1wb3J0IFZhcmlhdGlvbkxhYmVsIGZyb20gJy4vVmFyaWF0aW9uTGFiZWwnO1xuaW1wb3J0IHsgdXNlTWVyY2hpRm9ybUNvbnRleHQgfSBmcm9tICcuL01lcmNoaVByb2R1Y3RGb3JtUHJvdmlkZXInO1xuXG5mdW5jdGlvbiBkZXRlcm1pbmVCb29sZWFuKHZhbHVlOiBhbnkpIHtcbiAgcmV0dXJuIGlzQm9vbGVhbih2YWx1ZSkgPyB2YWx1ZSA6IHZhbHVlID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG9wdGlvblR5cGUodmFyaWF0aW9uOiBhbnkpIHtcbiAgY29uc3QgeyBtdWx0aXBsZVNlbGVjdCwgc2VsbGVyUHJvZHVjdEVkaXRhYmxlIH0gPSB2YXJpYXRpb24udmFyaWF0aW9uRmllbGQ7XG4gIHJldHVybiBkZXRlcm1pbmVCb29sZWFuKG11bHRpcGxlU2VsZWN0KSB8fFxuICAgIGRldGVybWluZUJvb2xlYW4oc2VsbGVyUHJvZHVjdEVkaXRhYmxlKVxuICAgID8gJ2NoZWNrYm94J1xuICAgIDogJ3JhZGlvJztcbn1cblxuaW50ZXJmYWNlIE9wdGlvblByb3BzIHtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBpbmRleDogbnVtYmVyO1xuICBpbnB1dFR5cGU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBvcHRpb246IGFueTtcbiAgdmFyaWF0aW9uOiBhbnk7XG59XG5cbmZ1bmN0aW9uIFZhcmlhdGlvbkZpZWxkT3B0aW9uRWxlbWVudCh7XG4gIGRpc2FibGVkLFxuICBpbmRleCxcbiAgaW5wdXRUeXBlLFxuICBuYW1lLFxuICBvcHRpb24sXG4gIHZhcmlhdGlvbixcbn06IE9wdGlvblByb3BzKSB7XG4gIGNvbnN0IHsgY29udHJvbCwgZ2V0UXVvdGUgfSA9IHVzZU1lcmNoaUZvcm1Db250ZXh0KCk7XG4gIGNvbnN0IHsgZmllbGQgfSA9IHVzZUNvbnRyb2xsZXIoeyBuYW1lOiBgJHtuYW1lfS52YWx1ZWAsIGNvbnRyb2wgfSk7XG4gIGNvbnN0IG9wdGlvbk5hbWUgPSBgJHtuYW1lfS5vcHRpb25zWyR7aW5kZXh9XWA7XG4gIGNvbnN0IHsgc2VsZWN0YWJsZU9wdGlvbnMsIHZhcmlhdGlvbkZpZWxkIH0gPSB2YXJpYXRpb247XG4gIGNvbnN0IHsgc2VsbGVyUHJvZHVjdEVkaXRhYmxlIH0gPSB2YXJpYXRpb25GaWVsZDtcbiAgY29uc3QgeyBpZCB9ID0gb3B0aW9uO1xuICBjb25zdCBpbnB1dElkID0gYCR7bmFtZX0ub3B0aW9ucy5pZC0ke2lkfWA7XG4gIGNvbnN0IGFjdGl2ZUlkcyA9IGZpZWxkLnZhbHVlID8gZmllbGQudmFsdWUuc3BsaXQoJywnKSA6IFtdO1xuICBjb25zdCBpc0FjdGl2ZSA9IGFjdGl2ZUlkcy5pbmNsdWRlcyhTdHJpbmcoaWQpKTtcbiAgY29uc3QgaXNBdmFpbGFibGUgPSBzZWxlY3RhYmxlT3B0aW9uc1tpbmRleF1cbiAgICA/IHNlbGVjdGFibGVPcHRpb25zW2luZGV4XS5hdmFpbGFibGVcbiAgICA6IHRydWU7XG4gIGNvbnN0IG9wdGlvbklucHV0VHlwZSA9IG9wdGlvblR5cGUodmFyaWF0aW9uKTtcbiAgY29uc3QgZG9DbGljayA9ICgpID0+IHtcbiAgICBsZXQgdXBkYXRlZElkcyA9IFsuLi5hY3RpdmVJZHNdO1xuXG4gICAgaWYgKHNlbGxlclByb2R1Y3RFZGl0YWJsZSB8fCBvcHRpb25JbnB1dFR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIC8vIENoZWNrYm94IExvZ2ljXG4gICAgICBpZiAoIXVwZGF0ZWRJZHMuaW5jbHVkZXMoU3RyaW5nKGlkKSkpIHtcbiAgICAgICAgdXBkYXRlZElkcy5wdXNoKFN0cmluZyhpZCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlZElkcyA9IHVwZGF0ZWRJZHMuZmlsdGVyKFxuICAgICAgICAgIChleGlzdGluZ0lkKSA9PiBleGlzdGluZ0lkICE9PSBTdHJpbmcoaWQpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvcHRpb25JbnB1dFR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIC8vIFJhZGlvIExvZ2ljXG4gICAgICB1cGRhdGVkSWRzID0gW1N0cmluZyhpZCldO1xuICAgIH1cbiAgICBmaWVsZC5vbkNoYW5nZSh1cGRhdGVkSWRzLmxlbmd0aCA/IHVwZGF0ZWRJZHMuam9pbignLCcpIDogJycpO1xuXG4gICAgZ2V0UXVvdGUoKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGlucHV0XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICBjaGVja2VkPXtpc0FjdGl2ZX1cbiAgICAgICAgdmFsdWU9e2lkfVxuICAgICAgICB0eXBlPXtvcHRpb25JbnB1dFR5cGV9XG4gICAgICAgIGlkPXtpbnB1dElkfVxuICAgICAgICBuYW1lPXtgJHtuYW1lfS52YWx1ZWB9XG4gICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0cnVlfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAvPlxuICAgICAge2lucHV0VHlwZSA9PT0gJ2ltYWdlJyA/IChcbiAgICAgICAgPFZhcmlhdGlvbk9wdGlvbkltYWdlXG4gICAgICAgICAgZG9DbGljaz17ZG9DbGlja31cbiAgICAgICAgICBpc0NoZWNrZWQ9e2lzQWN0aXZlfVxuICAgICAgICAgIGlzQXZhaWxhYmxlPXtpc0F2YWlsYWJsZX1cbiAgICAgICAgICBuYW1lPXtgJHtvcHRpb25OYW1lfS52YXJpYXRpb25GaWVsZC5vcHRpb25zWyR7aW5kZXh9XWB9XG4gICAgICAgICAgb3B0aW9uPXtvcHRpb259XG4gICAgICAgICAgc2VsbGVyUHJvZHVjdEVkaXRhYmxlPXtzZWxsZXJQcm9kdWN0RWRpdGFibGV9XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8VmFyaWF0aW9uT3B0aW9uQ29sb3VyXG4gICAgICAgICAgZG9DbGljaz17ZG9DbGlja31cbiAgICAgICAgICBpc0NoZWNrZWQ9e2lzQWN0aXZlfVxuICAgICAgICAgIGlzQXZhaWxhYmxlPXtpc0F2YWlsYWJsZX1cbiAgICAgICAgICBuYW1lPXtgJHtvcHRpb25OYW1lfS52YXJpYXRpb25GaWVsZC5vcHRpb25zWyR7aW5kZXh9XWB9XG4gICAgICAgICAgb3B0aW9uPXtvcHRpb259XG4gICAgICAgICAgc2VsbGVyUHJvZHVjdEVkaXRhYmxlPXtzZWxsZXJQcm9kdWN0RWRpdGFibGV9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGlucHV0VHlwZT86IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB2YXJpYXRpb246IGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IFZhcmlhdGlvblNlbGVjdEVsZW1lbnRzOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBkaXNhYmxlZCxcbiAgaW5wdXRUeXBlID0gJ2ltYWdlJyxcbiAgbmFtZSxcbiAgdmFyaWF0aW9uLFxufSkgPT4ge1xuICBjb25zdCB7IHZhcmlhdGlvbkZpZWxkIH0gPSB2YXJpYXRpb247XG4gIGNvbnN0IHsgb3B0aW9ucyA9IFtdIH0gPSB2YXJpYXRpb25GaWVsZDtcbiAgY29uc3QgaXNJbWFnZSA9IGlucHV0VHlwZSA9PT0gJ2ltYWdlJztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17aXNJbWFnZSA/ICdtZXJjaGktaW1hZ2Utc2VsZWN0LWNvbnRhaW5lcicgOiAnJ30+XG4gICAgICA8VmFyaWF0aW9uTGFiZWxcbiAgICAgICAgZm9yY2VIaWRlQ29zdD17dHJ1ZX1cbiAgICAgICAgdmFyaWF0aW9uQ2xhc3NOYW1lPXtgbWVyY2hpLWVtYmVkLWZvcm1faW5wdXQke1xuICAgICAgICAgIGlzSW1hZ2UgPyAnLWltYWdlJyA6ICcnXG4gICAgICAgIH0tc2VsZWN0YH1cbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgdmFyaWF0aW9uPXt2YXJpYXRpb259XG4gICAgICAvPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIGlzSW1hZ2VcbiAgICAgICAgICAgID8gJ21lcmNoaS1lbWJlZC1mb3JtX2ltYWdlLXNlbGVjdC1vcHRpb24tY29udGFpbmVyJ1xuICAgICAgICAgICAgOiAnbWVyY2hpLWVtYmVkLWZvcm1fY29sb3Itc2VsZWN0LWNvbnRhaW5lcidcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbjogYW55LCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgPFZhcmlhdGlvbkZpZWxkT3B0aW9uRWxlbWVudFxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgaW5wdXRUeXBlPXtpbnB1dFR5cGV9XG4gICAgICAgICAgICBrZXk9e2B2YXJpYXRpb24tb3B0aW9uLSR7bmFtZX0tJHtpbmRleH1gfVxuICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgIG9wdGlvbj17b3B0aW9ufVxuICAgICAgICAgICAgdmFyaWF0aW9uPXt2YXJpYXRpb259XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxWYXJpYXRpb25FcnJvciBuYW1lPXtuYW1lfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuaW50ZXJmYWNlIEZpZWxkUHJvcHMge1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG5hbWU6IHN0cmluZztcbiAgdmFyaWF0aW9uOiBhbnk7XG59XG5cbmV4cG9ydCBjb25zdCBWYXJpYXRpb25TZWxlY3RJbWFnZSA9IChwcm9wczogRmllbGRQcm9wcykgPT4gKFxuICA8VmFyaWF0aW9uU2VsZWN0RWxlbWVudHMgey4uLnByb3BzfSBpbnB1dFR5cGU9J2ltYWdlJyAvPlxuKTtcbmV4cG9ydCBjb25zdCBWYXJpYXRpb25TZWxlY3RDb2xvdXIgPSAocHJvcHM6IEZpZWxkUHJvcHMpID0+IChcbiAgPFZhcmlhdGlvblNlbGVjdEVsZW1lbnRzIHsuLi5wcm9wc30gaW5wdXRUeXBlPSdjb2xvdXInIC8+XG4pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOztBQUFDLFNBQUFBLFFBQUFDLENBQUEsc0NBQUFELE9BQUEsd0JBQUFFLE1BQUEsdUJBQUFBLE1BQUEsQ0FBQUMsUUFBQSxhQUFBRixDQUFBLGtCQUFBQSxDQUFBLGdCQUFBQSxDQUFBLFdBQUFBLENBQUEseUJBQUFDLE1BQUEsSUFBQUQsQ0FBQSxDQUFBRyxXQUFBLEtBQUFGLE1BQUEsSUFBQUQsQ0FBQSxLQUFBQyxNQUFBLENBQUFHLFNBQUEscUJBQUFKLENBQUEsS0FBQUQsT0FBQSxDQUFBQyxDQUFBO0FBQUEsU0FBQUssUUFBQUMsQ0FBQSxFQUFBQyxDQUFBLFFBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxJQUFBLENBQUFKLENBQUEsT0FBQUcsTUFBQSxDQUFBRSxxQkFBQSxRQUFBWCxDQUFBLEdBQUFTLE1BQUEsQ0FBQUUscUJBQUEsQ0FBQUwsQ0FBQSxHQUFBQyxDQUFBLEtBQUFQLENBQUEsR0FBQUEsQ0FBQSxDQUFBWSxNQUFBLFdBQUFMLENBQUEsV0FBQUUsTUFBQSxDQUFBSSx3QkFBQSxDQUFBUCxDQUFBLEVBQUFDLENBQUEsRUFBQU8sVUFBQSxPQUFBTixDQUFBLENBQUFPLElBQUEsQ0FBQUMsS0FBQSxDQUFBUixDQUFBLEVBQUFSLENBQUEsWUFBQVEsQ0FBQTtBQUFBLFNBQUFTLGNBQUFYLENBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFXLFNBQUEsQ0FBQUMsTUFBQSxFQUFBWixDQUFBLFVBQUFDLENBQUEsV0FBQVUsU0FBQSxD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
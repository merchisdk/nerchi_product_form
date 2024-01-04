'use client';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { formatCurrency } from './currency';
import { useMerchiFormContext } from './MerchiProductFormProvider';
import { jsxs as _jsxs } from "react/jsx-runtime";
function ProductUnitPrice(_ref) {
  var _ref$unitPriceText = _ref.unitPriceText,
    unitPriceText = _ref$unitPriceText === void 0 ? 'unit price' : _ref$unitPriceText,
    _ref$spaceBetweenSymb = _ref.spaceBetweenSymbol,
    spaceBetweenSymbol = _ref$spaceBetweenSymb === void 0 ? false : _ref$spaceBetweenSymb;
  var _useMerchiFormContext = useMerchiFormContext(),
    classNameUnitPrice = _useMerchiFormContext.classNameUnitPrice,
    product = _useMerchiFormContext.product,
    _useMerchiFormContext2 = _useMerchiFormContext.showCurrency,
    showCurrency = _useMerchiFormContext2 === void 0 ? false : _useMerchiFormContext2,
    _useMerchiFormContext3 = _useMerchiFormContext.showCurrencyCode,
    showCurrencyCode = _useMerchiFormContext3 === void 0 ? false : _useMerchiFormContext3,
    _useMerchiFormContext4 = _useMerchiFormContext.showUnitPrice,
    showUnitPrice = _useMerchiFormContext4 === void 0 ? true : _useMerchiFormContext4;
  var bestPrice = product.bestPrice,
    currency = product.currency,
    unitPrice = product.unitPrice;
  var currencyOptions = {
    currency: currency,
    codeBeforeSymbol: showCurrencyCode,
    showCodeIfNoSymbol: showCurrency,
    spaceBetweenSymbol: spaceBetweenSymbol
  };
  var productUnitPrice = formatCurrency(unitPrice, currencyOptions);
  var productBestPrice = formatCurrency(product.bestPrice, _objectSpread(_objectSpread({}, currencyOptions), {}, {
    codeBeforeSymbol: false
  }));
  var hasPriceRange = unitPrice !== bestPrice;
  return /*#__PURE__*/_jsxs("span", {
    className: classNameUnitPrice,
    children: [productUnitPrice, " ", hasPriceRange ? ' ⇄ ' + productBestPrice : '', " ", showUnitPrice && unitPriceText]
  });
}
export default ProductUnitPrice;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdHlwZW9mIiwibyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJvd25LZXlzIiwiZSIsInIiLCJ0IiwiT2JqZWN0Iiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJ2YWx1ZSIsIl90b1Byb3BlcnR5S2V5IiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJpIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiTnVtYmVyIiwiZm9ybWF0Q3VycmVuY3kiLCJ1c2VNZXJjaGlGb3JtQ29udGV4dCIsImpzeHMiLCJfanN4cyIsIlByb2R1Y3RVbml0UHJpY2UiLCJfcmVmIiwiX3JlZiR1bml0UHJpY2VUZXh0IiwidW5pdFByaWNlVGV4dCIsIl9yZWYkc3BhY2VCZXR3ZWVuU3ltYiIsInNwYWNlQmV0d2VlblN5bWJvbCIsIl91c2VNZXJjaGlGb3JtQ29udGV4dCIsImNsYXNzTmFtZVVuaXRQcmljZSIsInByb2R1Y3QiLCJfdXNlTWVyY2hpRm9ybUNvbnRleHQyIiwic2hvd0N1cnJlbmN5IiwiX3VzZU1lcmNoaUZvcm1Db250ZXh0MyIsInNob3dDdXJyZW5jeUNvZGUiLCJfdXNlTWVyY2hpRm9ybUNvbnRleHQ0Iiwic2hvd1VuaXRQcmljZSIsImJlc3RQcmljZSIsImN1cnJlbmN5IiwidW5pdFByaWNlIiwiY3VycmVuY3lPcHRpb25zIiwiY29kZUJlZm9yZVN5bWJvbCIsInNob3dDb2RlSWZOb1N5bWJvbCIsInByb2R1Y3RVbml0UHJpY2UiLCJwcm9kdWN0QmVzdFByaWNlIiwiaGFzUHJpY2VSYW5nZSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdFVuaXRQcmljZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3kgfSBmcm9tICcuL2N1cnJlbmN5JztcbmltcG9ydCB7IHVzZU1lcmNoaUZvcm1Db250ZXh0IH0gZnJvbSAnLi9NZXJjaGlQcm9kdWN0Rm9ybVByb3ZpZGVyJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdW5pdFByaWNlVGV4dD86IHN0cmluZztcbiAgc3BhY2VCZXR3ZWVuU3ltYm9sPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gUHJvZHVjdFVuaXRQcmljZSh7XG4gICAgdW5pdFByaWNlVGV4dCA9ICd1bml0IHByaWNlJyxcbiAgICBzcGFjZUJldHdlZW5TeW1ib2wgPSBmYWxzZVxuICB9OiBQcm9wcykge1xuICBjb25zdCB7XG4gICAgY2xhc3NOYW1lVW5pdFByaWNlLFxuICAgIHByb2R1Y3QsXG4gICAgc2hvd0N1cnJlbmN5ID0gZmFsc2UsXG4gICAgc2hvd0N1cnJlbmN5Q29kZSA9IGZhbHNlLFxuICAgIHNob3dVbml0UHJpY2UgPSAgdHJ1ZSxcbiAgfSA9IHVzZU1lcmNoaUZvcm1Db250ZXh0KCk7XG4gIGNvbnN0IHsgYmVzdFByaWNlLCBjdXJyZW5jeSwgdW5pdFByaWNlIH0gPSBwcm9kdWN0O1xuICBjb25zdCBjdXJyZW5jeU9wdGlvbnMgPSB7XG4gICAgY3VycmVuY3ksXG4gICAgY29kZUJlZm9yZVN5bWJvbDogc2hvd0N1cnJlbmN5Q29kZSxcbiAgICBzaG93Q29kZUlmTm9TeW1ib2w6IHNob3dDdXJyZW5jeSxcbiAgICBzcGFjZUJldHdlZW5TeW1ib2xcbiAgfTtcbiAgY29uc3QgcHJvZHVjdFVuaXRQcmljZSA9IGZvcm1hdEN1cnJlbmN5KHVuaXRQcmljZSwgY3VycmVuY3lPcHRpb25zKTtcbiAgY29uc3QgcHJvZHVjdEJlc3RQcmljZSA9IGZvcm1hdEN1cnJlbmN5KFxuICAgIHByb2R1Y3QuYmVzdFByaWNlLCB7Li4uY3VycmVuY3lPcHRpb25zLCBjb2RlQmVmb3JlU3ltYm9sOiBmYWxzZX0pO1xuICBjb25zdCBoYXNQcmljZVJhbmdlID0gdW5pdFByaWNlICE9PSBiZXN0UHJpY2U7XG4gIHJldHVybiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWVVbml0UHJpY2V9PlxuICAgICAge3Byb2R1Y3RVbml0UHJpY2V9IHtoYXNQcmljZVJhbmdlID9cbiAgICAgICgnIOKHhCAnICsgcHJvZHVjdEJlc3RQcmljZSkgOiAnJ30ge3Nob3dVbml0UHJpY2UgJiYgdW5pdFByaWNlVGV4dH1cbiAgICA8L3NwYW4+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RVbml0UHJpY2U7XG4iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7O0FBQUMsU0FBQUEsUUFBQUMsQ0FBQSxzQ0FBQUQsT0FBQSx3QkFBQUUsTUFBQSx1QkFBQUEsTUFBQSxDQUFBQyxRQUFBLGFBQUFGLENBQUEsa0JBQUFBLENBQUEsZ0JBQUFBLENBQUEsV0FBQUEsQ0FBQSx5QkFBQUMsTUFBQSxJQUFBRCxDQUFBLENBQUFHLFdBQUEsS0FBQUYsTUFBQSxJQUFBRCxDQUFBLEtBQUFDLE1BQUEsQ0FBQUcsU0FBQSxxQkFBQUosQ0FBQSxLQUFBRCxPQUFBLENBQUFDLENBQUE7QUFBQSxTQUFBSyxRQUFBQyxDQUFBLEVBQUFDLENBQUEsUUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLElBQUEsQ0FBQUosQ0FBQSxPQUFBRyxNQUFBLENBQUFFLHFCQUFBLFFBQUFYLENBQUEsR0FBQVMsTUFBQSxDQUFBRSxxQkFBQSxDQUFBTCxDQUFBLEdBQUFDLENBQUEsS0FBQVAsQ0FBQSxHQUFBQSxDQUFBLENBQUFZLE1BQUEsV0FBQUwsQ0FBQSxXQUFBRSxNQUFBLENBQUFJ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
"use strict";console.log(1);var e=document.querySelector(".main-block__right-form__number"),t=document.querySelector(".main-block__right-form__name"),n=document.querySelector(".task-add"),a=(document.querySelector(".list-item-value"),document.querySelector(".main-block__list")),c=[];function o(e){var t=document.createElement("li");t.classList.add("main-block__item"),a.append(t),t.textContent="".concat(e.type);var n=document.createElement("span");n.classList.add("main-block__span"),n.textContent="".concat(e.value,")"),t.append(n)}n.addEventListener("click",(function(){var n=t.value,l=e.value;if(""===l||""===n)return alert("enter value");var r={value:l,type:n};c.length;c.unshift(r),e.value="",t.value="",o(r),e.focus(),a.innerHTML="",c.forEach((function(e,t){o(e)}))}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJpbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInR5cGUiLCJhZGRUYXNrIiwibGlzdCIsInNsYXRlIiwiY3JlYXRlTGlzdCIsImVsIiwiaXRlbURpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmQiLCJ0ZXh0Q29udGVudCIsImNvbmNhdCIsInR5cGVEaXYiLCJ2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnB1dFR5cGUiLCJpbnB1dFZhbHVlIiwiYWxlcnQiLCJvYmoiLCJsZW5ndGgiLCJ1bnNoaWZ0IiwiZm9jdXMiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImluZGV4Il0sIm1hcHBpbmdzIjoiYUFDQUEsUUFBUUMsSUFERSxHQ0FWLElBQU1DLEVBQVFDLFNBQVNDLGNBQWMsbUNBQy9CQyxFQUFPRixTQUFTQyxjQUFjLGlDQUM5QkUsRUFBVUgsU0FBU0MsY0FBYyxhQUVqQ0csR0FEWUosU0FBU0MsY0FBYyxvQkFDNUJELFNBQVNDLGNBQWMsc0JBR2hDSSxFQUFRLEdBa0NaLFNBQVNDLEVBQVdDLEdBQ2hCLElBQU1DLEVBQVVSLFNBQVNTLGNBQWMsTUFDdkNELEVBQVFFLFVBQVVDLElBQUksb0JBQ3RCUCxFQUFLUSxPQUFPSixHQUNaQSxFQUFRSyxZQUFSLEdBQUFDLE9BQXlCUCxFQUFHTCxNQUM1QixJQUFNYSxFQUFVZixTQUFTUyxjQUFjLFFBQ3ZDTSxFQUFRTCxVQUFVQyxJQUFJLG9CQUN0QkksRUFBUUYsWUFBUixHQUFBQyxPQUF5QlAsRUFBR1MsTUFBNUIsS0FFQVIsRUFBUUksT0FBT0csR0F4Q25CWixFQUFRYyxpQkFBaUIsU0FHekIsV0FDSSxJQUFNQyxFQUFZaEIsRUFBS2MsTUFDakJHLEVBQWFwQixFQUFNaUIsTUFFekIsR0FBbUIsS0FBZkcsR0FBbUMsS0FBZEQsRUFDckIsT0FBT0UsTUFBTSxlQUVqQixJQUFNQyxFQUFNLENBQ1JMLE1BQU9HLEVBQ1BqQixLQUFNZ0IsR0FFRWIsRUFBTWlCLE9BQ2xCakIsRUFBTWtCLFFBQVFGLEdBQ2R0QixFQUFNaUIsTUFBUSxHQUNkZCxFQUFLYyxNQUFRLEdBQ2JWLEVBQVdlLEdBQ1h0QixFQUFNeUIsUUFNTnBCLEVBQUtxQixVQUFZLEdBQ2pCcEIsRUFBTXFCLFNBQVEsU0FBQ0MsRUFBU0MsR0FDcEJ0QixFQUFXcUIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYSA9IDFcclxuY29uc29sZS5sb2coYSk7IiwiY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tYmxvY2tfX3JpZ2h0LWZvcm1fX251bWJlclwiKTtcclxuY29uc3QgdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1ibG9ja19fcmlnaHQtZm9ybV9fbmFtZVwiKTtcclxuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1hZGRcIik7XHJcbmNvbnN0IGxpc3RWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1pdGVtLXZhbHVlXCIpO1xyXG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWJsb2NrX19saXN0XCIpO1xyXG5cclxubGV0IHR5cGVDdXJyZW50QyA9IFtdO1xyXG5sZXQgc2xhdGUgPSBbXTtcclxuXHJcblxyXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUb0xpc3QpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFRvTGlzdCgpIHtcclxuICAgIGNvbnN0IGlucHV0VHlwZSA9IHR5cGUudmFsdWU7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gaW5wdXQudmFsdWU7XHJcblxyXG4gICAgaWYgKGlucHV0VmFsdWUgPT09IFwiXCIgfHwgaW5wdXRUeXBlID09PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KFwiZW50ZXIgdmFsdWVcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgdmFsdWU6IGlucHV0VmFsdWUsXHJcbiAgICAgICAgdHlwZTogaW5wdXRUeXBlXHJcbiAgICB9O1xyXG4gICAgY29uc3QgdmFsID0gc2xhdGUubGVuZ3RoO1xyXG4gICAgc2xhdGUudW5zaGlmdChvYmopO1xyXG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgdHlwZS52YWx1ZSA9IFwiXCI7XHJcbiAgICBjcmVhdGVMaXN0KG9iaiwgdmFsKTtcclxuICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICBtYWtlcigpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZXIoKSB7XHJcbiAgICBsaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBzbGF0ZS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNyZWF0ZUxpc3QoZWxlbWVudCwgaW5kZXgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpc3QoZWwpIHtcclxuICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluLWJsb2NrX19pdGVtXCIpO1xyXG4gICAgbGlzdC5hcHBlbmQoaXRlbURpdik7XHJcbiAgICBpdGVtRGl2LnRleHRDb250ZW50ID0gYCR7ZWwudHlwZX1gO1xyXG4gICAgY29uc3QgdHlwZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgdHlwZURpdi5jbGFzc0xpc3QuYWRkKFwibWFpbi1ibG9ja19fc3BhblwiKTtcclxuICAgIHR5cGVEaXYudGV4dENvbnRlbnQgPSBgJHtlbC52YWx1ZX0pYDtcclxuICAgIC8vIGNvbnNvbGUubG9nKEFycmF5LmZyb20oYCR7ZWwudmFsdWV9YCkpO1xyXG4gICAgaXRlbURpdi5hcHBlbmQodHlwZURpdik7XHJcblxyXG59Il19

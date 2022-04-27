My playGround for webProject
============================
- I will do code for my own interests in this project.
- It could be copy coding or new ideal project
  
#### 정해진  타이밍에 HTML 요소가 서서히 나타나는 '페이드 인' 효과 - 현대적인 디자인

#### Element.getBoundingClientReact()
- 엘리먼트의 크기와 뷰포트에 상대적인 위치 정보를 제공하는 DOMReact 객체를 반환한다.
- DOMReact 객체(Element)는 width/height 와 동시에 padding과 border-width도 포함한다.
    - 하지만 box-sizing:border-box가 해당 엘리먼트에 설정되어 있으면 이는 width 또는 height 와 직접적으로 동일하다. 즉 padding ,border-width를 포함하지 않는다.

#### 표시 타이밍을 위치로 조절하기
- saTriggerMargin을 고정하면 표시되는 타이밍이 전부 동일해진다.
- 표시 타이밍을 주기 위해 각 tag에 sa-data-margin을 줘서 element.dataset.saMargin의 값이 있는지 체크한다.
  - 없으면 default 타이밍을 주면 된다.

#### 표시 타이밍을 시간으로 조절
- 스크롤이 일정 위치까지 내려오면 임의의 시간차를 두고 나타내는 방식
- data-sa-delay로 제어 가능

#### IE에서 for문 에러가 발생할 경우
- $.each(saElementList, function(index, element)) 로 대체하면 정상적으로 출력된다고 한다.


- 출처 : https://joshua-dev-story.blogspot.com/2020/11/javascript-css-scroll-animation.html
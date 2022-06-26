- Sass가 sCss보다 먼저 만들어짐.
- sass나 scss나 거의 동일하게 사용하고 있음.

- stylus
- 코드랑 stylus랑 compile하면 stylus가 모든걸 평범한 css로 만들어줄 것이다.

scss
- sass랑 scss가 갈수록 업계 표준이 되어가고 있다.
- css를 programming lanugage처럼 만든다. 
- syntax 개선
- variable, function, extension
- compile하거나  build해줘야 한다.

# variable
- website에서 가장 중요한 colors나 가장 중요한 styles를 저장하고 싶을때 사용.

# underbar _
- scss 파일을 css 파일로 변환하고 싶지 않을 경우에 _+"filename".scss 형식을 사용한다.
  

  # Nesting
  - target element 를 더 정확하게 해준다?
  - 아래 코드와 같이 동일한 부모를 가진 경우 nesting을 사용!
.box { 
    margin-top : 20px;
}
.box h2 {
    color:blue;
}
.box button {
    color:red;
}

- nesting을 이용해 아래와 같이 작성
.box { 
    margin-top : 20px;
    h2 {
        color:blue;
    }
    button {
        color:red;
    }
}

# Mixins
- scss functionality 재사용
- 어떤 종류의 argument를 mixin에 보내야 할때 css의 결과값을 바꾼다.
- @if, @else, parameter $name과 같이 programming이 가능한게 scss!!

# extend
- 다른 코드를 확장하거나 코드를 재사용하고 싶을때 사용
- 
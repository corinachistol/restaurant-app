

# Restaurant app
    > idea
    1. menu 
    2. order
    3. payment

    > tech (front)
    1. html + css
    2. js
    3. react
    4. storage
    5. fetch ?
    
    > git




# JS Logic of OUR aPP
    > models OOP (Food, Drink, Menu, Order,...)
    > decision making functional programming (event handlers, calculus, ...)

    > UI
      - react
         > JSX (template & rendering)
         > Components :
            - Layout
            - Domain
    > services
      - storage







index ------> browser
                |
                window
                |
                v
                DOM(real)
                |
                .
                |
                +------div#root
                            ^
                            | entry point (index.js) <---------index.css
                            |               |
                            +-------ReactDom.createReact()   
                                            |
                                            |
                                            v
                                          root (object) DOM virtual
                                            |
                                            |
                                            +-- <App>



## COMPONENT
> Class
> Function (preferred)
                <App color="red"/>   JSX
                            |
                            v
                       attributes
                       {
                        testAttr: "testValue"
                       }
 App                    
    \
+---+---<Function>-----(props)-----+
|                                  |
|                                  |
|         LOGIC                    |
|                                  |
|          return {                |
|          <></>                   |
|                                  |
|         }                        |
|                                  |
|                                  |
+----------------------------------+
                                         
index.html <--- loaded by browser-style.css
|
.
|
div.#root
  ^
<App>
  |
  +---- <Header>      loaded by compiler JS React
  |       |                   v
  |       +-- <Nav> <---- Nav.css 
  |             ^
  |             +---- logo ---> logo.png
  |
  +-----<Content>
  |
  |
  +-----<Footer>
          ^
          |
          +------ HW1: improvise: copyright, bannere, social links ...
           requirements: split by components  , add some images and styles








    




     <App>
      <Header/>    \
      <Content />   + -----------> props.chidlren = [...]
      <Footer />   /                    v
    </App>              +---<App> - (props) ---+
                                        |
                                        v
                                      <div>
                                      {props.children}
                                      </div>





<button onclick="toggleChat()"></button>   <----- HTML
          ^
          |
          button.addEventListener('click', toggleChat)




<button onClick={toggleChat}></button> <---- JSX
          ^
          |
          +-------- React.createElement('button', {
            onClick: toggleChat
          }, "...")


React State MAnagement
HOOK:useState()


DOM Fragment
  <>
  ...
  {value}
  ...
  </>







            Food{}
              |
<Content />   |      
    |         v       
    +---- <Menu />    
             |        
              +---- <Item />






<Item data={food} otherAttribute={value}/>
        |     |
        v     |
  props = {   |
    data:... -+
    otherAttribute: ...
  }    
    |
    v
const Item =  (props) => {
  ....
}


                      <Parent>
                        <Child /> ----+
                      </Parent>       |
                        |             |
                      props = {       v
                        children: ...
                      }
                        |
                        v
                    const Parent = (props) => {
                          ...
                          {props.children}
                    }
 

 REACT / usestate() & structural data

 [
  item1,
  item2,
  item3
 ]
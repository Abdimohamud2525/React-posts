export const Header = ()=>{

    return<>

    <div style={{padding: 0, margin: 0, boxSizing: 'border-box', height: 70 , background: '#FFF6DC' ,}}>

    <ul style={{ display: 'flex' , alignItems: 'center' , justifyContent: 'center' , padding: 20}}>
        <li style={{listStyle: 'none' , textDecoration: 'none'}}>Home</li>
        <li style={{listStyle: 'none' , textDecoration: 'none' , padding: 10}}>About</li>
        <li style={{listStyle: 'none' , textDecoration: 'none' , padding: 10}}>Service</li>
        <li style={{listStyle: 'none' , textDecoration: 'none' , padding: 10}}>Contact</li>
    </ul>
    </div>
    
    </>
}



export const MaiContent = () =>{

    return <>
    <main style={{display: 'flex' , alignItems: 'center' , justifyContent:'center' , flexDirection: 'column'}}>
    <h1>What is react</h1>
    <p>React is a popular JavaScript library for building user interfaces, particularly for web applications. It was developed and is maintained by Facebook and a community of individual developers. React was first released in 2013 and  has since gained massive popularity in the web development world.
    Component-Based Architecture: React allows developers to build UIs using reusable components. Each component represents a part of the user interface and can be composed together to create complex UIs. The component-based approach promotes code reusability, maintainability, and separation of concerns.

Virtual DOM: React uses a virtual DOM to efficiently update the actual DOM in the browser. When data or state changes in a component, React creates a lightweight virtual representation of the real DOM and calculates the minimal number of changes needed to update the actual DOM, resulting in better performance.

JSX (JavaScript XML): React uses JSX, a syntax extension, to describe what the UI should look like. It allows developers to write UI components in a syntax similar to HTML, which makes the code more readable and easier to understand.

One-Way Data Binding: React follows a unidirectional data flow, where data flows from parent components to child components. This helps maintain a clear and predictable data flow, making it easier to debug and understand the applications state at any point in time.

Declarative Programming: React is declarative, meaning developers describe what they want the UI to look like based on the current state, and React takes care of updating the UI as the state changes.

React Ecosystem: React has a vast ecosystem of libraries, tools, and extensions that complement its functionality. Redux, React Router, and Styled Components are some examples of popular libraries often used alongside React.

React Native: In addition to web development, React also powers React Native, a framework for building cross-platform mobile applications using JavaScript. React Native allows developers to write code once and deploy it on both iOS and Android platforms.

Reacts popularity stems from its simplicity, efficiency, and robustness, which makes it an excellent choice for building modern, interactive, and high-performance user interfaces on the web and mobile platforms. As withs essential to stay up-to-date with the latest practices and best practices to make the most of capabilities.





    </p>
    </main>
    </>
    
}

export const Img = ()=>{
    return <>

    <h1 style={{display: 'flex' , alignItems: 'center' , justifyContent: 'center'}}>

      <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"></img>
    </h1>
    </>
}

export const Footer = () =>{
    return <>

   <footer style={{marginTop: 185 , marginLeft: 400}}>

   <h1>Copyright © 2023 Facebook, Inc.</h1>
   </footer>
    </>
}
import React from "react";
import ReactDOM from "react-dom/client";

// const header = React.createElement(
//   "div",
//   { className: "title" },
//   React.createElement(
//     "h1",
//     {},
//     React.createElement(
//       "h2",
//       {},
//       React.createElement(
//         "h3",
//         {},
//         "This is the nested element using createElement"
//       )
//     )
//   )
// );

// const header = <h1>
//     <h2>
//         <h3>
//             This is the nested element using JSX
//         </h3>
//     </h2>
// </h1>

const AnotherComponent = ()=>(
    <h2>Hey, I am another functional component</h2>
)

const HeaderComponent = ()=>(
    <div className="container">
      {<AnotherComponent />}
    <h1>
        <h2>
            <h3>
                This is nested element inside functional component
            </h3>
        </h2>
    </h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(< HeaderComponent></HeaderComponent>);
// root.render(HeaderComponent());
// root.render(header);
root.render(HeaderComponent());

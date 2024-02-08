const parent = React.createElement(
    "div",
    {
      id:"parent"
    },
   [ React.createElement(
        "div",
        {id:"child1"},
        [React.createElement(
            "h1",
            {},
            "this is the h1 tage!!"
        ),React.createElement(
            "h2",
            {},
            "this is the h2 tage!!"
        )]
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement(
            "h1",
            {},
            "this is the h1 tage!!"
        ),React.createElement(
            "h2",
            {},
            "this is the h2 tage!!"
        )]
    )
        ]
)

const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Hello From React!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
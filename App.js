const heading1=React.createElement("h1",{
    id:"heading1",
},"Namaste from React!");
const heading2=React.createElement("h2",{
    id:"heading 2",
},"Namaste from React!");

const container= React.createElement("div",{
    id:"container",
},[heading1,heading2]);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWIthProps.tsx";
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWIthPropsType.tsx";


function App() {

  return (
    <>
        <div>
            <ClassComponent  />
            <FunctionalComponent />
            <ArrowFunctionalComponent />
            <ArrowFunctionalComponentWithProps title= "Is an arrow component with props" />
            <ArrowFunctionalComponentWithPropsType title= "Is an arrow component with props" description="this is a description" />
        </div>
    </>
  )
}

export default App

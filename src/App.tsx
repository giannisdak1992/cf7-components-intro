// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWIthProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWIthPropsType.tsx";


// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";

import Layout from "./components/Layout.tsx";
import FunctionalComponentWithState from "./components/FunctionalComponentWIthState.tsx"; "./components/FunctionalComponent";
// import ClassComponentWIthState from "./components/ClassComponentWIthState.tsx";
// import ClassComponent from "./components/ClassComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWIthProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWIthPropsType.tsx";



function App() {

  return (
    <>
        <Layout>

        {/*    <ClassComponent  />*/}
        {/*    <FunctionalComponent />*/}
        {/*    <ArrowFunctionalComponent />*/}
        {/*    <ArrowFunctionalComponentWithProps title= "Is an arrow component with props" />*/}
        {/*    <ArrowFunctionalComponentWithPropsType title= "Is an arrow component with props" description="this is a description" />*/}



        {/*    <h1 className="text-center text-2xl font-bold">This is a heading1 title</h1>*/}
        {/*        <FunctionalComponent />*/}
        {/*    <ClassComponentWIthState />*/}

            <FunctionalComponentWithState />
        </Layout>

    </>
  )
}

export default App

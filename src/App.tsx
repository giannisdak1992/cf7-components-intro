// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWIthProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWIthPropsType.tsx";

// import OnlineStatus from "./components/OnlineStatus";

// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";
// import {useEffect} from 'react'
import Layout from "./components/Layout.tsx";
import {BrowserRouter, Routes , Route } from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./pages/UserPage.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWIthState.tsx";
// import Counter from "./components/Counter.tsx"; "./components/FunctionalComponent";
// import ClassComponentWIthState from "./components/ClassComponentWIthState.tsx";
// import ClassComponent from "./components/ClassComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWIthProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWIthPropsType.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.jsx";

// import AdvancedCounter from "./components/AdvancedCounter.tsx";

// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";

// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";

// import CounterWithReducer from "./components/CounterWithReducer.tsx";

// import Todo from "./components/Todo/Todo.tsx"

function App() {

    // useEffect (() => {
    //         const id  = setInterval(() => console.log("tick"), 1000);
    //         return () => clearInterval(id);
    //     },[] )


    return (
    <>


        {/*    <ClassComponent  />*/}
        {/*    <FunctionalComponent />*/}
        {/*    <ArrowFunctionalComponent />*/}
        {/*    <ArrowFunctionalComponentWithProps title= "Is an arrow component with props" />*/}
        {/*    <ArrowFunctionalComponentWithPropsType title= "Is an arrow component with props" description="this is a description" />*/}



        {/*    <h1 className="text-center text-2xl font-bold">This is a heading1 title</h1>*/}
        {/*        <FunctionalComponent />*/}
        {/*    <ClassComponentWIthState />*/}
            {/*<Counter />*/}
            {/*<NameChanger />*/}
            {/*<CounterWithMoreStates />*/}
           {/*<AdvancedCounter />*/}

            {/*<CounterWithCustomHook />*/}

            {/*<CounterAdvancedWithCustomHook />*/}
            {/*<CounterWithReducer />*/}
            {/*<Todo />*/}

            {/*<OnlineStatus />*/}

            <BrowserRouter>
                <Layout>
                    <Routes>
                        {/*<Route path="/" element={<HomePage />}></Route>*/}
                        <Route index element={<HomePage />} />
                        <Route path="name-changer" element={<NameChangerPage />}></Route>

                        <Route path="examples?">
                            <Route path="name-changer" element={<NameChangerPage />} />
                            <Route path="online-status" element={<OnlineStatusPage />} />
                        </Route>

                        <Route path="users/:userId" element={<UserPage />} />


                    </Routes>
                </Layout>
            </BrowserRouter>


    </>
  )
}

export default App

import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
// import { LoginComponent } from './components/login/login.component';
// import { NetflixHeader } from './Netflix/netflix.header/netflix.header';
// import { NetflixIndex } from './Netflix/netflix.index/netflix.index';
// import { DataBindingComponent } from './components/databinding.component';
// import { NasaComponent } from './components/nasaApi.cmponent';
//import { NasaJqueryComponent } from './components/nasaJquery.component';
//import { AxiosLoadPage } from './components/nasaAxios.component';
//import { FakeStoreComponent } from './fakeStore/fakeStore.compnent';
//import { StyleDemoComponent } from './components/styleDemo.component';
//import { StyleDemo2 } from './components/styleDemo.component2';
//import { EventDemoComponent } from './components/eventDemo.component';
//import { MouseEventComponent } from './components/mouseEvent.component';
//import { EmiComponent } from './components/emi.component';
//import { LoginComponent } from './components/login/login.component';
//import { SampleComponent } from './components/sample.component';
//import { BmiComponent } from './components/bmi.component';
//import { LoginComponent } from './login/login.component';
//import { PropertiesComponent } from './login/properties.component';
//import { TempleteComponent } from './login/templete.component';
//import { RegisterComponent } from './components/register.component';
import { ClassEventComponent } from './components/classEvent.component';
import { LifeCycleComponent } from './components/lifecycle.component';
import { FormValidationComponent } from './components/formValidation.component';
import { FormikValidationComponent } from './components/formikValidation.component';
import { RouterComponent } from './components/router.component';
import { ShopperIndex } from './spa/shopper-index';
import { ShopperRegister } from './spa/shopper-register/register';
import { ShopperLogin } from './spa/shopper-login/login';
import { DesignAllCharector } from './spa2/design-char/char';
import { ShopperCategory } from './spa/shopper-category/category';
import { DesignAliveCharector } from './spa2/design-char/alivechar';
import { DesignDeadCharector } from './spa2/design-char/deadchar';
// import { DesignIndex } from './spa2/design-index';
import { DesignHome } from './spa2/design-index/home';
import { DesignIndex } from './spa2/design-indexx';
import { DemoContext } from './usecontext/context-demo';
import { DemoUserReduser } from './usecontext/useReduser';
import MyComponent, { CheckLog, FirstCustomHook } from './custom.hook';
import { IndexPortfolio } from './portfolio/index/index-port';
//import { IndexTreeComponent } from './Tree-Website';
import { BodyTreeComponent } from './Tree-Website/body';
import { ThirdBodyTree } from './Tree-Website/thirdbody';
import { FooterTreeComponent } from './Tree-Website/footer';
import { SearchTreeComponent } from './Tree-Website/search';
import { HeaderTreeComponent } from './Tree-Website/header';
import { GardeningTreeComponent } from './Tree-Website/gardening';
import { Garden1TreeComponent } from './Tree-Website/garden/garden1';
import { GardenTowTreeComponent } from './Tree-Website/garden/garden2';
import { Garden3TreeComponent } from './Tree-Website/garden/garden3';
import { Garden4TreeComponent } from './Tree-Website/garden/garden4';
import { PlantTreeComponent } from './Tree-Website/plant';
import { SecondBody1TreeComponent } from './Tree-Website/secondbody/secondbody1';
import { SecondBodyAddButton } from './Tree-Website/secondbody/secondbody1add';
import { CartProvider } from './Tree-Website/CartContext';
import { CartComponent } from './Tree-Website/CartComponent';
import { AboutTreeComponent } from './Tree-Website/about';
import { ButtonComponent, UseeffectCleanUp, UseeffectOne, UseEffectTimer, UseeffectTwo, UsestateArryObject, UsestateObject } from './components/ButtonComponet';
import { DataFetching } from './components/dataFetching';
import { UseReducer } from './components/UseReducer';
import { DataFetchingReducer } from './components/DataFetchingUseReducer';
import { DataFetchingReducerTwo } from './components/DataFetchingReducer3';
import { DataFetchingReducer4 } from './components/DataFetchingReducer4';
import { ParentComponent } from './components/UseCallback.js/ParentComponent';
import { UseRefComponent } from './components/UseCallback.js/useREf';
import { Buttonone } from './components/Customehook.js/Buttonone';
import { ButtonTwo } from './components/Customehook.js/Buttontwo';
import { CounterOne } from './components/Customehook.js/Counterone';
import { CounterTwo } from './components/Customehook.js/Countertwo';
import { FormPage } from './components/Customehook.js/formpage';
import { FakeStoreApi } from './fakeStore/Fakestoreapi';

import { Provider } from 'react-redux';
import  DemoState  from './components/demo';
import { HomeTreeComponent } from './Tree-Website/home';


const root = ReactDOM.createRoot(document.getElementById('root'));

 
root.render(
  
  <React.StrictMode>
  

    <HomeTreeComponent  />
  
  </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Configuramos test
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// Importamos variables/componentes
import Detail from "../components/Views/Detail/Detail";

configure({ adapter: new Adapter() });

describe("NAV", ()=>{
    let detail;
    beforeEach(()=>{
        detail = shallow(<Detail/>)
    });

    it("Debe renderizar un botón con el texto 'Home'", ()=>{
        const button = detail.find("button");
        expect(button.text()).toEqual("Home");
    });

    it("El botón debe estar dentro de un componente Link con el atributo to igual a '/cards'", ()=>{
        const link = detail.find("Link");
        expect(link.props()).toEqual({
            ...link.props(),
            to: "/cards",
          });
    })
});
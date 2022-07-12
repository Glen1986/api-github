 import { render, screen } from "@testing-library/react";

 import { Profile } from './Profile';

 test("renders the app whith a button", ()=> {
   render(<Profile/>);
  const buttonEl = screen.getByText("click");

  expect(buttonEl).toBeInTheDocument();


 })

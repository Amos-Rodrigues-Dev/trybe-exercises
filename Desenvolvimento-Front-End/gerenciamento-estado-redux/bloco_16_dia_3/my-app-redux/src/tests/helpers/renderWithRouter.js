import React from 'react';
import { render } from "@testing-library/react";
import { Router } from "express";
import { createMemoryHistory } from "history";

const renderWithRouter = (component, initialEntries = ['/cadastro']) => {
  const history = createMemoryHistory({ initialEntries });
  return ({
    ...render(<Router history={ history }>{ component }</Router>), history,
  })
};

export default renderWithRouter;

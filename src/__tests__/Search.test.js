// import "@testing-library/jest-dom"
// import Body from "../components/Body"
// import { render, waitFor } from "@testing-library/react"
// import { Provider } from "react-redux"
// import store from "../utils/store"
// import { StaticRouter } from "react-router-dom/server"
// import { RESTAURANT_DATA } from "../Mocks/data"
// import { Screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Body from "../components/Body"
import { Provider } from "react-redux";
import store from "../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../Mocks/data";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            Promise.resolve(RESTAURANT_DATA)
        },
    });
});

test("Shimmer should load on homepage", () => {

    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    const shimmer = body.getByTestId("shimmer");
    // this would fail, if we don't test shimmer first. Cause, 

    expect(shimmer.children.length).toBe(10);
    // because, there were 10 cards.
    
    console.log(shimmer);
    
});

test("Restaurant should load on Homepage", async () => {
    // since we're using await, we'll have to make our function await.
    
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("search-btn-test")));

    const resList = body.getByTestId("res-list");
    // this would fail, if we don't test shimmer first. Cause, if we don't do that, it basically wouldn't be able to find the function. 
    
    expect(resList.children.length).toBe(10);
    // console.log(searchBtn);

    // console.log(shimmer);
})

test("Search for string (food) on HomePage", async () => {
    // since we're using await, we'll have to make our function await.
    
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("search-btn-test")));

    const input = body.getByTestId("search-input-test");
    
    fireEvent.change(input, {
        target:{
            value: "food"
        },
    });

    const searchBtn = body.getByTestId("search-btn-test");
    fireEvent.click(searchBtn);

    const resList = body.getByTestId("res-list");
    expect(resList.children.length).toBe(4);

    // console.log()
    
})
import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Body from "../components/Body"
import { Provider } from "react-redux";
import store from "../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../Mocks/data";
import RestaurantMenu from "../components/RestaurantMenu";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            Promise.resolve(MENU_DATA)
        },
    });
});


test("Add Items to Cart", async () => {
    // since we're using await, we'll have to make our function await.
    
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <RestaurantMenu />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("menu")));

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
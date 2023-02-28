import { render } from "@testing-library/react"
import Header from "../components/Header"
import { Provider } from "react-redux";
import store from "../utils/store"
import { StaticRouter } from "react-router-dom/server"

test("Logo should load on rendering header", () => {

    // THIS IS UNIT TESTING. WE'RE TESTING DIFFERENT PARTS OF OUR HEADER.
    
    //load header. 
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    
    const logo = header.getAllByTestId("logo");
    
    // checking if logo is loaded.
    console.log(logo[0]);
    expect(logo[0].src).toBe("https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png");
})


test("Online status should be green on rendering header", () => {
    // THIS IS UNIT TESTING. WE'RE TESTING DIFFERENT PARTS OF OUR HEADER.
    
    // checking the online status
    
    /*
    Steps
    1. We'll first add the data-testid to the <h1> tag which is giving us the online status
    2. We'll use getByTestId for 
    
    */
   const header = render(
       <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    
    const onlineStaus = header.getByTestId("online-status");
    
    // checking if logo is loaded.
    console.log(onlineStaus);
    expect(onlineStaus.innerHTML).toBe("✅");
    
})


test("Cart should have 0 items on rendering header", () => {
    // THIS IS UNIT TESTING. WE'RE TESTING DIFFERENT PARTS OF OUR HEADER.
    
    // loading the header in the JSDOM.
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );

    const cart = header.getByTestId("cart");

    // checking if cart is working properly
    // console.log(cart);
    expect(cart.innerHTML).toBe("Cart - 0 items");

})

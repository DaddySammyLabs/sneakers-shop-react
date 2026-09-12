```
                    AppProvider
                         │
                    useAppState
                    /         \
                   /           \
              useCart        useOrders
                 │               │
                 │               │
          cartItems          orders
          totalPrice         createOrder()
          addItem()          removeOrder()
          removeItem()            │
          clearCart()             │
                 │                │
                 └───────┬────────┘
                         │
                    createOrder
                         │
                         ▼
              POST /orders
                         │
             ┌───────────┴───────────┐
             │                       │
        order.items            order.totalPrice
             │                       │
             └───────────┬───────────┘
                         │
                      orders
                         │
                         ▼
                     Orders.jsx
                         │
              ┌──────────┴──────────┐
              │                     │
          Заказ #1              Заказ #2
          21000 ₽               15000 ₽
              │                     │
           items                 items
              │                     │
         Card Card              Card


```

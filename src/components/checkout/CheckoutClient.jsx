"use client";

import { useGetCartQuery } from "@/redux/api/cartApi";
import Container from "../ui/Container";
import BillingInfo from "./BillingInfo";
import OrderSummery from "./OrderSummery";
import { useState } from "react";
import { useGetGroceriesQuery } from "@/redux/api/productsApi";
import { useSession } from "next-auth/react";

export default function CheckoutClient() {
  const session = useSession();

  const [billing, setBilling] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    country: "Bangladesh",
    state: "",
    zip: "",
    email: session.data?.user?.email,
    phone: "",
    notes: "",
  });

  const { data: cartData, isLoading: cartLoading } = useGetCartQuery();
  const { data: groceryData, isLoading: productLoading } =
    useGetGroceriesQuery();

  const cartItems = cartData?.cart?.items || [];
  const products = groceryData?.products || [];

  return (
    <div className="bg-gray-50 p-4 md:p-10 font-sans text-gray-900">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <BillingInfo billing={billing} setBilling={setBilling} />
          </div>

          <OrderSummery
            billing={billing}
            cartItems={cartItems}
            products={products}
            loading={cartLoading || productLoading}
          />
        </div>
      </Container>
    </div>
  );
}

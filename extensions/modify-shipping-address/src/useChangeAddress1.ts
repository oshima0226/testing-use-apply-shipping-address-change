import { useApplyShippingAddressChange, useShippingAddress } from "@shopify/ui-extensions-react/checkout";
import { useEffect } from "react";

/**
 * Just arbitrarily change the address1 field.
 */
export const useChangeAddress1 = () => {
  const shippingAddress = useShippingAddress();
  const applyChange = useApplyShippingAddressChange();

  useEffect(() => {
    console.log('changing address1.');
    applyChange?.({
      type: 'updateShippingAddress',
      address: {
        address1: 'modified',
      }
    });
  }, [applyChange, shippingAddress]);
};
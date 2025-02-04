import { useApplyShippingAddressChange, useShippingAddress } from "@shopify/ui-extensions-react/checkout";
import { useEffect } from "react";

/**
 * Just arbitrarily change the address1 field.
 */
export const useChangeZipToInvalidValue = () => {
  const shippingAddress = useShippingAddress();
  const applyChange = useApplyShippingAddressChange();

  useEffect(() => {
    console.log('changing zip.');
    applyChange?.({
      type: 'updateShippingAddress',
      address: {
        zip: '12300@@',
      }
    });
  }, [applyChange, shippingAddress]);
};